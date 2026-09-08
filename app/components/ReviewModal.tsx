"use client";

import { useState } from "react";

export default function ReviewModal() {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const openReviewModal = () => setIsReviewModalOpen(true);

  const closeReviewModal = () => {
    setIsReviewModalOpen(false);
    setFormStatus("idle");
  };

  const handleSubmitReview = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setFormStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Remplacez l'URL par votre endpoint Formspree
    try {
      const res = await fetch("https://formspree.io/f/VOTRE_ID", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setFormStatus("success");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <>
      {/* Bouton */}
      <button
        onClick={openReviewModal}
        className="bg-[#5C3D2E] text-[#F5EFE6] px-8 py-3 rounded-full text-lg font-medium hover:bg-[#8C6D58] transition"
      >
        Donner mon avis
      </button>

      {/* Modale */}
      {isReviewModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={closeReviewModal}
        >
          <div
            className="bg-[#F5EFE6] rounded-3xl max-w-lg w-full p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeReviewModal}
              className="absolute top-4 right-4 text-[#5C3D2E] hover:text-[#8C6D58] text-2xl"
              aria-label="Fermer"
            >
              ×
            </button>

            <h3 className="font-serif text-2xl font-bold text-[#5C3D2E] mb-6">
              Donnez votre avis
            </h3>

            {formStatus === "success" ? (
              <div className="text-center py-8">
                <p className="text-[#5C3D2E] text-lg">
                  Merci pour votre avis !
                </p>

                <p className="text-[#684735] mt-2">
                  Il sera publié après validation.
                </p>

                <button
                  onClick={closeReviewModal}
                  className="mt-6 bg-[#5C3D2E] text-[#F5EFE6] px-6 py-2 rounded-full hover:bg-[#8C6D58] transition"
                >
                  Fermer
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <label
                    htmlFor="review-name"
                    className="block text-sm font-medium text-[#5C3D2E] mb-1"
                  >
                    Votre prénom ou pseudo
                  </label>

                  <input
                    type="text"
                    id="review-name"
                    name="name"
                    required
                    className="w-full px-4 py-2 rounded-full border border-[#D8C3A5] bg-white focus:outline-none focus:ring-2 focus:ring-[#8C6D58]"
                    placeholder="Ex : Marie"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#5C3D2E] mb-1">
                    Votre note
                  </label>

                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <label key={star} className="cursor-pointer">
                        <input
                          type="radio"
                          name="rating"
                          value={star}
                          required
                          className="sr-only"
                        />

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-[#D8C3A5] hover:text-[#8C6D58] transition"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="review-text"
                    className="block text-sm font-medium text-[#5C3D2E] mb-1"
                  >
                    Votre avis
                  </label>

                  <textarea
                    id="review-text"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-2 rounded-2xl border border-[#D8C3A5] bg-white focus:outline-none focus:ring-2 focus:ring-[#8C6D58]"
                    placeholder="Partagez votre expérience..."
                  />
                  <p className="text-xs text-[#684735]">
  Les informations renseignées sont utilisées uniquement pour traiter votre avis
  et, après validation, pour éventuellement le publier sur ce site.
  Pour en savoir plus sur vos droits et la gestion de vos données, consultez notre{" "}
  <a
    href="/politique-confidentialite"
    className="underline hover:text-[#8C6D58]"
  >
    politique de confidentialité
  </a>.
</p>
<p className="text-xs text-[#684735]">
  Merci de ne pas communiquer d’informations médicales ou de santé dans votre avis.
</p>
<div className="flex items-start gap-3 mt-4">
  <input
    type="checkbox"
    id="review-consent"
    name="publication_consent"
    value="yes"
    required
    className="mt-1 h-4 w-4 shrink-0 accent-[#5C3D2E] cursor-pointer"
  />

  <label
    htmlFor="review-consent"
    className="text-sm text-[#684735] cursor-pointer"
  >
    J&apos;accepte que mon avis soit publié sur le site ID RECOVERY.
  </label>
</div>            </div>

                {formStatus === "error" && (
                  <p className="text-red-600 text-sm">
                    Une erreur est survenue. Veuillez réessayer.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full bg-[#5C3D2E] text-[#F5EFE6] py-3 rounded-full font-medium hover:bg-[#8C6D58] transition disabled:opacity-50"
                >
                  {formStatus === "submitting"
                    ? "Envoi..."
                    : "Envoyer mon avis"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}