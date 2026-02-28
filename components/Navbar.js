"use client";

import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

import { FaPhoneAlt, FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import localFont from "next/font/local";
import Image from "next/image";
import logoBig from "../assets/img/logo-big.png";

const dosisFont = localFont({ src: "../assets/fonts/Dosis-Regular.ttf" });

const navItems = [
  { id: 1, text: "Accueil", target: "home" },
  { id: 2, text: "Services", target: "about" },
  { id: 3, text: "Galerie", target: "gallery" },
  { id: 4, text: "Témoignages", target: "testimonials" },
  { id: 5, text: "Contact", target: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  // Single scroll listener for both scrolled state and active section
  useEffect(() => {
    const sections = ["home", "about", "gallery", "testimonials", "contact"];
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      const pos = y + 80;
      const active =
        sections
          .slice()
          .reverse()
          .find((id) => {
            const el = document.getElementById(id);
            if (!el) return false;
            return pos >= el.offsetTop;
          }) || "home";
      setActiveLink(active);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 1024);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div>
      {isMobile ? (
        <>
          {/* Hamburger pill button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
            className="fixed z-50 top-5 right-5 flex items-center justify-center w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-md border border-gray-100 cursor-pointer"
          >
            <span className="relative flex flex-col justify-between w-5 h-[14px]">
              <span className={`bg-primary block h-[2px] rounded-full transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
              <span className={`bg-primary block h-[2px] rounded-full transition-all duration-300 ${isOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`bg-primary block h-[2px] rounded-full transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
            </span>
          </button>

          {/* Mobile overlay menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                key="mobile-menu"
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="fixed inset-0 z-40 bg-white flex flex-col"
              >
                {/* Header */}
                <div className="flex items-center px-8 pt-6 pb-5 border-b border-gray-100">
                  <Image src={logoBig} alt="CMD Durand" height={48} />
                </div>

                {/* Nav items */}
                <nav className="flex-1 flex flex-col justify-center px-8">
                  <ul className="flex flex-col">
                    {navItems.map((item, i) => (
                      <motion.li
                        key={item.id}
                        initial={{ opacity: 0, x: -14 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 + 0.05, duration: 0.25, ease: "easeOut" }}
                      >
                        <ScrollLink
                          to={item.target}
                          smooth={true}
                          duration={500}
                          offset={-60}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-4 py-4 border-b border-gray-100 cursor-pointer group"
                        >
                          <span className="text-sm font-mono text-gray-300 w-6 shrink-0 select-none">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className={`text-2xl font-bold tracking-wide transition-colors duration-200 ${activeLink === item.target ? "text-primary" : "text-darkGrey group-hover:text-primary"} ${dosisFont.className}`}>
                            {item.text}
                          </span>
                          <span className={`ml-auto text-base transition-all duration-200 ${activeLink === item.target ? "text-primary" : "text-gray-300 group-hover:text-primary group-hover:translate-x-1"}`}>
                            →
                          </span>
                        </ScrollLink>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Footer CTA */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35, duration: 0.25 }}
                  className="px-8 pb-10 pt-5 border-t border-gray-100 flex flex-col gap-3"
                >
                  <ScrollLink
                    to="contact"
                    smooth={true}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className={`bg-primary text-white rounded-full py-4 text-center font-bold tracking-wide text-base active:scale-95 transition-transform cursor-pointer ${dosisFont.className}`}
                  >
                    Demander un Devis
                  </ScrollLink>
                  <div className="flex items-center justify-center gap-3">
                    <a
                      href="tel:+33676508551"
                      className={`flex items-center gap-2 text-darkGrey/50 text-sm font-medium py-2 hover:text-primary transition-colors duration-200 ${dosisFont.className}`}
                    >
                      <FaPhoneAlt size={13} color="#f37139" />
                      +33 6 76 50 85 51
                    </a>
                    <span className="w-px h-4 bg-gray-200" />
                    <a
                      href="https://www.facebook.com/profile.php?id=100063695462775"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Facebook"
                      className="text-darkGrey/30 hover:text-primary transition-colors duration-200 p-3"
                    >
                      <FaFacebook size={22} />
                    </a>
                    <a
                      href="https://www.instagram.com/charpentemenuiseriedurand/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram"
                      className="text-darkGrey/30 hover:text-primary transition-colors duration-200 p-3"
                    >
                      <FaInstagram size={22} />
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (
        // Desktop pill navbar
        <div className="fixed top-[68px] w-full z-50 flex justify-center pointer-events-none">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
            className={`pointer-events-auto flex items-center gap-1 rounded-full border px-2 py-1.5 transition-all duration-300 ${
              scrolled
                ? "bg-white/95 border-gray-200 shadow-lg backdrop-blur-md"
                : "bg-white/80 border-white/40 shadow-md backdrop-blur-sm"
            }`}
          >
            {navItems.map((item) => (
              <ScrollLink
                key={item.id}
                to={item.target}
                spy={true}
                smooth={true}
                duration={500}
                offset={0}
                className={`relative py-2 px-4 rounded-full text-sm tracking-wide font-semibold cursor-pointer transition-all duration-200 select-none ${
                  activeLink === item.target
                    ? "bg-primary text-white"
                    : `text-gray-700 hover:text-primary hover:bg-primary/8 ${dosisFont.className}`
                } ${dosisFont.className}`}
              >
                {item.text}
              </ScrollLink>
            ))}

            <div className="w-px h-5 bg-gray-200 mx-1" />

            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className={`px-5 py-2 rounded-full bg-primary text-white text-sm font-semibold tracking-wide transition-all duration-200 hover:bg-orange-600 active:scale-95 cursor-pointer ${dosisFont.className}`}
            >
              Demander un Devis
            </ScrollLink>
          </motion.div>
        </div>
      )}

    </div>
  );
};

export default Navbar;