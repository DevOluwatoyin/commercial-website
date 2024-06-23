import { ButtonSm } from "./Button";
import ArrowRight from "../assets/arrow-right.svg";
import Typography from "./Typography";
import Carousel from "./Arosel";

const Testimonies = () => {
  return (
    <section className="mx-auto mb-10 flex max-w-[1440px] flex-col justify-between gap-10 px-4 py-10 md:flex-row md:py-16 lg:w-[90%]">
      <div className="md:w-[35%]">
        <Typography customClassName="uppercase font-bold !text-primary-light !text-[11px] !tracking-widest">
          What our clients are saying
        </Typography>
        <Typography
          color="primary-dark"
          variant="headline-l"
          fontWeight="medium"
          customClassName="md:max-w-sm mt-5"
        >
          There is nothing better than knowing our clients are
          <Typography tag="span" variant="headline-l" fontWeight="medium">
            {" "}
            happy
          </Typography>
          .
        </Typography>
        <div className="mt-10 flex max-w-[250px] items-center md:mt-20">
          <ButtonSm
            text="Read more Reviews"
            customStyle="!uppercase !text-[11px]"
          />
          <img src={ArrowRight} alt="" className="cursor-pointer" />
        </div>
      </div>
      <Carousel />
    </section>
  );
};

export default Testimonies;
