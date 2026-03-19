import { services, slugs } from "@/data/serviceData";

const BASE_URL = "https://www.cmdurand.fr";
const LAST_BUILD = new Date("2025-06-01");

export default function sitemap() {
  const serviceEntries = slugs.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: LAST_BUILD,
    changeFrequency: "monthly",
    priority: 0.8,
    images: services[slug].images.map((img) => `${BASE_URL}${img}`),
  }));

  return [
    {
      url: BASE_URL,
      lastModified: LAST_BUILD,
      changeFrequency: "weekly",
      priority: 1.0,
      images: [
        `${BASE_URL}/img/home.webp`,
        `${BASE_URL}/img/logo.png`,
      ],
    },
    ...serviceEntries,
    {
      url: `${BASE_URL}/politique-de-confidentialite`,
      lastModified: LAST_BUILD,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/conditions-generales-utilisation`,
      lastModified: LAST_BUILD,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
