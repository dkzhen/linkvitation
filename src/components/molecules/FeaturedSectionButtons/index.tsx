import React from "react";
import { SectionCategory } from "../../atoms/SectionCategory";
import { SectionTitle } from "../../atoms/SectionTitle";

interface Props {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}
export const FeaturedSectionButtons: React.FC<Props> = ({
  active,
  setActive,
}) => {
  return (
    <div className="flex justify-between mb-5">
      <div>
        <SectionCategory>Our Recommendation</SectionCategory>
        <SectionTitle>Featured Product</SectionTitle>
      </div>
    </div>
  );
};
