"use client";

import React, { useState, useEffect } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import PopupForm from "./PopupForm";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";
import localFont from "next/font/local";

const dosisFont = localFont({ src: "../assets/fonts/Dosis-Regular.ttf" });

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();
  const path = usePathname();
  const [activeLink, setActiveLink] = useState("");

  const handleRedirect = () => {};

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleToggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+33676508551";
  };

  const handleMouseEnter = () => {
    controls.start({ opacity: 1 });
  };

  const handleMouseLeave = () => {
    controls.start({ opacity: Math.max(0, 1 - scrollY) });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    controls.start({ opacity: Math.max(0, 1 - scrollY) });
  }, [scrollY, controls]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize(); // Call once to set the initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 70;

      if (isElementInViewport("home", scrollPosition)) {
        setActiveLink("home");
      } else if (isElementInViewport("about", scrollPosition)) {
        setActiveLink("about");
      } else if (isElementInViewport("gallery", scrollPosition)) {
        setActiveLink("gallery");
      } else if (isElementInViewport("testimonials", scrollPosition)) {
        setActiveLink("testimonials");
      } else if (isElementInViewport("contact", scrollPosition)) {
        setActiveLink("contact");
      } else {
        setActiveLink("");
      }
    };

    const isElementInViewport = (id, scrollPosition) => {
      const element = document.getElementById(id);
      if (!element) return false;

      const rect = element.getBoundingClientRect();
      const topOffset = rect.top + window.pageYOffset;
      const bottomOffset = topOffset + rect.height;

      return scrollPosition >= topOffset && scrollPosition < bottomOffset;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Accueil", target: "home" },
    { id: 2, text: "Services", target: "about" },
    { id: 3, text: "Galerie", target: "gallery" },
    { id: 4, text: "Témoignages", target: "testimonials" },
    { id: 5, text: "Contact", target: "contact" },
  ];

  return (
    <div>
      {isMobile ? (
        // Mobile Navigation
        <div>
          {/* Mobile Navigation Icon */}
          <div
            onClick={handleClick}
            className="fixed flex flex-col justify-center items-center z-50 mr-2 top-10 right-4 lg:hidden"
          >
            <span
              className={`bg-primary block transition-all duration-300 ease-out h-1 w-10 md:w-12 lg:10 rounded-sm ${
                isOpen ? "rotate-45 translate-y-2" : "-translate-y-1"
              }`}
            ></span>
            <span
              className={`bg-primary block transition-all duration-300 ease-out h-1 w-10 md:w-12 lg:10 rounded-sm my-1 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`bg-primary block transition-all duration-300 ease-out h-1 w-10 md:w-12 lg:10 rounded-sm ${
                isOpen ? "-rotate-45 -translate-y-2" : "translate-y-1"
              }`}
            ></span>
          </div>
          {/* Mobile Navigation Menu */}
          <ul
            className={
              isOpen
                ? "fixed z-40 lg:hidden left-0 top-0 w-[100%] h-full brick-bg ease-in-out duration-500"
                : "mt-24 z-40 ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
            }
          >
            {/* Mobile Navigation Items */}
            <button
              onClick={handleRedirect}
              className="bg-primary m-8 rounded-lg text-center	align-middle transition duration-200 hover:scale-90"
            >
              <span
                className={`tracking-wide ${dosisFont.className} p-4 text-white flex justify-center text-center md:text-2xl lg:text-lg lg:text-nowrap`}
                onClick={handleToggleForm}
              >
                Demander un Devis
              </span>
            </button>
            {navItems.map((item) => (
              <li
                key={item.id}
                style={{ userSelect: "none" }}
                className={`tracking-wider p-4 md:p-6 rounded-xl ml-6 font-medium duration-300 hover:text-primary hover:dark-shadow cursor-pointer text-3xl md:text-4xl`}
              >
                <ScrollLink
                  to={item.target}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-60}
                  onClick={handleClick}
                >
                  {item.text}
                </ScrollLink>
              </li>
            ))}
            <div className="flex flex-col gap-4 md:gap:6 p-6 md:p-8 mt-12">
              <div className="flex gap-2" onClick={handlePhoneClick} style={{ cursor: "pointer" }}>
                <FaPhoneAlt size={25} color="#f37139" />
                <p
                  className={`tracking-wide ${dosisFont.className} text-black text-xl md:text-2xl font-medium`}
                >
                  +33 6 76 50 85 51
                </p>
              </div>
              <div className="flex gap-2">
                <FaLocationDot size={25} color="#f37139" />
                <p
                  className={`text-black tracking-wide ${dosisFont.className} text-xl md:text-2xl font-medium`}
                >
                  Z.A. la Pommeraie, Rue des Indes 44780 Missillac
                </p>
              </div>
            </div>
          </ul>
        </div>
      ) : (
        // Desktop Navigation
        <div
          className={`z-50 bg-transparent flex justify-between items-center h-[12vh] w-[100vw]  text-primary ${
            isMobile ? "relative" : "fixed"
          } top-9 2xl:top-6 lg:h-[20vh]`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            animate={controls}
            exit={{ opacity: 0 }}
            className="absolute dark-shadow hidden lg:flex bg-white justify-between rounded-xl w-[75vw] border-2 border-primary ml-[16rem]"
            transition={{
              type: "spring",
              stiffness: 40,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            {/* Logo */}
            <div className="hidden lg:flex justify-evenly ml-8 gap-8">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.id}
                  to={item.target}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={0}
                  className={`py-1 text-black font-regular relative m-1 cursor-pointer hover:scale-110 text-lg tracking-wide font-semibold ${dosisFont.className}`}
                >
                  {item.text}
                  <span
                    className={`absolute inset-x-0 inset-y-8 h-1 bg-primary transition-all duration-300 ease-in-out ${
                      activeLink === item.target ? "w-full" : "w-0"
                    }`}
                  ></span>
                </ScrollLink>
              ))}
            </div>
            <button
              onClick={handleToggleForm}
              className={`primary-button primary-button-bg text-md text-nowrap tracking-wide ${dosisFont.className}`}
            >
              Demander un Devis
            </button>
          </motion.div>
        </div>
      )}
      <PopupForm isOpen={isFormOpen} closeModal={() => setIsFormOpen(false)} />
    </div>
  );
};

export default Navbar;
