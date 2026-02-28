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

import img1 from "@/assets/img/terrasse/img1.webp";
import img2 from "@/assets/img/terrasse/img2.webp";
import img3 from "@/assets/img/terrasse/img3.webp";

const dosisFont = localFont({ src: "../../assets/fonts/Dosis-Medium.ttf" });

function Terrasse() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const images = [img1, img2, img3];

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
            Terrasse
          </motion.h1>
          <p
            className={`${dosisFont.className} text-darkGrey w-[90vw] lg:w-full mt-6 lg:mt-10`}
          >
            Transformez votre espace extérieur en un havre de paix avec nos
            services de construction de terrasses. Chez Charpente Menuiserie
            Durand, nous comprenons l&apos;importance d&apos;avoir un espace
            extérieur fonctionnel et accueillant où vous pouvez vous détendre,
            recevoir des amis et profiter de la beauté de la nature. Que vous
            rêviez d&apos;une terrasse en bois chaleureuse et rustique ou
            d&apos;une terrasse en composite moderne et facile d&apos;entretien,
            notre équipe d&apos;experts est là pour vous aider à concrétiser
            votre vision. Nous travaillons en étroite collaboration avec vous
            pour concevoir et construire une terrasse qui répond à vos besoins,
            à votre style de vie et à votre budget. Nos terrasses sont
            construites avec des matériaux de haute qualité et des techniques de
            construction robustes pour assurer leur durabilité et leur
            longévité. Que vous souhaitiez une petite terrasse intime ou une
            grande terrasse pour accueillir des réunions familiales, nous sommes
            là pour faire de votre rêve une réalité. Faites de votre espace
            extérieur un lieu de rassemblement et de détente avec une magnifique
            terrasse conçue et construite par Charpente Menuiserie Durand.
            Contactez-nous dès aujourd&apos;hui pour commencer à planifier votre
            projet de terrasse.
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

export default Terrasse;
