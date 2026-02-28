import Link from "next/link";
import { motion } from "framer-motion";
import { dosisFont } from "@/lib/fonts";

export default function ServiceRelatedSection({ serviceCards }) {
  if (!serviceCards.length) return null;

  return (
    <section className="max-w-[1400px] mx-auto w-full px-6 md:px-12 lg:px-20 pb-24">
      <div className="border-t border-dark-grey/10 pt-14 mb-10">
        <h2 className="text-dark-grey text-3xl md:text-4xl tracking-wider font-medium">
          <span className="text-primary text-5xl">D</span>écouvrez tous nos services
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2">
        {serviceCards.map((item, i) => (
          <motion.div
            key={item.slug}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: (i % 8) * 0.03 }}
          >
            <Link
              href={`/services/${item.slug}`}
              className={`${dosisFont.className} group flex items-center justify-between py-3 border-b border-dark-grey/15 text-dark-grey/80 hover:text-primary transition-colors duration-200`}
            >
              <span className="text-base md:text-lg font-semibold">{item.title}</span>
              <span className="text-lg text-dark-grey/45 group-hover:text-primary group-hover:translate-x-1 transition-all duration-200">
                →
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
