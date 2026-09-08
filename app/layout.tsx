import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Playfair_Display, Montserrat } from 'next/font/google';

// Polices
const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

// Métadonnées SEO
export const metadata: Metadata = {
  metadataBase: new URL('https://www.idrecovery.fr'),

  title: {
    default: 'ID RECOVERY | Cupping & Massage Sportif à Geispolsheim',
    template: '%s | ID RECOVERY',
  },

  description:
    'ID RECOVERY – Inès Debroise, praticienne en cupping therapy et massage sportif à Geispolsheim, près de Strasbourg. Cupping, massage suédois sportif et récupération physique.',



  authors: [
    {
      name: 'Inès Debroise',
    },
  ],

  creator: 'ID RECOVERY – Inès Debroise',

 alternates: {
  canonical: "/",
},

  openGraph: {
    title: 'ID RECOVERY | Cupping & Massage Sportif à Geispolsheim',
    description:
      'Cupping therapy, massage suédois sportif et récupération physique à Geispolsheim, près de Strasbourg.',
    url: 'https://www.idrecovery.fr/',
    siteName: 'ID RECOVERY',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ID RECOVERY – Cupping et massage sportif à Geispolsheim',
      },
    ],
  },
twitter: {
  card: "summary_large_image",
  title: "ID RECOVERY | Cupping & Massage Sportif à Geispolsheim",
  description:
    "Cupping therapy et massage sportif à Geispolsheim, près de Strasbourg.",
  images: ["/og-image.jpg"],
},
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.idrecovery.fr/#business',
  name: 'ID RECOVERY – Inès Debroise',
  url: 'https://www.idrecovery.fr/',
  description:
    'Cupping therapy et massage sportif à Geispolsheim, près de Strasbourg.',
  telephone: '+33XXXXXXXXX',
  image: "https://www.idrecovery.fr/ines-debroise-portrait.jpg",
logo: "https://www.idrecovery.fr/logo-idrecovery.webp",
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Geispolsheim',
    postalCode: '67118',
    addressCountry: 'FR',
  },
 areaServed: [
  {
    "@type": "City",
    name: "Geispolsheim",
  },
  {
    "@type": "City",
    name: "Strasbourg",
  },
  {
    "@type": "AdministrativeArea",
    name: "Bas-Rhin",
  },
],
  priceRange: '€€',
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    
    <html
      lang="fr"
      className={`${playfair.variable} ${montserrat.variable} h-full antialiased`}
   
   >
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(jsonLd),
  }}
/>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
