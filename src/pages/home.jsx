import { Fragment, useEffect, useState } from "react";
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
import { FloatingBtn } from "../components/Button";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <FloatingBtn floatStyle={`${isScrolled ? "top-1/2" : "top-[85%]"}`} />

      <section className="bg-black-700">
        <div className="mx-auto flex flex-col px-5 pb-10 pt-20 md:px-10 lg:w-[90%] lg:pb-20 xl:max-w-[80%]">
          <p className="fluid-text font-bold leading-[0.8] text-white">
            Results
          </p>
          <p className="fluid-text self-center font-bold leading-[0.8] text-white">
            fair &
          </p>
          <p className="fluid-text self-end font-bold leading-[0.8] text-white">
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

      <Accommodate />

      <News />

      <NewsLetter />

      <Partner />
    </Fragment>
  );
};

export default Home;
