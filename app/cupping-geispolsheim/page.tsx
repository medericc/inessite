import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cupping à Geispolsheim près de Strasbourg",
  description:
    "Découvrez le cupping à Geispolsheim près de Strasbourg : bienfaits, déroulement d'une séance, techniques, précautions et réponses aux questions fréquentes.",
  alternates: {
    canonical: "/cupping-geispolsheim",
  },
  openGraph: {
    title: "Cupping à Geispolsheim près de Strasbourg | ID RECOVERY",
    description:
      "Cupping à Geispolsheim près de Strasbourg : découvrez le déroulement d'une séance, ses bienfaits, les techniques utilisées et les précautions.",
    type: "website",
  },
};

const faq = [
  {
    question: "Est-ce que le cupping est douloureux ?",
    answer:
      "Non, mais la plupart des personnes ressentent une légère sensation de succion et de pression. Le soin est généralement bien toléré et s'adapte à votre sensibilité.",
  },
  {
    question: "Quelle est la durée d'une séance ?",
    answer: (
      <>
        <p className="mb-4">
          Les durées sont indicatives et peuvent varier selon les besoins.
          L&apos;ajout de zones spécifiques peut prolonger la durée de la séance.
        </p>

        <ul className="space-y-2">
          <li>
            <strong>Dos :</strong> environ 20 minutes
          </li>
          <li>
            <strong>Corps complet :</strong> environ 40 minutes
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "À quelle fréquence faire du cupping ?",
    answer: (
      <>
        <ul className="space-y-2">
          <li>
            <strong>Bien-être :</strong> toutes les 4 à 8 semaines
          </li>
          <li>
            <strong>Sport & récupération :</strong> toutes les semaines selon
            les besoins et les objectifs de chacun
          </li>
          <li>
            <strong>Entretien saisonnier :</strong> 1 séance à chaque
            changement de saison
          </li>
        </ul>

        <p className="mt-4">
          Chaque personne est unique. Lors de votre première séance, nous
          définirons ensemble le rythme le plus adapté à vos besoins.
        </p>
      </>
    ),
  },
  {
    question: "Puis-je faire du cupping si j'ai un tatouage ou une cicatrice ?",
    answer: (
      <>
        <p className="mb-4">Oui, avec certaines précautions.</p>

        <ul className="space-y-2">
          <li>
            <strong>Tatouage de moins d&apos;un an :</strong> la zone tatouée sera
            contournée afin de respecter le processus de cicatrisation.
          </li>
          <li>
            <strong>Tatouage de plus d&apos;un an :</strong> les ventouses peuvent
            généralement être appliquées sur la zone si la peau est parfaitement
            cicatrisée.
          </li>
          <li>
            <strong>Cicatrice récente :</strong> la zone sera évitée jusqu&apos;à
            cicatrisation complète.
          </li>
        </ul>

        <p className="mt-4">
          Chaque séance est adaptée à votre peau et à votre situation pour
          garantir confort et sécurité.
        </p>
      </>
    ),
  },
];

const benefits = [
  "Réduit les sensations de raideur",
  "Soulage les tensions musculaires",
  "Favorise la détente et la relaxation",
  "Peut contribuer à une meilleure circulation locale",
  "Apprécié par de nombreux sportifs pour accompagner la récupération",
  "Procure une sensation de légèreté et de bien-être",
];

const contraindications = [
  "Grossesse",
  "Cancer en cours de traitement",
  "Sous traitement anticoagulant",
  "Peau infectée, brûlée ou lésée",
  "Intervention chirurgicale récente",
  "Porteur d'une greffe de rein",
  "Certaines pathologies cardiaques",
  "Enfants de moins de 8 ans",
];

const situations = [
  "Tensions au niveau de la nuque et des épaules",
  "Sensation de dos raide ou tendu",
  "Jambes lourdes",
  "Récupération après l'effort sportif",
  "Stress et tensions du quotidien",
  "Sensation de fatigue physique",
  "Besoin de détente et recherche de bien-être",
];

const publicCible = [
  "Sportifs amateurs ou confirmés",
  "Personnes stressées ou fatiguées",
  "Travailleurs de bureau et télétravailleurs",
  "Personnes souffrant de tensions musculaires",
  "Personnes recherchant un moment de détente et de bien-être",
];

const techniques = [
  {
    title: "À chaud",
    text: "Aspiration créée grâce à la chaleur.",
  },
  {
    title: "À froid",
    text: "Aspiration créée avec une pompe.",
  },
  {
    title: "Cupping sec",
    text: "Ventouses posées de 5 à 15 minutes pour favoriser la détente musculaire.",
  },
];

const steps = [
  {
    number: "01",
    title: "Temps d'échange",
    text: "Nous commençons par un temps d'échange pour comprendre vos besoins, vos douleurs, vos tensions, vos objectifs de bien-être et d'éventuelles contre-indications. Cela permet d'adapter la séance à votre situation.",
  },
  {
    number: "02",
    title: "Installation et préparation",
    text: "Vous vous installez dans un espace calme et relaxant. Les zones sur lesquelles les ventouses seront appliquées sont préparées pour votre confort.",
  },
  {
    number: "03",
    title: "Application des ventouses",
    text: "Les ventouses sont placées sur des points stratégiques du corps. Une légère sensation d'aspiration est normale. Elles restent en place 5 à 10 minutes.",
  },
  {
    number: "04",
    title: "Moment de détente",
    text: "Selon la séance, certaines ventouses peuvent être déplacées sur la peau. Pour terminer en douceur, un massage relaxant de quelques minutes vous est proposé afin de prolonger la détente.",
  },
  {
    number: "05",
    title: "Fin de séance et recommandations",
    text: "À la fin de la séance, nous prenons un moment pour échanger sur vos ressentis. Il est conseillé de bien s'hydrater et de profiter d'un temps calme pour prolonger cette sensation de bien-être.",
  },
];

export default function CuppingPage() {
  return (
    <main className="bg-[#f6f0e7] text-[#5b3b2e]">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-20 pt-16 md:px-12 md:pb-28 md:pt-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-5 font-montserrat text-sm font-semibold uppercase tracking-[0.18em] text-[#9a725c]">
              ID RECOVERY · Geispolsheim
            </p>

            <h1 className="font-playfair text-4xl font-bold leading-tight md:text-6xl">
              Cupping à Geispolsheim
              <span className="block text-[#8b604b]">
                près de Strasbourg
              </span>
            </h1>

            <p className="mt-7 max-w-2xl font-montserrat text-base leading-8 text-[#76564a] md:text-lg">
              Découvrez le cupping, une pratique appréciée pour accompagner
              la détente, le relâchement des tensions et la récupération
              physique. Les séances sont personnalisées selon vos besoins et
              votre sensibilité.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/#contact"
                className="rounded-full bg-[#5b3b2e] px-7 py-3.5 font-montserrat text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#704a39]"
              >
                Prendre rendez-vous
              </Link>

              <Link
                href="/"
                className="rounded-full border border-[#cdb995] bg-transparent px-7 py-3.5 font-montserrat text-sm font-semibold text-[#5b3b2e] transition-all duration-300 hover:bg-[#e8dcc8]"
              >
                Retour à l&apos;accueil
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* POURQUOI FAIRE DU CUPPING */}
      <section className="bg-[#dcc6a3] px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div>
              <p className="mb-3 font-montserrat text-sm font-semibold uppercase tracking-[0.15em] text-[#8b604b]">
                Le cupping
              </p>

              <h2 className="font-playfair text-3xl font-bold md:text-4xl">
                Pourquoi faire du cupping ?
              </h2>
            </div>

            <div className="font-montserrat leading-8 text-[#6d4c3d]">
              <p>
                Stress, tensions, fatigue musculaire ? Le cupping est une
                méthode appréciée pour détendre le corps, favoriser la
                récupération et améliorer le bien-être général.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6 BIENFAITS */}
      <section className="px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 font-montserrat text-sm font-semibold uppercase tracking-[0.15em] text-[#9a725c]">
              Bien-être & récupération
            </p>

            <h2 className="font-playfair text-3xl font-bold md:text-4xl">
              6 bienfaits du cupping / Hijama
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div
                key={benefit}
                className="rounded-2xl border border-[#e1d5c3] bg-[#faf7f1] p-6 shadow-sm"
              >
                <span className="font-playfair text-2xl text-[#b2916e]">
                  0{index + 1}
                </span>

                <p className="mt-4 font-montserrat text-sm leading-7 text-[#6d4c3d]">
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 font-montserrat text-sm italic leading-7 text-[#987967]">
            Ce n&apos;est qu&apos;un aperçu des nombreux bienfaits du cupping / Hijama.
            Ces effets peuvent varier selon les personnes et ne remplacent pas
            un avis médical.
          </p>
        </div>
      </section>

      {/* DANS QUELS CAS */}
      <section className="bg-[#eee3d3] px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="mb-3 font-montserrat text-sm font-semibold uppercase tracking-[0.15em] text-[#9a725c]">
                Pour quels besoins ?
              </p>

              <h2 className="font-playfair text-3xl font-bold md:text-4xl">
                Dans quels cas le cupping peut-il vous aider ?
              </h2>
            </div>

            <ul className="space-y-4 font-montserrat text-[#6d4c3d]">
              {situations.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#b2916e]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* POUR QUI */}
      <section className="px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="font-playfair text-3xl font-bold md:text-4xl">
              Pour qui est le cupping ?
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {publicCible.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-[#dcc6a3] p-6 font-montserrat text-sm leading-7 text-[#654537]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORIGINES */}
      <section className="bg-[#dcc6a3] px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 font-montserrat text-sm font-semibold uppercase tracking-[0.15em] text-[#8b604b]">
            Une pratique ancestrale
          </p>

          <h2 className="font-playfair text-3xl font-bold md:text-4xl">
            Cupping et ses origines
          </h2>

          <p className="mt-7 font-montserrat leading-8 text-[#6d4c3d]">
            Le cupping est une technique ancestrale utilisée depuis plusieurs
            siècles dans différentes cultures, notamment en Chine et au
            Moyen-Orient. Elle consiste à appliquer des ventouses sur la peau
            afin de créer une succion. Cette pratique est appréciée par de
            nombreuses personnes pour ses effets sur la détente et la sensation
            de bien-être.
          </p>
        </div>
      </section>

      {/* TECHNIQUES */}
      <section className="px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="font-playfair text-3xl font-bold md:text-4xl">
              Les techniques de cupping
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {techniques.map((technique, index) => (
              <div
                key={technique.title}
                className="rounded-3xl border border-[#dfd2bf] bg-[#faf7f1] p-7"
              >
                <span className="font-playfair text-3xl text-[#b2916e]">
                  0{index + 1}
                </span>

                <h3 className="mt-5 font-playfair text-2xl font-bold">
                  {technique.title}
                </h3>

                <p className="mt-3 font-montserrat text-sm leading-7 text-[#76564a]">
                  {technique.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DÉROULEMENT */}
      <section className="bg-[#eee3d3] px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 font-montserrat text-sm font-semibold uppercase tracking-[0.15em] text-[#9a725c]">
              Votre séance
            </p>

            <h2 className="font-playfair text-3xl font-bold md:text-4xl">
              Comment se déroule une séance de cupping ?
            </h2>
          </div>

          <div className="grid gap-5">
            {steps.map((step) => (
              <div
                key={step.number}
                className="grid gap-5 rounded-3xl bg-[#faf7f1] p-6 md:grid-cols-[80px_220px_1fr] md:items-start md:p-8"
              >
                <span className="font-playfair text-3xl font-bold text-[#b2916e]">
                  {step.number}
                </span>

                <h3 className="font-playfair text-xl font-bold">
                  {step.title}
                </h3>

                <p className="font-montserrat text-sm leading-7 text-[#76564a]">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl bg-[#dcc6a3] p-7 font-montserrat text-sm leading-7 text-[#654537]">
            Certaines marques temporaires peuvent apparaître sur la peau.
            Elles s&apos;estompent naturellement en quelques jours.
          </div>

          <p className="mt-8 text-center font-playfair text-xl italic text-[#8b604b]">
            « Le cupping est une invitation à ralentir, relâcher les tensions
            du quotidien et prendre soin de soi. »
          </p>
        </div>
      </section>

      {/* CONTRE-INDICATIONS */}
      <section className="px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="mb-3 font-montserrat text-sm font-semibold uppercase tracking-[0.15em] text-[#9a725c]">
                Précautions
              </p>

              <h2 className="font-playfair text-3xl font-bold md:text-4xl">
                Contre-indications
              </h2>

              <p className="mt-5 font-montserrat text-sm leading-7 text-[#76564a]">
                Certaines situations nécessitent de ne pas pratiquer le
                cupping. En cas de doute ou de pathologie particulière,
                demandez conseil à votre professionnel de santé.
              </p>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {contraindications.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-[#e1d5c3] bg-[#faf7f1] px-5 py-4 font-montserrat text-sm text-[#6d4c3d]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* AVANT / APRÈS */}
      <section className="bg-[#dcc6a3] px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl bg-[#eee3d3] p-8">
              <h2 className="font-playfair text-2xl font-bold">
                Avant & après la séance
              </h2>

              <p className="mt-5 font-montserrat text-sm leading-7 text-[#76564a]">
                Bien s&apos;hydrater avant et après le soin. Reprendre ses activités
                normalement après la séance.
              </p>
            </div>

            <div className="rounded-3xl bg-[#eee3d3] p-8">
              <h2 className="font-playfair text-2xl font-bold">
                Tenue conseillée
              </h2>

              <p className="mt-5 font-montserrat text-sm leading-7 text-[#76564a]">
                Vêtements de sport ou confortables pour faciliter l&apos;accès aux
                zones à traiter : dos, épaules, jambes... Possibilité de rester
                en sous-vêtements si vous êtes à l&apos;aise. Votre confort est notre
                priorité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-3 font-montserrat text-sm font-semibold uppercase tracking-[0.15em] text-[#9a725c]">
              FAQ
            </p>

            <h2 className="font-playfair text-3xl font-bold md:text-4xl">
              Questions fréquentes
            </h2>
          </div>

          <div className="space-y-4">
            {faq.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-[#dfd2bf] bg-[#faf7f1] px-6 py-5"
              >
                <summary className="cursor-pointer list-none pr-8 font-playfair text-lg font-bold marker:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {item.question}
                    <span className="text-2xl font-normal text-[#b2916e] transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>

                <div className="mt-5 border-t border-[#e5dacb] pt-5 font-montserrat text-sm leading-7 text-[#76564a]">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* APRÈS UNE SÉANCE */}
      <section className="bg-[#eee3d3] px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-playfair text-3xl font-bold md:text-4xl">
            Après une séance de cupping
          </h2>

          <p className="mt-6 font-montserrat leading-8 text-[#76564a]">
            Les marques sont-elles normales ?
          </p>

          <p className="mt-3 font-montserrat leading-8 text-[#76564a]">
            <strong>Oui.</strong> Les ventouses peuvent laisser des marques
            temporaires dues à l&apos;effet de succion sur la peau.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-[#dcc6a3] p-6">
              <p className="font-playfair text-xl font-bold">Couleur</p>
              <p className="mt-2 font-montserrat text-sm">
                Rouge à violacée
              </p>
            </div>

            <div className="rounded-2xl bg-[#dcc6a3] p-6">
              <p className="font-playfair text-xl font-bold">Durée</p>
              <p className="mt-2 font-montserrat text-sm">
                Généralement 7 à 10 jours
              </p>
            </div>

            <div className="rounded-2xl bg-[#dcc6a3] p-6">
              <p className="font-playfair text-xl font-bold">Réaction</p>
              <p className="mt-2 font-montserrat text-sm">
                Normale et passagère
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-[#5b3b2e] px-8 py-14 text-center text-white md:px-16">
          <p className="font-montserrat text-sm font-semibold uppercase tracking-[0.15em] text-[#dcc6a3]">
            ID RECOVERY · Geispolsheim
          </p>

          <h2 className="mt-4 font-playfair text-3xl font-bold md:text-4xl">
            Envie de découvrir le cupping ?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl font-montserrat text-sm leading-7 text-[#eadfce]">
            Découvrez une séance personnalisée à Geispolsheim, près de
            Strasbourg, dans un espace dédié à la récupération et au
            bien-être.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/#contact"
              className="rounded-full bg-[#dcc6a3] px-7 py-3.5 font-montserrat text-sm font-semibold text-[#5b3b2e] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ead8b9]"
            >
              Prendre rendez-vous
            </Link>

            <Link
              href="/massage-geispolsheim"
              className="rounded-full border border-[#bfa88a] px-7 py-3.5 font-montserrat text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
            >
              Découvrir le massage sportif
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}