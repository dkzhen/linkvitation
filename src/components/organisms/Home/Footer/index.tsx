import React from "react";
import { Logo } from "../../../atoms/Logo";
import { BlurImageFooter } from "../../../atoms/BlurImageFooter";
import { SocialMediaFooter } from "../../../molecules/SocialMediaFooter";
import { FooterInfo } from "../../../molecules/FooterInfo";

export const Footer: React.FC = () => {
  return (
    <div className="relative flex flex-col items-start justify-between px-6 md:flex-row md:px-20 mt-12  md:mt-16 h-auto jus md:h-80 pt-10">
      <BlurImageFooter />
      {/* <div>HAlo</div>
      <div>Halow</div> */}
      <div className="flex flex-col w-full md:w-2/5">
        <Logo />
        <p className="text-primary-400 leading-7 mt-5 ">
          Share Your Invitation To Any Location With LinkVitation.
        </p>
        <p className="text-primary-400 leading-7  ">
          {" "}
          We provide digital invitation creation for the wedding you want.
        </p>
        <p className="text-primary-400 leading-7  ">
          {" "}
          Immediately place an order for your special wedding!
        </p>
      </div>
      <div className="">
        <FooterInfo infoTitle="Social Media">
          <SocialMediaFooter />
        </FooterInfo>
      </div>
      <div className="flex flex-col md:flex-row pb-8 md:pb-0 ">
        <FooterInfo infoTitle="Contact">
          <p>Kota Pekalongan , Indonesia </p>
          <p>(082) 5525-0110</p>
          <p>rsvp@Linkvitation.com</p>
        </FooterInfo>
      </div>
    </div>
  );
};
