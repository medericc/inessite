import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site ID RECOVERY – Inès Debroise.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-[#F5EFE6] text-[#5C3D2E]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-12">
          Mentions légales
        </h1>

        <div className="space-y-10 text-[#684735] leading-relaxed">

          {/* ÉDITEUR */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-[#5C3D2E] mb-4">
              1. Éditeur du site
            </h2>

            <p>
              Le présent site est édité par :
            </p>

            <div className="mt-4 bg-white rounded-2xl p-6 shadow-sm">
              <p>
                <strong>ID RECOVERY – Inès Debroise</strong>
              </p>

              <p className="mt-2">
                Responsable de la publication : Inès Debroise
              </p>

              <p>
                Adresse : <strong>À COMPLÉTER</strong>
              </p>

    
              <p>
                E-mail :{" "}
                <a
                  href="mailto:inesdbrs@gmail.com"
                  className="underline hover:text-[#8C6D58]"
                >
                  inesdbrs@gmail.com
                </a>
              </p>

              <p>
                SIRET : <strong></strong>
              </p>
            </div>
          </section>

          {/* ACTIVITÉ */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-[#5C3D2E] mb-4">
              2. Activité
            </h2>

            <p>
              ID RECOVERY propose des prestations de bien-être et de
              récupération sportive, notamment des séances de cupping therapy
              et de massage suédois sportif.
            </p>

            <p className="mt-4">
              Ces prestations sont des prestations de bien-être et de
              récupération sportive et ne constituent pas des actes médicaux.
              Elles ne remplacent pas un diagnostic, un traitement ou un suivi
              réalisé par un professionnel de santé.
            </p>
          </section>

          {/* HÉBERGEUR */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-[#5C3D2E] mb-4">
              3. Hébergement
            </h2>

            <p>
              Le site est hébergé par :
            </p>

          <div className="mt-4 bg-white rounded-2xl p-6 shadow-sm">
  <p>
    <strong>DigitalOcean, LLC</strong>
  </p>
  <p className="mt-2">
    Adresse : 105 Edgeview Drive, Ste. 425, Broomfield, CO 80021, États-Unis
  </p>
  <p>
    Site internet :{" "}
    <a
      href="https://www.digitalocean.com"
      target="_blank"
      rel="noopener noreferrer"
      className="underline hover:text-[#8C6D58]"
    >
      www.digitalocean.com
    </a>
  </p>
</div>
          </section>

          {/* PROPRIÉTÉ INTELLECTUELLE */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-[#5C3D2E] mb-4">
              4. Propriété intellectuelle
            </h2>

            <p>
              L&apos;ensemble des éléments présents sur ce site, notamment les
              textes, photographies, logos, illustrations, éléments graphiques
              et contenus, est protégé par les dispositions applicables en
              matière de propriété intellectuelle.
            </p>

            <p className="mt-4">
              Toute reproduction, représentation, modification, adaptation ou
              exploitation, totale ou partielle, de ces éléments sans
              autorisation préalable est interdite, sauf disposition légale
              contraire.
            </p>
          </section>

          {/* RESPONSABILITÉ */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-[#5C3D2E] mb-4">
              5. Responsabilité
            </h2>

            <p>
              Les informations publiées sur ce site sont fournies à titre
              informatif. ID RECOVERY s&apos;efforce de maintenir les
              informations présentées à jour, sans garantir leur exhaustivité
              ou leur absence d&apos;erreur.
            </p>

            <p className="mt-4">
              Les informations relatives au cupping therapy, au massage et à
              la récupération sportive ne constituent pas des conseils
              médicaux.
            </p>
          </section>

          {/* LIENS */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-[#5C3D2E] mb-4">
              6. Liens externes
            </h2>

            <p>
              Le site peut contenir des liens vers des services ou sites
              internet tiers, notamment des réseaux sociaux ou des services
              de cartographie. ID RECOVERY n&apos;exerce aucun contrôle sur
              ces sites et ne peut être tenue responsable de leur contenu ou
              de leurs pratiques en matière de protection des données.
            </p>
          </section>

          {/* DONNÉES */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-[#5C3D2E] mb-4">
              7. Données personnelles
            </h2>

            <p>
              Les modalités de collecte et de traitement des données
              personnelles sont détaillées dans la{" "}
              <a
                href="/politique-confidentialite"
                className="underline font-medium hover:text-[#8C6D58]"
              >
                Politique de confidentialité
              </a>
              .
            </p>
          </section>

          {/* COOKIES */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-[#5C3D2E] mb-4">
              8. Cookies et traceurs
            </h2>

            <p>
              Le site peut utiliser des cookies et autres traceurs, notamment
              à des fins de mesure d&apos;audience. Les modalités d&apos;utilisation
              de ces traceurs et la gestion du consentement sont présentées
              dans la{" "}
              <a
                href="/gestion-cookies"
                className="underline font-medium hover:text-[#8C6D58]"
              >
                page de gestion des cookies
              </a>
              .
            </p>
          </section>

          {/* MISE À JOUR */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-[#5C3D2E] mb-4">
              9. Mise à jour
            </h2>

            <p>
              Les présentes mentions légales peuvent être modifiées à tout
              moment afin de tenir compte des évolutions du site, de
              l&apos;activité ou de la réglementation applicable.
            </p>

            <p className="mt-4 text-sm italic">
              Dernière mise à jour : septembre 2026.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}