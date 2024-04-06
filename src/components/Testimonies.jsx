import React from "react";
import { ButtonSm } from "./Button";
import ArrowRight from "../assets/arrow-right.svg";
import Typography from "./Typography";
import Carousel from "./Carousel";

const Testimonies = () => {
  return (
    <section className="p-4 py-10 flex flex-col gap-10 justify-between md:py-16 md:px-16 md:flex-row">
      <div className="md:w-[35%]">
        <Typography customClassName="uppercase !text-primary-light !text-[11px] !tracking-widest">
          What our clients are saying
        </Typography>
        <Typography
          color="primary-dark"
          variant="headline-l"
          fontWeight="regular"
          customClassName="md:max-w-sm mt-5"
        >
          There is nothing better than knowing our clients are
          <Typography tag="span" variant="headline-l" fontWeight="regular">
            {" "}
            happy
          </Typography>
          .
        </Typography>
        <div className="flex items-center max-w-[250px] mt-10 md:mt-20">
          <ButtonSm text="Read more Reviews" customStyle="!uppercase !text-[11px]" />
          <img src={ArrowRight} alt="" />
        </div>
      </div>
      <Carousel />
    </section>
  );
};

export default Testimonies;
