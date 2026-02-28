"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { IMAGE_BLUR_DATA_URL } from "@/lib/image-placeholder";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import ServiceHeroSection from "@/components/service-page/ServiceHeroSection";
import ServiceGallerySection from "@/components/service-page/ServiceGallerySection";
import ServiceRelatedSection from "@/components/service-page/ServiceRelatedSection";

const slideVariants = {
  enter: (dir) => ({ x: dir >= 0 ? 48 : -48, opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] } },
  exit:  (dir) => ({ x: dir >= 0 ? -48 : 48, opacity: 0, transition: { duration: 0.2, ease: "easeIn" } }),
};

export default function ServiceDetailsClient({ service, serviceCards = [] }) {
  const { title, description, images } = service;

  const [zoomedIndex, setZoomedIndex] = useState(null);
  const [direction, setDirection]     = useState(0);
  const stripRef    = useRef(null);
  const touchStartX = useRef(null);

  const goTo = useCallback((newIndex) => {
    if (newIndex < 0 || newIndex >= images.length) return;
    setDirection(newIndex > zoomedIndex ? 1 : -1);
    setZoomedIndex(newIndex);
  }, [zoomedIndex, images.length]);

  const openZoom  = (index) => { setDirection(0); setZoomedIndex(index); };
  const closeZoom = () => setZoomedIndex(null);
  const gotoNext  = useCallback(() => goTo((zoomedIndex ?? 0) + 1), [goTo, zoomedIndex]);
  const gotoPrev  = useCallback(() => goTo((zoomedIndex ?? 0) - 1), [goTo, zoomedIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (zoomedIndex === null) return;
    const onKey = (e) => {
      if (e.key === "Escape")     closeZoom();
      if (e.key === "ArrowRight") gotoNext();
      if (e.key === "ArrowLeft")  gotoPrev();
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
    <div className="flex flex-col min-h-screen brick-bg">
      <ServiceHeroSection title={title} description={description} images={images} openZoom={openZoom} />
      {images.length > 1 && <ServiceGallerySection images={images} title={title} openZoom={openZoom} />}
      <ServiceRelatedSection serviceCards={serviceCards} />

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
              <button
                onClick={(e) => { e.stopPropagation(); gotoPrev(); }}
                disabled={zoomedIndex === 0}
                className="absolute left-3 lg:left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/45 hover:text-white hover:border-white/25 hover:bg-white/10 disabled:opacity-15 disabled:cursor-default transition-all duration-200 cursor-pointer"
                aria-label="Précédent"
              >
                <FiChevronLeft className="text-lg" />
              </button>

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
                      alt={`${title} ${zoomedIndex + 1}`}
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
                      i === zoomedIndex ? "ring-2 ring-primary opacity-100" : "opacity-30 hover:opacity-60"
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
    </div>
  );
}
