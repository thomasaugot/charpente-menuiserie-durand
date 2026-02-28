"use client";

import { useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";
import { dosisFont } from "@/lib/fonts";
import { PHONE_RAW, PHONE_DISPLAY, ADDRESS, SOCIAL } from "@/data/contact";

const Contact = () => {
  useEffect(() => emailjs.init(process.env.NEXT_PUBLIC_PUBLIC_KEY), []);

  return (
    <section id="contact" className="brick-bg relative">
      <div className="polygon w-[110vw] lg:w-[49vw] h-[45px] lg:h-[55px] bg-primary overflow-hidden absolute -scale-y-100 top-0 -right-[120px] md:right-[-240px] lg:right-[-200px] xl:right-[-240px] z-20" />
      <div className="max-w-[1400px] mx-auto w-full flex flex-col px-6 pt-16 pb-20 md:px-12 lg:px-16 lg:pt-20 lg:pb-28">
        <h1 className="text-dark-grey text-4xl lg:text-5xl mb-10 lg:mb-14 tracking-wider font-semibold">
          <span className="text-primary">C</span>ontactez-nous pour discuter de
          votre projet
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Form */}
          <div className="bg-white/22 backdrop-blur-xl border border-white/30 rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.2)] px-8 pt-8 pb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-primary shrink-0" />
              <h3 className="text-dark-grey font-bold text-2xl tracking-wider">
                Envoyer un message
              </h3>
            </div>
            <ContactForm />
          </div>

          {/* Contact info */}
          <div className="bg-white/22 backdrop-blur-xl border border-white/30 rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.2)] p-8 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-primary shrink-0" />
              <h3 className="text-dark-grey font-bold text-2xl tracking-wider">
                Nous contacter
              </h3>
            </div>

            <div>
              <p
                className={`text-dark-grey/50 text-xs font-semibold uppercase tracking-widest mb-1 ${dosisFont.className}`}
              >
                Téléphone
              </p>
              <a
                href={`tel:${PHONE_RAW}`}
                className={`text-dark-grey font-medium text-base hover:text-primary transition-colors duration-300 ${dosisFont.className}`}
              >
                {PHONE_DISPLAY}
              </a>
            </div>

            <div className="border-t border-dark-grey/10 pt-4">
              <p
                className={`text-dark-grey/50 text-xs font-semibold uppercase tracking-widest mb-1 ${dosisFont.className}`}
              >
                Adresse
              </p>
              <p
                className={`text-dark-grey font-medium text-base leading-relaxed ${dosisFont.className}`}
              >
                {ADDRESS.street}
                <br />
                {ADDRESS.city}
              </p>
            </div>

            <div className="border-t border-dark-grey/10 pt-4">
              <p
                className={`text-dark-grey/50 text-xs font-semibold uppercase tracking-widest mb-1 ${dosisFont.className}`}
              >
                Horaires
              </p>
              <p
                className={`text-dark-grey font-medium text-base ${dosisFont.className}`}
              >
                Ouvert du lundi au vendredi de 08h00 à 18h30
              </p>
              <p
                className={`text-dark-grey/40 text-sm mt-0.5 ${dosisFont.className}`}
              >
                Fermé le week-end
              </p>
            </div>

            <div className="border-t border-dark-grey/10 pt-4">
              <p
                className={`text-dark-grey/50 text-xs font-semibold uppercase tracking-widest mb-3 ${dosisFont.className}`}
              >
                Réseaux sociaux
              </p>
              <div className="flex gap-3">
                <a
                  href={SOCIAL.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary group transition-colors duration-300"
                >
                  <FaFacebook
                    size={17}
                    className="text-primary group-hover:text-white transition-colors duration-300"
                  />
                </a>
                <a
                  href={SOCIAL.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary group transition-colors duration-300"
                >
                  <FaInstagram
                    size={17}
                    className="text-primary group-hover:text-white transition-colors duration-300"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="polygon hidden lg:block w-[120vw] lg:w-[49vw] h-[55px] bg-primary overflow-hidden absolute -scale-y-100 bottom-0 right-[105px] lg:left-[-200px] xl:left-[-240px] z-20" />
    </section>
  );
};

export default Contact;
