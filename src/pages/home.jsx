import React, { Fragment } from "react";
import Typography from "../components/Typography";
import NewsLetter from "../components/Newsletter";
import Partner from "../components/Partner";
import Mission from "../components/Mission";
import Stats from "../components/Stats";
import AreasOfExpertise from "../components/AreasOfExpertise";
import Accommodate from "../components/Accommodate";
import Instruction from "../components/Instruction";
import Testimonies from "../components/Testimonies";
import Expectation from "../components/Expectation";
import News from "../components/News";

const Home = () => {
  return (
    <Fragment>
      <section className="bg-black-700 h-screen">
        <div className="flex !flex-col px-5 py-20 !justify-between h-screen md:px-10">
          <Typography customClassName="!text-[80px] text-white md:!text-[200px] leading-[1.1]">
            Results
          </Typography>
          <Typography customClassName="!text-[80px] text-white self-center md:!text-[200px] leading-[1.1]">
            fair &
          </Typography>
          <Typography customClassName="!text-[80px] text-white self-end md:!text-[200px]  leading-[1.1]">
            square.
          </Typography>
        </div>
      </section>

      <Stats />

      <AreasOfExpertise />

      <section className="bg-red-100 flex items-center justify-center py-20">
        <Typography customClassName="!text-[65px] px-2 mx-auto max-w-6xl text-center md:!text-[120px] !leading-[1.1]">
          <q>They go above and beyond for you...</q>
        </Typography>
      </section>

      <Testimonies />

      <Mission />

      <Instruction />

      <Expectation />

      <News />

      <Accommodate />

      <NewsLetter />

      <Partner />
    </Fragment>
  );
};

export default Home;
