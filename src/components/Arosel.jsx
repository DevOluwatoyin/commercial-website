/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowRight from "../assets/arrow-right.svg";
import ArrowLeft from "../assets/arrow-left.svg";
import CarouselItem from "./CarouselItem";
import { testimonies } from "../constants/testimonies";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button onClick={onClick} className="absolute -bottom-14 left-20">
      <img src={ArrowRight} alt="Next" />
    </button>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button onClick={onClick} className="absolute -bottom-[55px] left-10">
      <img src={ArrowLeft} alt="Previous" />
    </button>
  );
}

export default function Carousel() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {testimonies.map((testimony, id) => (
        <CarouselItem detail={testimony} key={id} />
      ))}
    </Slider>
  );
}
