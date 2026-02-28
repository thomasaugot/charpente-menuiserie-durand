"use client";

// here is all the code found on the homepage

import Services from "@/components/Services";
import Carousel from "@/components/Carousel";
import TestimonialItem from "@/components/TestimonialItem";
import GoogleWidget from "@/components/GoogleWidget";
import Navbar from "@/components/Navbar";
import StaticForm from "@/components/StaticForm";
import Hero from "@/components/Hero";
import woodBg from "../assets/img/woodbg.jpg";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import Template from "./template";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import localFont from "next/font/local";

import { FaFacebook, FaInstagram } from "react-icons/fa";

const dosisFont = localFont({ src: "../assets/fonts/Dosis-Regular.ttf" });

const avis = [
  {
    text: "Cette entreprise est intervenue pour refaire notre plancher à l'étage et faire un sarking. Le travail a été propre, soigné et rapide. Nous recommandons cette entreprise.",
    author: "Marie Deshoux",
    date: "Mars 2025",
  },
  {
    text: "Très bon travail réalisé par l'équipe de l'entreprise Charpente et Menuiserie Durand. Mes travaux comprenaient la réalisation d'une trémie et la condamnation d'un escatrappe. Tout s'est parfaitement passé dans les délais et le coût imparti. Je recommande sans problème.",
    author: "Antoine Martin",
    date: "Avril 2025",
  },
  {
    text: "Enfin un professionnel qui se soucie de ses clients ! M. Durand Melvyn a géré la pose de nos menuiseries et la charpente de notre construction de maison. Une charpente incroyable !",
    author: "Lucie Billeret",
    date: "Juin 2023",
  },
  {
    text: "La SARL Charpente Menuiserie Durand est intervenue chez nous pour un renforcement de charpente. Le devis a été réalisé rapidement, le tarif compétitif. M. Durand et ses employés inspirent confiance. Résultat très propre et satisfaisant.",
    author: "Arno Lesaint",
    date: "Février 2023",
  },
  {
    text: "J'ai réalisé la charpente et l'ossature bois de mon extension avec Melvyn et son équipe. Entreprise sérieuse et très professionnelle.",
    author: "Davy Philippe",
    date: "Janvier 2025",
  },
  {
    text: "Je suis pleinement satisfaite de la société CMD. La prestation rendue (changement d'une poutre et création d'un jambage de renfort) est très qualitative. Entreprise sérieuse, travail soigné et très professionnel.",
    author: "Sylvie Nouvellon",
    date: "Mars 2021",
  },
];

