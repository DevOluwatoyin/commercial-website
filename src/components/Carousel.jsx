import React, { useState } from "react";
import ArrowRight from "../assets/arrow-right.svg";
import ArrowLeft from "../assets/arrow-left.svg";
import { testimonies } from "../constants/instructions";
import CarouselItem from "./CarouselItem";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItem = () => {
    if (currentIndex < testimonies.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const previousItem = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="flex flex-col gap-5 md:w-[65%]">
      <div className="flex flex-nowrap gap-8 overflow-hidden md:items-center">
        {testimonies.map((testimony, id) => (
          <CarouselItem
            detail={testimony}
            key={id}
            isVisible={id === currentIndex}
          />
        ))}
      </div>
      <div className="flex items-center gap-4">
        <button onClick={previousItem} disabled={currentIndex === 0}>
          <img src={ArrowLeft} alt="" />
        </button>
        <button
          onClick={nextItem}
          disabled={currentIndex === testimonies.length - 1}
        >
          <img src={ArrowRight} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
