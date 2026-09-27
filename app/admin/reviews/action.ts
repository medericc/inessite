"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

async function requireAdmin() {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase.auth.getClaims();

  const userId = data?.claims?.sub;

  if (
    error ||
    !userId ||
    !process.env.ADMIN_USER_ID ||
    userId !== process.env.ADMIN_USER_ID
  ) {
    redirect("/admin?error=unauthorized");
  }

  // Client utilisant la secret key.
  // Il ne doit être appelé qu'après la vérification admin ci-dessus.
  return createSupabaseAdminClient();
}

export async function approveReview(id: number) {
  const supabaseAdmin = await requireAdmin();

  const { error } = await supabaseAdmin
    .from("reviews")
    .update({
      approved: true,
    })
    .eq("id", id);

  if (error) {
    console.error("Erreur approbation review :", error);

    throw new Error("Impossible d'approuver l'avis.");
  }

  revalidatePath("/");
  revalidatePath("/admin/reviews");
}

export async function deleteReview(id: number) {
  const supabaseAdmin = await requireAdmin();

  const { error } = await supabaseAdmin
    .from("reviews")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Erreur suppression review :", error);

    throw new Error("Impossible de supprimer l'avis.");
  }

  revalidatePath("/");
  revalidatePath("/admin/reviews");
}

export async function unapproveReview(id: number) {
  const supabaseAdmin = await requireAdmin();

  const { error } = await supabaseAdmin
    .from("reviews")
    .update({
      approved: false,
    })
    .eq("id", id);

  if (error) {
    console.error("Erreur retrait publication review :", error);

    throw new Error("Impossible de retirer l'avis.");
  }

  revalidatePath("/");
  revalidatePath("/admin/reviews");
}