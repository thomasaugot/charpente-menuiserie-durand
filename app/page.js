"use client";

// here is all the code found on the homepage

// import testimonialBgImg from "/assets/img/testimonial-bg.jpg";
import ServiceCards from "@/components/ServiceCards";
import Carousel from "@/components/Carousel";
import TestimonialItem from "@/components/TestimonialItem";
import GoogleWidget from "@/components/GoogleWidget";
import Navbar from "@/components/Navbar";
import OpeningHours from "@/components/OpeningHours";
import StaticForm from "@/components/StaticForm";
import ContactDetails from "@/components/ContactDetails";
import woodBg from "/assets/img/woodbg.jpg";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import Template from "./template";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import homeBg from "/assets/img/home.png";
import localFont from "next/font/local";

const robotoFont = localFont({ src: "../assets/fonts/RobotoMono-Regular.ttf" });

const avis = [
  {
    text: "La SARL Charpente Menuiserie Durand est intervenue chez nous en février 2023 pour un renforcement de charpente. Le devis a été réalisé rapidement après une visite pour estimer les travaux. Le tarif proposé était compétitif. L'intervention s'est ensuite faite quelques jours après. M. Durand et ses employés sont sympathiques, souriants, rassurants et inspirent confiance. En une journée ils ont effectué un gros travail pour un résultat très propre et satisfaisant. Je suis pleinement satisfait.",
    author: "Arno Lesaint",
  },
  {
    text: "Je suis pleinement satisfaite de la société CMD. La prestation rendue (changement d'une poutre et création d'un jambage de renfort) est très qualitative. Entreprise sérieuse, travail soigné et très professionnel. Je recommande les service de Monsieur Durand.",
    author: "Sylvie Nouvellon",
  },
];

