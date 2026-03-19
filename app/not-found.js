import Link from "next/link";
import Image from "next/image";
import { dosisFont } from "@/lib/fonts";

export const metadata = {
  title: "Page introuvable | Charpente Menuiserie Durand",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-20">
      <Link href="/" className="mb-10">
        <Image
          src="/img/logo.png"
          alt="Charpente Menuiserie Durand"
          width={180}
          height={52}
          className="w-[160px] h-auto"
        />
      </Link>

      <p
        className={`${dosisFont.className} text-[120px] sm:text-[160px] font-bold leading-none text-primary`}
      >
        404
      </p>

      <h1
        className={`${dosisFont.className} text-2xl sm:text-3xl font-bold text-dark-grey mt-4 text-center`}
      >
        Page introuvable
      </h1>

      <p
        className={`${dosisFont.className} text-dark-grey/60 text-base sm:text-lg mt-4 text-center max-w-md`}
      >
        La page que vous cherchez n&apos;existe pas ou a été déplacée.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 mt-10">
        <Link
          href="/"
          className={`${dosisFont.className} px-8 py-3 rounded-full bg-primary text-white font-semibold tracking-wide text-sm hover:bg-orange-600 transition-colors duration-200 text-center`}
        >
          Retour à l&apos;accueil
        </Link>
        <Link
          href="/#contact"
          className={`${dosisFont.className} px-8 py-3 rounded-full border border-primary text-primary font-semibold tracking-wide text-sm hover:bg-primary/8 transition-colors duration-200 text-center`}
        >
          Nous contacter
        </Link>
      </div>
    </div>
  );
}
