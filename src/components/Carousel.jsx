import React from "react";
import ArrowRight from "../assets/arrow-right.svg";
import ArrowLeft from "../assets/arrow-left.svg";
import { testimonies } from "../constants/instructions";
import CarouselItem from "./CarouselItem";

const Carousel = () => {
  return (
    <div className="flex flex-col gap-5 md:w-[65%]">
      <div className="flex items-center gap-8 flex-nowrap overflow-hidden">
        {testimonies.map((testimony, id) => (
          <CarouselItem detail={testimony} key={id} />
        ))}
      </div>
      <div className="flex items-center gap-4">
        <img src={ArrowLeft} alt="" />
        <img src={ArrowRight} alt="" />
      </div>
    </div>
  );
};

export default Carousel;
