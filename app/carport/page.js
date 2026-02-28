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

import img1 from "@/assets/img/carport/img1.webp";

const dosisFont = localFont({ src: "../../assets/fonts/Dosis-Medium.ttf" });

function Carport() {
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
            Carport
          </motion.h1>
          <p
            className={`${dosisFont.className} text-darkGrey w-[90vw] lg:w-full mt-6 lg:mt-10`}
          >
            Offrez une protection élégante à votre véhicule avec notre service
            de construction de carports. Chez Charpente Menuiserie Durand, nous
            comprenons l&apos;importance de préserver votre voiture, votre
            caravane ou votre bateau des éléments extérieurs tout en ajoutant
            une touche esthétique à votre propriété. Un carport bien conçu offre
            non seulement une protection contre les intempéries et les rayons du
            soleil, mais il constitue également un ajout fonctionnel et
            attrayant à votre espace extérieur. Que vous recherchiez un design
            moderne, classique ou sur mesure, notre équipe d&apos;experts est là
            pour vous aider à créer un carport qui répond à vos besoins et
            s&apos;harmonise parfaitement avec le style de votre maison. Nous
            utilisons des matériaux de haute qualité et des techniques de
            construction robustes pour garantir la durabilité et la solidité de
            chaque carport que nous construisons. De la planification initiale à
            la réalisation finale, nous travaillons en étroite collaboration
            avec vous pour nous assurer que votre carport répond à vos attentes.
            Protégez votre investissement tout en ajoutant de la valeur et du
            caractère à votre propriété avec un carport conçu sur mesure par
            Charpente Menuiserie Durand. Contactez-nous dès aujourd&apos;hui
            pour commencer à transformer votre espace extérieur.
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

export default Carport;
