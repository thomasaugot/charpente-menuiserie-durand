"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import localFont from "next/font/local";

const dosisFont = localFont({ src: "../assets/fonts/Dosis-Regular.ttf" });

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Footer = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [isVisible, setIsVisible] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    if (inView) setIsVisible(true);
  }, [inView]);

  return (
    <footer ref={ref} id="footer" className="relative bg-dark-grey text-white overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/brick-wall.png")',
          opacity: 0.18,
        }}
      />
      <div className="h-1 w-full bg-primary" />

      {isVisible && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 pt-14 md:pt-16 pb-10 md:pb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-14 mb-12 md:mb-14">
            {/* Company identity */}
            <motion.div variants={itemVariants} className="flex flex-col gap-5">
              <h3 className={`${dosisFont.className} text-primary text-2xl font-semibold`}>
                Charpente Menuiserie Durand
              </h3>
              <p className={`${dosisFont.className} text-light-grey text-base leading-relaxed`}>
                Artisan charpentier et menuisier en Loire-Atlantique, spécialisé dans
                la charpente traditionnelle, industrielle et les menuiseries sur mesure.
              </p>
            </motion.div>

            {/* Contact */}
            <motion.div variants={itemVariants} className="flex flex-col gap-5">
              <h4 className={`${dosisFont.className} text-primary text-sm uppercase tracking-widest`}>
                Contact
              </h4>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <FaLocationDot size={17} className="text-primary mt-1 shrink-0" />
                  <div className={`${dosisFont.className} text-base text-light-grey`}>
                    <p>Sarl Charpente Menuiserie Durand</p>
                    <p>Z.A. la Pommeraie, Rue des Indes</p>
                    <p>44780 Missillac</p>
                  </div>
                </div>
                <button
                  onClick={() =>
                    (window.location.href =
                      "mailto:charpente.menuiserie.durand@gmail.com")
                  }
                  className="flex items-center gap-3 group text-left"
                >
                  <MdEmail size={17} className="text-primary shrink-0" />
                  <span
                    className={`${dosisFont.className} text-base text-light-grey group-hover:text-white transition-colors`}
                  >
                    charpente.menuiserie.durand@gmail.com
                  </span>
                </button>
                <button
                  onClick={() => (window.location.href = "tel:+33676508551")}
                  className="flex items-center gap-3 group text-left"
                >
                  <FaPhoneAlt size={15} className="text-primary shrink-0" />
                  <span
                    className={`${dosisFont.className} text-base text-light-grey group-hover:text-white transition-colors`}
                  >
                    +33 6 76 50 85 51
                  </span>
                </button>
              </div>
            </motion.div>

            {/* Social */}
            <motion.div variants={itemVariants} className="flex flex-col gap-5">
              <h4 className={`${dosisFont.className} text-primary text-sm uppercase tracking-widest`}>
                Suivez-nous
              </h4>
              <a
                href="https://www.facebook.com/profile.php?id=100063695462775"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 group w-fit"
              >
                <div className="p-3 rounded-lg bg-white/10 group-hover:bg-primary transition-colors duration-300">
                  <FaFacebook size={22} className="text-white" />
                </div>
                <span
                  className={`${dosisFont.className} text-base text-light-grey group-hover:text-white transition-colors`}
                >
                  Facebook
                </span>
              </a>
              <a
                href="https://www.instagram.com/charpentemenuiseriedurand/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 group w-fit"
              >
                <div className="p-3 rounded-lg bg-white/10 group-hover:bg-primary transition-colors duration-300">
                  <FaInstagram size={22} className="text-white" />
                </div>
                <span
                  className={`${dosisFont.className} text-base text-light-grey group-hover:text-white transition-colors`}
                >
                  Instagram
                </span>
              </a>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-6 md:pt-7 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-center">
              <a
                href="/politique-de-confidentialite"
                className={`${dosisFont.className} text-sm text-light-grey hover:text-white transition-colors`}
              >
                Politique de Confidentialité
              </a>
              <a
                href="/conditions-generales-utilisation"
                className={`${dosisFont.className} text-sm text-light-grey hover:text-white transition-colors`}
              >
                Conditions Générales d&apos;Utilisation
              </a>
            </div>
            <p className={`${dosisFont.className} text-sm text-light-grey text-center`}>
              &copy; 2020 – {currentYear} Sarl Charpente Menuiserie Durand. Site développé par{" "}
              <a
                href="https://www.helloimtom.dev/fr"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors underline underline-offset-2"
              >
                Thomas Augot
              </a>
              .
            </p>
          </div>
        </motion.div>
      )}
    </footer>
  );
};

export default Footer;
