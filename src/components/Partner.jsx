import React from "react";
import Typography from "./Typography";
import { partners } from "../constants/partners";

const Partner = () => {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 bg-white px-4 py-20 md:flex-row">
      <div className="md:w-2/5">
        <Typography
          variant="headline-m"
          fontWeight="regular"
          color="primary-dark"
          customClassName="md:w-3/4"
        >
          Building relationships and
          <Typography tag="span" variant="headline-m" fontWeight="regular">
            {" "}
            giving back
          </Typography>{" "}
          to our community.
        </Typography>
      </div>
      <div className="mx-auto flex w-4/5 items-center gap-4 md:w-3/5">
        {partners.map((partner, id) => (
          <div className="w-[171px]" key={id}>
            <img src={partner} alt="" className="w-full" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partner;
