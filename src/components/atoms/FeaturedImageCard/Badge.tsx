import React from "react";
import { AiFillFire } from "react-icons/ai";
import { IoIosWallet } from "react-icons/io";
import { HiHome } from "react-icons/hi";
import { BsDiamond, BsStarFill, BsXDiamondFill } from "react-icons/bs";
import { GiCrowDive, GiKing, GiKingJuMask } from "react-icons/gi";

interface Props {
  bgColor?: string;
  textColor?: string;
  preferences?: string;
}
export const Badge: React.FC<Props> = ({
  bgColor = "bg-[#FEE2E2]",
  textColor = "text-[#EF4444]",
  preferences,
}) => {
  return (
    <div
      className={`absolute ${
        preferences === "Popular"
          ? bgColor
          : preferences === "Deluxe"
          ? "bg-[#DBEAFE]"
          : preferences === "Best Deals"
          ? "bg-[#D1FAE5]"
          : preferences === "Premium"
          ? "bg-[#D1FAE5]"
          : bgColor
      } ${
        preferences === "Popular"
          ? textColor
          : preferences === "Deluxe"
          ? "text-[#1D4ED8]"
          : preferences === "Best Deals"
          ? "text-[#047857]"
          : preferences === "Premium"
          ? "text-[#f58f4b]"
          : textColor
      } px-5 py-[6px] rounded-full bottom-10 left-3 flex items-center gap-2`}
    >
      {preferences === "Popular" ? (
        <AiFillFire />
      ) : preferences === "Deluxe" ? (
        <BsXDiamondFill />
      ) : preferences === "Best Deals" ? (
        <IoIosWallet />
      ) : preferences === "Premium" ? (
        <BsStarFill />
      ) : (
        <AiFillFire />
      )}

      <p>{preferences}</p>
    </div>
  );
};
