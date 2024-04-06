import React from "react";
import Typography from "./Typography";
import stars from "../assets/stars.svg";

const CarouselItem = ({ detail }) => {
  return (
    <div className="border border-primary-main p-5 space-y-7 w-72 flex-shrink-0 flex justify-center items-center md:w-96 md:h-96">
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
