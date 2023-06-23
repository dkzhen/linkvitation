import React, { useState } from "react";
import { ImageCard } from "../../atoms/FeaturedImageCard";
import { TitleCard } from "../../atoms/FeaturedTitleCard";
import { PriceCard } from "../../atoms/FeaturedPriceCard";
import { featureCards } from "../../../data";

interface Props {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

export const FeaturedSectionButtons: React.FC<Props> = ({}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start mb-5">
      <div className={` flex items-center mb-3 flex-row `}>
        <div className="h-[2px] w-5 rounded-full bg-orange-1000 mr-2"> </div>
        <p className="text-orange-1000 text-md capitalize mr-3 ">
          Our Recommendation
        </p>
      </div>
    </div>
  );
};

interface Props {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

export const FeaturedCard: React.FC<Props> = ({ active, setActive }) => {
  const filteredCategory = featureCards.filter(
    (item) => item.category === active
  );

  return (
    <div className="flex flex-wrap  overflow-x-auto scrollbar-hide no-scrollbar">
      {filteredCategory.length !== 0 ? (
        filteredCategory?.map(({ id, image, name, price, preferences }) => (
          <div key={id} className="w-64 flex flex-col cursor-pointer">
            <ImageCard
              source={`https://househunter.vercel.app/${image.url}`}
              alt={image.alt}
              preferences={preferences}
            ></ImageCard>
            <TitleCard>{name}</TitleCard>
            <PriceCard>{price}</PriceCard>
          </div>
        ))
      ) : (
        <p>Data is empty...</p>
      )}
    </div>
  );
};

export const OurRecomendationMobile: React.FC = () => {
  const [active, setActive] = useState("House");

  return (
    <div
      id="recommendation"
      className="px-6 pt-12 md:pl-20 md:pt-32 flex flex-col"
    >
      <FeaturedSectionButtons active={active} setActive={setActive} />
      <div className="flex flex-col md:flex-row">
        <FeaturedCard active={active} setActive={setActive} />
      </div>
    </div>
  );
};
