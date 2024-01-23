// here is all the code found on the homepage

import Image from "next/image";
import yourImg from "../assets/img/placeholder-img.jpg";
import backgroundImg from "../assets/img/bg-homepage.jpg";

export default function Home() {
  return (
    <main className="flex flex-col">
      <section
        id="about"
        className="relative w-[100%] h-[60vh] items-center justify-center"
        style={{
          backgroundImage: `url(${backgroundImg.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></section>
      <section id="gallery" className="flex items-center justify-around bg-gray-300 h-[60vh]">
        <span>Gallery</span>
        <Image src={yourImg} width={"auto"} height={"auto"} alt="yourImg" className="w-24" />
      </section>
      <section id="testimonials" className="flex items-center justify-around bg-slate-600 h-[60vh]">
        <Image src={yourImg} width={"auto"} height={"auto"} alt="yourImg" className="w-24" />
        <span>Testimonials</span>
      </section>
      <section id="contact" className="flex items-center justify-around bg-gray-300 h-[60vh]">
        <span>Contact</span>
        <Image src={yourImg} width={"auto"} height={"auto"} alt="yourImg" className="w-24" />
      </section>
    </main>
  );
}
