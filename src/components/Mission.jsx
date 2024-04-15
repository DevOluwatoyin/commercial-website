import React from "react";
import Typography from "./Typography";

const Mission = () => {
  return (
    <section className="delivery h-[540px]">
      <div className="h-full bg-[#1612127a] px-2 py-10 md:p-20 md:pt-24">
        <div className="mx-auto flex h-full max-w-6xl flex-col justify-center gap-8 md:flex-row md:justify-between md:gap-14">
          <Typography
            customClassName="text-white text-headline-l md:text-display-m"
            fontWeight="regular"
          >
            We’re on a mission to deliver impactful and compassionate legal
            advocacy with integrity that’s second to none.
          </Typography>
          <Typography
            customClassName="text-white"
            fontWeight="regular"
            variant="title-m"
          >
            Our clients most often come to us based on recommendations from
            doctors and other health care professionals, other lawyers, and most
            importantly from our current and former clients
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default Mission;
