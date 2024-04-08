import React from "react";
import Typography from "./Typography";

const PageHeader = ({ image, heading, summary, customStyle }) => {
  return (
    <section
      className={`bg-red-100 py-10 px-4 flex flex-col items-center md:gap-32 md:flex-row md:pt-40 md:pb-20 md:px-20 ${customStyle}`}
    >
      <div className="">
        <img src={image} alt="" />
      </div>
      <div className="">
        <Typography
          color="primary-dark"
          variant="headline-l"
          fontWeight="medium"
          customClassName="mb-5"
        >
          {heading}
        </Typography>
        <Typography
          color="primary-dark"
          variant="title-m"
          fontWeight="regular"
          customClassName="max-w-xl"
        >
          {summary}
        </Typography>
      </div>
    </section>
  );
};

export default PageHeader;
