"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";
import localFont from "next/font/local";

const dosisFont = localFont({ src: "../assets/fonts/Dosis-Regular.ttf" });

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2, // set threshold to 20%
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const currentYear = new Date().getFullYear();

  const handleEmailClick = () => {
    window.location.href = "mailto:charpente.menuiserie.durand@gmail.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+33676508551";
  };

  const aboutRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    aboutRef.current = document.getElementById("footer");
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize(); // Check initial viewport width

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <footer
      ref={ref}
      id="footer"
      className={`relative bg-darkGrey text-white py-12 lg:pb-8 lg:pt-2 `}
    >
      {isVisible && (
        <>
          <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-4 lg:mb-0 flex flex-col items-center lg:items-start lg:ml-8">
              <div className="flex mt-6">
                <FaLocationDot size={25} color="#f37139" className="mr-2" />
                <div className="flex flex-col text-center lg:text-left">
                  <p className={`${dosisFont.className} text-lg`}>
                    Sarl Charpente Menuiserie Durand
                  </p>
                  <p className={`${dosisFont.className} text-lg`}>
                    Z.A. la Pommeraie, Rue des Indes
                  </p>
                  <p className={`${dosisFont.className} text-lg`}>44780 Missillac</p>
                </div>
              </div>
              <br />
              <div onClick={handleEmailClick} className="flex" style={{ cursor: "pointer" }}>
                <MdEmail size={25} color="#f37139" className="mr-2" />
                <p className={`${dosisFont.className} text-lg`}>
                  charpente.menuiserie.durand@gmail.com
                </p>
              </div>
              <br />
              <div onClick={handlePhoneClick} className="flex" style={{ cursor: "pointer" }}>
                <FaPhoneAlt size={23} color="#f37139" className="mr-2" />
                <p className={`${dosisFont.className} text-lg`}>+33 6 76 50 85 51</p>
              </div>
            </div>{" "}
            <a
              href="https://www.facebook.com/profile.php?id=100063695462775"
              target="_blank"
              rel="noreferrer"
            >
              <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 5, opacity: 1 }}
                transition={{
                  type: "linear",
                  stiffness: 40,
                  delay: 0.5,
                  ease: "easeOut",
                }}
                className="flex items-center image-shadow justify-center bg-primary p-4 absolute -top-[50px] lg:top-[30%] right-0"
              >
                <h2 className={`${dosisFont.className} text-xl font-medium mr-4 text-white`}>
                  Suivez-nous !
                </h2>

                <FaFacebook size={40} className="w-[50px] transition hover:scale-90 text-white" />
              </motion.div>
            </a>
          </div>
          <div className="mt-8 text-center mx-auto max-w-[90vw] flex flex-col gap-3 justify-center">
            <div className="flex flex-col md:flex-row justify-center gap-2 lg:gap-5">
              <a
                href="/politique-de-confidentialite"
                className={`${dosisFont.className} text-lg hover:underline`}
              >
                Politique de Confidentialité
              </a>
              <a
                href="/conditions-generales-dutilisation"
                className={`${dosisFont.className} text-lg hover:underline`}
              >
                Conditions Générales d&apos;Utilisation
              </a>
            </div>

            <p className={`${dosisFont.className} text-lg`}>
              &copy; 2020 - {currentYear} Sarl Charpente Menuiserie Durand. Site Web développé par{" "}
              <a
                href="https://thomasaugot.com/"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2"
              >
                Thomas Augot
              </a>
              .
            </p>
          </div>
        </>
      )}
    </footer>
  );
};

export default Footer;
