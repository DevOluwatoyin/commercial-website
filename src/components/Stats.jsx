import React from "react";
import Typography from "./Typography";
import StatImg from "../assets/stat-img.png";
import { stats } from "../constants/partners";

const Stats = () => {
  return (
    <section className="bg-primary-500">
      <div className="w-full p-4 flex flex-col justify-between md:flex-row md:items-center md:p-20">
        <div className="space-y-5 w-1/2">
          <Typography
            // variant="body-s"
            customClassName="uppercase !text-primary-light text-[11px] !tracking-widest"
          >
            By the numbers
          </Typography>
          <Typography
            color="primary-dark"
            variant="headline-l"
            fontWeight="regular"
            customClassName="max-w-xs"
          >
            This is how we make a
            <Typography tag="span" variant="headline-l" fontWeight="regular">
              {" "}
              difference
            </Typography>
            .
          </Typography>
          <div>
            <img src={StatImg} alt="" />
            <small className="text-primary-light inline-block max-w-sm text-[9px] mt-4">
              *Past results are not necessarily indicative of future results and
              the amount recovered and other litigation outcomes will vary
              according to the facts in individual cases.
            </small>
          </div>
        </div>
        <div className="flex flex-col justify-between border-t border-t-gray-200 w-[30%]">
          {stats.map((stat, id) => (
            <div
              key={id}
              className="border-b border-b-gray-200 py-10 space-y-3"
            >
              <Typography
                fontWeight="regular"
                variant="display-l"
                customClassName="display-l"
              >
                {stat.value}
              </Typography>
              <Typography color="primary-dark" fontWeight="regular">
                {stat.category}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
