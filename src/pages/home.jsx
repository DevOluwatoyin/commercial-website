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
      <section className="bg-black-700">
        <div className="flex flex-col px-5 pt-20 pb-10 lg:pb-20 md:px-10 xl:max-w-[80%] mx-auto">
          <p className="fluid-text leading-[0.8] font-bold text-white">
            Results
          </p>
          <p className="fluid-text leading-[0.8] self-center font-bold text-white">
            fair &
          </p>
          <p className="fluid-text leading-[0.8] self-end font-bold text-white">
            square.
          </p>
        </div>
      </section>

      <Stats />

      <AreasOfExpertise />

      <section className="flex items-center justify-center bg-red-100 py-20">
        <Typography customClassName="!text-[65px] px-2 mx-auto max-w-6xl font-bold text-center md:!text-[120px] !leading-[1.1]">
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
