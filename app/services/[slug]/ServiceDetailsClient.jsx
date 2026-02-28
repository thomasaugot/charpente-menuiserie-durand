"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import localFont from "next/font/local";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaPhoneAlt } from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const dosisFont = localFont({ src: "../../../assets/fonts/Dosis-Regular.ttf" });

export default function ServiceDetailsClient({ service, serviceCards = [] }) {
  const { title, description, images } = service;
  const firstLetter = title[0];
  const restOfTitle = title.slice(1);
  const getInitialVisibleCount = () => {
    if (typeof window === "undefined") return 8;
    if (window.innerWidth < 768) return 3;
    if (window.innerWidth < 1024) return 6;
    return 8;
  };

  const [initialVisibleCount, setInitialVisibleCount] = useState(8);
  const [visibleCount, setVisibleCount] = useState(8);
  const [isExpanded, setIsExpanded] = useState(false);
  const [zoomedIndex, setZoomedIndex] = useState(null);

  useEffect(() => {
    const updateCounts = () => {
      const nextInitial = getInitialVisibleCount();
      setInitialVisibleCount(nextInitial);
      if (!isExpanded) {
        setVisibleCount(nextInitial);
      }
    };

    updateCounts();
    window.addEventListener("resize", updateCounts);
    return () => window.removeEventListener("resize", updateCounts);
  }, [isExpanded]);

  const canExpand = images.length > initialVisibleCount;
  const displayedImages = images.slice(0, visibleCount);

  const toggleGallery = () => {
    if (isExpanded) {
      setVisibleCount(initialVisibleCount);
      setIsExpanded(false);
      return;
    }

    setVisibleCount(images.length);
    setIsExpanded(true);
  };

  const openZoom = (index) => setZoomedIndex(index);
  const closeZoom = () => setZoomedIndex(null);
  const gotoNext = () =>
    setZoomedIndex((i) => (i < images.length - 1 ? i + 1 : i));
  const gotoPrev = () =>
    setZoomedIndex((i) => (i > 0 ? i - 1 : i));

  useEffect(() => {
    if (zoomedIndex === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeZoom();
      if (e.key === "ArrowRight") gotoNext();
      if (e.key === "ArrowLeft") gotoPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoomedIndex]);

  return (
    <div className="flex flex-col min-h-screen brick-bg">
      <section className="max-w-[1400px] mx-auto w-full px-6 md:px-12 lg:px-20 pt-28 pb-16">
        <Link
          href="/"
          className={`${dosisFont.className} inline-flex items-center gap-2 text-darkGrey/70 hover:text-primary text-base tracking-widest uppercase transition-colors duration-200 mb-10`}
        >
          <FaArrowLeft size={11} />
          Retour a l&apos;accueil
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <p className={`${dosisFont.className} text-primary/90 text-xs uppercase tracking-widest`}>
              Nos services
            </p>
            <h1 className="text-darkGrey text-4xl lg:text-5xl tracking-wider font-medium leading-tight">
              <span className="text-primary text-5xl lg:text-6xl">{firstLetter}</span>
              {restOfTitle}
            </h1>
            <p className={`${dosisFont.className} text-darkGrey/90 text-base leading-relaxed`}>
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
                className={`${dosisFont.className} flex items-center justify-center gap-2 text-darkGrey/75 text-base py-2 hover:text-primary transition-colors duration-200`}
              >
                <FaPhoneAlt size={12} color="#f37139" />
                +33 6 76 50 85 51
              </a>
            </div>
          </motion.div>

          {images.length >= 5 ? (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-3 grid-rows-3 gap-2 h-[380px] lg:h-[500px]"
            >
              <button
                type="button"
                onClick={() => openZoom(0)}
                className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden shadow-lg group"
              >
                <Image src={images[0]} alt={title} fill sizes="35vw" style={{ objectFit: "cover" }} priority />
              </button>
              <button
                type="button"
                onClick={() => openZoom(1)}
                className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden shadow-lg group"
              >
                <Image src={images[1]} alt={title} fill sizes="18vw" style={{ objectFit: "cover" }} />
              </button>
              <button
                type="button"
                onClick={() => openZoom(2)}
                className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden shadow-lg group"
              >
                <Image src={images[2]} alt={title} fill sizes="18vw" style={{ objectFit: "cover" }} />
              </button>
              <button
                type="button"
                onClick={() => openZoom(3)}
                className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden shadow-lg group"
              >
                <Image src={images[3]} alt={title} fill sizes="18vw" style={{ objectFit: "cover" }} />
              </button>
              <button
                type="button"
                onClick={() => openZoom(4)}
                className="col-span-2 row-span-1 relative rounded-2xl overflow-hidden shadow-lg group"
              >
                <Image src={images[4]} alt={title} fill sizes="28vw" style={{ objectFit: "cover" }} />
              </button>
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
                <Image src={images[0]} alt={title} fill sizes="55vw" style={{ objectFit: "cover" }} priority />
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {images.length > 1 && (
        <section className="max-w-[1400px] mx-auto w-full px-6 md:px-12 lg:px-20 pb-24">
          <div className="border-t border-darkGrey/10 pt-14 mb-10">
            <h2 className="text-darkGrey text-4xl tracking-wider font-medium">
              <span className="text-primary text-5xl">N</span>os réalisations en photos
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {displayedImages.map((img, i) => (
              <motion.button
                type="button"
                key={i}
                onClick={() => openZoom(i)}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: (i % 8) * 0.04 }}
                className="relative aspect-square rounded-xl overflow-hidden shadow-md group"
              >
                <Image
                  src={img}
                  alt={`${title} ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  style={{ objectFit: "cover" }}
                  className="hover:scale-105 transition-transform duration-500"
                />
              </motion.button>
            ))}
          </div>

          {canExpand && (
            <div className="flex justify-center pt-6">
              <button
                type="button"
                onClick={toggleGallery}
                className="flex flex-col items-center gap-1 text-darkGrey font-semibold tracking-wide hover:text-primary transition-colors duration-200"
              >
                {isExpanded ? (
                  <>
                    <FiChevronUp className="text-2xl" />
                    <span>Voir moins</span>
                  </>
                ) : (
                  <>
                    <span>Voir plus</span>
                    <FiChevronDown className="text-2xl animate-bounce" />
                  </>
                )}
              </button>
            </div>
          )}
        </section>
      )}

      {serviceCards.length > 0 && (
        <section className="max-w-[1400px] mx-auto w-full px-6 md:px-12 lg:px-20 pb-24">
          <div className="border-t border-darkGrey/10 pt-14 mb-10">
            <h2 className="text-darkGrey text-3xl md:text-4xl tracking-wider font-medium">
              <span className="text-primary text-5xl">D</span>écouvrez tous nos services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2">
            {serviceCards.map((item, i) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: (i % 8) * 0.03 }}
              >
                <Link
                  href={`/services/${item.slug}`}
                  className={`${dosisFont.className} group flex items-center justify-between py-3 border-b border-darkGrey/15 text-darkGrey/80 hover:text-primary transition-colors duration-200`}
                >
                  <span className="text-base md:text-lg font-semibold">{item.title}</span>
                  <span className="text-lg text-darkGrey/45 group-hover:text-primary group-hover:translate-x-1 transition-all duration-200">
                    →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {zoomedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex flex-col"
          onClick={closeZoom}
        >
          <div className="flex justify-between items-center px-4 py-3 shrink-0" onClick={(e) => e.stopPropagation()}>
            <span className="text-white/60 text-base font-medium">
              {zoomedIndex + 1} / {images.length}
            </span>
            <button
              onClick={closeZoom}
              className="text-white/70 hover:text-white transition-colors p-1 rounded"
              aria-label="Fermer"
            >
              <IoMdClose className="text-3xl" />
            </button>
          </div>

          <div className="flex flex-1 items-center min-h-0">
            <button
              onClick={(e) => {
                e.stopPropagation();
                gotoPrev();
              }}
              disabled={zoomedIndex === 0}
              className="shrink-0 text-white/60 hover:text-white disabled:opacity-20 disabled:cursor-default transition-colors px-2 lg:px-4"
              aria-label="Precedent"
            >
              <MdChevronLeft className="text-6xl lg:text-8xl" />
            </button>

            <div className="relative flex-1 h-full" onClick={(e) => e.stopPropagation()}>
              <Image
                src={images[zoomedIndex]}
                alt={`${title} ${zoomedIndex + 1}`}
                fill
                style={{ objectFit: "contain", userSelect: "none" }}
                priority
              />
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                gotoNext();
              }}
              disabled={zoomedIndex === images.length - 1}
              className="shrink-0 text-white/60 hover:text-white disabled:opacity-20 disabled:cursor-default transition-colors px-2 lg:px-4"
              aria-label="Suivant"
            >
              <MdChevronRight className="text-6xl lg:text-8xl" />
            </button>
          </div>

          <div className="shrink-0 h-4" />
        </div>
      )}
    </div>
  );
}
