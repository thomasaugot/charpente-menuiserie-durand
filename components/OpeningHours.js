"use client";

import localFont from "next/font/local";

const dosisFont = localFont({ src: "../assets/fonts/Dosis-Regular.ttf" });

const hours = [
  { day: "Lundi", time: "08h00 - 18h30" },
  { day: "Mardi", time: "08h00 - 18h30" },
  { day: "Mercredi", time: "08h00 - 18h30" },
  { day: "Jeudi", time: "08h00 - 18h30" },
  { day: "Vendredi", time: "08h00 - 18h30" },
  { day: "Samedi", time: "Fermé" },
  { day: "Dimanche", time: "Fermé" },
];

const OpeningHours = () => (
  <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col h-full">
    <div className="flex items-center gap-3 mb-5">
      <div className="w-8 h-[2px] bg-primary shrink-0" />
      <h3 className="text-dark-grey font-bold text-2xl tracking-wider">Horaires</h3>
    </div>
    <div className="flex flex-col divide-y divide-dark-grey/10">
      {hours.map(({ day, time }) => (
        <div key={day} className="flex justify-between py-2.5">
          <p className={`text-dark-grey/70 font-medium text-base ${dosisFont.className}`}>{day}</p>
          <p className={`font-semibold text-base ${time === "Fermé" ? "text-dark-grey/30" : "text-primary"} ${dosisFont.className}`}>
            {time}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default OpeningHours;
