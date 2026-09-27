"use client";

import { useState, useTransition } from "react";
import { deleteReview } from "./action";

type DeleteReviewButtonProps = {
  reviewId: number;
};

export default function DeleteReviewButton({
  reviewId,
}: DeleteReviewButtonProps) {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    startTransition(async () => {
      try {
        await deleteReview(reviewId);
        setOpen(false);
      } catch (error) {
        console.error("Erreur suppression avis :", error);
        alert("Impossible de supprimer l'avis.");
      }
    });
  };

  return (
    <>
      {/* Bouton supprimer */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="w-full border-2 border-red-400 text-red-600 px-4 py-3 rounded-full hover:bg-red-50 transition"
      >
        Supprimer
      </button>

      {/* Modale */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4"
          onClick={() => {
            if (!isPending) setOpen(false);
          }}
        >
          <div
            className="w-full max-w-md bg-[#F5EFE6] rounded-3xl shadow-2xl p-7"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="font-serif text-2xl font-bold text-[#5C3D2E]">
              Supprimer cet avis ?
            </h2>

            <p className="mt-3 text-[#684735] leading-relaxed">
              Cette action est définitive. L&lsquo;avis sera supprimé de la base de
              données et ne pourra pas être récupéré.
            </p>

            <div className="mt-6 flex flex-col-reverse sm:flex-row gap-3 sm:justify-end">
              <button
                type="button"
                disabled={isPending}
                onClick={() => setOpen(false)}
                className="px-5 py-3 rounded-full border-2 border-[#5C3D2E] text-[#5C3D2E] hover:bg-[#5C3D2E] hover:text-[#F5EFE6] transition disabled:opacity-50"
              >
                Annuler
              </button>

              <button
                type="button"
                disabled={isPending}
                onClick={handleDelete}
                className="px-5 py-3 rounded-full bg-red-600 text-white hover:bg-red-700 transition disabled:opacity-50"
              >
                {isPending ? "Suppression..." : "Oui, supprimer"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}