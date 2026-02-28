"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { FiChevronLeft, FiChevronRight, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { IMAGE_BLUR_DATA_URL } from "@/lib/image-placeholder";

const images = [
  "/img/carport/img11.webp",
  "/img/charpente-traditionelle/img26.webp",
  "/img/charpente-traditionelle/img27.webp",
  "/img/carport/img5.webp",
  "/img/charpente-traditionelle/img28.webp",
  "/img/charpente-traditionelle/img29.webp",
  "/img/charpente-traditionelle/img30.webp",
  "/img/carport/img6.webp",
  "/img/charpente-traditionelle/img31.webp",
  "/img/charpente-traditionelle/img32.webp",
  "/img/charpente-traditionelle/img33.webp",
  "/img/carport/img7.webp",
  "/img/charpente-traditionelle/img34.webp",
  "/img/charpente-traditionelle/img35.webp",
  "/img/charpente-traditionelle/img36.webp",
  "/img/carport/img8.webp",
  "/img/charpente-traditionelle/img37.webp",
  "/img/charpente-traditionelle/img38.webp",
  "/img/charpente-traditionelle/img39.webp",
  "/img/carport/img9.webp",
  "/img/charpente-traditionelle/img40.webp",
  "/img/charpente-traditionelle/img41.webp",
  "/img/charpente-traditionelle/img42.webp",
  "/img/carport/img10.webp",
  "/img/bardage/img3.webp",
  "/img/charpente-traditionelle/img2.webp",
  "/img/charpente-industrielle/img1.webp",
  "/img/préau/img1.webp",
  "/img/charpente-traditionelle/img13.webp",
  "/img/charpente-traditionelle/img4.webp",
  "/img/extension-maison-ossature/img1.webp",
  "/img/charpente-traditionelle/img6.webp",
  "/img/extension-maison-ossature/img3.webp",
  "/img/charpente-traditionelle/img9.webp",
  "/img/extension-maison-ossature/img5.webp",
  "/img/terrasse/img1.webp",
  "/img/charpente-traditionelle/img15.webp",
  "/img/charpente-traditionelle/img22.webp",
  "/img/extension-maison-ossature/img7.webp",
  "/img/charpente-traditionelle/img19.webp",
  "/img/charpente-traditionelle/img14.webp",
  "/img/terrasse/img2.webp",
  "/img/charpente-traditionelle/img21.webp",
  "/img/extension-maison-ossature/img2.webp",
  "/img/charpente-traditionelle/img23.webp",
  "/img/charpente-traditionelle/img25.webp",
  "/img/terrasse/img3.webp",
];

const CHUNK = 12;

const getBentoClass = (index) => {
  const pattern = index % 8;
  if (pattern === 0) return "col-span-2 row-span-2";
  if (pattern === 3) return "col-span-2";
  return "";
};

const getBentoSizes = (index) => {
  const pattern = index % 8;
  if (pattern === 0 || pattern === 3) {
    return "(max-width: 767px) 100vw, (max-width: 1023px) 66vw, 50vw";
  }
  return "(max-width: 767px) 50vw, (max-width: 1023px) 33vw, 25vw";
};

const slideVariants = {
  enter: (dir) => ({ x: dir >= 0 ? 48 : -48, opacity: 0 }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
  },
  exit: (dir) => ({
    x: dir >= 0 ? -48 : 48,
    opacity: 0,
    transition: { duration: 0.2, ease: "easeIn" },
  }),
};

