import Typography from "./Typography";
import { areasOfPractice } from "../constants/navLinks";
import Image from "../assets/hand.jpg";
import Featured from "../assets/featured.jpg";
import { Link } from "react-router-dom";

const AreasOfExpertise = () => {
  return (
    <section className="space-y-10 px-4 max-w-[1440px] mx-auto">
      <div className="flex flex-col justify-between gap-5 md:flex-row">
        <div className="space-y-5 py-8 md:py-10">
          <Typography
            fontWeight="bold"
            customClassName="uppercase !text-primary-light !text-[11px] !tracking-widest"
          >
            Areas of expertise
          </Typography>
          <Typography
            color="primary-dark"
            variant="headline-l"
            fontWeight="medium"
          >
            This is how we can
            <Typography tag="span" variant="headline-l" fontWeight="medium">
              {" "}
              help
            </Typography>{" "}
            you.
          </Typography>
          <Typography
            tag="span"
            fontWeight="medium"
            customClassName="!text-primary-light text-[11px] inline-block md:max-w-sm"
          >
            At Virk, we focus exclusively on personal injury law and we stay
            updated on all new developments in the field.
          </Typography>
          <div className="flex flex-col">
            {areasOfPractice.map((area, id) => (
              <Link
              key={id}
                to=""
                className="border-t border-t-gray-200 py-3 text-title-m font-medium text-primary-light transition hover:text-primary-main"
              >
                {area.category}
              </Link>
            ))}
          </div>
        </div>
        <div className="w-1/2">
          <img src={Image} alt="" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-5 pb-10 md:flex-row">
        <Typography
          color="primary-dark"
          customClassName=" !text-headline-l !font-medium"
        >
          As seen on...
        </Typography>
        <div className="md:w-3/4">
          <img src={Featured} alt="" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default AreasOfExpertise;
