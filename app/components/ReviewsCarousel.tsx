"use client";

import { useRef } from "react";

type Review = {
  id: number;
  author: string;
  rating: number;
  text: string;
  date: string;
};

export default function ReviewsCarousel({
  reviews,
}: {
  reviews: Review[];
}) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const amount = carouselRef.current.clientWidth;

    carouselRef.current.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {/* Flèche gauche */}
      <button
        type="button"
        onClick={() => scroll("left")}
        aria-label="Avis précédents"
        className="
          absolute left-0 top-1/2 z-20 -translate-y-1/2
          -translate-x-1/2
          w-11 h-11
          rounded-full
          bg-[#FFFDF9]
          text-[#5C3D2E]
          shadow-lg
          flex items-center justify-center
          hover:bg-[#5C3D2E]
          hover:text-[#FFFDF9]
          transition-all duration-300
          hidden sm:flex
        "
      >
        <span className="text-2xl leading-none">‹</span>
      </button>

      {/* Carrousel */}
      <div
        ref={carouselRef}
        className="
          flex
          gap-6
          overflow-x-auto
          scroll-smooth
          snap-x snap-mandatory
          pb-4
          px-1
          scrollbar-hide
        "
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {reviews.map((review) => (
          <div
            key={review.id}
            className="
              flex-none
              w-full
              md:w-[calc(50%-12px)]
              lg:w-[calc(33.333%-16px)]
              snap-start
              bg-[#FFFDF9]
              rounded-2xl
              p-6
              shadow-md
              hover:shadow-xl
              transition-all
              duration-300
              flex
              flex-col
              min-h-[240px]
            "
          >
            {/* Étoiles */}
            <div className="flex items-center mb-4">
              <div className="flex text-[#8C6D58]">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 ${
                      i < review.rating
                        ? "fill-current"
                        : "fill-[#D8C3A5]"
                    }`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <span className="ml-2 text-sm text-[#684735]">
                {review.rating}/5
              </span>
            </div>

            {/* Texte */}
            <p className="text-[#5C3D2E] italic flex-grow leading-relaxed">
              &ldquo;{review.text}&rdquo;
            </p>

            {/* Auteur + date */}
            <div className="mt-5 pt-4 border-t border-[#D8C3A5] flex justify-between items-center gap-3">
              <span className="font-semibold text-[#5C3D2E]">
                {review.author}
              </span>

              <time className="text-xs text-[#8C6D58] text-right">
                {new Date(review.date).toLocaleDateString("fr-FR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </div>
        ))}
      </div>

      {/* Flèche droite */}
      <button
        type="button"
        onClick={() => scroll("right")}
        aria-label="Avis suivants"
        className="
          absolute right-0 top-1/2 z-20 -translate-y-1/2
          translate-x-1/2
          w-11 h-11
          rounded-full
          bg-[#FFFDF9]
          text-[#5C3D2E]
          shadow-lg
          flex items-center justify-center
          hover:bg-[#5C3D2E]
          hover:text-[#FFFDF9]
          transition-all duration-300
          hidden sm:flex
        "
      >
        <span className="text-2xl leading-none">›</span>
      </button>

      {/* Indication mobile */}
      <p className="text-center text-xs text-[#8C6D58] mt-4 sm:hidden">
        ← Faites glisser pour voir les autres avis →
      </p>
    </div>
  );
}