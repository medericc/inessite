import Image from 'next/image';
import ReviewModal from './components/ReviewModal';

type Review = {
  author: string;
  rating: number; // 1 à 5
  text: string;
  date: string; // format "YYYY-MM-DD"
};
// Exemple d'avis (vide pour l'instant – remplissez-le pour afficher la section)
const reviews: Review[] = [
  {
    author: "Marie L.",
    rating: 5,
    text: "Séance de cupping incroyable ! Je me sens légère et détendue. Inès est très professionnelle et à l'écoute.",
    date: "2026-09-15",
  },
  // {
  //   author: "Thomas R.",
  //   rating: 4,
  //   text: "Très bon massage sportif, les tensions dans le dos ont disparu. Je recommande vivement.",
  //   date: "2026-09-20",
  // },
];

export default function HomePage() {

   
  return (
    <main
      className={` min-h-screen bg-[#D8C3A5] text-[#5C3D2E] font-sans`}
      style={{ fontFamily: 'var(--font-montserrat)' }}
    >
      {/* Header avec navigation simple */}
      <header className="bg-[#F5EFE6] shadow-md sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            {/* Logo rond - remplacez src par votre image */}
            <div className="w-12 h-12 rounded-full bg-[#D8C3A5] flex items-center justify-center overflow-hidden">
              <Image
                src="/logo_idrecovery.webp" // ← Remplacez par le chemin de votre logo
                alt="Logo ID RECOVERY"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <span className="font-serif text-2xl font-bold text-[#5C3D2E]">ID RECOVERY</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#prestations" className="hover:text-[#8C6D58] transition">Prestations</a>
            <a href="#cupping" className="hover:text-[#8C6D58] transition">Cupping</a>
            <a href="#massage" className="hover:text-[#8C6D58] transition">Massage</a>
            <a href="#faq" className="hover:text-[#8C6D58] transition">FAQ</a>
            <a href="#contact" className="hover:text-[#8C6D58] transition">Contact</a>
          </div>
          <a
            href="#contact"
            className="bg-[#5C3D2E] text-[#F5EFE6] px-6 py-2 rounded-full hover:bg-[#8C6D58] transition"
          >
            Réserver
          </a>
        </nav>
      </header>

      {/* HERO Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
         <div className="relative z-10">
            <p className="text-[#8C6D58] uppercase tracking-widest text-sm mb-4">Bien-être & Récupération</p>
            <h1 className="font-serif text-5xl lg:text-6xl font-bold leading-tight text-[#5C3D2E]">
              Inès Debroise
              <span className="block text-[#8C6D58]">ID RECOVERY</span>
            </h1>
            <p className="mt-6 text-lg text-[#684735] max-w-xl">
              Praticienne certifiée en récupération physique et bien-être. Cupping therapy (hijama), massage suédois sportif et soins personnalisés à Geispolsheim.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#prestations"
                className="bg-[#5C3D2E] text-[#F5EFE6] px-8 py-3 rounded-full text-lg font-medium hover:bg-[#8C6D58] transition"
              >
                Découvrir les soins
              </a>
              <a
                href="#contact"
                className="border-2 border-[#5C3D2E] text-[#5C3D2E] px-8 py-3 rounded-full text-lg font-medium hover:bg-[#5C3D2E] hover:text-[#F5EFE6] transition"
              >
                Me contacter
              </a>
            </div>
            {/* Offre de lancement */}
            <div className="mt-8 bg-[#F5EFE6] border border-[#8C6D58] rounded-2xl p-5 inline-block">
              <p className="font-semibold text-[#5C3D2E]">🎉 Offre de lancement</p>
              <p className="text-sm text-[#684735]">
                -15% sur toutes les prestations du 5 septembre au 5 octobre 2026. Réservation en message privé.
              </p>
            </div>
          </div>
         <div className="relative z-0">
  <div className="relative w-full h-[500px] rounded-[3rem] overflow-hidden shadow-2xl">
    <Image
      src="/ines-debroise-portrait.webp"
      alt="Inès Debroise, praticienne en cupping therapy et massage sportif à Geispolsheim"
      fill
      priority
      sizes="(max-width: 1024px) 100vw, 50vw"
      className="object-cover"
    />
  </div>

  <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#8C6D58] rounded-full opacity-20" />
  <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#D2BBA0] rounded-full opacity-30" />
</div>
        </div>
      </section>

      {/* Section À propos */}
      <section className="bg-[#F5EFE6] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="font-serif text-4xl font-bold text-[#5C3D2E] mb-6">Qui est Inès Debroise ?</h2>
            <p className="text-[#684735] leading-relaxed mb-4">
              Sportive de haut niveau en basket-ball, Inès a toujours été passionnée par la performance et la récupération. Certifiée en cupping therapy et massage suédois sportif, elle met son expérience et sa sensibilité au service de votre bien-être.
            </p>
            <p className="text-[#684735] leading-relaxed mb-4">
              Son approche est holistique : détendre les muscles, soulager les tensions, favoriser la récupération et offrir un moment de relaxation profonde. Que vous soyez athlète ou simplement à la recherche d&apos;un moment pour vous, chaque séance est personnalisée.
            </p>
            <div className="mt-6 bg-[#D8C3A5] rounded-2xl p-6 inline-block">
              <p className="font-semibold text-[#5C3D2E]">📍 Geispolsheim (67118) – près de Strasbourg</p>
              <p className="text-sm text-[#684735]">🇫🇷 Français & 🇬🇧 English spoken</p>
            </div>
            <p className="mt-6 text-sm italic text-[#8C6D58]">
              * Prestations de bien-être et de récupération sportive non médicales, ne remplaçant pas un suivi en kinésithérapie.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            {/* Image à propos - remplacez src */}
       <div className="relative w-full h-[400px] rounded-[2rem] overflow-hidden shadow-xl">
  <Image
    src="/ines-debroise-cupping.webp"
    alt="Séance de cupping therapy par Inès Debroise"
    fill
    sizes="(max-width: 1024px) 100vw, 50vw"
    className="object-cover"
  />
</div>
          </div>
        </div>
      </section>

      {/* Section Prestations */}
      <section id="prestations" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-center text-[#5C3D2E] mb-12">Mes Prestations</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Cupping */}
            <div className="bg-[#F5EFE6] rounded-3xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="font-serif text-2xl font-bold text-[#5C3D2E] mb-4">Cupping Therapy / Hijama</h3>
              <p className="text-[#684735] mb-6">
                Technique d&apos;aspiration par ventouses pour soulager les douleurs, relâcher les fascias et stimuler la circulation.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between"><span>Dos (20 min)</span><strong>50 €</strong></li>
                <li className="flex justify-between"><span>Jambes complètes (40 min)</span><strong>55 €</strong></li>
                <li className="flex justify-between"><span>Corps entier (45 min)</span><strong>80 €</strong></li>
              </ul>
            </div>
            {/* Massage */}
            <div className="bg-[#F5EFE6] rounded-3xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">💆‍♀️</div>
              <h3 className="font-serif text-2xl font-bold text-[#5C3D2E] mb-4">Massage Suédois Sportif</h3>
              <p className="text-[#684735] mb-6">
                Massage profond pour délier les nœuds musculaires, favoriser la récupération et préparer le corps à l&apos;effort.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between"><span>30 min</span><strong>45 €</strong></li>
                <li className="flex justify-between"><span>60 min</span><strong>70 €</strong></li>
                <li className="flex justify-between"><span>Dos (30 min)</span><strong>45 €</strong></li>
                <li className="flex justify-between"><span>Jambes (40 min)</span><strong>50 €</strong></li>
              </ul>
            </div>
            {/* Formules combinées */}
            <div className="bg-[#F5EFE6] rounded-3xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="font-serif text-2xl font-bold text-[#5C3D2E] mb-4">Formules Combinées</h3>
              <p className="text-[#684735] mb-6">
                Packs signatures associant massage suédois et ventouses pour une expérience complète.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between"><span>Découverte (50 min)</span><strong>80 €</strong></li>
                <li className="flex justify-between"><span>Jambes Légères (60 min)</span><strong>80 €</strong></li>
                <li className="flex justify-between"><span>Signature Bien-être (90 min)</span><strong>120 €</strong></li>
                <li className="flex justify-between"><span>Soin Personnalisé (60-90 min)</span><strong>80–150 €</strong></li>
              </ul>
            </div>
          </div>



{/* Bouton pour donner son avis sous les prestations */}
        <div className="text-center mt-12">
  <ReviewModal />
</div>


        </div>
      </section>

      {/* Section Cupping détaillée */}
      <section id="cupping" className="bg-[#F5EFE6] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-center text-[#5C3D2E] mb-12">Le Cupping / Hijama en détail</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-[#5C3D2E] mb-4">Bienfaits</h3>
              <ul className="space-y-2 text-[#684735] list-disc pl-6">
                <li>Réduit les sensations de raideur</li>
                <li>Soulage les tensions musculaires</li>
                <li>Favorise la détente et la relaxation</li>
                <li>Peut contribuer à une meilleure circulation locale</li>
                <li>Apprécié par de nombreux sportifs pour la récupération</li>
                <li>Procure une sensation de légèreté et de bien-être</li>
              </ul>
              <p className="mt-4 text-sm italic text-[#8C6D58]">
                Ces effets peuvent varier selon les personnes et ne remplacent pas un avis médical.
              </p>

              <h3 className="font-serif text-2xl font-semibold text-[#5C3D2E] mt-8 mb-4">Contre-indications</h3>
              <ul className="space-y-2 text-[#684735] list-disc pl-6">
                <li>Grossesse</li>
                <li>Cancer en cours de traitement</li>
                <li>Sous traitement anticoagulant</li>
                <li>Peau infectée, brûlée ou lésée</li>
                <li>Intervention chirurgicale récente</li>
                <li>Porteur d&apos;une greffe de rein</li>
                <li>Certaines pathologies cardiaques</li>
                <li>Enfants de moins de 8 ans</li>
              </ul>
              <p className="mt-4 text-sm text-[#8C6D58]">
                En cas de doute ou de pathologie particulière, demandez conseil à votre professionnel de santé.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-semibold text-[#5C3D2E] mb-4">Comment se déroule une séance ?</h3>
              <ol className="space-y-4 text-[#684735] list-decimal pl-6">
                <li>
                  <strong>Temps d&apos;échange :</strong> Nous commençons par comprendre vos besoins, douleurs, tensions, objectifs et contre-indications.
                </li>
                <li>
                  <strong>Installation et préparation :</strong> Vous êtes installé dans un espace calme, les zones sont préparées.
                </li>
                <li>
                  <strong>Application des ventouses :</strong> Posées sur des points stratégiques, sensation d&apos;aspiration normale, restent 5 à 15 min.
                </li>
                <li>
                  <strong>Moment de détente :</strong> Certaines ventouses peuvent être déplacées, suivi d&apos;un massage relaxant.
                </li>
                <li>
                  <strong>Fin de séance :</strong> Échange sur vos ressentis, conseils d&apos;hydratation. Des marques temporaires peuvent apparaître (7-10 jours).
                </li>
              </ol>
              <div className="mt-6 bg-[#D8C3A5] rounded-2xl p-5">
                <p className="font-medium text-[#5C3D2E]">
                  Le cupping est une invitation à ralentir, relâcher les tensions du quotidien et prendre soin de soi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Massage détaillée */}
      <section id="massage" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-center text-[#5C3D2E] mb-12">Le Massage Suédois Sportif</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-[#5C3D2E] mb-4">Bienfaits</h3>
              <ul className="space-y-2 text-[#684735] list-disc pl-6">
                <li>Améliorer la récupération</li>
                <li>Détend les muscles</li>
                <li>Favoriser la relaxation et le bien-être</li>
                <li>Favoriser la circulation sanguine</li>
                <li>Soulager les tensions et courbatures</li>
                <li>Améliorer la souplesse et la mobilité</li>
              </ul>
              <p className="mt-4 text-sm italic text-[#8C6D58]">
                Les effets peuvent varier selon chaque personne.
              </p>

              <h3 className="font-serif text-2xl font-semibold text-[#5C3D2E] mt-8 mb-4">Contre-indications</h3>
              <ul className="space-y-2 text-[#684735] list-disc pl-6">
                <li>Fièvre ou infection en cours</li>
                <li>Blessure récente ou traumatisme aigu (entorse, déchirure...)</li>
                <li>Phlébite ou suspicion de thrombose</li>
                <li>Plaie ouverte, brûlure ou infection cutanée</li>
                <li>Problème cardiovasculaire important ou récent</li>
              </ul>
              <p className="mt-4 text-sm text-[#8C6D58]">
                En cas de doute, demandez conseil à votre professionnel de santé.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-semibold text-[#5C3D2E] mb-4">Déroulement d&apos;une séance</h3>
              <ol className="space-y-4 text-[#684735] list-decimal pl-6">
                <li>
                  <strong>Temps d&apos;échange :</strong> Identification de vos objectifs, activité, tensions.
                </li>
                <li>
                  <strong>Définition des zones :</strong> Le praticien détermine les zones musculaires à cibler.
                </li>
                <li>
                  <strong>Réalisation du massage :</strong> Effleurages, pétrissages, pressions adaptées.
                </li>
                <li>
                  <strong>Adaptation de l&apos;intensité :</strong> La pression est ajustée, pas besoin d&apos;avoir mal pour être efficace.
                </li>
                <li>
                  <strong>Fin de séance :</strong> Repos, hydratation, écoute du corps.
                </li>
              </ol>
              <div className="mt-6 bg-[#D8C3A5] rounded-2xl p-5">
                <p className="font-medium text-[#5C3D2E]">
                  Le massage sportif n&apos;est pas réservé aux sportifs professionnels : toute personne souhaitant travailler ses tensions musculaires peut en bénéficier.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Section Avis */}
{reviews.length > 0 && (
  <section id="avis" className="bg-[#EDE4D8] py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="font-serif text-4xl font-bold text-center text-[#5C3D2E] mb-12">
        Avis de mes clients
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-[#FFFDF9] rounded-2xl p-6 shadow-md hover:shadow-xl transition flex flex-col"
          >
            <div className="flex items-center mb-4">
              <div className="flex text-[#8C6D58]">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 ${
                      i < review.rating ? "fill-current" : "text-[#D8C3A5]"
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

            <p className="text-[#5C3D2E] italic flex-grow">
              &ldquo;{review.text}&rdquo;
            </p>

            <div className="mt-4 pt-4 border-t border-[#D8C3A5] flex justify-between items-center">
              <span className="font-semibold text-[#5C3D2E]">
                {review.author}
              </span>

              <time className="text-sm text-[#8C6D58]">
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
    </div>
  </section>
)}







      {/* Section FAQ */}
      <section id="faq" className="bg-[#F5EFE6] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-center text-[#5C3D2E] mb-12">Questions Fréquentes</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="font-semibold text-[#5C3D2E] mb-2">Est-ce que le Cupping est douloureux ?</h3>
              <p className="text-[#684735]">
                Non, la plupart des personnes ressentent une légère sensation de succion et de pression. Le soin est généralement bien toléré et s&apos;adapte à votre sensibilité.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="font-semibold text-[#5C3D2E] mb-2">Quelle est la durée d&apos;une séance de cupping ?</h3>
              <p className="text-[#684735]">
                Dos : environ 20 minutes. Corps complet : environ 40 minutes. Les durées sont indicatives et peuvent varier.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="font-semibold text-[#5C3D2E] mb-2">À quelle fréquence faire du Cupping ?</h3>
              <p className="text-[#684735]">
                Bien-être : toutes les 4 à 8 semaines. Sport & récupération : toutes les semaines selon besoins. Entretien saisonnier : 1 séance à chaque changement de saison. Nous définirons ensemble le rythme adapté.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="font-semibold text-[#5C3D2E] mb-2">Puis-je faire du Cupping si j&apos;ai un tatouage ou une cicatrice ?</h3>
              <p className="text-[#684735]">
                Oui, avec précautions. Tatouage de moins d&apos;un an : zone contournée. Tatouage de plus d&apos;un an : possible si peau cicatrisée. Cicatrice récente : évitée jusqu&apos;à guérison. Chaque séance est adaptée.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="font-semibold text-[#5C3D2E] mb-2">Le massage sportif fait-il mal ?</h3>
              <p className="text-[#684735]">
                Non, il n&apos;a pas besoin d&apos;être douloureux. L&apos;intensité doit être adaptée à votre corps et à vos objectifs.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="font-semibold text-[#5C3D2E] mb-2">Le massage sportif remplace-t-il un kinésithérapeute ou un médecin ?</h3>
              <p className="text-[#684735]">
                Non. Le massage sportif est une prestation de bien-être et de récupération. Il ne remplace pas un diagnostic ou un traitement médical.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Localisation & Contact */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl font-bold text-[#5C3D2E] mb-6">Où me trouver ?</h2>
            <p className="text-[#684735] mb-4">
              📍 <strong>Geispolsheim, 67118</strong> (Bas-Rhin, près de Strasbourg)
            </p>
            <p className="text-[#684735] mb-4">
              Les séances ont lieu en cabinet/espace de soin à Geispolsheim, sur réservation uniquement.
            </p>
            <p className="text-[#684735] mb-4">
              Langues parlées : 🇫🇷 Français & 🇬🇧 Anglais
            </p>
            <div className="bg-[#F5EFE6] border border-[#8C6D58] rounded-2xl p-6 mt-8">
              <p className="font-semibold text-[#5C3D2E]">🎉 Offre de lancement</p>
              <p className="text-[#684735] mt-2">
                Profitez de <strong>-15% sur toutes les prestations</strong> du 5 septembre au 5 octobre 2026.
                <br />
                Réservation en message privé (Instagram, Facebook ou formulaire de contact).
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              <a
                href="https://www.instagram.com/ines_dbrs"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#5C3D2E] text-[#F5EFE6] px-6 py-3 rounded-full hover:bg-[#8C6D58] transition"
              >
                Instagram
              </a>
              <a
                href="mailto:contact@idrecovery.fr"
                className="border-2 border-[#5C3D2E] text-[#5C3D2E] px-6 py-3 rounded-full hover:bg-[#5C3D2E] hover:text-[#F5EFE6] transition"
              >
                Email
              </a>
            </div>
          </div>
          <div>
            {/* Carte ou image du lieu - remplacez par une carte Google Maps ou photo */}
            <div className="w-full h-[400px] rounded-[2rem] overflow-hidden shadow-xl bg-[#F5EFE6]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2636.123456789!2d7.680000!3d48.520000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDMxJzEyLjAiTiA3wrA0MCc0OC4wIkU!5e0!3m2!1sfr!2sfr!4v1620000000000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Carte Geispolsheim"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#5C3D2E] text-[#F5EFE6] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-serif text-xl mb-2">ID RECOVERY – Inès Debroise</p>
          <p className="text-sm opacity-80">
            Prestations de bien-être et de récupération sportive non médicales, ne remplaçant pas un suivi en kinésithérapie.
          </p>
          <p className="text-sm mt-4 opacity-60">
            © {new Date().getFullYear()} ID RECOVERY. Tous droits réservés.
          </p>
        </div>
      </footer>




    </main>
  );
}