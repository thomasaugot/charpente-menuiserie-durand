import Head from "next/head";
import "./globals.css";
import Footer from "@/components/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import logo from "../app/logo.png";
import Image from "next/image";
import localFont from "next/font/local";

library.add(fab);

const gotamFont = localFont({ src: "../assets/fonts/Gotham Nights.otf" });
const dosisFont = localFont({ src: "../assets/fonts/Dosis-Regular.ttf" });

export const metadata = {
  metadataBase: new URL("https://www.cmdurand.fr/"),
  title: {
    default: "Charpente Menuiserie Durand | Missillac (44)",
    template: "%s | Charpente Menuiserie Durand",
  },
  description: "Spécialiste en charpente et menuiserie pour la construction et la rénovation, à Missillac (44) et sa région.",
  keywords: [
    "charpente pontchateau",
    "menuiserie 44", 
    "loire atlantique charpente",
    "charpentier missillac",
    "travaux btp 44",
    "toiture pontchateau",
    "charpente",
    "ouest", 
    "bretagne",
    "pme",
    "44",
    "56",
    "menuiserie",
    "missillac",
    "construction",
    "durand",
    "loire-atlantique",
    "pontchateau",
    "donges",
    "prinquiau",
    "besné",
    "crossac",
    "la baule",
    "pornichet",
    "sur mesure",
    "maison",
    "terrasse",
    "solivage",
    "carport",
    "entreprise",
    "extension",
    "preau",
    "aménagement",
    "combles",
    "bois",
    "bardage",
    "travaux",
    "devis"
  ],
  authors: [{ name: "Melvyn Durand" }],
  creator: "Charpente Menuiserie Durand",
  publisher: "Charpente Menuiserie Durand",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.cmdurand.fr",
    title: "Charpente Menuiserie Durand | Missillac (44)",
    description: "Spécialiste en charpente et menuiserie pour la construction et la rénovation, à Missillac (44) et sa région.",
    images: [
      {
        url: "/hero-image.jpg",
        width: 1200,
        height: 630,
        alt: "Charpente Menuiserie Durand - Missillac Loire-Atlantique",
      },
    ],
    siteName: "Charpente Menuiserie Durand",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Charpente Menuiserie Durand | Missillac (44)',
    description: 'Spécialiste en charpente et menuiserie pour la construction et la rénovation',
    images: ['/hero-image.jpg'],
  },
  alternates: {
    canonical: "https://www.cmdurand.fr",
  },
  other: {
    'theme-color': '#e63322',
    'msapplication-TileColor': '#e63322',
    'geo.region': 'FR-44',
    'geo.placename': 'Missillac, Loire-Atlantique',
    'geo.position': '47.4167;-2.1500',
    'ICBM': '47.4167, -2.1500',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="author" content={metadata.author} />
        <link rel="icon" href="./icon.png" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="charpente, ouest, bretagne, pme, 44, 56, menuiserie, missillac, construction, durand, loire-atlantique, pontchateau, donges, prinquiau, besné, crossac, la baule, pornichet, sur mesure, maison, terrasse, solivage, carport, entreprise, extension, preau, aménagement, combles, bois, bardage, travaux, devis"
        />
        
        {/* Structured Data - Organisation */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.cmdurand.fr/#organization",
              "name": "Charpente Menuiserie Durand",
              "url": "https://www.cmdurand.fr",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.cmdurand.fr/logo.png",
                "width": 230,
                "height": 80
              },
              "description": "Spécialiste en charpente et menuiserie pour la construction et la rénovation, à Missillac (44) et sa région.",
              "foundingDate": "2004",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Missillac",
                "addressRegion": "Loire-Atlantique",
                "postalCode": "44780",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 47.4167,
                "longitude": -2.1500
              },
              "telephone": "+33676508551",
              "areaServed": [
                {
                  "@type": "Place",
                  "name": "Missillac"
                },
                {
                  "@type": "Place", 
                  "name": "Pontchâteau"
                },
                {
                  "@type": "Place",
                  "name": "Loire-Atlantique"
                },
                {
                  "@type": "Place",
                  "name": "Besné"
                },
                {
                  "@type": "Place",
                  "name": "Crossac"
                },
                {
                  "@type": "Place",
                  "name": "Donges"
                },
                {
                  "@type": "Place",
                  "name": "Prinquiau"
                }
              ],
              "serviceType": [
                "Charpente traditionnelle",
                "Menuiserie générale",
                "Extension ossature bois",
                "Terrasse bois",
                "Bardage",
                "Aménagement combles",
                "Carport",
                "Préau",
                "Solivage porteur"
              ],
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday", 
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "08:00",
                  "closes": "18:30"
                }
              ]
            })
          }}
        />
      </Head>
      <body className={`${gotamFont.className} bg-white`} hrefLang="fr">
        <div className="relative">
          <Link href={"/"}>
            <Image
              src={logo}
              width={"auto"}
              height={"auto"}
              alt="Logo Charpente Menuiserie Durand - Charpentier Missillac"
              className="fixed w-[180px] h-auto z-40 block lg:hidden py-3 px-5"
            />
          </Link>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