export default function Home() {
  useEffect(() => emailjs.init(process.env.NEXT_PUBLIC_PUBLIC_KEY), []);

  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2, // set threshold to 20%
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <Template>
      <main className="flex flex-col">
        <ContactDetails />
        <Navbar />
        <section
          id="home"
          className="relative w-full h-screen flex items-center justify-center px-4 lg:px-24"
        >
          <div className="filter-home bg-white h-[100vh] w-[200vw] absolute"></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${homeBg.src})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              zIndex: -1,
            }}
          />

          <div className="flex flex-col z-10">
            <h1 className="text-8xl gradient-text mt-12">
              Charpente <span className={`${robotoFont.className}`}>M</span>enuiserie Durand
            </h1>
            <div class="overlay"></div>

            <div class="text">
              <div class="wrapper">
                <div class="letter">L</div>
                <div class="shadow">L</div>
              </div>
              <div class="wrapper">
                <div class="letter">&apos;</div>
                <div class="shadow">&apos;</div>
              </div>
              <div class="wrapper">
                <div class="letter">e</div>
                <div class="shadow">e</div>
              </div>
              <div class="wrapper">
                <div class="letter">x</div>
                <div class="shadow">x</div>
              </div>
              <div class="wrapper">
                <div class="letter">p</div>
                <div class="shadow">p</div>
              </div>
              <div class="wrapper">
                <div class="letter">e</div>
                <div class="shadow">e</div>
              </div>
              <div class="wrapper">
                <div class="letter">r</div>
                <div class="shadow">r</div>
              </div>
              <div class="wrapper">
                <div class="letter">t</div>
                <div class="shadow">t</div>
              </div>
              <div class="wrapper">
                <div class="letter">i</div>
                <div class="shadow">i</div>
              </div>
              <div class="wrapper">
                <div class="letter">s</div>
                <div class="shadow">s</div>
              </div>
              <div class="wrapper">
                <div class="letter">e</div>
                <div class="shadow">e</div>
              </div>
              <div class="wrapper">
                <div class="letter">&nbsp;</div>
                <div class="shadow">&nbsp;</div>
              </div>
              <div class="wrapper">
                <div class="letter">B</div>
                <div class="shadow">B</div>
              </div>
              <div class="wrapper">
                <div class="letter">o</div>
                <div class="shadow">o</div>
              </div>
              <div class="wrapper">
                <div class="letter">i</div>
                <div class="shadow">i</div>
              </div>
              <div class="wrapper">
                <div class="letter">s</div>
                <div class="shadow">s</div>
              </div>
              <div class="wrapper">
                <div class="letter">&nbsp;</div>
                <div class="shadow">&nbsp;</div>
              </div>
              <div class="wrapper">
                <div class="letter">a</div>
                <div class="shadow">a</div>
              </div>
              <div class="wrapper">
                <div class="letter">u</div>
                <div class="shadow">u</div>
              </div>
              <div class="wrapper">
                <div class="letter">&nbsp;</div>
                <div class="shadow">&nbsp;</div>
              </div>
              <div class="wrapper">
                <div class="letter">S</div>
                <div class="shadow">S</div>
              </div>
              <div class="wrapper">
                <div class="letter">e</div>
                <div class="shadow">e</div>
              </div>
              <div class="wrapper">
                <div class="letter">r</div>
                <div class="shadow">r</div>
              </div>
              <div class="wrapper">
                <div class="letter">v</div>
                <div class="shadow">v</div>
              </div>
              <div class="wrapper">
                <div class="letter">i</div>
                <div class="shadow">i</div>
              </div>
              <div class="wrapper">
                <div class="letter">c</div>
                <div class="shadow">c</div>
              </div>
              <div class="wrapper">
                <div class="letter">e</div>
                <div class="shadow">e</div>
              </div>
              <div class="wrapper">
                <div class="letter">&nbsp;</div>
                <div class="shadow">&nbsp;</div>
              </div>
              <div class="wrapper">
                <div class="letter">d</div>
                <div class="shadow">d</div>
              </div>
              <div class="wrapper">
                <div class="letter">e</div>
                <div class="shadow">e</div>
              </div>
              <div class="wrapper">
                <div class="letter">&nbsp;</div>
                <div class="shadow">&nbsp;</div>
              </div>
              <div class="wrapper">
                <div class="letter">v</div>
                <div class="shadow">v</div>
              </div>
              <div class="wrapper">
                <div class="letter">o</div>
                <div class="shadow">o</div>
              </div>
              <div class="wrapper">
                <div class="letter">s</div>
                <div class="shadow">s</div>
              </div>
              <div class="wrapper">
                <div class="letter">&nbsp;</div>
                <div class="shadow">&nbsp;</div>
              </div>
              <div class="wrapper">
                <div class="letter">P</div>
                <div class="shadow">P</div>
              </div>
              <div class="wrapper">
                <div class="letter">r</div>
                <div class="shadow">r</div>
              </div>
              <div class="wrapper">
                <div class="letter">o</div>
                <div class="shadow">o</div>
              </div>
              <div class="wrapper">
                <div class="letter">j</div>
                <div class="shadow">j</div>
              </div>
              <div class="wrapper">
                <div class="letter">e</div>
                <div class="shadow">e</div>
              </div>
              <div class="wrapper">
                <div class="letter">t</div>
                <div class="shadow">t</div>
              </div>
              <div class="wrapper">
                <div class="letter">s</div>
                <div class="shadow">s</div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="flex flex-col px-2 py-8 lg:px-12 lg:py-12 relative h-auto bg-darkGrey custom-pointer"
        >
          <div className="lg:hidden polygon w-[110vw] h-[45px] bg-primary overflow-hidden absolute transform -scale-y-100 top-0 -right-[120px] md:right-[-320px] z-20"></div>
          <h1 className="text-white max-w-[80vw]  text-5xl ml-[5%] my-4 text-center tracking-wider font-medium">
            <span className={`${robotoFont.className} text-primary text-6xl`}>N</span>os Services
          </h1>
          <div className="flex w-full lg:my-12 z-30 mx-auto max-w-[1200px]">
            <ServiceCards />
          </div>
          <div className="hidden lg:block polygon w-[49vw] h-[55px] bg-primary overflow-hidden absolute bottom-0 -right-[200px] z-20 xl:right-[-245px]"></div>
        </section>

        <section
          id="gallery"
          className="h-auto relative flex items-center justify-around brick-bg px-2 py-8"
        >
          <h1 className="absolute top-[5%] lg:top-[9%] lg:left-[5%] max-w-[85vw] tracking-wide font-semibold text-4xl text-darkGrey mx-auto text-center lg:text-left">
            <span className={`${robotoFont.className} text-primary text-6xl`}>N</span>os
            réalisations en quelques photos
          </h1>
          <Carousel />
          <div className="polygon w-[120vw] lg:w-[49vw] h-[45px] lg:h-[55px] bg-darkGrey overflow-hidden absolute -scale-y-100 bottom-0 right-[105px] lg:left-[-200px] xl:left-[-240px] z-20"></div>
        </section>
        <section
          id="testimonials"
          className="relative flex flex-col lg:items-center lg:px-24 "
          ref={ref}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${woodBg.src})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              zIndex: -1,
            }}
          />
          <h1 className="absolute top-6 md:text-nowrap lg:top-[9%] text-center lg:text-left lg:left-[5%] w-full lg:w-[30vw] tracking-wider font-semibold text-5xl text-white">
            <span className="text-white text-4xl">
              <span className="text-darkGrey text-5xl">I</span>ls nous ont fait confiance
            </span>
          </h1>
          <div className="flex flex-col lg:flex-row mt-24 mb-12 lg:mt-[150px] lg:mb-[150px] gap-16 lg:gap-8 mx-auto items-center">
            <div className="flex flex-col md:flex-row relative gap-8">
              {avis.map((item, index) => (
                <TestimonialItem key={index} text={item.text} author={item.author} />
              ))}
            </div>
            <motion.div
              whileInView={{ scale: 1, opacity: 1 }}
              initial={{ scale: 0.8, opacity: 0 }}
              viewport={{ once: true }}
              animate={{ scale: -0.3 }}
              transition={{
                type: "spring",
                stiffness: 60,
                delay: 0.3,
              }}
            >
              <GoogleWidget />
            </motion.div>
          </div>
        </section>
        <section
          id="contact"
          className="flex flex-col items-center lg:justify-around brick-bg h-full p-24 relative"
        >
          <div className="polygon w-[110vw] lg:w-[49vw] h-[45px] lg:h-[55px] bg-primary overflow-hidden absolute -scale-y-100 top-0 -right-[120px] md:right-[-240px] lg:right-[-200px] xl:right-[-240px] z-20"></div>
          <div className="flex flex-col-reverse lg:flex-row lg:gap-12 items-center">
            <OpeningHours />
            <div className="flex flex-col form-shadow p-8 mx-4 -mt-16 lg:mt-0">
              <h1 className="text-black font-semibold mb-8 text-lg max-w-[90vw]">
                Besoin d&apos;un renseignement? Laissez-nous un message !
              </h1>
              <StaticForm />
            </div>
          </div>
          <div className="polygon hidden lg:block w-[120vw] lg:w-[49vw] h-[55px] bg-primary overflow-hidden absolute -scale-y-100 bottom-0 right-[105px] lg:left-[-200px] xl:left-[-240px] z-20"></div>
        </section>
      </main>
    </Template>
  );
}
