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

import img1 from "@/assets/img/extension-maison-ossature/img1.webp";
import img2 from "@/assets/img/extension-maison-ossature/img2.webp";
import img3 from "@/assets/img/extension-maison-ossature/img3.webp";
import img4 from "@/assets/img/extension-maison-ossature/img4.webp";
import img5 from "@/assets/img/extension-maison-ossature/img5.webp";
import img6 from "@/assets/img/extension-maison-ossature/img6.webp";
import img7 from "@/assets/img/extension-maison-ossature/img7.webp";
import img8 from "@/assets/img/extension-maison-ossature/img8.webp";

const dosisFont = localFont({ src: "../../assets/fonts/Dosis-Medium.ttf" });

function ExtensionOssature() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

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
            Extension ou maison ossature
          </motion.h1>
          <p
            className={`${dosisFont.className} text-darkGrey w-[90vw] lg:w-full mt-6 lg:mt-10`}
          >
            Votre rêve de maison prend forme avec notre expertise en extension
            et construction à ossature. Nous comprenons que votre maison est
            bien plus qu&apos;un simple bâtiment : c&apos;est votre refuge,
            votre havre de paix. C&apos;est pourquoi nous mettons tout en œuvre
            pour réaliser vos projets avec précision et dévouement.
            L&apos;ossature bois offre une flexibilité de conception
            incomparable, permettant des espaces lumineux, aérés et
            personnalisés selon vos besoins et vos goûts. Notre équipe qualifiée
            travaille en étroite collaboration avec vous à chaque étape du
            processus, de la conception à la réalisation, pour s&apos;assurer
            que votre nouvelle extension ou maison correspond parfaitement à
            votre vision. Que vous souhaitiez agrandir votre espace de vie
            existant ou construire une maison entièrement nouvelle, nous sommes
            là pour vous guider, vous conseiller et vous offrir des solutions
            sur mesure. Avec notre engagement envers la qualité, la durabilité
            et le service client, vous pouvez avoir l&apos;assurance que votre
            projet sera entre de bonnes mains.
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

export default ExtensionOssature;
