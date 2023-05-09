import React from "react";
import { ReadyToSellLeftSectionMobile } from "./ReadyToSellLeftSectionMobile";

export const ReadyToSellMobile: React.FC = () => {
  return (
    <div className="relative flex items-center pt-16 px-5">
      <ReadyToSellLeftSectionMobile />
      {/* <ReadyToSellRightSection /> */}
    </div>
  );
};
