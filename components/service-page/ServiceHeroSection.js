"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft, FaPhoneAlt } from "react-icons/fa";
import { dosisFont } from "@/lib/fonts";
import { PHONE_RAW, PHONE_DISPLAY } from "@/data/contact";
import { IMAGE_BLUR_DATA_URL } from "@/lib/image-placeholder";

export default function ServiceHeroSection({ title, description, images, openZoom }) {
  const firstLetter = title[0];
  const restOfTitle = title.slice(1);

  return (
    <section className="max-w-[1400px] mx-auto w-full px-6 md:px-12 lg:px-20 pt-28 pb-16">
      <Link
        href="/"
        className={`${dosisFont.className} inline-flex items-center gap-2 text-dark-grey/70 hover:text-primary text-base tracking-widest uppercase transition-colors duration-200 mb-10`}
      >
        <FaArrowLeft size={11} />
        Retour a l&apos;accueil
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 lg:gap-14 items-center">
        {/* Left: title + description + CTAs */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6"
        >
          <p className={`${dosisFont.className} text-primary/90 text-xs uppercase tracking-widest`}>
            Nos services
          </p>
          <h1 className="text-dark-grey text-4xl lg:text-5xl tracking-wider font-medium leading-tight">
            <span className="text-primary text-5xl lg:text-6xl">{firstLetter}</span>
            {restOfTitle}
          </h1>
          <p className={`${dosisFont.className} text-dark-grey/90 text-base leading-relaxed`}>
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
              href={`tel:${PHONE_RAW}`}
              className={`${dosisFont.className} flex items-center justify-center gap-2 text-dark-grey/75 text-base py-2 hover:text-primary transition-colors duration-200`}
            >
              <FaPhoneAlt size={12} color="#f37139" />
              {PHONE_DISPLAY}
            </a>
          </div>
        </motion.div>

        {/* Right: image grid */}
        {images.length >= 5 ? (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-3 grid-rows-3 gap-2 h-[380px] lg:h-[500px]"
          >
            {[
              { idx: 0, cls: "col-span-2 row-span-2", sizes: "(max-width: 1023px) 66vw, 32vw", priority: true },
              { idx: 1, cls: "col-span-1 row-span-1", sizes: "(max-width: 1023px) 33vw, 16vw" },
              { idx: 2, cls: "col-span-1 row-span-1", sizes: "(max-width: 1023px) 33vw, 16vw" },
              { idx: 3, cls: "col-span-1 row-span-1", sizes: "(max-width: 1023px) 33vw, 16vw" },
              { idx: 4, cls: "col-span-2 row-span-1", sizes: "(max-width: 1023px) 66vw, 32vw" },
            ].map(({ idx, cls, sizes, priority }) => (
              <button
                key={idx}
                type="button"
                onClick={() => openZoom(idx)}
                className={`${cls} relative rounded-2xl overflow-hidden shadow-lg group`}
              >
                <Image
                  src={images[idx]}
                  alt={title}
                  fill
                  sizes={sizes}
                  style={{ objectFit: "cover" }}
                  priority={priority}
                  placeholder="blur"
                  blurDataURL={IMAGE_BLUR_DATA_URL}
                />
              </button>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative w-full rounded-2xl overflow-hidden shadow-lg"
            style={{ paddingBottom: "65%" }}
          >
            <button
              type="button"
              onClick={() => openZoom(0)}
              className="absolute inset-0"
              aria-label="Ouvrir l'image"
            >
              <Image
                src={images[0]}
                alt={title}
                fill
                sizes="(max-width: 1023px) 100vw, 45vw"
                style={{ objectFit: "cover" }}
                priority
                placeholder="blur"
                blurDataURL={IMAGE_BLUR_DATA_URL}
              />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
