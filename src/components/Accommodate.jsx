import React from "react";
import Typography from "./Typography";
import { offers } from "../constants/navLinks";
import AccommodateImg from "../assets/accommodate.png";

const Accommodate = () => {
  return (
    <section className="px-4 py-10 md:px-20 space-y-10">
      <Typography
        color="primary-dark"
        variant="headline-l"
        fontWeight="regular"
        // customClassName=""
      >
        We
        <Typography tag="span" variant="headline-l" fontWeight="regular">
          {" "}
          accommodate
        </Typography>{" "}
        you.
      </Typography>
      <div className="flex justify-between items-center gap-40">
        <div className="w-1/2">
          <img src={AccommodateImg} alt="" className="w-full" />
        </div>
        <div className="flex flex-col w-1/2  border-b border-b-gray-200">
          {offers.map((offer, id) => (
            <Typography
              key={id}
              fontWeight="regular"
              customClassName="!text-primary-light text-title-m border-t border-t-gray-200 py-4"
            >
              {offer}
            </Typography>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accommodate;