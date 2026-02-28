"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import carouselItem1 from "@/assets/img/bardage/img3.webp";
import carouselItem2 from "@/assets/img/charpente-traditionelle/img2.webp";
import carouselItem3 from "@/assets/img/charpente-industrielle/img1.webp";
import carouselItem5 from "@/assets/img/préau/img1.webp";
import carouselItem6 from "@/assets/img/charpente-traditionelle/img13.webp";
import carouselItem7 from "@/assets/img/charpente-traditionelle/img4.webp";
import carouselItem8 from "@/assets/img/extension-maison-ossature/img1.webp";
import carouselItem10 from "@/assets/img/charpente-traditionelle/img6.webp";
import carouselItem11 from "@/assets/img/extension-maison-ossature/img3.webp";
import carouselItem13 from "@/assets/img/charpente-traditionelle/img9.webp";
import carouselItem14 from "@/assets/img/extension-maison-ossature/img5.webp";
import carouselItem15 from "@/assets/img/terrasse/img1.webp";
import carouselItem16 from "@/assets/img/charpente-traditionelle/img15.webp";
import carouselItem17 from "@/assets/img/charpente-traditionelle/img22.webp";
import carouselItem18 from "@/assets/img/extension-maison-ossature/img7.webp";
import carouselItem19 from "@/assets/img/charpente-traditionelle/img19.webp";
import carouselItem20 from "@/assets/img/charpente-traditionelle/img14.webp";
import carouselItem21 from "@/assets/img/terrasse/img2.webp";
import carouselItem22 from "@/assets/img/charpente-traditionelle/img21.webp";
import carouselItem23 from "@/assets/img/extension-maison-ossature/img2.webp";
import carouselItem24 from "@/assets/img/home.webp";
import carouselItem25 from "@/assets/img/charpente-traditionelle/img25.webp";
import carouselItem26 from "@/assets/img/terrasse/img3.webp";
import carouselItem27 from "@/assets/img/charpente-traditionelle/img26.webp";
import carouselItem28 from "@/assets/img/charpente-traditionelle/img27.webp";
import carouselItem29 from "@/assets/img/charpente-traditionelle/img28.webp";
import carouselItem30 from "@/assets/img/charpente-traditionelle/img29.webp";
import carouselItem31 from "@/assets/img/charpente-traditionelle/img30.webp";
import carouselItem32 from "@/assets/img/charpente-traditionelle/img31.webp";
import carouselItem33 from "@/assets/img/charpente-traditionelle/img32.webp";
import carouselItem34 from "@/assets/img/charpente-traditionelle/img33.webp";
import carouselItem35 from "@/assets/img/charpente-traditionelle/img34.webp";
import carouselItem36 from "@/assets/img/charpente-traditionelle/img35.webp";
import carouselItem37 from "@/assets/img/charpente-traditionelle/img36.webp";
import carouselItem38 from "@/assets/img/charpente-traditionelle/img37.webp";
import carouselItem39 from "@/assets/img/charpente-traditionelle/img38.webp";
import carouselItem40 from "@/assets/img/charpente-traditionelle/img39.webp";
import carouselItem41 from "@/assets/img/charpente-traditionelle/img40.webp";
import carouselItem42 from "@/assets/img/charpente-traditionelle/img41.webp";
import carouselItem43 from "@/assets/img/charpente-traditionelle/img42.webp";

const images = [
  { id: 27, imageUrl: carouselItem27 },
  { id: 28, imageUrl: carouselItem28 },
  { id: 29, imageUrl: carouselItem29 },
  { id: 30, imageUrl: carouselItem30 },
  { id: 31, imageUrl: carouselItem31 },
  { id: 32, imageUrl: carouselItem32 },
  { id: 33, imageUrl: carouselItem33 },
  { id: 34, imageUrl: carouselItem34 },
  { id: 35, imageUrl: carouselItem35 },
  { id: 36, imageUrl: carouselItem36 },
  { id: 37, imageUrl: carouselItem37 },
  { id: 38, imageUrl: carouselItem38 },
  { id: 39, imageUrl: carouselItem39 },
  { id: 40, imageUrl: carouselItem40 },
  { id: 41, imageUrl: carouselItem41 },
  { id: 42, imageUrl: carouselItem42 },
  { id: 43, imageUrl: carouselItem43 },
  { id: 1, imageUrl: carouselItem1 },
  { id: 2, imageUrl: carouselItem2 },
  { id: 3, imageUrl: carouselItem3 },
  { id: 5, imageUrl: carouselItem5 },
  { id: 6, imageUrl: carouselItem6 },
  { id: 7, imageUrl: carouselItem7 },
  { id: 8, imageUrl: carouselItem8 },
  { id: 10, imageUrl: carouselItem10 },
  { id: 11, imageUrl: carouselItem11 },
  { id: 13, imageUrl: carouselItem13 },
  { id: 14, imageUrl: carouselItem14 },
  { id: 15, imageUrl: carouselItem15 },
  { id: 16, imageUrl: carouselItem16 },
  { id: 17, imageUrl: carouselItem17 },
  { id: 18, imageUrl: carouselItem18 },
  { id: 19, imageUrl: carouselItem19 },
  { id: 20, imageUrl: carouselItem20 },
  { id: 21, imageUrl: carouselItem21 },
  { id: 22, imageUrl: carouselItem22 },
  { id: 23, imageUrl: carouselItem23 },
  { id: 24, imageUrl: carouselItem24 },
  { id: 25, imageUrl: carouselItem25 },
  { id: 26, imageUrl: carouselItem26 },
];

