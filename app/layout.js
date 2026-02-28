import "./globals.css";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import { gotamFont } from "@/lib/fonts";

export const metadata = {
  metadataBase: new URL("https://www.cmdurand.fr/"),
  title: {
    default: "Charpente Menuiserie Durand | Missillac (44) | Loire-Atlantique",
    template: "%s | Charpente Menuiserie Durand",
  },
  description:
    "Artisans charpentiers et menuisiers à Missillac (Loire-Atlantique). Charpente traditionnelle, ossature bois, carport, terrasse, bardage. Intervention sur Pontchâteau, Nantes et toute la région. Devis gratuit.",
  keywords: [
    // Services principaux
    "charpente",
    "menuiserie",
    "charpente traditionnelle",
    "charpente industrielle",
    "ossature bois",
    "extension ossature bois",
    "maison ossature bois",
    "bardage",
    "terrasse bois",
    "carport",
    "préau",
    "solivage porteur",
    "aménagement combles",
    "menuiserie extérieure",
    "menuiserie générale",
    // Géographie — primaire
    "missillac",
    "pontchateau",
    "pontchâteau",
    "loire-atlantique",
    "44",
    // Géographie — secondaire
    "nantes",
    "saint-nazaire",
    "la baule",
    "pornichet",
    "donges",
    "prinquiau",
    "besné",
    "crossac",
    "sud bretagne",
    "sud-bretagne",
    "bretagne",
    "56",
    "ouest",
    // Combinaisons longue traîne
    "charpente pontchateau",
    "charpente missillac",
    "charpente nantes",
    "charpente loire-atlantique",
    "charpente sud bretagne",
    "menuiserie 44",
    "menuiserie nantes",
    "menuiserie pontchateau",
    "charpentier missillac",
    "charpentier 44",
    "artisan charpentier loire-atlantique",
    "artisan menuisier loire-atlantique",
    "toiture pontchateau",
    "extension maison bois Loire-Atlantique",
    "carport bois 44",
    "terrasse bois missillac",
    // Générique
    "construction bois",
    "travaux btp 44",
    "sur mesure",
    "devis gratuit",
    "devis",
    "entreprise",
    "durand",
    "pme",
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
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.cmdurand.fr",
    title: "Charpente Menuiserie Durand | Missillac (44) | Loire-Atlantique",
    description:
      "Artisans charpentiers et menuisiers à Missillac (44). Charpente traditionnelle, ossature bois, carport, terrasse, bardage. Intervention sur Pontchâteau, Nantes et toute la région. Devis gratuit.",
    images: [
      {
        url: "/img/home.webp",
        width: 1200,
        height: 630,
        alt: "Charpente Menuiserie Durand — Artisans à Missillac, Loire-Atlantique",
      },
    ],
    siteName: "Charpente Menuiserie Durand",
  },
  twitter: {
    card: "summary_large_image",
    title: "Charpente Menuiserie Durand | Missillac (44)",
    description:
      "Artisans charpentiers et menuisiers en Loire-Atlantique. Devis gratuit.",
    images: ["/img/home.webp"],
  },
  alternates: {
    canonical: "https://www.cmdurand.fr",
  },
  other: {
    "theme-color": "#e63322",
    "msapplication-TileColor": "#e63322",
    "geo.region": "FR-44",
    "geo.placename": "Missillac, Loire-Atlantique",
    "geo.position": "47.4167;-2.1500",
    ICBM: "47.4167, -2.1500",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.cmdurand.fr/#organization",
  name: "Charpente Menuiserie Durand",
  url: "https://www.cmdurand.fr",
  logo: {
    "@type": "ImageObject",
    url: "https://www.cmdurand.fr/img/logo.png",
    width: 230,
    height: 80,
  },
  image: "https://www.cmdurand.fr/img/home.webp",
  description:
    "Artisans charpentiers et menuisiers spécialisés en charpente traditionnelle, ossature bois, menuiserie, carport, terrasse et bardage. Basés à Missillac (Loire-Atlantique), intervention sur Pontchâteau, Nantes, Saint-Nazaire et toute la région.",
  foundingDate: "2004",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Z.A. la Pommeraie, Rue des Indes",
    addressLocality: "Missillac",
    addressRegion: "Loire-Atlantique",
    postalCode: "44780",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 47.4167,
    longitude: -2.15,
  },
  hasMap: "https://maps.google.com/?q=Charpente+Menuiserie+Durand+Missillac",
  telephone: "+33676508551",
  email: "charpente.menuiserie.durand@gmail.com",
  sameAs: [
    "https://www.facebook.com/profile.php?id=100063695462775",
    "https://www.instagram.com/charpentemenuiseriedurand/",
  ],
  areaServed: [
    { "@type": "Place", name: "Missillac" },
    { "@type": "Place", name: "Pontchâteau" },
    { "@type": "Place", name: "Loire-Atlantique" },
    { "@type": "Place", name: "Nantes" },
    { "@type": "Place", name: "Saint-Nazaire" },
    { "@type": "Place", name: "La Baule" },
    { "@type": "Place", name: "Pornichet" },
    { "@type": "Place", name: "Sud Bretagne" },
    { "@type": "Place", name: "Besné" },
    { "@type": "Place", name: "Crossac" },
    { "@type": "Place", name: "Donges" },
    { "@type": "Place", name: "Prinquiau" },
  ],
  serviceType: [
    "Charpente traditionnelle",
    "Charpente industrielle",
    "Menuiserie générale",
    "Menuiserie extérieure",
    "Extension ossature bois",
    "Maison ossature bois",
    "Terrasse bois",
    "Bardage",
    "Aménagement combles",
    "Carport",
    "Préau",
    "Solivage porteur",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:30",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "6",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Marie Deshoux" },
      datePublished: "2025-03",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Cette entreprise est intervenue pour refaire notre plancher à l'étage et faire un sarking. Le travail a été propre, soigné et rapide. Nous recommandons cette entreprise.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Antoine Martin" },
      datePublished: "2025-04",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Très bon travail réalisé par l'équipe de l'entreprise Charpente et Menuiserie Durand. Mes travaux comprenaient la réalisation d'une trémie et la condamnation d'un escatrappe. Tout s'est parfaitement passé dans les délais et le coût imparti. Je recommande sans problème.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Lucie Billeret" },
      datePublished: "2023-06",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Enfin un professionnel qui se soucie de ses clients ! M. Durand Melvyn a géré la pose de nos menuiseries et la charpente de notre construction de maison. Une charpente incroyable !",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Arno Lesaint" },
      datePublished: "2023-02",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "La SARL Charpente Menuiserie Durand est intervenue chez nous pour un renforcement de charpente. Le devis a été réalisé rapidement, le tarif compétitif. M. Durand et ses employés inspirent confiance. Résultat très propre et satisfaisant.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Davy Philippe" },
      datePublished: "2025-01",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "J'ai réalisé la charpente et l'ossature bois de mon extension avec Melvyn et son équipe. Entreprise sérieuse et très professionnelle.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Sylvie Nouvellon" },
      datePublished: "2021-03",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Je suis pleinement satisfaite de la société CMD. La prestation rendue (changement d'une poutre et création d'un jambage de renfort) est très qualitative. Entreprise sérieuse, travail soigné et très professionnel.",
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.cmdurand.fr/#website",
  url: "https://www.cmdurand.fr",
  name: "Charpente Menuiserie Durand",
  description:
    "Artisans charpentiers et menuisiers en Loire-Atlantique — Missillac, Pontchâteau, Nantes, Sud Bretagne",
  publisher: {
    "@id": "https://www.cmdurand.fr/#organization",
  },
  inLanguage: "fr-FR",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${gotamFont.className} bg-white`} hrefLang="fr">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <div className="relative">
          <Link href={"/"}>
            <Image
              src="/logo.png"
              alt="Logo Charpente Menuiserie Durand - Charpentier Missillac"
              width={180}
              height={52}
              className="fixed w-[180px] h-auto z-40 block lg:hidden py-3 px-5"
              priority
            />
          </Link>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}