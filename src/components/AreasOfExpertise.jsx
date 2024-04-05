import React from "react";
import Typography from "./Typography";
import { areasOfPractice } from "../constants/navLinks";
import Image from "../assets/stat-img.png";
import Featured from "../assets/featured.jpg"

const AreasOfExpertise = () => {
  return (
    <section className="px-4 md:px-20 space-y-10">
      <div className="flex justify-between gap-5">
        <div className="space-y-5 py-8 md:py-10">
          <Typography customClassName="uppercase !text-primary-light !text-[11px] !tracking-widest">
            Areas of expertise
          </Typography>
          <Typography
            color="primary-dark"
            variant="headline-l"
            fontWeight="regular"
            // customClassName=""
          >
            This is how we can
            <Typography tag="span" variant="headline-l" fontWeight="regular">
              {" "}
              help
            </Typography>{" "}
            you.
          </Typography>
          <Typography
            tag="span"
            fontWeight="regular"
            customClassName="!text-primary-light text-[11px] inline-block md:max-w-sm"
          >
            At Virk, we focus exclusively on personal injury law and we stay
            updated on all new developments in the field.
          </Typography>
          <div className="flex flex-col">
            {areasOfPractice.map((area, id) => (
              <Typography
                key={id}
                fontWeight="regular"
                customClassName="!text-primary-light text-title-m border-t border-t-gray-200 py-3"
              >
                {area}
              </Typography>
            ))}
          </div>
        </div>
        <div>
          <img src={Image} alt="" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Typography color="primary-dark" customClassName=" !text-headline-l !font-regular">
          As seen on...
        </Typography>
        <div className="w-3/4">
          <img src={Featured} alt="" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default AreasOfExpertise;