export default function Home() {
  useEffect(() => emailjs.init(process.env.NEXT_PUBLIC_PUBLIC_KEY), []);

  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2, // set threshold to 20%
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <Template>
      <main className="flex flex-col">
        <Navbar />
        <Hero />

        <section
          id="about"
          className="relative bg-dark-grey custom-pointer"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'url("https://www.transparenttextures.com/patterns/brick-wall.png")',
              opacity: 0.18,
            }}
          />
          <div className="lg:hidden polygon w-[110vw] h-[45px] bg-primary overflow-hidden absolute transform -scale-y-100 top-0 -right-[120px] md:right-[-320px] z-20"></div>
          <div className="max-w-[1400px] mx-auto w-full flex flex-col px-8 pt-20 pb-28 md:px-16 md:pt-24 md:pb-36 lg:px-24 lg:pt-28 lg:pb-40">
            <h1 className="text-white text-4xl lg:text-5xl mb-12 lg:mb-16 tracking-wider font-medium">
              <span className="text-primary text-5xl lg:text-6xl">N</span>os Services
            </h1>
            <Services />
          </div>
          <div className="hidden lg:block polygon w-[49vw] h-[55px] bg-primary overflow-hidden absolute bottom-0 -right-[200px] z-20 xl:right-[-245px]"></div>
        </section>

        <section
          id="gallery"
          className="relative brick-bg pb-20"
        >
          <div className="px-6 md:px-10 lg:px-14 pt-12 md:pt-16">
            <h1 className="tracking-wide font-semibold text-4xl text-dark-grey text-center lg:text-left mb-0">
              <span className="text-primary text-6xl">N</span>os réalisations en quelques photos
            </h1>
          </div>
          <Carousel />
          <div className="polygon w-[120vw] lg:w-[49vw] h-[45px] lg:h-[55px] bg-dark-grey overflow-hidden absolute -scale-y-100 bottom-0 right-[105px] lg:left-[-200px] xl:left-[-240px] z-20"></div>
        </section>

        <section
          id="testimonials"
          className="relative py-24 lg:py-32 overflow-hidden"
          ref={ref}
        >
          {/* Wood background */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${woodBg.src})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/32 via-black/26 to-black/22" />

          <div className="relative z-10">
            {/* Title */}
            <div className="max-w-[1400px] mx-auto w-full px-8 md:px-16 lg:px-24 mb-16">
              <h1 className="text-white text-4xl lg:text-5xl font-semibold tracking-wider">
                <span className="text-gray-300 text-5xl lg:text-6xl">I</span>ls nous ont fait confiance
              </h1>
            </div>

            {/* Single marquee row — 4 copies for seamless loop — intentionally full-width */}
            <div className="marquee-track overflow-hidden mb-16">
              <div className="flex gap-4 animate-marquee-left w-max px-4">
                {[...avis, ...avis, ...avis, ...avis].map((item, i) => (
                  <TestimonialItem key={i} text={item.text} author={item.author} date={item.date} />
                ))}
              </div>
            </div>

            {/* Google widget — centered below */}
            <div className="max-w-[1400px] mx-auto w-full flex justify-center px-8 lg:px-24">
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 16 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <GoogleWidget />
              </motion.div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="brick-bg relative"
        >
          <div className="polygon w-[110vw] lg:w-[49vw] h-[45px] lg:h-[55px] bg-primary overflow-hidden absolute -scale-y-100 top-0 -right-[120px] md:right-[-240px] lg:right-[-200px] xl:right-[-240px] z-20"></div>
          <div className="max-w-[1400px] mx-auto w-full flex flex-col px-6 pt-16 pb-20 md:px-12 lg:px-16 lg:pt-20 lg:pb-28">
            <h1 className="text-dark-grey text-4xl lg:text-5xl mb-10 lg:mb-14 tracking-wider font-semibold">
              <span className="text-primary">C</span>ontactez-nous pour discuter de votre projet
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
              {/* Left: form */}
              <div className="bg-white/22 backdrop-blur-xl border border-white/30 rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.2)] px-8 pt-8 pb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-[2px] bg-primary shrink-0" />
                  <h3 className="text-dark-grey font-bold text-2xl tracking-wider">Envoyer un message</h3>
                </div>
                <StaticForm />
              </div>

              {/* Right: info */}
              <div className="bg-white/22 backdrop-blur-xl border border-white/30 rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.2)] p-8 flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-[2px] bg-primary shrink-0" />
                  <h3 className="text-dark-grey font-bold text-2xl tracking-wider">Nous contacter</h3>
                </div>

                <div>
                  <p className={`text-dark-grey/50 text-xs font-semibold uppercase tracking-widest mb-1 ${dosisFont.className}`}>Téléphone</p>
                  <a href="tel:+33676508551" className={`text-dark-grey font-medium text-base hover:text-primary transition-colors duration-300 ${dosisFont.className}`}>
                    +33 6 76 50 85 51
                  </a>
                </div>

                <div className="border-t border-dark-grey/10 pt-4">
                  <p className={`text-dark-grey/50 text-xs font-semibold uppercase tracking-widest mb-1 ${dosisFont.className}`}>Adresse</p>
                  <p className={`text-dark-grey font-medium text-base leading-relaxed ${dosisFont.className}`}>
                    Z.A. la Pommeraie, Rue des Indes<br />44780 Missillac
                  </p>
                </div>

                <div className="border-t border-dark-grey/10 pt-4">
                  <p className={`text-dark-grey/50 text-xs font-semibold uppercase tracking-widest mb-1 ${dosisFont.className}`}>Horaires</p>
                  <p className={`text-dark-grey font-medium text-base ${dosisFont.className}`}>
                    Ouvert du lundi au vendredi de 08h00 à 18h30
                  </p>
                  <p className={`text-dark-grey/40 text-sm mt-0.5 ${dosisFont.className}`}>Fermé le week-end</p>
                </div>

                <div className="border-t border-dark-grey/10 pt-4">
                  <p className={`text-dark-grey/50 text-xs font-semibold uppercase tracking-widest mb-3 ${dosisFont.className}`}>Réseaux sociaux</p>
                  <div className="flex gap-3">
                    <a href="https://www.facebook.com/p/Charpente-Menuiserie-Durand-100063695462775/?locale=fr_FR" target="_blank" rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary group transition-colors duration-300">
                      <FaFacebook size={17} className="text-primary group-hover:text-white transition-colors duration-300" />
                    </a>
                    <a href="https://www.instagram.com/charpentemenuiseriedurand/" target="_blank" rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary group transition-colors duration-300">
                      <FaInstagram size={17} className="text-primary group-hover:text-white transition-colors duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="polygon hidden lg:block w-[120vw] lg:w-[49vw] h-[55px] bg-primary overflow-hidden absolute -scale-y-100 bottom-0 right-[105px] lg:left-[-200px] xl:left-[-240px] z-20"></div>
        </section>
      </main>
    </Template>
  );
}
