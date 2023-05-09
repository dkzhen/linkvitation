import React, { useEffect } from "react";
import { SectionCategory } from "../../../atoms/SectionCategory";
import { SectionTitle } from "../../../atoms/SectionTitle";
import { ReviewCard } from "../../../molecules/ReviewCard";
import { reviews } from "../../../../data";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const Review: React.FC = (e) => {
  useEffect(() => {
    slidingCarousel(e);
  }, []);
  return (
    <div className="relative flex flex-col items-center pt-36">
      <SectionCategory display="flex-col gap-2">See Our Review</SectionCategory>
      <SectionTitle>What Our User Say About Us</SectionTitle>
      <div className="flex w-full px-10 mt-8 gap-12 overflow-x-scroll no-scrollbar scrollbar-hide">
        <Swiper
          spaceBetween={50}
          slidesPerView={2}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="relative flex flex-col items-center pt-36"
        >
          <div>
            {reviews.map(({ id, image, content, reviewer }) => (
              <SwiperSlide>
                <ReviewCard
                  id="reviewCard"
                  key={id}
                  source={image.src}
                  alt={image.alt}
                  title={content.title}
                  subtitle={content.subtitle}
                  customerAvatar={reviewer.picture.src}
                  customerName={reviewer.name}
                  profession={reviewer.profession}
                  rating={reviewer.rating}
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

const slidingCarousel = (e: any) => {
  const carousel = document.querySelector(".carousel");
  const arrowIcons = document.querySelectorAll(".arrow-button");

  // arrowIcons.forEach((icon) => {
  //   icon.addEventListener("click", () => {
  // carousel!.scrollLeft += icon.id ==='left' ? - :
  //   });
  // });
  let isDragStart = false,
    prevPageX: number,
    prevScrollLeft: number;

  const dragStart = (e: any) => {
    // updating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel!.scrollLeft;
  };

  const dragStop = () => {
    isDragStart = false;
  };

  const dragging = (e: any) => {
    // scrolling images/carousel lo left according to mouse pointer
    if (!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    carousel!.scrollLeft = prevScrollLeft - positionDiff;
  };
  carousel && carousel.addEventListener("mousemove", dragging);
  carousel && carousel.addEventListener("mousedown", dragStart);
  carousel && carousel.addEventListener("mouseup", dragStop);
};
