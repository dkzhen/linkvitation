import React from "react";
import { OurRecomendation } from "../../components/organisms/Home/OurRecomendation";
import { ReadyToSell } from "../../components/organisms/Home/ReadyToSell";
import { Hero } from "../../components/organisms/Home/Hero";
import { Review } from "../../components/organisms/Home/Review";
import { ArticleHome } from "../../components/organisms/Home/Article";
import { EmailSubs } from "../../components/organisms/Home/EmailSubs";
import { Footer } from "../../components/organisms/Home/Footer";
import { Navbar } from "../../components/organisms/Navbar";
import HeroMobile from "../../components/organisms/mobile/HeroMobile";

export const Home: React.FC = () => {
  return (
    <div className="h-[500vh] w-full overflow-hidden ">
      <div className="hidden md:block">
        <Hero />
      </div>

      <div className="hidden md:block">
        <OurRecomendation />
      </div>
      <div className="hidden md:block">
        <ReadyToSell />
      </div>
      <div className="hidden md:block">
        <Review />
      </div>
      <div className="hidden md:block">
        <EmailSubs />
      </div>
      <div className="md:hidden">
        <HeroMobile />
      </div>

      {/* <Footer /> */}
    </div>
  );
};