const Gallery = () => {
  const [visibleCount, setVisibleCount] = useState(CHUNK);
  const [zoomedIndex, setZoomedIndex] = useState(null);
  const [direction, setDirection] = useState(0);
  const stripRef = useRef(null);
  const touchStartX = useRef(null);

  const allVisible = visibleCount >= images.length;
  const showMore = () => setVisibleCount((prev) => Math.min(prev + CHUNK, images.length));
  const showLess = () => setVisibleCount(CHUNK);

  const openZoom = (index) => {
    setDirection(0);
    setZoomedIndex(index);
  };
  const closeZoom = () => setZoomedIndex(null);

  const goTo = useCallback(
    (newIndex) => {
      if (newIndex < 0 || newIndex >= images.length) return;
      setDirection(newIndex > zoomedIndex ? 1 : -1);
      setZoomedIndex(newIndex);
    },
    [zoomedIndex]
  );

  const gotoNext = useCallback(() => goTo((zoomedIndex ?? 0) + 1), [goTo, zoomedIndex]);
  const gotoPrev = useCallback(() => goTo((zoomedIndex ?? 0) - 1), [goTo, zoomedIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (zoomedIndex === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeZoom();
      if (e.key === "ArrowRight") gotoNext();
      if (e.key === "ArrowLeft") gotoPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoomedIndex, gotoNext, gotoPrev]);

  // Scroll active thumbnail into view
  useEffect(() => {
    if (zoomedIndex === null || !stripRef.current) return;
    const thumb = stripRef.current.children[zoomedIndex];
    if (thumb) thumb.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [zoomedIndex]);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = zoomedIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [zoomedIndex]);

  return (
    <section id="gallery" className="relative brick-bg pb-20">
      {/* Title */}
      <div className="px-6 md:px-10 lg:px-14 pt-12 md:pt-16">
        <h1 className="tracking-wide font-semibold text-4xl text-dark-grey text-center lg:text-left mb-0">
          <span className="text-primary text-6xl">N</span>os réalisations en quelques photos
        </h1>
      </div>

      {/* Bento grid */}
      <div className="w-full px-4 lg:px-10 pt-6 pb-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[130px] md:auto-rows-[160px] lg:auto-rows-[200px]">
        {images.slice(0, visibleCount).map((src, index) => (
          <div
            key={src}
            className={`relative overflow-hidden rounded-2xl cursor-pointer group ${getBentoClass(index)}`}
            onClick={() => openZoom(index)}
          >
            <Image
              src={src}
              alt={`réalisation ${index + 1}`}
              fill
              sizes={getBentoSizes(index)}
              quality={80}
              style={{ objectFit: "cover" }}
              className="transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              placeholder="blur"
              blurDataURL={IMAGE_BLUR_DATA_URL}
            />
          </div>
        ))}
      </div>

      {/* Voir plus / Voir moins */}
      <div className="flex justify-center py-6 relative z-10">
        {!allVisible ? (
          <button
            onClick={showMore}
            className="flex flex-col items-center gap-1 text-dark-grey font-semibold tracking-wide hover:text-primary transition-colors duration-200"
          >
            <span>Voir plus</span>
            <FiChevronDown className="text-2xl animate-bounce" />
          </button>
        ) : (
          <button
            onClick={showLess}
            className="flex flex-col items-center gap-1 text-dark-grey font-semibold tracking-wide hover:text-primary transition-colors duration-200"
          >
            <FiChevronUp className="text-2xl" />
            <span>Voir moins</span>
          </button>
        )}
      </div>

      {/* Bottom decoration */}
      <div className="polygon w-[120vw] lg:w-[49vw] h-[45px] lg:h-[55px] bg-dark-grey overflow-hidden absolute -scale-y-100 bottom-0 right-[105px] lg:left-[-200px] xl:left-[-240px] z-20" />

      {/* Lightbox */}
      <AnimatePresence>
        {zoomedIndex !== null && (
          <motion.div
            key="lightbox"
            className="fixed inset-0 z-50 flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            style={{ background: "rgba(8, 8, 10, 0.96)", backdropFilter: "blur(18px)" }}
          >
            {/* Top bar */}
            <div className="shrink-0 flex justify-between items-center px-5 pt-5 pb-2">
              <span className="text-white/30 text-sm tabular-nums tracking-wide">
                {zoomedIndex + 1}
                <span className="mx-1.5 text-white/15">/</span>
                {images.length}
              </span>
              <button
                onClick={closeZoom}
                className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:border-white/25 hover:bg-white/10 transition-all duration-200 cursor-pointer"
                aria-label="Fermer"
              >
                <IoMdClose className="text-base" />
              </button>
            </div>

            {/* Image area */}
            <div
              className="flex-1 relative overflow-hidden"
              onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
              onTouchEnd={(e) => {
                if (touchStartX.current === null) return;
                const diff = touchStartX.current - e.changedTouches[0].clientX;
                if (Math.abs(diff) > 50) diff > 0 ? gotoNext() : gotoPrev();
                touchStartX.current = null;
              }}
              onClick={closeZoom}
            >
              {/* Prev */}
              <button
                onClick={(e) => { e.stopPropagation(); gotoPrev(); }}
                disabled={zoomedIndex === 0}
                className="absolute left-3 lg:left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/45 hover:text-white hover:border-white/25 hover:bg-white/10 disabled:opacity-15 disabled:cursor-default transition-all duration-200 cursor-pointer"
                aria-label="Précédent"
              >
                <FiChevronLeft className="text-lg" />
              </button>

              {/* Animated image */}
              <AnimatePresence mode="sync" custom={direction}>
                <motion.div
                  key={zoomedIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0 flex items-center justify-center px-16 lg:px-24"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={images[zoomedIndex]}
                      alt={`réalisation ${zoomedIndex + 1}`}
                      fill
                      sizes="100vw"
                      style={{ objectFit: "contain", userSelect: "none" }}
                      priority
                      placeholder="blur"
                      blurDataURL={IMAGE_BLUR_DATA_URL}
                      draggable={false}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Next */}
              <button
                onClick={(e) => { e.stopPropagation(); gotoNext(); }}
                disabled={zoomedIndex === images.length - 1}
                className="absolute right-3 lg:right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/45 hover:text-white hover:border-white/25 hover:bg-white/10 disabled:opacity-15 disabled:cursor-default transition-all duration-200 cursor-pointer"
                aria-label="Suivant"
              >
                <FiChevronRight className="text-lg" />
              </button>
            </div>

            {/* Thumbnail strip */}
            <div className="shrink-0 px-4 pt-3 pb-5">
              <div ref={stripRef} className="flex gap-1.5 overflow-x-auto scrollbar-hide">
                {images.map((src, i) => (
                  <button
                    key={src}
                    onClick={() => goTo(i)}
                    className={`relative shrink-0 w-14 h-10 lg:w-16 lg:h-11 rounded-lg overflow-hidden transition-all duration-200 cursor-pointer ${
                      i === zoomedIndex
                        ? "ring-2 ring-primary opacity-100"
                        : "opacity-30 hover:opacity-60"
                    }`}
                  >
                    <Image src={src} alt="" fill sizes="64px" style={{ objectFit: "cover" }} />
                  </button>
                ))}
              </div>
            </div>

            {/* Preload neighbors */}
            {zoomedIndex > 0 && (
              <div style={{ position: "fixed", top: 0, left: 0, width: 1, height: 1, overflow: "hidden", opacity: 0, pointerEvents: "none" }} aria-hidden="true">
                <Image src={images[zoomedIndex - 1]} alt="" fill sizes="100vw" priority />
              </div>
            )}
            {zoomedIndex < images.length - 1 && (
              <div style={{ position: "fixed", top: 0, left: 0, width: 1, height: 1, overflow: "hidden", opacity: 0, pointerEvents: "none" }} aria-hidden="true">
                <Image src={images[zoomedIndex + 1]} alt="" fill sizes="100vw" priority />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
