import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/homepage/Hero";
import ServicesSection from "@/components/homepage/Services";
import GallerySection from "@/components/homepage/Gallery";
import TestimonialsSection from "@/components/homepage/Testimonials";
import ContactSection from "@/components/homepage/Contact";
import Template from "./template";

export default function Home() {
  return (
    <Template>
      <Navbar />
      <Hero />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
    </Template>
  );
}
