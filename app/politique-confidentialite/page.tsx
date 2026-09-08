import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et protection des données personnelles du site ID RECOVERY.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="min-h-screen bg-[#F5EFE6] text-[#5C3D2E]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6">
          Politique de confidentialité
        </h1>

        <p className="text-[#8C6D58] mb-12">
          Protection des données personnelles – ID RECOVERY
        </p>

        <div className="space-y-10 text-[#684735] leading-relaxed">

          {/* RESPONSABLE */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-[#5C3D2E] mb-4">
              1. Responsable du traitement
            </h2>

            <p>
              Le responsable des traitements de données personnelles réalisés
              via ce site est :
            </p>

            <div className="mt-4 bg-white rounded-2xl p-6 shadow-sm">
              <p>
                <strong>ID RECOVERY – Inès Debroise</strong>
              </p>

              <p className="mt-2">
                E-mail :{" "}
                <a
                  href="mailto:inesdbrs@gmail.com"
                  className="underline hover:text-[#8C6D58]"
                >
                  inesdbrs@gmail.com
                </a>
              </p>

         
            </div>
          </section>

          {/* DONNÉES COLLECTÉES */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-[#5C3D2E] mb-4">
              2. Données collectées
            </h2>

            <p>
              Selon les fonctionnalités utilisées sur le site, différentes
              catégories de données peuvent être collectées.
            </p>

            <div className="mt-6 space-y-4">

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold text-[#5C3D2E]">
                  Avis clients
                </h3>

                <p className="mt-2">
                  Lorsqu&apos;un utilisateur choisit de déposer un avis, les
                  données renseignées dans le formulaire peuvent comprendre
                  notamment un prénom ou pseudonyme, une note et le contenu
                  de l&apos;avis.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold text-[#5C3D2E]">
                  Données techniques et statistiques
                </h3>

                <p className="mt-2">
                  Lorsque le consentement nécessaire a été donné, des
                  informations relatives à la navigation peuvent être
                  collectées à des fins de mesure d&apos;audience via Google
                  Analytics.
                </p>
              </div>
            </div>
          </section>

          {/* FINALITÉS */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-[#5C3D2E] mb-4">
              3. Finalités des traitements
            </h2>

            <ul className="list-disc pl-6 space-y-3">
              <li>
                traiter et gérer les avis transmis via le site ;
              </li>
              <li>
                permettre, après validation, la publication d&apos;un avis ;
              </li>
              <li>
                assurer le fonctionnement et la sécurité du site ;
              </li>
              <li>
                mesurer l&apos;audience et améliorer le site lorsque
                l&apos;utilisateur y a consenti ;
              </li>
              <li>
                répondre aux demandes adressées à ID RECOVERY.
              </li>
            </ul>
          </section>

          {/* BASES LÉGALES */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-[#5C3D2E] mb-4">
              4. Bases légales
            </h2>

            <p>
              Les traitements sont fondés, selon leur nature, sur différentes
              bases légales prévues par le RGPD.
            </p>

            <ul className="mt-4 list-disc pl-6 space-y-3">
              <li>
                <strong>Consentement :</strong> notamment pour les traitements
                nécessitant le consentement de l&apos;utilisateur, tels que
                certains cookies et traceurs de mesure d&apos;audience.
              </li>
              <li>
                <strong>Intérêt légitime :</strong> notamment pour certains
                besoins de fonctionnement, de sécurité et de gestion du site,
                lorsque les conditions applicables sont réunies.
              </li>
              <li>
                <strong>Exécution d&apos;une demande :</strong> lorsque les
                données sont nécessaires pour répondre à une demande formulée
                par l&apos;utilisateur.
              </li>
            </ul>
          </section>

          {/* FORMSPREE */}
       <section>
  <h2 className="font-serif text-2xl font-bold text-[#5C3D2E] mb-4">
    5. Formspree
  </h2>

  <p>
    Le formulaire de dépôt d&apos;avis utilise le service Formspree afin de
    transmettre les informations renseignées par l&apos;utilisateur à
    ID RECOVERY.
  </p>

  <p className="mt-4">
    Les données renseignées dans le formulaire, notamment le pseudo ou
    prénom, la note attribuée et le contenu de l&apos;avis, sont transmises
    à Formspree afin de permettre leur traitement et leur transmission
    par e-mail à ID RECOVERY.
  </p>

  <p className="mt-4">
    Formspree intervient en tant que prestataire technique pour le traitement
    des données transmises via le formulaire. Les données peuvent être
    traitées par Formspree conformément à sa politique de confidentialité
    et aux conditions applicables au service utilisé par ID RECOVERY.
  </p>
</section>

          {/* GOOGLE ANALYTICS */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-[#5C3D2E] mb-4">
              6. Google Analytics
            </h2>

            <p>
              Le site utilise Google Analytics afin de mesurer sa fréquentation
              et de mieux comprendre son utilisation.
            </p>

            <p className="mt-4">
              Lorsque le traitement nécessite le consentement de
              l&apos;utilisateur, Google Analytics n&apos;est activé qu&apos;après
              expression d&apos;un choix positif via le mécanisme de gestion
              des cookies.
            </p>

            <p className="mt-4">
              L&apos;utilisateur peut modifier ou retirer son consentement à
              tout moment depuis la page{" "}
              <a
                href="/gestion-cookies"
                className="underline font-medium hover:text-[#8C6D58]"
              >
                Gestion des cookies
              </a>
              .
            </p>
          </section>

          {/* GOOGLE MAPS */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-[#5C3D2E] mb-4">
              7. Google Maps
            </h2>

            <p>
              Le site peut proposer une carte permettant de localiser
              l&apos;activité d&apos;ID RECOVERY.
            </p>

            <p className="mt-4">
              Lorsque le service Google Maps est chargé, certaines données
              techniques peuvent être transmises à Google. Lorsque le
              chargement de ce service nécessite un consentement, celui-ci est
              demandé avant son activation.
            </p>
          </section>

          {/* DONNÉES DE SANTÉ */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-[#5C3D2E] mb-4">
              8. Informations de santé
            </h2>

            <p>
              Le formulaire d&apos;avis n&apos;a pas pour objectif de collecter
              des données de santé.
            </p>

            <p className="mt-4">
              Il est demandé aux utilisateurs de ne pas renseigner
              d&apos;informations médicales ou de santé dans leur avis.
            </p>

            <p className="mt-4">
              Les données relatives à la santé constituent une catégorie
              particulière de données personnelles faisant l&apos;objet de
              règles renforcées.
            </p>
          </section>

          {/* DESTINATAIRES */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-[#5C3D2E] mb-4">
              9. Destinataires
            </h2>

            <p>
              Les données sont accessibles aux personnes habilitées par
              ID RECOVERY et, lorsque cela est nécessaire au fonctionnement
              du site, à certains prestataires techniques utilisés par le
              site, notamment les services mentionnés dans la présente
              politique.
            </p>
          </section>

          {/* DURÉE */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-[#5C3D2E] mb-4">
              10. Durée de conservation
            </h2>

            <p>
              Les données sont conservées pendant une durée proportionnée à
              leur finalité et conformément aux obligations légales
              applicables.
            </p>

           <p className="mt-4">
  Les données relatives aux avis sont conservées pendant la durée
  nécessaire à leur gestion et à leur publication. Elles peuvent être
  supprimées à la demande de la personne concernée, sous réserve des
  obligations légales applicables.
</p>

<p className="mt-4">
  Les données liées à la mesure d&apos;audience sont conservées selon les
  paramètres de conservation configurés dans Google Analytics et dans les
  limites prévues par la réglementation applicable.
</p>
          </section>

          {/* DROITS */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-[#5C3D2E] mb-4">
              11. Vos droits
            </h2>

            <p>
              Conformément à la réglementation applicable, vous pouvez
              notamment disposer, selon les conditions prévues par le RGPD,
              d&apos;un droit d&apos;accès, de rectification, d&apos;effacement,
              de limitation du traitement, d&apos;opposition et, lorsque les
              conditions sont réunies, de portabilité de vos données.
            </p>

            <p className="mt-4">
              Lorsque le traitement repose sur votre consentement, vous pouvez
              retirer celui-ci à tout moment.
            </p>

            <p className="mt-4">
              Pour exercer vos droits, vous pouvez contacter :
            </p>

            <div className="mt-4 bg-white rounded-2xl p-6 shadow-sm">
              <p>
                <strong>ID RECOVERY – Inès Debroise</strong>
              </p>

              <p className="mt-2">
                E-mail :{" "}
                <a
                  href="mailto:inesdbrs@gmail.com"
                  className="underline hover:text-[#8C6D58]"
                >
                  inesdbrs@gmail.com
                </a>
              </p>
            </div>

            <p className="mt-4">
              Vous pouvez également introduire une réclamation auprès de la
              Commission Nationale de l&apos;Informatique et des Libertés
              (CNIL) si vous estimez que vos droits ne sont pas respectés.
            </p>
          </section>

          {/* SÉCURITÉ */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-[#5C3D2E] mb-4">
              12. Sécurité
            </h2>

            <p>
              ID RECOVERY met en œuvre des mesures raisonnables destinées à
              protéger les données personnelles contre les accès non autorisés,
              la perte, l&apos;altération ou la divulgation.
            </p>
          </section>

          {/* MISE À JOUR */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-[#5C3D2E] mb-4">
              13. Mise à jour
            </h2>

            <p>
              Cette politique peut être mise à jour afin de refléter
              l&apos;évolution du site, des services utilisés ou de la
              réglementation applicable.
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