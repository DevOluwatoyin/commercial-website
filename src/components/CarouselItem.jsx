import React from "react";
import Typography from "./Typography";
import stars from "../assets/stars.svg";

const CarouselItem = ({ detail, isVisible }) => {
  return (
    <div
      className={`flex w-72 flex-shrink-0 items-center justify-center space-y-7 border border-primary-main p-5 md:h-96 md:w-96 ${isVisible ? "block" : "hidden"}`}
    >
      <div>
        <div className="space-y-4">
          <Typography variant="headline-l" fontWeight="regular">
            {detail.name}
          </Typography>
          <img src={stars} alt="" />
          <Typography customClassName="uppercase !text-primary-dark">
            A year ago
          </Typography>
        </div>
        <Typography
          fontWeight="regular"
          customClassName="!text-primary-light text-[10px] mt-5 md:max-w-[33rem]"
        >
          {detail.testimony}
        </Typography>
      </div>
    </div>
  );
};

export default CarouselItem;
