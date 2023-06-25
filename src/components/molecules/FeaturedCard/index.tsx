import React from "react";
import { ImageCard } from "../../atoms/FeaturedImageCard";
import { TitleCard } from "../../atoms/FeaturedTitleCard";
import { PriceCard } from "../../atoms/FeaturedPriceCard";
import { featureCards } from "../../../data";

interface Props {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}
export const FeaturedCard: React.FC<Props> = ({ active, setActive }) => {
  const filteredCategory = featureCards.filter(
    (item) => item.category === active
  );

  return (
    <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide no-scrollbar">
      {filteredCategory.length !== 0 ? (
        filteredCategory?.map(
          ({ id, image, name, price, demo, preferences }) => (
            <div key={id} className="pl-12 flex flex-col cursor-pointer">
              <ImageCard
                source={`/${image.url}`}
                alt={image.alt}
                preferences={preferences}
              ></ImageCard>
              <TitleCard>{name}</TitleCard>
              <PriceCard price={price} demo={demo} />
            </div>
          )
        )
      ) : (
        <p>Data is empty...</p>
      )}
    </div>
  );
};
