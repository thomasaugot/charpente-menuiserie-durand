"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useEffect, useState } from "react";
import { IMAGE_BLUR_DATA_URL } from "@/lib/image-placeholder";

const getInitialCount = () => {
  if (typeof window === "undefined") return 8;
  if (window.innerWidth < 768)  return 3;
  if (window.innerWidth < 1024) return 6;
  return 8;
};

export default function ServiceGallerySection({ images, title, openZoom }) {
  const [initialCount, setInitialCount]   = useState(8);
  const [visibleCount, setVisibleCount]   = useState(8);
  const [isExpanded,   setIsExpanded]     = useState(false);

  useEffect(() => {
    const update = () => {
      const next = getInitialCount();
      setInitialCount(next);
      if (!isExpanded) setVisibleCount(next);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [isExpanded]);

  const canExpand      = images.length > initialCount;
  const displayedImages = images.slice(0, visibleCount);

  const toggleGallery = () => {
    if (isExpanded) { setVisibleCount(initialCount); setIsExpanded(false); return; }
    setVisibleCount(images.length);
    setIsExpanded(true);
  };

  return (
    <section className="max-w-[1400px] mx-auto w-full px-6 md:px-12 lg:px-20 pb-24">
      <div className="border-t border-dark-grey/10 pt-14 mb-10">
        <h2 className="text-dark-grey text-4xl tracking-wider font-medium">
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
              loading="lazy"
              placeholder="blur"
              blurDataURL={IMAGE_BLUR_DATA_URL}
            />
          </motion.button>
        ))}
      </div>

      {canExpand && (
        <div className="flex justify-center pt-6">
          <button
            type="button"
            onClick={toggleGallery}
            className="flex flex-col items-center gap-1 text-dark-grey font-semibold tracking-wide hover:text-primary transition-colors duration-200"
          >
            {isExpanded ? (
              <><FiChevronUp className="text-2xl" /><span>Voir moins</span></>
            ) : (
              <><span>Voir plus</span><FiChevronDown className="text-2xl animate-bounce" /></>
            )}
          </button>
        </div>
      )}
    </section>
  );
}
