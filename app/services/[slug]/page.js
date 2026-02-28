"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaPhoneAlt } from "react-icons/fa";
import { services, slugs } from "@/app/services/serviceData";

const dosisFont = localFont({ src: "../../../assets/fonts/Dosis-Regular.ttf" });

export default function ServicePage({ params }) {
  const service = services[params.slug];
  if (!service) notFound();

  const { title, description, images } = service;
  const firstLetter = title[0];
  const restOfTitle = title.slice(1);

  return (
    <div className="flex flex-col min-h-screen brick-bg">

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="max-w-[1400px] mx-auto w-full px-6 md:px-12 lg:px-20 pt-28 pb-16">

        <Link
          href="/"
          className={`${dosisFont.className} inline-flex items-center gap-2 text-darkGrey/40 hover:text-primary text-sm tracking-widest uppercase transition-colors duration-200 mb-10`}
        >
          <FaArrowLeft size={11} />
          Retour à l&apos;accueil
        </Link>

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
              <span className="text-primary text-5xl lg:text-6xl">{firstLetter}</span>{restOfTitle}
            </h1>
            <p className={`${dosisFont.className} text-darkGrey/65 text-base leading-relaxed`}>
              {description}
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
          {images.length >= 5 ? (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-3 grid-rows-3 gap-2 h-[380px] lg:h-[500px]"
            >
              <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden shadow-lg">
                <Image src={images[0]} alt={title} fill sizes="35vw" style={{ objectFit: "cover" }} priority />
              </div>
              <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden shadow-lg">
                <Image src={images[1]} alt={title} fill sizes="18vw" style={{ objectFit: "cover" }} />
              </div>
              <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden shadow-lg">
                <Image src={images[2]} alt={title} fill sizes="18vw" style={{ objectFit: "cover" }} />
              </div>
              <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden shadow-lg">
                <Image src={images[3]} alt={title} fill sizes="18vw" style={{ objectFit: "cover" }} />
              </div>
              <div className="col-span-2 row-span-1 relative rounded-2xl overflow-hidden shadow-lg">
                <Image src={images[4]} alt={title} fill sizes="28vw" style={{ objectFit: "cover" }} />
              </div>
            </motion.div>
          ) : (
            /* Fewer than 5 images: single featured image */
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative w-full rounded-2xl overflow-hidden shadow-lg"
              style={{ paddingBottom: "65%" }}
            >
              <Image src={images[0]} alt={title} fill sizes="55vw" style={{ objectFit: "cover" }} priority />
            </motion.div>
          )}
        </div>
      </section>

      {/* ── Photo grid ───────────────────────────────────── */}
      {images.length > 1 && (
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
                  alt={`${title} ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  style={{ objectFit: "cover" }}
                  className="hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </section>
      )}

    </div>
  );
}

// export function generateStaticParams() {
//   return slugs.map((slug) => ({ slug }));
// }
