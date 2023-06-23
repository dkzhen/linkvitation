import React from "react";

function Partnership() {
  return (
    <div className="px-5 flex items-center justify-center mb-10">
      <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
        <p className="text-primary-400 text-[19px]">Our Partnership</p>
        <div className="flex  flex-wrap md:flex-none justify-center space-x-4 md:space-x-0 gap-0 md:gap-4 ">
          <img
            src="../../../../public/0xnetwork.png"
            width={175}
            height={175}
            alt="0xnetwork"
          />
        </div>
      </div>
    </div>
  );
}

export default Partnership;
