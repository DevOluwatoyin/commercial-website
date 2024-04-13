import React from "react";
import AboutTxt from "../assets/about-header-txt.svg";
import Stars from "../assets/white-stars.svg";
import Quote from "../assets/quote.svg";
import Typography from "../components/Typography";
import AboutImg from "../assets/about-img.png";
import { reasonsToChoose } from "../constants/about";

const ReasonsToChoose = ({ reasons }) => {
  return (
    <div className="flex justify-between py-8 flex-col md:flex-row">
      <div className="w-1/2">
        <Typography
          customClassName="!text-xl !text-white w-2/3"
          fontWeight="regular"
        >
          {reasons.title}
        </Typography>
      </div>
      <div className="w-1/2">
        <Typography
          customClassName="mb-2 !text-[12px] !text-white"
          fontWeight="regular"
        >
          {reasons.text1}
        </Typography>
        <Typography
          customClassName=" !text-[12px] !text-white"
          fontWeight="regular"
        >
          {reasons.text2}
        </Typography>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section className="bg-primary-dark pb-10">
      <div className="h-screen flex items-center flex-col justify-center gap-28 pt-20">
        <p className="text-white text-3xl text-center max-w-2xl">
          With every client, we are driven by a singular mission: to champion
          our their rights with unwavering dedication and integrity.
        </p>
        <img src={AboutTxt} alt="About" />
      </div>

      <div className="flex flex-col justify-between py-8 md:flex-row max-w-6xl mx-auto md:py-14">
        <div className="px-1 space-y-5 md:w-1/2">
          <Typography
            color=""
            customClassName="uppercase !text-[11px] mb-1 !text-gray-300"
            fontWeight="medium"
          >
            From square one
          </Typography>
          <Typography
            customClassName="mb-1 !text-xl !text-white md:!text-3xl"
            fontWeight="regular"
          >
            Virk Personal Injury Law has been providing Hamilton and the
            surrounding areas with personal injury law services since 2013.
          </Typography>
          <Typography customClassName="mb-1 !text-white" fontWeight="regular">
            Personal Injury Law can be very complex and overwhelming. With a
            sharp focus on personal injury cases, we navigate the legal
            landscape with precision and tenacity, ensuring that our clients
            receive the fair and just results they deserve. Our firm stands as a
            beacon of excellence, committed to delivering intelligent legal
            solutions and securing optimal outcomes for those we represent.
          </Typography>
        </div>

        <div className="md:w-1/3">
          <img src={AboutImg} className="grayscale w-full" alt="About Image" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <Typography
          customClassName="uppercase !text-[11px] mb-1 !text-gray-300"
          fontWeight="medium"
        >
          Setting a high bar
        </Typography>

        <Typography
          variant="headline-l"
          fontWeight="regular"
          customClassName="!text-white border-b border-b-gray-200 py-8"
        >
          This is why you want
          <Typography tag="span" variant="headline-l" fontWeight="regular">
            {" "}
            Virk
          </Typography>{" "}
          on your side.
        </Typography>

        <div className="pt-4">
          
        {reasonsToChoose.map((reason, id) => (
          <ReasonsToChoose reasons={reason} key={id} />
        ))}
</div>
      </div>
    </section>
  );
};

export default About;
