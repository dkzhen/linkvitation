import React, { useState } from "react";
import ReactPlayer from "react-player";

export const ReadyToSellRightSection: React.FC = () => {
  const [play, setPlay] = useState(false);
  return (
    <div className="pr-20 relative w-1/2 flex justify-end items-end">
      <div className="w-[500px] h-[400px] relative bg-white/30 backdrop-blur-md rounded-md flex items-center justify-center overflow-hidden">
        <img src="/wedding-v1.png" alt="thumbnail" className="w-full h-full" />
      </div>
      {play ? (
        <></>
      ) : (
        <>
          <div className="absolute -bottom-10 left-8 rounded-md overflow-hidden">
            <img
              src="/map.jpg"
              alt=""
              className="hover:scale-110 duration-150 h-full w-full"
            />
          </div>
          <div className="absolute -bottom-10 left-[340px] rounded-md overflow-hidden">
            <img
              src="/galery.png"
              alt=""
              className="hover:scale-110 duration-150 h-full w-full"
            />
          </div>
          <div className="absolute -bottom-10 right-[90px] rounded-md overflow-hidden">
            <img
              src="/gift.jpg"
              alt=""
              className="hover:scale-110 duration-150 h-full w-full"
            />
          </div>
        </>
      )}
    </div>
  );
};
