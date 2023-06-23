import React from "react";
import HeroBG from "../../../../../src/assets/hero-bg.png";
import { BlurImage } from "../../../atoms/BlurImageHero";
import { HeroLeft } from "../../../molecules/HeroLeft";
// import HeroBG from "../../../../public/hero-bg.png";
// import HeroBG from "https://househunter.vercel.app/hero-bg.png";

export const Hero: React.FC = () => {
  return (
    <div className="w-full h-screen bg-cover bg-no-repeat bg-white">
      <div className="flex flex-col md:flex-row h-full w-full">
        <BlurImage />
        <HeroLeft />
        <div
          className="right w-1/2 rounded-bl-[80px] h-full hidden md:flex relative overflow-x-scroll no-scrollbar scrollbar-hide bg-no-repeat "
          style={{ backgroundImage: `url(${HeroBG})` }}
        ></div>
      </div>
    </div>
  );
};
