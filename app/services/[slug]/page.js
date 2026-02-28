import { notFound } from "next/navigation";
import { services, slugs } from "@/app/services/serviceData";
import ServiceDetailsClient from "./ServiceDetailsClient";

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = services[slug];

  if (!service) {
    notFound();
  }

  const serviceCards = slugs
    .filter((serviceSlug) => serviceSlug !== slug)
    .map((slug) => ({
      slug,
      title: services[slug].title,
      image: services[slug].images[0],
    }));

  return (
    <ServiceDetailsClient
      service={service}
      serviceCards={serviceCards}
    />
  );
}