const CHUNK = 12;

const getBentoClass = (index) => {
  const pattern = index % 8;
  if (pattern === 0) return "col-span-2 row-span-2";
  if (pattern === 3) return "col-span-2";
  return "";
};

const Carousel = () => {
  const [visibleCount, setVisibleCount] = useState(CHUNK);
  const [zoomedIndex, setZoomedIndex] = useState(null);

  const allVisible = visibleCount >= images.length;

  const showMore = () =>
    setVisibleCount((prev) => Math.min(prev + CHUNK, images.length));
  const showLess = () => setVisibleCount(CHUNK);

  const openZoom = (index) => setZoomedIndex(index);
  const closeZoom = () => setZoomedIndex(null);
  const gotoNext = useCallback(() => {
    setZoomedIndex((i) => (i < images.length - 1 ? i + 1 : i));
  }, []);
  const gotoPrev = useCallback(() => {
    setZoomedIndex((i) => (i > 0 ? i - 1 : i));
  }, []);

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

  return (
    <>
      <div className="w-full">
        {/* Bento grid */}
        <div className="w-full px-4 lg:px-10 pt-6 pb-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[130px] md:auto-rows-[160px] lg:auto-rows-[200px]">
          {images.slice(0, visibleCount).map((item, index) => (
            <div
              key={item.id}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group ${getBentoClass(index)}`}
              onClick={() => openZoom(index)}
            >
              <Image
                src={item.imageUrl}
                alt={`réalisation ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
                className="transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Fade gradient at the bottom of the grid */}
        {!allVisible && (
          <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-b from-transparent to-white pointer-events-none" />
        )}
      </div>

      {/* Voir plus / Voir moins button */}
      <div className="flex justify-center py-6 relative z-10">
        {!allVisible ? (
          <button
            onClick={showMore}
            className="flex flex-col items-center gap-1 text-darkGrey font-semibold tracking-wide hover:text-primary transition-colors duration-200"
          >
            <span>Voir plus</span>
            <FiChevronDown className="text-2xl animate-bounce" />
          </button>
        ) : (
          <button
            onClick={showLess}
            className="flex flex-col items-center gap-1 text-darkGrey font-semibold tracking-wide hover:text-primary transition-colors duration-200"
          >
            <FiChevronUp className="text-2xl" />
            <span>Voir moins</span>
          </button>
        )}
      </div>

      {/* Lightbox */}
      {zoomedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex flex-col"
          onClick={closeZoom}
        >
          {/* Top bar */}
          <div className="flex justify-between items-center px-4 py-3 shrink-0" onClick={(e) => e.stopPropagation()}>
            <span className="text-white/60 text-sm font-medium">
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

          {/* Image + side arrows */}
          <div className="flex flex-1 items-center min-h-0">
            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); gotoPrev(); }}
              disabled={zoomedIndex === 0}
              className="shrink-0 text-white/60 hover:text-white disabled:opacity-20 disabled:cursor-default transition-colors px-2 lg:px-4"
              aria-label="Précédent"
            >
              <MdChevronLeft className="text-6xl lg:text-8xl" />
            </button>

            {/* Image */}
            <div
              className="relative flex-1 h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[zoomedIndex].imageUrl}
                alt={`réalisation ${zoomedIndex + 1}`}
                fill
                style={{ objectFit: "contain", userSelect: "none" }}
                priority
              />
            </div>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); gotoNext(); }}
              disabled={zoomedIndex === images.length - 1}
              className="shrink-0 text-white/60 hover:text-white disabled:opacity-20 disabled:cursor-default transition-colors px-2 lg:px-4"
              aria-label="Suivant"
            >
              <MdChevronRight className="text-6xl lg:text-8xl" />
            </button>
          </div>

          {/* Bottom padding */}
          <div className="shrink-0 h-4" />
        </div>
      )}
    </>
  );
};

export default Carousel;
