"use client";

import homeBg from "/assets/img/home.webp";
import localFont from "next/font/local";
import { motion } from "framer-motion";
import { FiChevronDown, FiArrowRight } from "react-icons/fi";

const dosisFont = localFont({ src: "../assets/fonts/Dosis-Regular.ttf" });

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.18, ease: "easeOut" },
  }),
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-end pb-16 lg:pb-20 px-8 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Original overlay */}
      <div className="absolute inset-0 bg-white" style={{ opacity: 0.3, zIndex: 0 }} />

      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${homeBg.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          zIndex: -1,
        }}
      />

      {/* Pill-shaped glass card */}
      <div className="relative z-10 flex flex-col gap-6 max-w-3xl bg-white/10 backdrop-blur-md border border-white/15 rounded-[3rem] px-12 py-10 md:px-16 md:py-12">

        {/* Eyebrow tag */}
        <motion.div
          className="flex items-center gap-3"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <div className="w-10 h-[2px] bg-primary shrink-0" />
          <span className="text-darkGrey text-sm font-semibold tracking-[0.2em] uppercase font-mono">
            Charpente · Menuiserie · Ossature bois
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-left text-6xl md:text-7xl lg:text-8xl gradient-text leading-tight"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Charpente Menuiserie Durand
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-darkGrey text-2xl md:text-3xl font-light tracking-wide"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          L&apos;expertise Bois au Service de vos Projets
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap items-center gap-4 mt-2"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <a
            href="#contact"
            className="font-mono inline-flex items-center gap-2 bg-primary text-white text-sm font-bold tracking-wide uppercase px-7 py-3 rounded-full shadow-lg hover:bg-primary/85 transition-colors duration-300"
          >
            Demander un devis
          </a>
          <a
            href="#about"
            className="font-mono inline-flex items-center gap-2 text-white text-sm font-bold tracking-wide uppercase drop-shadow hover:text-primary transition-colors duration-300"
          >
            Nos services
            <FiArrowRight className="text-base" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 right-8 md:right-16 lg:right-24 flex flex-col items-center gap-1 text-darkGrey/40 hover:text-primary transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        <span className="text-xs tracking-widest uppercase">Découvrir</span>
        <FiChevronDown className="text-xl animate-bounce" />
      </motion.a>
    </section>
  );
};

export default Hero;