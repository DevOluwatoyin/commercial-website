import Typography from "./Typography";
import { accidentInstructions } from "../constants/instructions";

const Instruction = () => {
  return (
    <section className="mx-auto max-w-[1440px] px-3 py-10 lg:w-[90%]">
      <Typography customClassName="uppercase !text-primary-light !text-[11px] !tracking-widest font-bold mb-8">
        First Steps after an accident
      </Typography>
      <div className="flex flex-col justify-between md:flex-row">
        <Typography
          color="primary-dark"
          variant="headline-l"
          fontWeight="medium"
        >
          I have been injured. <br /> What should I do?
        </Typography>
        <Typography
          fontWeight="semi-bold"
          customClassName="!text-primary-light text-[11px] md:max-w-[33rem]"
        >
          Virk Personal Injury Law is always available to explain your rights
          and different options to obtain compensation for any serious personal
          injury. In the meantime, be sure to do the following to build your
          case:
        </Typography>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 md:gap-20 lg:grid-cols-3">
        {accidentInstructions.map((each, id) => (
          <div key={id} className="flex items-baseline gap-3">
            <Typography fontWeight="medium" variant="title-l">
              {each.id}
            </Typography>
            <div>
              <Typography
                color="primary-dark"
                variant="headline-s"
                fontWeight="medium"
                customClassName="mb-7 max-w-[240px]"
              >
                {each.title}
              </Typography>
              <Typography
                fontWeight="regular"
                customClassName="!text-primary-dark text-[10px] md:max-w-[33rem]"
              >
                {each.more}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Instruction;
