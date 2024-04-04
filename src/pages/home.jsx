import React, { Fragment } from "react";
import Typography from "../components/Typography";
import Partners from "../components/partners";
import NewsLetter from "../components/Newsletter";

const Home = () => {
  return (
    <Fragment>
      <section className="bg-black-700 h-screen">
        <div className="flex flex-col py-40 px-10 justify-between">
          <Typography
            variant="display-l"
            fontWeight="medium"
            customClassName="text-8xl text-white md:text-[200px]"
          >
            Results
          </Typography>
          <Typography customClassName="text-8xl text-white self-center md:text-[200px]">
            fair &
          </Typography>
          <Typography customClassName="text-8xl text-white self-end md:text-[200px]">
            square.
          </Typography>
        </div>
      </section>
      <section className="bg-red-100 flex items-center justify-center py-20">
        <Typography customClassName="mx-auto max-w-6xl text-center !text-[120px] !leading-[1.1]">
          <q>They go above and beyond for you...</q>
        </Typography>
      </section>
      <NewsLetter />
      <Partners />
    </Fragment>
  );
};

export default Home;
