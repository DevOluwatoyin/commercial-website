import React from "react";
import Typography from "./Typography";

const Mission = () => {
  return (
    <section className="delivery h-[540px]">
      <div className="bg-[#1612127a] h-full p-10 md:p-20 md:pt-24">
        <div className="h-full flex flex-col justify-center gap-14 max-w-6xl mx-auto md:flex-row md:justify-between">
          <Typography
            customClassName="text-white"
            fontWeight="regular"
            variant="display-m"
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