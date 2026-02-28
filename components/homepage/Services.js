"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { dosisFont } from "@/lib/fonts";
import Link from "next/link";
import { useState } from "react";
import { IMAGE_BLUR_DATA_URL } from "@/lib/image-placeholder";


// 5 distinct spatial arrangements — each service gets a different one (cycled)
// aspectRatio keeps shapes consistent regardless of container height
const LAYOUT_SETS = [
  [
    { pos: { top: "0%",    left: "0%"   }, w: "68%", aspectRatio: "1/1",  r: -2,   round: "rounded-2xl",  objPos: "center top",    sizes: "34vw", delay: 0    },
    { pos: { bottom: "0%", right: "0%"  }, w: "60%", aspectRatio: "4/3",  r: 1.5,  round: "rounded-3xl",  objPos: "center bottom", sizes: "30vw", delay: 0.08 },
    { pos: { top: "44%",   left: "6%"   }, w: "40%", aspectRatio: "1/1",  r: 3,    round: "rounded-xl",   objPos: "center center", sizes: "20vw", delay: 0.16 },
  ],
  [
    { pos: { top: "2%",    right: "0%"  }, w: "65%", aspectRatio: "1/1",  r: 1.5,  round: "rounded-3xl",  objPos: "center top",    sizes: "33vw", delay: 0    },
    { pos: { bottom: "0%", left: "0%"   }, w: "62%", aspectRatio: "4/3",  r: -2,   round: "rounded-2xl",  objPos: "center bottom", sizes: "31vw", delay: 0.08 },
    { pos: { top: "40%",   right: "3%"  }, w: "38%", aspectRatio: "1/1",  r: -3,   round: "rounded-xl",   objPos: "center center", sizes: "19vw", delay: 0.16 },
  ],
  [
    { pos: { top: "0%",    left: "4%"   }, w: "66%", aspectRatio: "4/3",  r: -1.5, round: "rounded-2xl",  objPos: "center top",    sizes: "33vw", delay: 0    },
    { pos: { bottom: "2%", right: "0%"  }, w: "63%", aspectRatio: "1/1",  r: 1,    round: "rounded-3xl",  objPos: "center bottom", sizes: "32vw", delay: 0.08 },
    { pos: { top: "36%",   left: "0%"   }, w: "38%", aspectRatio: "1/1",  r: 2.5,  round: "rounded-xl",   objPos: "center center", sizes: "19vw", delay: 0.16 },
  ],
  [
    { pos: { bottom: "0%", left: "0%"   }, w: "67%", aspectRatio: "1/1",  r: 1,    round: "rounded-3xl",  objPos: "center bottom", sizes: "34vw", delay: 0    },
    { pos: { top: "0%",    right: "0%"  }, w: "62%", aspectRatio: "4/3",  r: -1.5, round: "rounded-2xl",  objPos: "center top",    sizes: "31vw", delay: 0.08 },
    { pos: { bottom: "6%", right: "2%"  }, w: "38%", aspectRatio: "1/1",  r: -2.5, round: "rounded-xl",   objPos: "center center", sizes: "19vw", delay: 0.16 },
  ],
  [
    { pos: { top: "0%",    left: "0%"   }, w: "68%", aspectRatio: "1/1",  r: -1,   round: "rounded-2xl",  objPos: "center top",    sizes: "34vw", delay: 0    },
    { pos: { bottom: "0%", left: "10%"  }, w: "60%", aspectRatio: "4/3",  r: 1.5,  round: "rounded-3xl",  objPos: "center bottom", sizes: "30vw", delay: 0.08 },
    { pos: { top: "32%",   right: "0%"  }, w: "38%", aspectRatio: "1/1",  r: -2,   round: "rounded-xl",   objPos: "center center", sizes: "19vw", delay: 0.16 },
  ],
];

const services = [
  { id: 1,  title: "Charpente traditionnelle",    endPoint: "/services/charpente-traditionelle",      panels: ["/img/charpente-traditionelle/img2.webp",  "/img/charpente-traditionelle/img14.webp", "/img/charpente-traditionelle/img22.webp"] },
  { id: 2,  title: "Charpente industrielle",      endPoint: "/services/charpente-industrielle",       panels: ["/img/charpente-industrielle/img2.webp",   "/img/charpente-industrielle/img4.webp",   "/img/charpente-industrielle/img6.webp"] },
  { id: 3,  title: "Extension / maison ossature", endPoint: "/services/extension-ou-maison-ossature", panels: ["/img/extension-maison-ossature/img1.webp", "/img/extension-maison-ossature/img3.webp", "/img/extension-maison-ossature/img6.webp"] },
  { id: 4,  title: "Préau",                       endPoint: "/services/preau",                        panels: ["/img/préau/img1.webp",                    "/img/préau/img2.webp",                    "/img/préau/img3.webp"] },
  { id: 5,  title: "Carport",                     endPoint: "/services/carport",                      panels: ["/img/carport/img2.webp",                  "/img/carport/img3.webp",                  "/img/carport/img4.webp"] },
  { id: 6,  title: "Terrasse",                    endPoint: "/services/terrasse",                     panels: ["/img/terrasse/img1.webp",                 "/img/terrasse/img4.webp",                 "/img/terrasse/img6.webp"] },
  { id: 7,  title: "Aménagement des combles",     endPoint: "/services/amenagement-des-combles",      panels: ["/img/aménagement-combles/img1.webp",       "/img/aménagement-combles/img2.webp",       "/img/aménagement-combles/img4.webp"] },
  { id: 8,  title: "Menuiserie extérieure",       endPoint: "/services/menuiserie-exterieure",        panels: ["/img/menuiserie-extérieure/img2.webp",    "/img/menuiserie-extérieure/img3.webp",    "/img/menuiserie-extérieure/img4.webp"] },
  { id: 9,  title: "Bardages",                    endPoint: "/services/bardage",                      panels: ["/img/bardage/img1.webp",                  "/img/bardage/img4.webp",                  "/img/bardage/img8.webp"] },
  { id: 10, title: "Solivage porteur",            endPoint: "/services/solivage-porteur",             panels: ["/img/solivage-porteur/img1.webp",         "/img/solivage-porteur/img2.webp",         "/img/solivage-porteur/img3.webp"] },
  { id: 11, title: "Menuiserie Générale",         endPoint: "/services/menuiserie-generale",          panels: ["/img/menuiserie-générale/img2.webp",      "/img/menuiserie-générale/img3.webp",      "/img/menuiserie-générale/img4.webp"] },
];

