import React, { Fragment } from "react";
import Typography from "../components/Typography";
import Partners from "../components/partners";

const Home = () => {
  return (
    <Fragment>
      <section className="bg-black-700 h-screen">
        <div className="flex flex-col pt-20 px-10">
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
      <Partners />
    </Fragment>
  );
};

export default Home;
