import React from "react";
import { FaFacebookF, FaTiktok, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
export const SocialMediaFooter: React.FC = () => {
  return (
    <div className="flex items-start flex-col gap-4 ">
      <span className="flex flex-row space-x-2">
        <FaFacebookF className="cursor-pointer" size={24} color="#3C4563" />
        <a href="https://www.facebook.com/profile.php?id=100092311102088&mibextid=ZbWKwL">
          Facebook
        </a>
      </span>
      <span className="flex flex-row space-x-2">
        <FaTiktok className="cursor-pointer" size={24} color="#3C4563" />
        <a href="https://www.tiktok.com/@linkvitation">Tiktok</a>
      </span>
      <span className="flex flex-row space-x-2">
        <RiInstagramFill className="cursor-pointer" size={24} color="#3C4563" />
        <a href="https://instagram.com/linkvitation_official">Instagram</a>
      </span>
    </div>
  );
};
