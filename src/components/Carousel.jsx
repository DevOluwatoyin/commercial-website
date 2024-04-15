import React, { useState } from "react";
import ArrowRight from "../assets/arrow-right.svg";
import ArrowLeft from "../assets/arrow-left.svg";
import { testimonies } from "../constants/instructions";
import CarouselItem from "./CarouselItem";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonies.length);
  };

  const previousItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonies.length - 1 : prevIndex - 1,
    );
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
        <button onClick={previousItem}>
          <img src={ArrowLeft} alt="Previous" />
        </button>
        <button onClick={nextItem}>
          <img src={ArrowRight} alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
