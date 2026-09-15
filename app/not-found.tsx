import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#f6f0e7] text-[#5b3b2e] flex items-center">
      <div className="w-full max-w-6xl mx-auto px-6 py-16 md:px-10 lg:py-20">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">

          {/* TEXTE */}
          <section className="order-2 md:order-1">
            <p className="mb-5 font-montserrat text-xs font-semibold tracking-[0.25em] text-[#8c6d58] uppercase">
              ID RECOVERY · GEISPOLSHEIM
            </p>

            <p className="font-playfair text-7xl leading-none text-[#b2916e]/60 md:text-8xl">
              404
            </p>

            <div className="mt-6 h-px w-16 bg-[#cdb995]" />

            <h1 className="mt-7 font-playfair text-4xl leading-tight md:text-5xl">
              Cette page s’est
              <br />
              égarée.
            </h1>

            <p className="mt-6 max-w-md font-montserrat text-sm leading-7 text-[#76564a] md:text-base">
              La page que vous recherchez n’existe pas ou a peut-être été
              déplacée. Prenez simplement un instant et revenez à l’essentiel.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-[#5b3b2e] px-7 py-3.5 font-montserrat text-sm font-medium text-[#f6f0e7] transition-all duration-300 hover:bg-[#684735] hover:shadow-lg"
              >
                Retour à l’accueil
              </Link>

              <Link
                href="https://www.idrecovery.fr/#contact"
                className="inline-flex items-center justify-center rounded-full border border-[#cdb995] bg-transparent px-7 py-3.5 font-montserrat text-sm font-medium text-[#5b3b2e] transition-all duration-300 hover:bg-[#eee3d3]"
              >
                Prendre rendez-vous
              </Link>
            </div>

            <p className="mt-10 font-montserrat text-xs tracking-wide text-[#9a725c]">
              Massage sportif · Massage suédois · Cupping
            </p>
          </section>

          {/* PORTRAIT */}
          <section className="order-1 md:order-2">
            <div className="relative mx-auto max-w-md">

              {/* Petit élément décoratif derrière la photo */}
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full border border-[#cdb995] md:-right-7 md:-top-7" />

              <div className="relative overflow-hidden rounded-[3rem] bg-[#dcc6a3] shadow-[0_20px_60px_rgba(91,59,46,0.12)]">
                <div className="aspect-[4/5]">
                  <Image
                    src="/ines-debroise-portrait.webp"
                    alt="Inès Debroise"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 90vw, 420px"
                  />
                </div>
              </div>

              {/* Petit détail esthétique */}
              <div className="absolute -bottom-5 -left-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#5b3b2e] shadow-lg">
                <span className="font-playfair text-xl text-[#f6f0e7]">
                  ID
                </span>
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}