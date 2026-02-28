import { notFound } from "next/navigation";
import { services, slugs } from "@/app/services/serviceData";
import ServiceDetailsClient from "./ServiceDetailsClient";

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export default function ServicePage({ params }) {
  const service = services[params.slug];

  if (!service) {
    notFound();
  }

  const serviceCards = slugs
    .filter((slug) => slug !== params.slug)
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
