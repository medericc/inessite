import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Massage sportif à Geispolsheim près de Strasbourg",
  description:
    "Découvrez le massage suédois sportif à Geispolsheim près de Strasbourg avec Inès Debroise : bienfaits, déroulement d'une séance, récupération, détente musculaire et questions fréquentes.",
  alternates: {
    canonical: "/massage-geispolsheim",
  },
  openGraph: {
    title: "Massage sportif à Geispolsheim près de Strasbourg | ID RECOVERY",
    description:
      "Massage suédois sportif à Geispolsheim près de Strasbourg. Découvrez ses bienfaits, son déroulement et les précautions à connaître.",
    type: "website",
  },
};

const situations = [
  "Après un entraînement intense",
  "Après une compétition",
  "Lorsque vous ressentez des tensions musculaires liées à l'activité physique",
  "Lors d'une période d'entraînement régulière",
  "Pour accompagner votre routine de récupération",
  "Lorsque vous souhaitez simplement vous offrir un moment de détente musculaire",
];

const benefits = [
  "Améliorer la récupération",
  "Détendre les muscles",
  "Favoriser la relaxation et le bien-être",
  "Favoriser la circulation sanguine",
  "Soulager les tensions et courbatures",
  "Améliorer la souplesse et la mobilité",
];

const steps = [
  {
    number: "01",
    title: "Temps d'échange",
    text: "La séance commence par un échange pour identifier vos objectifs, votre activité physique, vos tensions et vos besoins du moment.",
  },
  {
    number: "02",
    title: "Définition des zones à travailler",
    text: "Le praticien détermine les zones musculaires à cibler en fonction de votre activité et de vos éventuelles tensions.",
  },
  {
    number: "03",
    title: "Réalisation du massage",
    text: "Différentes techniques peuvent être utilisées, notamment les effleurages, les pétrissages et les pressions, adaptées aux zones sollicitées.",
  },
  {
    number: "04",
    title: "Adaptation de l'intensité",
    text: "La pression est ajustée selon votre sensibilité et votre objectif. Un massage sportif n'a pas besoin d'être douloureux pour être efficace.",
  },
  {
    number: "05",
    title: "Fin de séance et recommandations",
    text: "Après le massage, prenez quelques minutes pour récupérer tranquillement. Hydratez-vous et restez attentif aux sensations de votre corps.",
  },
];

const faq = [
  {
    question: "Le massage sportif fait-il mal ?",
    answer:
      "Non, il n'a pas besoin d'être douloureux. L'intensité doit être adaptée à votre corps et à vos objectifs.",
  },
  {
    question: "Peut-on faire un massage sportif avant une compétition ?",
    answer:
      "Cela dépend de l'objectif et du moment. Un massage très profond juste avant un effort important n'est généralement pas le même qu'un massage de récupération après l'effort.",
  },
  {
    question: "À quelle fréquence faire un massage sportif ?",
    answer:
      "Il n'existe pas une fréquence universelle. Elle dépend de votre activité physique, de votre récupération et de vos objectifs.",
  },
  {
    question:
      "Le massage sportif remplace-t-il un kinésithérapeute ou un médecin ?",
    answer:
      "Non. Le massage sportif est une prestation de bien-être et de récupération. Il ne remplace pas un diagnostic ou un traitement médical.",
  },
];

const contraindications = [
  {
    title: "Fièvre ou infection en cours",
    text: "Il vaut mieux reporter la séance.",
  },
  {
    title: "Blessure récente ou traumatisme aigu",
    text: "Entorse, déchirure musculaire, fracture.",
  },
  {
    title: "Phlébite ou suspicion de thrombose",
    text: "Le massage est contre-indiqué et nécessite une prise en charge médicale.",
  },
  {
    title: "Plaie ouverte, brûlure ou infection cutanée",
    text: "On évite de masser la zone concernée.",
  },
  {
    title: "Problème cardiovasculaire important",
    text: "Validation médicale requise au préalable.",
  },
    {
    title: "Événement cardiovasculaire récent",
    text: "Un avis médical est nécessaire avant le massage.",
  },
];

