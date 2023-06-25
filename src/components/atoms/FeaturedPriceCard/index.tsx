import React from "react";
interface Props {
  price: number;
  demo: string;
}
export const PriceCard: React.FC<Props> = ({ price, demo }) => {
  return (
    <h4 className="text-xl font-medium flex flex-row  text-primary-700 mb-5">
      Rp {price.toLocaleString()}
      <div className="ml-3 bg-slate-300 px-2 py-2 rounded-xl text-sm ">
        <a href={demo}>Demo Website</a>
      </div>
    </h4>
  );
};
