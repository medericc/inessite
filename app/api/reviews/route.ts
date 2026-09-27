import { NextResponse } from "next/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

type ReviewPayload = {
  author?: unknown;
  rating?: unknown;
  text?: unknown;
  publicationConsent?: unknown;
  turnstileToken?: unknown;
  website?: unknown;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ReviewPayload;

    // Honeypot : un vrai humain ne doit jamais remplir ce champ
    if (
      typeof body.website === "string" &&
      body.website.trim() !== ""
    ) {
      return NextResponse.json({ success: true });
    }

    const author =
      typeof body.author === "string"
        ? body.author.trim()
        : "";

    const text =
      typeof body.text === "string"
        ? body.text.trim()
        : "";

    const rating =
      typeof body.rating === "number"
        ? body.rating
        : Number(body.rating);

    const publicationConsent =
      body.publicationConsent === true;

    const turnstileToken =
      typeof body.turnstileToken === "string"
        ? body.turnstileToken
        : "";

    // Validation basique
    if (
      author.length < 1 ||
      author.length > 80 ||
      text.length < 1 ||
      text.length > 2000 ||
      !Number.isInteger(rating) ||
      rating < 1 ||
      rating > 5 ||
      !publicationConsent ||
      !turnstileToken
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Données invalides.",
        },
        { status: 400 }
      );
    }

    // =====================================================
    // Vérification Cloudflare Turnstile
    // =====================================================

    const turnstileResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY!,
          response: turnstileToken,
        }),
      }
    );

const turnstileResult = await turnstileResponse.json();

console.log("Turnstile:", {
  httpStatus: turnstileResponse.status,
  success: turnstileResult.success,
  action: turnstileResult.action,
  hostname: turnstileResult.hostname,
  errorCodes: turnstileResult["error-codes"],
});

if (!turnstileResult.success) {
  return NextResponse.json(
    {
      success: false,
      error: "Vérification anti-spam échouée.",
    },
    { status: 400 }
  );
}

if (turnstileResult.action !== "review") {
  console.error(
    "Turnstile action mismatch:",
    turnstileResult.action
  );

  return NextResponse.json(
    {
      success: false,
      error: "Vérification anti-spam échouée.",
    },
    { status: 400 }
  );
}

    // =====================================================
    // INSERT SERVEUR
    // =====================================================

    const supabaseAdmin = createSupabaseAdminClient();

    const { error } = await supabaseAdmin
      .from("reviews")
      .insert({
        author,
        rating,
        text,
        publication_consent: true,

        // IMPORTANT :
        // le client ne décide JAMAIS de cette valeur
        approved: false,
      });

    if (error) {
      console.error("Erreur insertion review :", error);

      return NextResponse.json(
        {
          success: false,
          error: "Impossible d'enregistrer l'avis.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Erreur API reviews :", error);

    return NextResponse.json(
      {
        success: false,
        error: "Erreur serveur.",
      },
      { status: 500 }
    );
  }
}