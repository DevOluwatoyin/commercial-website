import React from "react";
import Typography from "./Typography";
import { partners } from "../constants/partners";

const Partner = () => {
  return (
    <section className="bg-white flex flex-col gap-5 px-4 py-20 max-w-7xl mx-auto items-center justify-between md:flex-row">
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
      <div className="flex items-center gap-4 mx-auto w-4/5 md:w-3/5">
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
