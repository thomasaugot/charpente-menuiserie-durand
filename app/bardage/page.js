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

import img1 from "@/assets/img/bardage/img1.webp";
import img2 from "@/assets/img/bardage/img2.webp";
import img3 from "@/assets/img/bardage/img3.webp";
import img4 from "@/assets/img/bardage/img4.webp";
import img5 from "@/assets/img/bardage/img5.webp";
import img6 from "@/assets/img/bardage/img6.webp";
import img7 from "@/assets/img/bardage/img7.webp";
import img8 from "@/assets/img/bardage/img8.webp";
import img9 from "@/assets/img/bardage/img9.webp";
import img10 from "@/assets/img/bardage/img10.webp";

const dosisFont = localFont({ src: "../../assets/fonts/Dosis-Medium.ttf" });

function Bardage() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

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
            className="capitalize text-black tracking-wider text-center text-4xl lg:text-5xl font-semibold mt-8 lg:mt-0 mx-auto"
            transition={{
              type: "spring",
              stiffness: 40,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            Bardage (Différents types de revêtements extérieurs)
          </motion.h1>
          <p
            className={`${dosisFont.className} text-darkGrey w-[90vw] lg:w-full mt-6 lg:mt-10`}
          >
            Chez Charpente Menuiserie Durand, nous comprenons l&apos;importance
            d&apos;un bardage de qualité pour protéger et embellir votre maison.
            Avec notre service de bardage, nous vous offrons une gamme complète
            de revêtements extérieurs pour répondre à vos besoins spécifiques et
            mettre en valeur le caractère unique de votre propriété. Que vous
            recherchiez un aspect traditionnel avec du bois naturel, une
            esthétique moderne avec des matériaux composites, ou une solution
            pratique avec des revêtements en PVC, notre équipe expérimentée est
            là pour vous conseiller et réaliser votre projet avec expertise. Le
            bardage de votre maison ne se limite pas seulement à
            l&apos;esthétique ; il joue également un rôle crucial dans la
            protection contre les intempéries et les dommages causés par
            l&apos;exposition aux éléments extérieurs. C&apos;est pourquoi nous
            veillons à choisir des matériaux durables et résistants, tout en
            vous offrant une variété de styles et de finitions pour correspondre
            à vos préférences esthétiques. Avec notre savoir-faire artisanal et
            notre souci du détail, nous nous engageons à vous fournir un bardage
            de qualité supérieure qui ajoutera de la valeur et du caractère à
            votre maison. Faites confiance à Charpente Menuiserie Durand pour
            transformer l&apos;apparence extérieure de votre propriété et lui
            donner un nouveau souffle de vie.
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

export default Bardage;
