import { IoMdStar } from "react-icons/io";
import google from "@/assets/img/google.png";
import Image from "next/image";
import localFont from "next/font/local";

const dosisFont = localFont({ src: "../assets/fonts/Dosis-Regular.ttf" });

function GoogleWidget() {
  return (
    <a
      href="https://www.google.com/search?sca_esv=601739216&rlz=1C1ONGR_frFR1029FR1030&tbm=lcl&sxsrf=ACQVn0-fWAj5KZ3_YMpjnAs56s2pPg6k0w:1706281887129&q=Charpente+Menuiserie+Durand+Reviews&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2NLSwsDC1NLIwszAzMTM0NDA12MDI-IpR2TkjsaggNa8kVcE3Na80szi1KDNVwaW0KDEvRSEotSwztbx4ESsxqgAd6xn9ZgAAAA&rldimm=1188859286864611050&hl=en-FR&sa=X&ved=2ahUKEwjahpOuq_uDAxVmbKQEHTqqAiEQ9fQKegQIRBAF&biw=1366&bih=607&dpr=1#lkt=LocalPoiReviews&lrd=0x480f89d613b78025:0x107fad38f97d46ea,3,,,,"
      target="_blank"
      rel="noreferrer"
      className="group flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-6 py-4 hover:bg-white/15 transition-colors duration-300"
    >
      <Image src={google} alt="Google" width={80} height={26} className="shrink-0" />
      <div className="w-px h-8 bg-white/20 shrink-0" />
      <div className="flex flex-col gap-1">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <IoMdStar key={i} size={16} className="text-yellow-400" />
          ))}
        </div>
        <p className={`${dosisFont.className} text-white text-xs font-semibold tracking-wider uppercase`}>
          Excellent · Donnez votre avis
        </p>
      </div>
    </a>
  );
}

export default GoogleWidget;
