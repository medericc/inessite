import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Playfair_Display, Montserrat } from 'next/font/google';
import CookieManager from "./components/CookieManager";
import { GoogleTagManager } from "@next/third-parties/google";

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
  metadataBase: new URL('https://exemple-topique-ines.vercel.app'),

  title: {
    default: 'ID RECOVERY | Cupping & Massage Sportif à Geispolsheim',
    template: '%s | ID RECOVERY',
  },

description:
  'ID RECOVERY – Massage sportif, massage bien-être et cupping à Geispolsheim près de Strasbourg. Inès Debroise vous accompagne pour la détente, le relâchement musculaire et la récupération sportive.',



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
    url: 'https://exemple-topique-ines.vercel.app/',
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
  '@id': 'https://exemple-topique-ines.vercel.app/#business',
  name: 'ID RECOVERY – Inès Debroise',
  url: 'https://exemple-topique-ines.vercel.app/',
  description:
    'Cupping therapy et massage sportif à Geispolsheim, près de Strasbourg.',
  telephone: '+33611872467',
  image: "https://exemple-topique-ines.vercel.app/ines-debroise-cupping.webp",
logo: "https://exemple-topique-ines.vercel.app/logo_idrecovery.webp",
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
sameAs: [
  'https://www.instagram.com/idrecovery__/',
],

};
export default function RootLayout({ children }: LayoutProps<"/">) {
return (
  <html
    lang="fr"
    className={`${playfair.variable} ${montserrat.variable} h-full antialiased`}
  >
  

    <body className="min-h-full flex flex-col">
      {/* Google Tag Manager (noscript) */}
    <GoogleTagManager gtmId="GTM-TWXM8QLC" />
<noscript>
  <iframe
    src="https://www.googletagmanager.com/ns.html?id=GTM-TWXM8QLC"
    height="0"
    width="0"
    style={{ display: "none", visibility: "hidden" }}
  />
</noscript>

      {children}
      <CookieManager />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
    </body>
  </html>
);
}