const popSpring = { type: "spring", stiffness: 280, damping: 22 };

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const active  = services[activeIndex];
  const layouts = LAYOUT_SETS[activeIndex % LAYOUT_SETS.length];


  return (
    <section id="about" className="relative bg-dark-grey custom-pointer">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url("/img/brick-wall.png")',
          opacity: 0.18,
        }}
      />
      <div className="lg:hidden polygon w-[110vw] h-[45px] bg-primary overflow-hidden absolute transform -scale-y-100 top-0 -right-[120px] md:right-[-320px] z-20" />

      <div className="max-w-[1400px] mx-auto w-full flex flex-col px-8 pt-20 pb-28 md:px-16 md:pt-24 md:pb-36 lg:px-24 lg:pt-28 lg:pb-40">
        <h1 className="text-white text-4xl lg:text-5xl mb-12 lg:mb-16 tracking-wider font-medium">
          <span className="text-primary text-5xl lg:text-6xl">N</span>os Services
        </h1>

        <div className="flex flex-col lg:flex-row lg:gap-16 items-stretch">
          {/* Left: numbered list */}
          <div className="flex flex-col w-full lg:w-1/2 border-t border-white/10">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.35, delay: i * 0.04, ease: "easeOut" }}
              >
                <Link
                  href={service.endPoint}
                  onMouseEnter={() => setActiveIndex(i)}
                  className={`group flex w-full items-center justify-between py-4 lg:py-5 border-b border-white/10 cursor-pointer transition-colors duration-200 ${
                    activeIndex === i ? "text-primary" : "text-white/70 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-5 lg:gap-7">
                    <span
                      className={`text-xs font-mono tracking-widest shrink-0 transition-colors duration-200 ${
                        activeIndex === i ? "text-primary/70" : "text-white/25"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={`${dosisFont.className} text-base lg:text-lg xl:text-xl font-bold uppercase tracking-wider`}>
                      {service.title}
                    </span>
                  </div>
                  <span
                    className={`text-base transition-all duration-300 ${
                      activeIndex === i
                        ? "translate-x-1 text-primary"
                        : "text-white/30 group-hover:translate-x-1 group-hover:text-white/60"
                    }`}
                  >
                    →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right: scattered image panels — desktop only */}
          <div className="hidden lg:block relative w-1/2 min-h-[520px] xl:min-h-[580px]">
            <AnimatePresence mode="sync">
              {active && layouts.map((l, idx) => (
                <motion.div
                  key={`${activeIndex}-${idx}`}
                  className={`absolute overflow-hidden shadow-2xl ${l.round}`}
                  style={{ ...l.pos, width: l.w, aspectRatio: l.aspectRatio, rotate: l.r }}
                  initial={{ opacity: 0, scale: 0.78, y: idx % 2 === 0 ? 14 : -14 }}
                  animate={{ opacity: 1, scale: 1,    y: 0 }}
                  exit={{    opacity: 0, scale: 0.88,  y: idx % 2 === 0 ? -8 : 8 }}
                  transition={{ ...popSpring, delay: l.delay }}
                >
                  <Image
                    src={active.panels[idx]}
                    alt={active.title}
                    fill
                    quality={85}
                    sizes={l.sizes}
                    style={{ objectFit: "cover", objectPosition: l.objPos }}
                    placeholder="blur"
                    blurDataURL={IMAGE_BLUR_DATA_URL}
                    priority={activeIndex === 0 && idx === 0}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="hidden lg:block polygon w-[49vw] h-[55px] bg-primary overflow-hidden absolute bottom-0 -right-[200px] z-20 xl:right-[-245px]" />

      {/* Preload next service panels so switching is instant */}
      {services[(activeIndex + 1) % services.length].panels.map((src, i) => {
        const nextLayouts = LAYOUT_SETS[(activeIndex + 1) % LAYOUT_SETS.length];
        return (
          <div key={src} style={{ position: "fixed", top: 0, left: 0, width: 1, height: 1, overflow: "hidden", opacity: 0, pointerEvents: "none" }} aria-hidden="true">
            <Image src={src} alt="" fill sizes={nextLayouts[i]?.sizes ?? "34vw"} priority />
          </div>
        );
      })}
    </section>
  );
};

export default Services;