export default function MassagePage() {
  return (
    <main className="bg-[#f6f0e7] text-[#5b3b2e]">
      {/* HERO */}
    <section className="relative overflow-hidden px-6 pb-20 pt-16 md:px-12 md:pb-28 md:pt-24">
  <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
    
    {/* TEXTE */}
    <div className="relative z-10 max-w-3xl">
      <p className="mb-5 font-montserrat text-sm font-semibold uppercase tracking-[0.18em] text-[#9a725c]">
        ID RECOVERY · Geispolsheim
      </p>

      <h1 className="font-playfair text-4xl font-bold leading-tight md:text-6xl">
        Massage sportif à Geispolsheim
        <span className="block text-[#8b604b]">
          près de Strasbourg
        </span>
      </h1>

      <p className="mt-7 max-w-2xl font-montserrat text-base leading-8 text-[#76564a] md:text-lg">
        Découvrez le massage suédois sportif à Geispolsheim, près de
        Strasbourg. Une approche adaptée à votre activité physique, à
        vos tensions et à vos objectifs de récupération et de bien-être.
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

    {/* PHOTO */}
    <div className="relative z-0">
      <div className="relative h-[420px] w-full overflow-hidden rounded-[3rem] shadow-2xl md:h-[500px]">
        <Image
          src="/ines-debroise-portrait.webp"
          alt="Inès Debroise, praticienne en massage sportif à Geispolsheim près de Strasbourg"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-top"
        />
      </div>

      {/* Éléments décoratifs */}
      <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-[#8C6D58] opacity-20" />
      <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-[#D2BBA0] opacity-30" />
    </div>

  </div>
</section>

      {/* POURQUOI */}
      <section className="bg-[#dcc6a3] px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div>
              <p className="mb-3 font-montserrat text-sm font-semibold uppercase tracking-[0.15em] text-[#8b604b]">
                Massage suédois sportif
              </p>

              <h2 className="font-playfair text-3xl font-bold md:text-4xl">
                Pourquoi faire du massage sportif ?
              </h2>
            </div>

            <div className="font-montserrat leading-8 text-[#6d4c3d]">
              <p>
                Découvrez les bienfaits du massage sportif et prenez soin de
                votre corps avant, pendant et après l&apos;effort.
              </p>

              <p className="mt-5">
                Courbatures, tensions, fatigue musculaire ? Le massage sportif
                accompagne votre corps avant et après l&apos;effort. Il aide à
                détendre les muscles, favoriser la récupération et retrouver
                plus de mobilité et de confort.
              </p>
            </div>
          </div>
        </div>
      </section>

    {/* DANS QUELS CAS */}
<section className="px-6 py-20 md:px-12 md:py-24">
  <div className="mx-auto max-w-6xl">
    <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-center">

      {/* GAUCHE : TITRE + IMAGE */}
      <div className="flex min-w-0 flex-col">
        <p className="mb-3 font-montserrat text-sm font-semibold uppercase tracking-[0.15em] text-[#9a725c]">
          Besoins & récupération
        </p>

        <h2 className="font-playfair text-3xl font-bold leading-tight md:text-4xl">
          Dans quels cas le massage peut-il vous aider ?
        </h2>

        <div className="mt-8 w-full overflow-hidden rounded-[2rem] shadow-xl">
          <Image
            src="/massage-besoin.jpg"
            alt="Massage sportif pour accompagner la récupération musculaire"
            width={900}
            height={650}
            className="block h-[320px] w-full object-cover md:h-[360px]"
          />
        </div>
      </div>

      {/* DROITE : SITUATIONS */}
      <div className="flex min-w-0 h-full flex-col justify-center">
        <ul className="space-y-4 font-montserrat text-sm leading-7 text-[#6d4c3d]">
          {situations.map((item) => (
            <li key={item} className="flex min-w-0 gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#b2916e]" />
              <span className="min-w-0">{item}</span>
            </li>
          ))}
        </ul>

        <p className="mt-7 font-montserrat text-sm italic leading-7 text-[#987967]">
          Il ne remplace cependant pas un diagnostic ou une prise en
          charge médicale en cas de blessure.
        </p>

        <h3 className="mt-8 font-playfair text-2xl font-bold text-[#5b3b2e]">
          Une séance personnalisée
        </h3>

        <p className="mt-3 font-montserrat text-sm leading-7 text-[#76564a]">
          Le massage est toujours adapté à la personne, à son état du moment
          et à ses objectifs.
        </p>
      </div>

    </div>
  </div>
</section>


      {/* BIENFAITS */}
      <section className="bg-[#eee3d3] px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 font-montserrat text-sm font-semibold uppercase tracking-[0.15em] text-[#9a725c]">
              Les effets recherchés
            </p>

            <h2 className="font-playfair text-3xl font-bold md:text-4xl">
              6 bienfaits du massage suédois sportif
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
            Ce ne sont que quelques-uns des bienfaits possibles du massage
            suédois sportif. Les effets peuvent varier selon chaque personne.
          </p>
        </div>
      </section>

      {/* DÉROULEMENT */}
      <section className="bg-[#dcc6a3] px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 font-montserrat text-sm font-semibold uppercase tracking-[0.15em] text-[#8b604b]">
              Votre séance
            </p>

            <h2 className="font-playfair text-3xl font-bold md:text-4xl">
              Comment se déroule une séance de massage sportif ?
            </h2>
          </div>

          <div className="grid gap-5">
            {steps.map((step) => (
              <div
                key={step.number}
                className="grid gap-5 rounded-3xl bg-[#f6f0e7] p-6 md:grid-cols-[80px_250px_1fr] md:items-start md:p-8"
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

          <div className="mt-8 rounded-3xl bg-[#f6f0e7] p-7 font-montserrat text-sm leading-7 text-[#654537]">
            La pression est toujours adaptée selon votre sensibilité et votre
            objectif. Un massage sportif n&apos;a pas besoin d&apos;être douloureux pour
            être efficace.
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
                <summary className="cursor-pointer list-none font-playfair text-lg font-bold marker:hidden">
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

   {/* CONTRE-INDICATIONS */}
<section className="bg-[#eee3d3] px-6 py-20 md:px-12 md:py-24">
  <div className="mx-auto max-w-6xl">

    {/* TITRE + INTRO */}
    <div className="max-w-3xl">
      <p className="mb-3 font-montserrat text-sm font-semibold uppercase tracking-[0.15em] text-[#9a725c]">
        Précautions
      </p>

      <h2 className="font-playfair text-3xl font-bold leading-tight text-[#5b3b2e] md:text-4xl">
        Contre-indications
      </h2>

      <p className="mt-5 font-montserrat text-sm leading-7 text-[#76564a]">
        Certaines situations nécessitent de reporter ou d&apos;éviter une
        séance de massage sportif.
      </p>
    </div>

    {/* CARTES : 2 PAR 2 */}
    <div className="mt-10 grid gap-4 sm:grid-cols-2">
      {contraindications.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl bg-[#f6f0e7] px-6 py-5"
        >
          <h3 className="font-playfair text-lg font-bold leading-snug text-[#5b3b2e]">
            {item.title}
          </h3>

          <p className="mt-2 font-montserrat text-sm leading-6 text-[#76564a]">
            {item.text}
          </p>
        </div>
      ))}
    </div>

    {/* NOTE FINALE */}
    <p className="mx-auto mt-10 max-w-4xl text-center font-montserrat text-sm italic leading-7 text-[#987967]">
      En cas de doute ou de pathologie particulière, demandez conseil à
      votre professionnel de santé.
    </p>

  </div>
</section>

      {/* CTA */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-[#5b3b2e] px-8 py-14 text-center text-white md:px-16">
          <p className="font-montserrat text-sm font-semibold uppercase tracking-[0.15em] text-[#dcc6a3]">
            ID RECOVERY · Geispolsheim
          </p>

          <h2 className="mt-4 font-playfair text-3xl font-bold md:text-4xl">
            Envie de prendre soin de votre corps ?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl font-montserrat text-sm leading-7 text-[#eadfce]">
            Découvrez le massage suédois sportif à Geispolsheim, près de
            Strasbourg, avec une séance adaptée à votre activité et à vos
            besoins du moment.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/#contact"
              className="rounded-full bg-[#dcc6a3] px-7 py-3.5 font-montserrat text-sm font-semibold text-[#5b3b2e] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ead8b9]"
            >
              Prendre rendez-vous
            </Link>

            <Link
              href="/cupping-geispolsheim"
              className="rounded-full border border-[#bfa88a] px-7 py-3.5 font-montserrat text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
            >
              Découvrir le cupping
            </Link>
          </div>
        </div>
      </section>
          {/* Footer */}
    <footer className="bg-[#5C3D2E] text-[#F5EFE6] py-10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <p className="font-serif text-xl mb-2">ID RECOVERY – Inès Debroise</p>

    <p className="text-sm opacity-80">
      Prestations de bien-être et de récupération sportive non médicales, ne
      remplaçant pas un suivi en kinésithérapie.
    </p>

    {/* Liens légaux */}
    <div className="flex justify-center items-center gap-3 mt-4 text-sm">
      <a
        href="/politique-de-confidentialite"
        className="opacity-70 hover:opacity-100 transition-opacity"
      >
        Politique de confidentialité
      </a>

      <span className="opacity-30">•</span>

      <a
        href="/mentions-legales"
        className="opacity-70 hover:opacity-100 transition-opacity"
      >
        Mentions légales
      </a>
        <span className="opacity-30">•</span>

      <a
        href="/gestion-cookies"
        className="opacity-70 hover:opacity-100 transition-opacity"
      >
        Gestion des Cookies
      </a>
    </div>

    <p className="text-sm mt-4 opacity-60">
      © {new Date().getFullYear()} ID RECOVERY. Tous droits réservés.
    </p>
  </div>
</footer>
    </main>
    
  );
}