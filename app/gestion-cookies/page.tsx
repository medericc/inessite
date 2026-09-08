import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gestion des cookies",
  description:
    "Gestion des cookies et traceurs utilisés sur le site ID RECOVERY.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function GestionCookiesPage() {
  return (
    <main className="min-h-screen bg-[#F5EFE6] text-[#5C3D2E]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6">
          Gestion des cookies
        </h1>

        <p className="text-[#8C6D58] mb-12">
          Cookies et autres traceurs utilisés sur ID RECOVERY
        </p>

        <div className="space-y-10 text-[#684735] leading-relaxed">

          {/* INTRO */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-[#5C3D2E] mb-4">
              1. Qu&apos;est-ce qu&apos;un cookie ?
            </h2>

            <p>
              Un cookie est un petit fichier ou identifiant susceptible
              d&apos;être enregistré ou lu sur votre appareil lors de la
              consultation d&apos;un site internet.
            </p>

            <p className="mt-4">
              Certains cookies sont nécessaires au fonctionnement du site,
              tandis que d&apos;autres peuvent être utilisés pour mesurer
              l&apos;audience ou fournir certaines fonctionnalités.
            </p>
          </section>

          {/* TYPES */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-[#5C3D2E] mb-4">
              2. Les traceurs utilisés sur ce site
            </h2>

            <div className="space-y-4">

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold text-[#5C3D2E]">
                  Traceurs nécessaires
                </h3>

                <p className="mt-2">
                  Certains éléments techniques peuvent être nécessaires au
                  fonctionnement du site et à la mémorisation de vos choix.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold text-[#5C3D2E]">
                  Google Analytics
                </h3>

                <p className="mt-2">
                  Google Analytics est utilisé pour mesurer la fréquentation
                  du site et comprendre la manière dont les visiteurs
                  utilisent les différentes pages.
                </p>

                <p className="mt-3">
                  Lorsque le consentement est requis, ces traceurs ne sont
                  activés qu&apos;après votre accord.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold text-[#5C3D2E]">
                  Google Maps
                </h3>

                <p className="mt-2">
                  Une carte Google Maps peut être proposée afin de faciliter
                  la localisation d&apos;ID RECOVERY. Le chargement de ce
                  service peut entraîner des échanges avec Google.
                </p>
              </div>
            </div>
          </section>

          {/* CONSENTEMENT */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-[#5C3D2E] mb-4">
              3. Votre consentement
            </h2>

            <p>
              Lorsque le consentement est nécessaire, les cookies et traceurs
              concernés ne doivent pas être déposés ou lus avant que vous
              n&apos;ayez exprimé votre choix.
            </p>

            <p className="mt-4">
              Vous devez pouvoir accepter ou refuser les traceurs concernés
              de manière simple et faire évoluer votre choix ultérieurement.
            </p>

            <div className="mt-6 bg-[#D8C3A5] rounded-2xl p-6">
              <p className="font-semibold text-[#5C3D2E]">
                Votre choix
              </p>

              <p className="mt-2">
                Utilisez le bouton ci-dessous pour modifier vos préférences
                de cookies.
              </p>

              <button
                type="button"
                className="mt-4 bg-[#5C3D2E] text-[#F5EFE6] px-6 py-3 rounded-full hover:bg-[#8C6D58] transition"
                onClick={() => {
                  window.dispatchEvent(new Event("open-cookie-settings"));
                }}
              >
                Modifier mes préférences
              </button>
            </div>
          </section>

          {/* RETRAIT */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-[#5C3D2E] mb-4">
              4. Retirer ou modifier son consentement
            </h2>

            <p>
              Vous pouvez modifier ou retirer votre consentement à tout
              moment en utilisant l&apos;interface de gestion des cookies
              accessible depuis cette page.
            </p>

            <p className="mt-4">
              Le retrait du consentement n&apos;affecte pas la licéité des
              traitements effectués avant ce retrait.
            </p>
          </section>

          {/* GOOGLE */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-[#5C3D2E] mb-4">
              5. Services tiers
            </h2>

            <p>
              Certains services intégrés au site peuvent être fournis par des
              sociétés tierces, notamment Google pour Google Analytics et
              Google Maps.
            </p>

            <p className="mt-4">
              Ces services peuvent traiter certaines informations techniques
              conformément à leurs propres politiques et conditions.
            </p>
          </section>

          {/* LIENS */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-[#5C3D2E] mb-4">
              6. En savoir plus
            </h2>

            <p>
              Pour plus d&apos;informations concernant le traitement de vos
              données personnelles, consultez notre{" "}
              <a
                href="/politique-confidentialite"
                className="underline font-medium hover:text-[#8C6D58]"
              >
                Politique de confidentialité
              </a>
              .
            </p>
          </section>

          {/* DATE */}
          <section>
            <p className="text-sm italic">
              Dernière mise à jour : septembre 2026.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}