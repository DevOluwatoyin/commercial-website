import React, { Fragment } from "react";
import Typography from "../components/Typography";
import NewsLetter from "../components/Newsletter";
import Partner from "../components/Partner";
import Mission from "../components/Mission";

const Home = () => {
  return (
    <Fragment>
      <section className="bg-black-700 h-screen">
        <div className="flex !flex-col py-20 px-10 !justify-between">
          <Typography
            customClassName="text-4xl text-white md:text-[200px] leading-[1.1]"
          >
            Results
          </Typography>
          <Typography customClassName="text-4xl text-white self-center md:text-[200px] leading-[1.1]">
            fair &
          </Typography>
          <Typography customClassName="text-4xl text-white self-end md:text-[200px]  leading-[1.1]">
            square.
          </Typography>
        </div>
      </section>
      <section className="bg-red-100 flex items-center justify-center py-20">
        <Typography customClassName="mx-auto max-w-6xl text-center !text-[120px] !leading-[1.1]">
          <q>They go above and beyond for you...</q>
        </Typography>
      </section>
      {/* <Mission /> */}
      <NewsLetter />
      <Partner />
    </Fragment>
  );
};

export default Home;
