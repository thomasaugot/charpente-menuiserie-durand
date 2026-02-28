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
    title: "Collecte des informations personnelles",
    content:
      "Lorsque vous utilisez notre site web et que vous soumettez le formulaire de contact, nous collectons les informations suivantes : votre nom, votre adresse e-mail et votre numéro de téléphone. Nous utilisons ces informations uniquement dans le but de répondre à vos demandes et de vous fournir des informations sur nos services.",
  },
  {
    title: "Partage des informations personnelles",
    content:
      "Nous ne partageons pas vos informations personnelles avec des tiers sans votre consentement explicite. Vos données ne seront pas vendues, échangées ou louées à des tiers à des fins commerciales.",
  },
  {
    title: "Protection des informations personnelles",
    content:
      "Nous prenons des mesures de sécurité appropriées pour protéger vos informations personnelles contre la perte, l'accès non autorisé, la divulgation, l'altération ou la destruction. Vous avez le droit de demander l'accès à vos données personnelles, de les rectifier, de les supprimer ou de restreindre leur traitement. Vous avez également le droit de vous opposer au traitement de vos données personnelles ou de demander leur portabilité.",
  },
];

export default function PolitiqueDeConfidentialite() {
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
            Politique de confidentialite
          </h1>

          <p className={`${dosisFont.className} text-darkGrey/90 text-lg leading-relaxed mb-8`}>
            Nous attachons une grande importance a la protection de vos donnees personnelles. Cette
            politique de confidentialite explique comment nous collectons, utilisons et protegeons
            vos informations lorsque vous utilisez notre site web.
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
            Si vous avez des questions concernant notre politique de confidentialite ou si vous
            souhaitez exercer vos droits en matiere de protection des donnees, veuillez nous
            contacter a l&apos;adresse suivante : charpente.menuiserie.durand@gmail.com, ou
            directement via notre formulaire de contact.
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
