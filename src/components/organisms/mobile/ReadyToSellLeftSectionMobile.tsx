import React from "react";
import { SectionCategory } from "../../atoms/SectionCategory";
import { SectionTitle } from "../../atoms/SectionTitle";
import { IoBed } from "react-icons/io5";
import { GiHomeGarage, GiBathtub, GiStairs } from "react-icons/gi";

import { BsFillTelephoneFill } from "react-icons/bs";
import { PropertyDetail } from "../../atoms/PropertyDetail";
import { GreenButton } from "../../atoms/GreenButton";
import { AiFillFire } from "react-icons/ai";
import { IoMdPhotos } from "react-icons/io";

export const ReadyToSellLeftSectionMobile: React.FC = () => {
  return (
    <div className="w-full  flex mx-auto flex-col mb-3">
      <div className={` flex items-center mb-3 flex-row `}>
        <div className="h-[2px] w-5 rounded-full bg-orange-1000 mr-2"> </div>
        <p className="text-orange-1000 text-md capitalize mr-3 ">
          Ready to Sell!
        </p>
        <div className="px-5 py-[6px] rounded-full bottom-10 left-3 flex items-center gap-2 bg-[#FEE2E2] text-[#EF4444]">
          <AiFillFire />
          <p>Reguler</p>
        </div>
      </div>
      <h2
        className={`text-primary-800 font-semibold text-xl  mb-2 capitalize }`}
      >
        Bagikan momen bahagiamu dengan mudah
      </h2>

      <p className="text-primary-600 text-base  w-[85%] mb-5">
        Undangan yang telah didesain untuk menjadi undangan impian Anda!
      </p>
      <p className="text-primary-800 font-semibold mb-4">Detail Undangan</p>
      <div className=" flex flex-wrap gap-x-10 gap-y-4 border-b-2 w-[100%] border-[#F0F3FD] pb-8 mb-4">
        <PropertyDetail
          unitIcon={<IoMdPhotos size={24} />}
          children={"3 Pictures"}
        />
        <PropertyDetail
          unitIcon={<GiBathtub size={24} />}
          children={"2 Bathrooms"}
        />
        <PropertyDetail
          unitIcon={<GiHomeGarage size={24} />}
          children={"1 Carport"}
        />
        <PropertyDetail
          unitIcon={<GiStairs size={24} />}
          children={"2 Floors"}
        />
      </div>
      <div className="flex items-center w-full mb-10 ">
        <a href="https://instagram.com/linkvitation_official" target="blank">
          <GreenButton
            buttonIcon={<BsFillTelephoneFill />}
            children={"Contact Now"}
          />
        </a>
      </div>
    </div>
  );
};
