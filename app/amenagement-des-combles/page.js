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

import img1 from "@/assets/img/aménagement-combles/img1.webp";

const dosisFont = localFont({ src: "../../assets/fonts/Dosis-Medium.ttf" });

function AmenagementCombles() {
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
            Aménagement des Combles
          </motion.h1>
          <p
            className={`${dosisFont.className} text-darkGrey w-[90vw] lg:w-full mt-6 lg:mt-10`}
          >
            Que vous cherchiez à créer une chambre supplémentaire, un bureau à
            domicile, une salle de jeux pour les enfants ou tout autre espace
            fonctionnel, notre équipe expérimentée est là pour vous aider à
            réaliser votre projet. Nous comprenons l&apos;importance de tirer le
            meilleur parti de chaque mètre carré de votre maison, et nous
            travaillons en étroite collaboration avec vous pour concevoir un
            aménagement des combles qui répond à vos besoins, à votre style de
            vie et à votre budget. Avec notre expertise en charpente et en
            menuiserie, nous pouvons transformer vos combles en un espace
            utilisable et confortable, tout en préservant l&apos;intégrité
            structurelle de votre maison. Nous utilisons des matériaux de haute
            qualité et des techniques de construction innovantes pour assurer la
            solidité, la durabilité et la sécurité de chaque projet.
            Laissez-nous vous aider à libérer le potentiel inexploité de vos
            combles et à créer un espace supplémentaire qui répond à vos besoins
            et à ceux de votre famille. Contactez-nous dès aujourd&apos;hui pour
            discuter de votre projet d&apos;aménagement des combles avec
            l&apos;équipe de Charpente Menuiserie Durand.
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

export default AmenagementCombles;
