"use client";

import React, { useState, useEffect } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import PopupForm from "./PopupForm";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();

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
      setIsMobile(window.innerWidth < 768); // Adjust the threshold as needed
    };

    handleResize(); // Call once to set the initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseEnter = () => {
    controls.start({ opacity: 1 });
  };

  const handleMouseLeave = () => {
    controls.start({ opacity: Math.max(0, 1 - scrollY) });
  };

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
        <>
          {/* Mobile Navigation Icon */}
          <div
            onClick={handleClick}
            className="flex flex-col justify-center items-center z-50 mr-2 absolute top-10 right-4"
          >
            <span
              className={`bg-primary block transition-all duration-300 ease-out h-1 w-10 rounded-sm ${
                isOpen ? "rotate-45 translate-y-2" : "-translate-y-1"
              }`}
            ></span>
            <span
              className={`bg-primary block transition-all duration-300 ease-out h-1 w-10 rounded-sm my-1 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`bg-primary block transition-all duration-300 ease-out h-1 w-10 rounded-sm ${
                isOpen ? "-rotate-45 -translate-y-2" : "translate-y-1"
              }`}
            ></span>
          </div>
          {/* Mobile Navigation Menu */}
          <ul
            className={
              isOpen
                ? "fixed z-40 md:hidden left-0 top-0 w-[100%] h-full bg-white ease-in-out duration-500"
                : "mt-24 ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
            }
          >
            {/* Mobile Navigation Items */}
            <button
              onClick={handleRedirect}
              className="bg-primary m-8 rounded-lg text-center	align-middle transition duration-200 hover:scale-90"
            >
              <span
                className="p-4 text-white flex justify-center text-center"
                onClick={handleToggleForm}
              >
                Demander un Devis
              </span>
            </button>
            {navItems.map((item) => (
              <li
                key={item.id}
                className="p-4 rounded-xl ml-6 font-semibold hover:bg-white duration-300 hover:text-primary cursor-pointer"
              >
                <ScrollLink
                  to={item.target}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={0}
                  onClick={handleClick}
                >
                  {item.text}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </>
      ) : (
        // Desktop Navigation
        <div
          className={`z-50 bg-transparent flex justify-between items-center h-[12vh] w-[100vw] px-4 md:px-20 text-primary ${
            isMobile ? "relative" : "fixed"
          } top-9 md:h-[20vh]`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            animate={controls}
            exit={{ opacity: 0 }}
            className="dark-shadow hidden md:flex bg-white justify-between mx-auto rounded-xl w-[90%] border-2 border-primary"
            transition={{
              type: "spring",
              stiffness: 40,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            {/* Logo */}
            <div className="hidden md:flex justify-evenly ml-8 gap-8">
              {navItems.map((item) => (
                <p
                  key={item.id}
                  className="p-2 text-black font-medium hover:bg-primary rounded-lg m-1 cursor-pointer duration-300 hover:text-white font-montserrat"
                >
                  <ScrollLink to={item.target} spy={true} smooth={true} duration={500} offset={0}>
                    {item.text}
                  </ScrollLink>
                </p>
              ))}
            </div>
            <button onClick={handleToggleForm} className="primary-button primary-button-bg">
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
