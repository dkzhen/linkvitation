import React, { useState } from "react";
import HeroBG from "../../../assets/hero-bg.png";
import { BlurImage } from "../../atoms/BlurImageHero";
export const HeroMobile: React.FC = () => {
  const [texts, setTexts] = useState<string>("");
  const searching = (event: React.FormEvent) => {
    event.preventDefault();
    alert(`This feature still in development! 🙏`);
    // setTexts("");
  };

  return (
    <div className="px-5 left flex flex-col justify-center md:justify-center h-full md:w-1/2 w-screen md:z-10  md:pt-10 pt-16 md:pl-20">
      <div className="  h-[400px]   w-full  md:hidden flex  mb-5 ">
        <img className="object-cover rounded-bl-[60px]" src={HeroBG} alt="" />
      </div>

      <h1 className="capitalize font-bold text-[20px] md:text-4xl md:w-[60%]  text-primary-800 md:mb-7 mb-5">
        Share your invitation to any location with LinkVitation
      </h1>

      <p className=" text-primary-600 text-[15px] mb-10 md:mb-7 md:w-[70%]">
        Everything you need about finding your place to live will be here, where
        it will be easier for you
      </p>
    </div>
  );
};
