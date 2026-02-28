"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import localFont from "next/font/local";
import { FaArrowLeft } from "react-icons/fa";
import PopupForm from "@/components/PopupForm";

const dosisFont = localFont({ src: "../../assets/fonts/Dosis-Regular.ttf" });

const sections = [
  {
    title: "Utilisation du site",
    content:
      "Vous etes autorise a utiliser notre site web a des fins legales et de maniere conforme aux presentes conditions generales. Vous acceptez de ne pas utiliser notre site a des fins illegales ou interdites par la loi.",
  },
  {
    title: "Propriete intellectuelle",
    content:
      "Tout le contenu present sur notre site web, y compris mais sans s'y limiter, les textes, les images, les graphiques, les logos et les videos, est la propriete de Charpente Menuiserie Durand et est protege par les lois sur la propriete intellectuelle.",
  },
  {
    title: "Limitation de responsabilite",
    content:
      "Nous nous efforcons de maintenir les informations presentes sur notre site web a jour et exactes. Cependant, nous ne garantissons pas l'exactitude, l'exhaustivite ou la pertinence des informations. En aucun cas, nous ne serons responsables des dommages directs, indirects, accessoires, speciaux ou consecutifs decoulant de l'utilisation ou de l'incapacite d'utiliser notre site.",
  },
  {
    title: "Modification des conditions generales",
    content:
      "Nous nous reservons le droit de modifier ces conditions generales a tout moment et sans preavis. Il est de votre responsabilite de consulter regulierement cette page pour prendre connaissance des modifications eventuelles.",
  },
];

export default function ConditionsGeneralesUtilisation() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="brick-bg min-h-screen pt-28 pb-24 px-5 md:px-10 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/"
          className={`${dosisFont.className} inline-flex items-center gap-2 text-darkGrey/75 hover:text-primary text-base tracking-widest uppercase transition-colors duration-200 mb-8`}
        >
          <FaArrowLeft size={12} />
          Retour a l&apos;accueil
        </Link>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="bg-white/88 backdrop-blur-sm border border-darkGrey/10 rounded-3xl shadow-xl p-6 md:p-10 lg:p-12"
        >
          <p className={`${dosisFont.className} text-primary/90 text-sm uppercase tracking-widest mb-4`}>
            Informations legales
          </p>
          <h1 className="text-darkGrey text-3xl md:text-4xl lg:text-5xl tracking-wide font-semibold leading-tight mb-6">
            Conditions generales d&apos;utilisation
          </h1>

          <p className={`${dosisFont.className} text-darkGrey/90 text-lg leading-relaxed mb-8`}>
            Bienvenue sur notre site web. En naviguant sur ce site, vous acceptez de vous conformer
            aux conditions generales d&apos;utilisation suivantes. Si vous n&apos;acceptez pas ces
            conditions, veuillez ne pas utiliser notre site.
          </p>

          <div className="space-y-8">
            {sections.map((section) => (
              <div key={section.title} className="pt-6 border-t border-darkGrey/10 first:border-t-0 first:pt-0">
                <h2 className="text-darkGrey text-2xl font-semibold tracking-wide mb-3">
                  {section.title}
                </h2>
                <p className={`${dosisFont.className} text-darkGrey/85 text-lg leading-relaxed`}>
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          <p className={`${dosisFont.className} text-darkGrey/85 text-lg leading-relaxed mt-8 pt-6 border-t border-darkGrey/10`}>
            Merci d&apos;avoir pris connaissance de nos conditions generales d&apos;utilisation et
            de notre politique de confidentialite. Si vous avez des questions, n&apos;hesitez pas a
            nous contacter.
          </p>

          <div className="mt-10 flex justify-start">
            <button
              type="button"
              onClick={() => setIsFormOpen(true)}
              className={`${dosisFont.className} inline-flex items-center justify-center bg-primary text-white text-base font-bold tracking-wide px-8 py-3 rounded-full shadow-lg hover:bg-orange-600 active:scale-95 transition-all duration-200`}
            >
              Nous contacter
            </button>
          </div>
        </motion.section>
      </div>

      <PopupForm isOpen={isFormOpen} closeModal={() => setIsFormOpen(false)} />
    </div>
  );
}
