"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import localFont from "next/font/local";
import { FaArrowLeft, FaPhoneAlt } from "react-icons/fa";

import img1 from "@/assets/img/charpente-traditionelle/img1.webp";
import img2 from "@/assets/img/charpente-traditionelle/img2.webp";
import img3 from "@/assets/img/charpente-traditionelle/img3.webp";
import img4 from "@/assets/img/charpente-traditionelle/img4.webp";
import img5 from "@/assets/img/charpente-traditionelle/img5.webp";
import img6 from "@/assets/img/charpente-traditionelle/img6.webp";
import img7 from "@/assets/img/charpente-traditionelle/img7.webp";
import img8 from "@/assets/img/charpente-traditionelle/img8.webp";
import img9 from "@/assets/img/charpente-traditionelle/img9.webp";
import img10 from "@/assets/img/charpente-traditionelle/img10.webp";
import img11 from "@/assets/img/charpente-traditionelle/img11.webp";
import img13 from "@/assets/img/charpente-traditionelle/img13.webp";
import img14 from "@/assets/img/charpente-traditionelle/img14.webp";
import img15 from "@/assets/img/charpente-traditionelle/img15.webp";
import img16 from "@/assets/img/charpente-traditionelle/img16.webp";
import img17 from "@/assets/img/charpente-traditionelle/img17.webp";
import img18 from "@/assets/img/charpente-traditionelle/img18.webp";
import img19 from "@/assets/img/charpente-traditionelle/img19.webp";
import img20 from "@/assets/img/charpente-traditionelle/img20.webp";
import img21 from "@/assets/img/charpente-traditionelle/img21.webp";
import img22 from "@/assets/img/charpente-traditionelle/img22.webp";
import img23 from "@/assets/img/charpente-traditionelle/img23.webp";
import img24 from "@/assets/img/charpente-traditionelle/img24.webp";
import img25 from "@/assets/img/charpente-traditionelle/img25.webp";
import img26 from "@/assets/img/charpente-traditionelle/img26.webp";
import img27 from "@/assets/img/charpente-traditionelle/img27.webp";
import img28 from "@/assets/img/charpente-traditionelle/img28.webp";
import img29 from "@/assets/img/charpente-traditionelle/img29.webp";
import img30 from "@/assets/img/charpente-traditionelle/img30.webp";
import img31 from "@/assets/img/charpente-traditionelle/img31.webp";
import img32 from "@/assets/img/charpente-traditionelle/img32.webp";
import img33 from "@/assets/img/charpente-traditionelle/img33.webp";
import img34 from "@/assets/img/charpente-traditionelle/img34.webp";
import img35 from "@/assets/img/charpente-traditionelle/img35.webp";
import img36 from "@/assets/img/charpente-traditionelle/img36.webp";
import img37 from "@/assets/img/charpente-traditionelle/img37.webp";
import img38 from "@/assets/img/charpente-traditionelle/img38.webp";
import img39 from "@/assets/img/charpente-traditionelle/img39.webp";
import img40 from "@/assets/img/charpente-traditionelle/img40.webp";
import img41 from "@/assets/img/charpente-traditionelle/img41.webp";
import img42 from "@/assets/img/charpente-traditionelle/img42.webp";

const dosisFont = localFont({ src: "../../assets/fonts/Dosis-Regular.ttf" });

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25, img26, img27, img28, img29,
  img30, img31, img32, img33, img34, img35, img36, img37, img38,
  img39, img40, img41, img42,
];

function CharpenteTraditionelle() {
  return (
    <div className="flex flex-col min-h-screen brick-bg">

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="max-w-[1400px] mx-auto w-full px-6 md:px-12 lg:px-20 pt-28 pb-16">

        {/* Back */}
        <Link
          href="/"
          className={`${dosisFont.className} inline-flex items-center gap-2 text-darkGrey/40 hover:text-primary text-sm tracking-widest uppercase transition-colors duration-200 mb-10`}
        >
          <FaArrowLeft size={11} />
          Retour à l&apos;accueil
        </Link>

        {/* Two-column: text + bento */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 lg:gap-14 items-center">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <p className={`${dosisFont.className} text-primary/60 text-xs uppercase tracking-widest`}>
              Nos services
            </p>
            <h1 className="text-darkGrey text-4xl lg:text-5xl tracking-wider font-medium leading-tight">
              <span className="text-primary text-5xl lg:text-6xl">C</span>harpente Traditionnelle
            </h1>
            <p className={`${dosisFont.className} text-darkGrey/65 text-base leading-relaxed`}>
              Chez nous, la Charpente Traditionnelle incarne l&apos;essence même
              du savoir-faire artisanal. Chaque pièce de bois est choisie avec soin,
              travaillée avec précision, pour créer des structures robustes et
              intemporelles. Notre équipe met tout son cœur dans chaque projet,
              qu&apos;il s&apos;agisse de restauration ou de nouvelle construction.
            </p>
            <div className="flex flex-col gap-2 pt-2">
              <Link
                href="/#contact"
                className={`${dosisFont.className} bg-primary text-white rounded-full px-8 py-4 text-center font-bold tracking-wide text-base hover:bg-orange-600 active:scale-95 transition-all duration-200`}
              >
                Demander un Devis
              </Link>
              <a
                href="tel:+33676508551"
                className={`${dosisFont.className} flex items-center justify-center gap-2 text-darkGrey/40 text-sm py-2 hover:text-primary transition-colors duration-200`}
              >
                <FaPhoneAlt size={12} color="#f37139" />
                +33 6 76 50 85 51
              </a>
            </div>
          </motion.div>

          {/* Right — bento grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-3 grid-rows-3 gap-2 h-[420px] lg:h-[520px]"
          >
            {/* Big top-left */}
            <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden shadow-lg">
              <Image src={images[0]} alt="Charpente Traditionnelle" fill sizes="40vw" style={{ objectFit: "cover" }} priority />
            </div>
            {/* Top right */}
            <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden shadow-lg">
              <Image src={images[1]} alt="Charpente Traditionnelle" fill sizes="20vw" style={{ objectFit: "cover" }} />
            </div>
            {/* Mid right */}
            <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden shadow-lg">
              <Image src={images[2]} alt="Charpente Traditionnelle" fill sizes="20vw" style={{ objectFit: "cover" }} />
            </div>
            {/* Bottom left */}
            <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden shadow-lg">
              <Image src={images[3]} alt="Charpente Traditionnelle" fill sizes="20vw" style={{ objectFit: "cover" }} />
            </div>
            {/* Bottom right wide */}
            <div className="col-span-2 row-span-1 relative rounded-2xl overflow-hidden shadow-lg">
              <Image src={images[4]} alt="Charpente Traditionnelle" fill sizes="30vw" style={{ objectFit: "cover" }} />
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── Photo grid ───────────────────────────────────── */}
      <section className="max-w-[1400px] mx-auto w-full px-6 md:px-12 lg:px-20 pb-24">
        <div className="border-t border-darkGrey/10 pt-14 mb-10">
          <h2 className="text-darkGrey text-4xl tracking-wider font-medium">
            <span className="text-primary text-5xl">N</span>os réalisations en photos
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: (i % 8) * 0.04 }}
              className="relative aspect-square rounded-xl overflow-hidden shadow-md"
            >
              <Image
                src={img}
                alt={`Charpente Traditionnelle ${i + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                style={{ objectFit: "cover" }}
                className="hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default CharpenteTraditionelle;
