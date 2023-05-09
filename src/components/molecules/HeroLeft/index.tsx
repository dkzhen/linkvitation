import React, { useState } from "react";

export const HeroLeft: React.FC = () => {
  const [texts, setTexts] = useState<string>("");
  const searching = (event: React.FormEvent) => {
    event.preventDefault();
    alert(`This feature still in development! 🙏`);
    // setTexts("");
  };

  return (
    <div className="left flex flex-col justify-center h-full md:w-1/2 w-full z-10 pt-7 md:pt-10  md:pl-20">
      <h1 className="capitalize font-bold text-sm md:text-4xl md:w-[60%] px-5 text-primary-800 md:mb-7 mb-3">
        Share your invitation to any location with LinkVitation
      </h1>
      <p className="px-5 text-primary-600 text-[10px] mb-7 md:w-[70%]">
        Everything you need about finding your place to live will be here, where
        it will be easier for you
      </p>

      <div>
        <p className="text-primary-400">Our Partnership</p>
        <div className="flex items-center justify-start gap-4">
          <img src="https://househunter.vercel.app/traveloka.png" alt="" />
          <img src="https://househunter.vercel.app/tiket.png" alt="" />
          <img src="https://househunter.vercel.app/airbnb.png" alt="" />
          <img src="https://househunter.vercel.app/trip-advisor.png" alt="" />
        </div>
      </div>
    </div>
  );
};
