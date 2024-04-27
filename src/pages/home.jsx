import { Fragment, useEffect } from "react";
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
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <section className="h-screen bg-black-700">
        <div className="flex h-screen !flex-col !justify-between px-5 py-20 md:px-10">
          <p className="fluid-text font-bold leading-[1.1] text-white">
            Results
          </p>
          <p className="fluid-text self-center font-bold leading-[1.1] text-white">
            fair &
          </p>
          <p className="fluid-text self-end font-bold leading-[1.1] text-white">
            square.
          </p>
        </div>
      </section>

      <Stats />

      <AreasOfExpertise />

      <section className="flex items-center justify-center bg-red-100 py-20">
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
