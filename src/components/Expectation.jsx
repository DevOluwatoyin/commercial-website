import React from "react";
import Typography from "./Typography";
import { ButtonSm } from "./Button";
import ArrowRight from "../assets/arrow-right.svg";
import { expectation } from "../constants/partners";

const Expectations = () => {
  return (
    <section className="px-2">
      <div className="mx-auto max-w-[1400px] border border-primary-main md:grid md:grid-cols-7 md:grid-rows-2">
        <div className="p-8 md:col-span-2 md:row-span-2 md:pb-0">
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
          <div className="mt-10 flex max-w-[250px] items-center md:mt-20">
            <ButtonSm
              text="Let us help you"
              customStyle="!uppercase !text-[11px]"
            />
            <img src={ArrowRight} alt="" />
          </div>
        </div>
        {expectation.map((each, id) => (
          <div
            key={id}
            className={`hidden border border-primary-main md:block ${each.style}`}
          >
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
