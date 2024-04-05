import React from "react";
import Typography from "./Typography";
import { accidentInstructions } from "../constants/instructions";

const Instruction = () => {
  return (
    <section className="px-3 py-10 md:px-20">
      <Typography customClassName="uppercase !text-primary-light !text-[11px] !tracking-widest mb-8">
        First Steps after an accident
      </Typography>
      <div className="flex justify-between">
        <Typography
          color="primary-dark"
          variant="headline-l"
          fontWeight="regular"
        >
          I have been injured. <br /> What should I do?
        </Typography>
        <Typography
          fontWeight="regular"
          customClassName="!text-primary-light text-[11px] md:max-w-[33rem]"
        >
          Virk Personal Injury Law is always available to explain your rights
          and different options to obtain compensation for any serious personal
          injury. In the meantime, be sure to do the following to build your
          case:
        </Typography>
      </div>

      <div className="grid mt-16 grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 md:grid-cols-3 md:gap-20">
        {accidentInstructions.map((each, id) => (
          <div key={id} className="flex gap-3 items-baseline">
            <Typography fontWeight="medium" variant="title-l">
              {each.id}
            </Typography>
            <div>
              <Typography
                color="primary-dark"
                variant="headline-s"
                fontWeight="regular"
                customClassName="mb-7 max-w-[240px]"
              >
                {each.title}
              </Typography>
              <Typography
                fontWeight="regular"
                customClassName="!text-primary-light text-[10px] md:max-w-[33rem]"
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
