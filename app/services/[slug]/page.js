import { notFound } from "next/navigation";
import { services, slugs } from "@/data/serviceData";
import ServiceDetailsClient from "@/components/service-page/ServiceDetailsClient";

const BASE_URL = "https://www.cmdurand.fr";

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

const geoKeywords = [
  "missillac",
  "pontchateau",
  "pontchâteau",
  "loire-atlantique",
  "nantes",
  "saint-nazaire",
  "sud bretagne",
  "44",
  "devis gratuit",
  "artisan",
];

const serviceKeywordMap = {
  "charpente-traditionelle": [
    "charpente traditionnelle",
    "charpentier",
    "charpente bois",
    "charpente maison",
    "toiture bois",
    "charpente artisanale",
  ],
  "charpente-industrielle": [
    "charpente industrielle",
    "charpente entrepôt",
    "charpente bâtiment industriel",
    "structure bois industrielle",
  ],
  "extension-ou-maison-ossature": [
    "extension ossature bois",
    "maison ossature bois",
    "construction bois",
    "extension maison bois",
    "agrandissement maison",
  ],
  preau: [
    "préau bois",
    "abri bois",
    "préau sur mesure",
    "abri jardin bois",
    "construction préau",
  ],
  carport: [
    "carport bois",
    "abri voiture bois",
    "carport sur mesure",
    "garage bois",
    "abri voiture",
  ],
  terrasse: [
    "terrasse bois",
    "terrasse composite",
    "terrasse sur mesure",
    "construction terrasse",
    "pose terrasse bois",
  ],
  "amenagement-des-combles": [
    "aménagement combles",
    "combles perdus",
    "conversion combles",
    "aménagement sous toiture",
    "chambre combles",
  ],
  "menuiserie-exterieure": [
    "menuiserie extérieure",
    "pose fenêtres bois",
    "pose portes bois",
    "volets bois",
    "fenêtres sur mesure",
  ],
  bardage: [
    "bardage bois",
    "revêtement extérieur",
    "bardage façade",
    "bardage maison",
    "isolation extérieure",
  ],
  "solivage-porteur": [
    "solivage porteur",
    "plancher bois",
    "poutre bois",
    "renforcement plancher",
    "structure plancher",
  ],
  "menuiserie-generale": [
    "menuiserie générale",
    "menuisier",
    "fabrication sur mesure",
    "menuiserie intérieure",
    "menuiserie bois",
  ],
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services[slug];

  if (!service) return {};

  const specificKeywords = serviceKeywordMap[slug] ?? [];
  const ogImage = `${BASE_URL}${service.images[0]}`;

  return {
    title: `${service.title} — Missillac, Pontchâteau, Loire-Atlantique`,
    description: `${service.title} par Charpente Menuiserie Durand, artisans à Missillac (44). Intervention sur Pontchâteau, Nantes et toute la Loire-Atlantique. Devis gratuit.`,
    keywords: [...specificKeywords, ...geoKeywords, "charpente", "menuiserie", "durand"],
    openGraph: {
      title: `${service.title} — Charpente Menuiserie Durand | Loire-Atlantique`,
      description: `${service.title} en Loire-Atlantique par Charpente Menuiserie Durand. Artisans basés à Missillac (44), interventions sur Pontchâteau, Nantes et toute la région. Devis gratuit.`,
      url: `${BASE_URL}/services/${slug}`,
      images: [{ url: ogImage, width: 1200, height: 800, alt: service.title }],
    },
    alternates: {
      canonical: `${BASE_URL}/services/${slug}`,
    },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = services[slug];

  if (!service) {
    notFound();
  }

  const serviceCards = slugs
    .filter((serviceSlug) => serviceSlug !== slug)
    .map((s) => ({
      slug: s,
      title: services[s].title,
      image: services[s].images[0],
    }));

  // ── Structured data ────────────────────────────────────────────────────────

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: { "@id": `${BASE_URL}/#organization` },
    areaServed: [
      { "@type": "Place", name: "Missillac" },
      { "@type": "Place", name: "Pontchâteau" },
      { "@type": "Place", name: "Loire-Atlantique" },
      { "@type": "Place", name: "Nantes" },
      { "@type": "Place", name: "Saint-Nazaire" },
      { "@type": "Place", name: "Sud Bretagne" },
    ],
    url: `${BASE_URL}/services/${slug}`,
    image: `${BASE_URL}${service.images[0]}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/#about` },
      { "@type": "ListItem", position: 3, name: service.title, item: `${BASE_URL}/services/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServiceDetailsClient service={service} serviceCards={serviceCards} />
    </>
  );
}
