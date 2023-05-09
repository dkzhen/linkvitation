import React from "react";
import HeroBG from "../../../../../src/assets/hero-bg.png";
import { BlurImage } from "../../../atoms/BlurImageHero";
import { HeroLeft } from "../../../molecules/HeroLeft";
// import HeroBG from "../../../../public/hero-bg.png";
// import HeroBG from "https://househunter.vercel.app/hero-bg.png";

export const Hero: React.FC = () => {
  return (
    <div className="w-full h-screen justify-center md:justify-none bg-cover bg-no-repeat overflow-x-hidden bg-white">
      <div className="flex flex-col md:flex-row h-full w-screen md:w-full">
        <div className="">
          <BlurImage />
        </div>
        <HeroLeft />
        <div
          className="right w-1/2 rounded-bl-[80px] h-full hidden md:flex relative  no-scrollbar scrollbar-hide bg-no-repeat"
          style={{ backgroundImage: `url(${HeroBG})` }}
        ></div>
      </div>
    </div>
  );
};
