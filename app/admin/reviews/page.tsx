import { redirect } from "next/navigation";

import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import DeleteReviewButton from "./DeleteReviewButton";
import {
  approveReview,
  deleteReview,
  unapproveReview,
} from "./action";

import { logoutAdmin } from "../actions";

type Review = {
  id: number;
  author: string;
  rating: number;
  text: string;
  publication_consent: boolean;
  approved: boolean;
  created_at: string;
};

async function requireAdminPage() {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase.auth.getClaims();

  const userId = data?.claims?.sub;

  if (
    error ||
    !userId ||
    !process.env.ADMIN_USER_ID ||
    userId !== process.env.ADMIN_USER_ID
  ) {
    redirect("/admin");
  }
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 text-[#8C6D58]">
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index}>
          {index < rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function AdminReviewsPage() {
  await requireAdminPage();

  const supabaseAdmin = createSupabaseAdminClient();

  const { data, error } = await supabaseAdmin
    .from("reviews")
    .select(
      "id, author, rating, text, publication_consent, approved, created_at"
    )
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    console.error("Erreur récupération reviews admin :", error);

    throw new Error("Impossible de récupérer les avis.");
  }

  const reviews = (data ?? []) as Review[];

  const pendingReviews = reviews.filter(
    (review) => !review.approved
  );

  const approvedReviews = reviews.filter(
    (review) => review.approved
  );

  return (
    <main className="min-h-screen bg-[#D8C3A5]">
      <header className="bg-[#F5EFE6] shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-5 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#8C6D58]">
              ID RECOVERY
            </p>

            <h1 className="font-serif text-3xl font-bold text-[#5C3D2E]">
              Gestion des avis
            </h1>
          </div>

          <form action={logoutAdmin}>
            <button
              type="submit"
              className="border-2 border-[#5C3D2E] text-[#5C3D2E] px-5 py-2 rounded-full hover:bg-[#5C3D2E] hover:text-[#F5EFE6] transition"
            >
              Se déconnecter
            </button>
          </form>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-10 space-y-12">
        {/* Avis en attente */}
        <section>
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="font-serif text-3xl font-bold text-[#5C3D2E]">
                Avis en attente
              </h2>

              <p className="text-[#684735] mt-1">
                {pendingReviews.length} avis à modérer
              </p>
            </div>
          </div>

          {pendingReviews.length === 0 ? (
            <div className="bg-[#F5EFE6] rounded-3xl p-8 text-center shadow">
              <p className="text-[#684735]">
                Aucun avis en attente 🎉
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {pendingReviews.map((review) => (
                <article
                  key={review.id}
                  className="bg-[#F5EFE6] rounded-3xl shadow-lg p-6"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="font-semibold text-xl text-[#5C3D2E]">
                          {review.author}
                        </h3>

                        <Stars rating={review.rating} />

                        <span className="text-sm text-[#8C6D58]">
                          {review.rating}/5
                        </span>
                      </div>

                      <p className="text-[#684735] leading-relaxed whitespace-pre-wrap">
                        “{review.text}”
                      </p>

                      <div className="mt-4 text-sm text-[#8C6D58]">
                        {formatDate(review.created_at)}
                      </div>

                      <div className="mt-3">
                        <span
                          className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                            review.publication_consent
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {review.publication_consent
                            ? "Consentement donné"
                            : "Consentement absent"}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 md:w-44">
                      <form action={approveReview.bind(null, review.id)}>
                        <button
                          type="submit"
                          className="w-full bg-[#5C3D2E] text-[#F5EFE6] px-4 py-3 rounded-full hover:bg-[#8C6D58] transition"
                        >
                          Publier
                        </button>
                      </form>

                   <DeleteReviewButton reviewId={review.id} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* Avis publiés */}
        <section>
          <div className="mb-6">
            <h2 className="font-serif text-3xl font-bold text-[#5C3D2E]">
              Avis publiés
            </h2>

            <p className="text-[#684735] mt-1">
              {approvedReviews.length} avis visibles sur le site
            </p>
          </div>

          {approvedReviews.length === 0 ? (
            <div className="bg-[#F5EFE6] rounded-3xl p-8 text-center shadow">
              <p className="text-[#684735]">
                Aucun avis publié pour le moment.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {approvedReviews.map((review) => (
                <article
                  key={review.id}
                  className="bg-[#FFFDF9] rounded-3xl shadow p-6"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="font-semibold text-xl text-[#5C3D2E]">
                          {review.author}
                        </h3>

                        <Stars rating={review.rating} />
                      </div>

                      <p className="text-[#684735] leading-relaxed whitespace-pre-wrap">
                        “{review.text}”
                      </p>

                      <div className="mt-4 text-sm text-[#8C6D58]">
                        {formatDate(review.created_at)}
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 md:w-52">
                      <form
                        action={unapproveReview.bind(null, review.id)}
                      >
                        <button
                          type="submit"
                          className="w-full bg-[#D8C3A5] text-[#5C3D2E] px-4 py-3 rounded-full hover:bg-[#c8af8e] transition"
                        >
                          Retirer du site
                        </button>
                      </form>

                  <DeleteReviewButton reviewId={review.id} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}