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

import img1 from "@/assets/img/solivage-porteur/img1.webp";
import img2 from "@/assets/img/solivage-porteur/img2.webp";
import img3 from "@/assets/img/solivage-porteur/img3.webp";

const dosisFont = localFont({ src: "../../assets/fonts/Dosis-Medium.ttf" });

function Solivage() {
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
            Solivage Porteur (Plancher)
          </motion.h1>
          <p
            className={`${dosisFont.className} text-darkGrey w-[90vw] lg:w-full mt-6 lg:mt-10`}
          >
            Que vous envisagiez de construire une nouvelle maison ou de rénover
            un espace existant, nos experts en solivage porteur sont là pour
            vous accompagner à chaque étape du processus. Nous commençons par
            une évaluation approfondie de vos besoins et de la structure de
            votre bâtiment, afin de concevoir un plan de solivage qui garantit
            une distribution uniforme de la charge et une solidité optimale.
            Grâce à notre expérience et à notre expertise dans le domaine de la
            charpente et de la menuiserie, nous sommes en mesure de vous
            proposer une variété de solutions de solivage porteur, allant des
            méthodes traditionnelles aux techniques modernes. Nous utilisons des
            matériaux de haute qualité et des techniques de construction
            éprouvées pour assurer la durabilité et la longévité de votre
            plancher, tout en respectant les normes de sécurité et de
            construction en vigueur. Chez Charpente Menuiserie Durand, nous
            sommes fiers de notre engagement envers l&apos;excellence et la
            satisfaction client. Nous nous efforçons de fournir des services de
            solivage porteur de haute qualité, réalisés avec précision et souci
            du détail, pour garantir des résultats qui dépassent vos attentes.
            Faites confiance à notre équipe qualifiée pour prendre en charge vos
            projets de solivage porteur et bénéficiez d&apos;une solution fiable
            et durable pour votre maison.
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

export default Solivage;
