"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

import { FaPhoneAlt, FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import Image from "next/image";
import { dosisFont } from "@/lib/fonts";
import { PHONE_RAW, PHONE_DISPLAY, SOCIAL } from "@/data/contact";
import { navItems, servicesSubmenu } from "@/data/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

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

  useEffect(() => {
    if (!isMobile) return;
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, isMobile]);

  useEffect(() => {
    if (!isOpen) {
      setMobileServicesOpen(false);
    }
  }, [isOpen]);

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
                className="fixed inset-0 z-40 bg-[rgba(245,247,250,0.74)] backdrop-blur-xl flex flex-col"
              >
                {/* Header */}
                <div className="flex items-center px-8 pt-6 pb-5 border-b border-white/70">
                  <Image src="/logo.png" alt="CMD Durand" width={48} height={48} />
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
                        {item.text === "Services" ? (
                          <>
                            <button
                              type="button"
                              onClick={() => setMobileServicesOpen((prev) => !prev)}
                              className="w-full flex items-center gap-4 py-4 border-b border-white/70 cursor-pointer group"
                            >
                              <span className="text-sm font-mono text-dark-grey/55 w-6 shrink-0 select-none">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              <span className={`text-2xl font-bold tracking-wide transition-colors duration-200 ${mobileServicesOpen ? "text-primary" : "text-dark-grey/95 group-hover:text-primary"} ${dosisFont.className}`}>
                                {item.text}
                              </span>
                              <span className={`ml-auto text-base transition-all duration-200 ${mobileServicesOpen ? "text-primary rotate-90" : "text-dark-grey/45 group-hover:text-primary group-hover:translate-x-1"}`}>
                                →
                              </span>
                            </button>

                            <AnimatePresence initial={false}>
                              {mobileServicesOpen && (
                                <motion.ul
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.24, ease: "easeOut" }}
                                  className="overflow-hidden border-b border-white/70"
                                >
                                  {servicesSubmenu.map((service) => (
                                    <li key={service.slug}>
                                      <Link
                                        href={`/services/${service.slug}`}
                                        onClick={() => setIsOpen(false)}
                                        className={`${dosisFont.className} block pl-10 pr-2 py-2.5 text-base text-dark-grey/80 hover:text-primary transition-colors duration-200`}
                                      >
                                        {service.title}
                                      </Link>
                                    </li>
                                  ))}
                                </motion.ul>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <ScrollLink
                            to={item.target}
                            smooth={true}
                            duration={500}
                            offset={-60}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-4 py-4 border-b border-white/70 cursor-pointer group"
                          >
                            <span className="text-sm font-mono text-dark-grey/55 w-6 shrink-0 select-none">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className={`text-2xl font-bold tracking-wide transition-colors duration-200 ${activeLink === item.target ? "text-primary" : "text-dark-grey/95 group-hover:text-primary"} ${dosisFont.className}`}>
                              {item.text}
                            </span>
                            <span className={`ml-auto text-base transition-all duration-200 ${activeLink === item.target ? "text-primary" : "text-dark-grey/45 group-hover:text-primary group-hover:translate-x-1"}`}>
                              →
                            </span>
                          </ScrollLink>
                        )}
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Footer CTA */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35, duration: 0.25 }}
                  className="px-8 pb-10 pt-5 border-t border-white/70 flex flex-col gap-3"
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
                      href={`tel:${PHONE_RAW}`}
                      className={`flex items-center gap-2 text-dark-grey/85 text-sm font-medium py-2 hover:text-primary transition-colors duration-200 ${dosisFont.className}`}
                    >
                      <FaPhoneAlt size={13} color="#f37139" />
                      {PHONE_DISPLAY}
                    </a>
                    <span className="w-px h-4 bg-dark-grey/20" />
                    <a
                      href={SOCIAL.facebook}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Facebook"
                      className="text-dark-grey/65 hover:text-primary transition-colors duration-200 p-3"
                    >
                      <FaFacebook size={22} />
                    </a>
                    <a
                      href={SOCIAL.instagram}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram"
                      className="text-dark-grey/65 hover:text-primary transition-colors duration-200 p-3"
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
        <div className="fixed top-5 w-full z-50 flex justify-center pointer-events-none">
          <div
            className={`pointer-events-auto h-[64px] w-[min(1220px,calc(100%-2rem))] flex items-center gap-2 rounded-full border px-3 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ${
              scrolled
                ? "bg-white/22 border-white/30 shadow-[0_12px_32px_rgba(0,0,0,0.2)] backdrop-blur-xl"
                : "bg-white/14 border-white/20 shadow-[0_10px_28px_rgba(0,0,0,0.16)] backdrop-blur-lg"
            }`}
          >
            <div className="w-[210px] shrink-0 pl-2 self-stretch flex items-center">
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                offset={-40}
                className="inline-flex items-center h-full cursor-pointer"
              >
                <Image src="/logo.png" alt="CMD Durand" width={180} height={44} className="block w-auto h-[44px]" />
              </ScrollLink>
            </div>

            <div className="flex-1 flex items-center justify-center gap-1">
              {navItems.map((item) =>
                item.text === "Services" ? (
                  <div key={item.id} className="relative group">
                    <ScrollLink
                      to={item.target}
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-40}
                      className={`relative py-2 px-5 rounded-full text-base tracking-wide font-semibold cursor-pointer transition-all duration-200 select-none ${
                        activeLink === item.target
                          ? "bg-primary text-white"
                          : `text-gray-700 hover:text-primary hover:bg-primary/8 ${dosisFont.className}`
                      } ${dosisFont.className}`}
                    >
                      <span className="inline-flex items-center gap-1.5">
                        Services
                        <FiChevronDown className="text-sm transition-transform duration-200 group-hover:rotate-180" />
                      </span>
                    </ScrollLink>

                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200">
                      <div className="w-[560px] rounded-2xl border border-white/35 bg-white/90 backdrop-blur-xl shadow-[0_14px_36px_rgba(0,0,0,0.2)] p-4">
                        <p className={`${dosisFont.className} text-dark-grey/60 text-xs uppercase tracking-[0.18em] px-2 pb-2`}>
                          Tous nos services
                        </p>
                        <div className="grid grid-cols-2 gap-x-3 gap-y-1">
                          {servicesSubmenu.map((service) => (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              className={`${dosisFont.className} block px-3 py-2 rounded-xl text-[15px] text-dark-grey/90 hover:bg-primary/10 hover:text-primary transition-colors duration-200`}
                            >
                              {service.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <ScrollLink
                    key={item.id}
                    to={item.target}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-40}
                    className={`relative py-2 px-5 rounded-full text-base tracking-wide font-semibold cursor-pointer transition-all duration-200 select-none ${
                      activeLink === item.target
                        ? "bg-primary text-white"
                        : `text-gray-700 hover:text-primary hover:bg-primary/8 ${dosisFont.className}`
                    } ${dosisFont.className}`}
                  >
                    {item.text}
                  </ScrollLink>
                )
              )}
            </div>

            <div className="w-[300px] shrink-0 flex items-center justify-end gap-2 pr-1">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-40}
                className={`px-6 py-2 rounded-full bg-primary text-white text-sm font-semibold tracking-wide transition-all duration-200 hover:bg-orange-600 active:scale-95 cursor-pointer ${dosisFont.className}`}
              >
                Demander un Devis
              </ScrollLink>

              <a
                href={`tel:${PHONE_RAW}`}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 text-dark-grey/70 hover:text-primary hover:border-primary/40 transition-colors duration-200"
                aria-label="Appeler"
              >
                <FaPhoneAlt size={13} />
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Navbar;
