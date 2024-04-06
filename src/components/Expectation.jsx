import React from "react";
import Typography from "./Typography";
import { ButtonSm } from "./Button";
import ArrowRight from "../assets/arrow-right.svg";
import { expectation } from "../constants/partners";

const Expectations = () => {
  return (
    <section className="px-2">
      <div className="border border-primary-main grid grid-rows-[repeat(6_minmax(0,_10px))] grid-cols-[minmax(0,_310px)] md:grid-cols-7 md:grid-rows-2 max-w-[1400px] mx-auto">
        <div className="md:col-span-2 md:row-span-2 p-8 pb-0">
          <Typography customClassName="uppercase !text-primary-light !text-[11px] !tracking-widest">
            What to Expect
          </Typography>
          <Typography
            color="primary-dark"
            variant="headline-l"
            fontWeight="regular"
            customClassName="md:max-w-sm mt-5"
          >
            You focus on what's
            <Typography tag="span" variant="headline-l" fontWeight="regular">
              {" "}
              important,
            </Typography>{" "}
            we ll square away the rest.
          </Typography>
          <div className="flex items-center max-w-[250px] mt-10 md:mt-20">
            <ButtonSm
              text="Let us help you"
              customStyle="!uppercase !text-[11px]"
            />
            <img src={ArrowRight} alt="" />
          </div>
        </div>
        {expectation.map((each, id) => (
          <div key={id} className={`border border-primary-main ${each.style}`}>
            {each.name ? (
              <Typography
                color="primary-dark"
                fontWeight="regular"
                customClassName="p-4 pb-0"
              >
                {each.name}
              </Typography>
            ) : (
              ""
            )}

            {each.img ? <img src={each.img} alt="" /> : ""}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expectations;
