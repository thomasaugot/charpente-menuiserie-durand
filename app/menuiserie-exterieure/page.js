"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import BackToHomepageButton from "@/components/BackButton";
import { motion } from "framer-motion";
import ContactDetailsService from "@/components/ContactDetailsService";
import localFont from "next/font/local";

import img1 from "@/assets/img/menuiserie-extérieure/img1.webp";

const dosisFont = localFont({ src: "../../assets/fonts/Dosis-Medium.ttf" });

function MenuiserieExterieure() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const images = [img1];

  return (
    <div className="h-full px-6 lg:px-36 py-[150px] flex flex-col gap-10 relative brick-bg min-h-[100vh]">
      <BackToHomepageButton />
      <ContactDetailsService />
      <div className="relative flex flex-col text-center items-center lg:flex-row justify-center gap-8 p-4">
        <div className="w-full lg:w-1/2">
          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay, Thumbs]}
            autoplay={{ delay: 3000 }}
            thumbs={{ swiper: thumbsSwiper }}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-0 pb-[75%] overflow-hidden rounded-lg">
                  <Image
                    src={image}
                    alt={`Slide ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    priority
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiper}
            slidesPerView={4}
            spaceBetween={10}
            watchSlidesProgress
            className="mt-4"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-0 pb-[75%] overflow-hidden rounded-lg">
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="absolute top-0 left-0 w-full h-full object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex flex-col lg:ml-20 relative w-[90vw] lg:w-[40vw]">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            viewport={{ once: true }}
            className="capitalize text-black tracking-wider text-center text-4xl lg:text-5xl xl:text-nowrap font-semibold mt-8 lg:mt-0 mx-auto"
            transition={{
              type: "spring",
              stiffness: 40,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            Menuiserie Extérieure
          </motion.h1>
          <p
            className={`${dosisFont.className} text-darkGrey w-[90vw] lg:w-full mt-6 lg:mt-10`}
          >
            Chez Charpente Menuiserie Durand, notre engagement envers la qualité
            et l&apos;excellence se reflète dans chaque détail de notre travail,
            même à l&apos;extérieur de votre maison. Avec notre service de
            menuiserie extérieure, nous mettons notre expertise et notre
            savoir-faire au service de la beauté et de la fonctionnalité de
            votre espace extérieur. Que vous souhaitiez installer une nouvelle
            porte d&apos;entrée élégante, des fenêtres sur mesure pour illuminer
            votre maison, des volets en bois traditionnels pour ajouter du
            caractère à votre façade, ou encore une terrasse en bois pour créer
            un espace de vie extérieur chaleureux et accueillant, notre équipe
            qualifiée est là pour réaliser votre vision. Nous comprenons
            l&apos;importance de choisir les bons matériaux et les bonnes
            finitions pour résister aux éléments extérieurs tout en ajoutant une
            touche d&apos;esthétique à votre maison. C&apos;est pourquoi nous
            travaillons avec vous pour concevoir et fabriquer des produits sur
            mesure qui répondent à vos besoins spécifiques et qui complètent le
            style architectural de votre maison. Que vous recherchiez une
            menuiserie extérieure traditionnelle ou contemporaine, nous avons
            les compétences et l&apos;expérience nécessaires pour réaliser votre
            projet avec précision et professionnalisme. Faites confiance à
            Charpente Menuiserie Durand pour transformer votre espace extérieur
            en un lieu de vie exceptionnel qui vous ravira pendant des années à
            venir.
          </p>
          <div className="flex flex-col lg:flex-row mt-10 items-center justify-center gap-6">
            <p
              className={`${dosisFont.className} text-darkGrey font-semibold w-[80vw] mx-auto text-center lg:text-left`}
            >
              Des questions? Nous sommes là pour vous renseigner !
            </p>
            <a href="/#contact" className={`${dosisFont.className} primary-button flex primary-button-bg dark-shadow text-nowrap mx-auto`}>
              Nous Contacter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuiserieExterieure;
