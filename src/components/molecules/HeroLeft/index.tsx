import React, { useState } from "react";
import HeroBG from "../../../assets/hero-bg.png";
export const HeroLeft: React.FC = () => {
  const [texts, setTexts] = useState<string>("");
  const searching = (event: React.FormEvent) => {
    event.preventDefault();
    alert(`This feature still in development! 🙏`);
    // setTexts("");
  };

  return (
    <div className="px-5 left flex flex-col justify-center md:justify-center h-full md:w-1/2 w-screen md:z-10  md:pt-10 pt-16 md:pl-20">
      <div
        className=" rounded-bl-[60px] h-2/4 w-full  md:hidden flex  overflow-hidden   bg-no-repeat mb-5 "
        style={{ backgroundImage: `url(${HeroBG})` }}
      ></div>
      <h1 className="capitalize font-bold text-[20px] md:text-4xl md:w-[60%]  text-primary-800 md:mb-7 ">
        Share your invitation to any location with LinkVitation
      </h1>
      <p className=" text-primary-600 text-[13px] mb-10 md:mb-7 md:w-[70%]">
        Everything you need about finding your place to live will be here, where
        it will be easier for you
      </p>
      <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
        <p className="text-primary-400 text-[19px]">Our Partnership</p>
        <div className="flex  flex-wrap md:flex-none justify-center  ">
          <img src="/0xnetwork.png" width={175} height={175} alt="0xnetwork" />
        </div>
      </div>
    </div>
  );
};
