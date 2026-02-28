import { IoMdStar } from "react-icons/io";
import { RiDoubleQuotesL } from "react-icons/ri";
import localFont from "next/font/local";

const dosisFont = localFont({ src: "../assets/fonts/Dosis-Regular.ttf" });

function TestimonialItem({ text, author, date }) {
  const initial = author.charAt(0).toUpperCase();

  return (
    <div className="w-80 lg:w-96 shrink-0 flex flex-col bg-white/18 backdrop-blur-lg border border-white/28 rounded-2xl p-6 gap-3 shadow-[0_10px_28px_rgba(0,0,0,0.12)]">
      {/* Stars */}
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <IoMdStar key={i} size={16} className="text-yellow-400" />
        ))}
      </div>

      {/* Quote */}
      <RiDoubleQuotesL size={24} className="text-primary shrink-0" />
      <p className={`${dosisFont.className} text-white text-base leading-relaxed`}>
        {text}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 mt-auto pt-3 border-t border-white/20">
        <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0">
          <span className="text-white font-bold text-sm">{initial}</span>
        </div>
        <div>
          <p className={`${dosisFont.className} text-white font-semibold text-base`}>{author}</p>
          {date && <p className={`${dosisFont.className} text-white/70 text-sm`}>{date}</p>}
        </div>
      </div>
    </div>
  );
}

export default TestimonialItem;
