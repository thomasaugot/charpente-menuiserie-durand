"use client";

import { motion } from "framer-motion";
import TestimonialItem from "@/components/ui/TestimonialItem";
import GoogleWidget from "@/components/ui/GoogleWidget";
import { avis } from "@/data/testimonials";

const Testimonials = () => (
  <section id="testimonials" className="relative py-24 lg:py-32 overflow-hidden">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `url('/img/woodbg.jpg')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/32 via-black/26 to-black/22" />

    <div className="relative z-10">
      <div className="max-w-[1400px] mx-auto w-full px-8 md:px-16 lg:px-24 mb-16">
        <h1 className="text-white text-4xl lg:text-5xl font-semibold tracking-wider">
          <span className="text-gray-300 text-5xl lg:text-6xl">I</span>ls nous ont fait confiance
        </h1>
      </div>

      <div className="marquee-track overflow-hidden mb-16">
        <div className="flex gap-4 animate-marquee-left w-max px-4">
          {[...avis, ...avis, ...avis, ...avis].map((item, i) => (
            <TestimonialItem key={i} text={item.text} author={item.author} date={item.date} />
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto w-full flex justify-center px-8 lg:px-24">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 16 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <GoogleWidget />
        </motion.div>
      </div>
    </div>
  </section>
);

export default Testimonials;
