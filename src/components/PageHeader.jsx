import React from "react";
import Typography from "./Typography";

const PageHeader = ({ image, heading, summary, customStyle }) => {
  return (
    <section
      className={`flex flex-col items-center gap-8 bg-red-100 px-4 pb-10 pt-32 md:flex-row md:gap-32 md:px-20 md:pb-20 md:pt-40 ${customStyle}`}
    >
      <div className="max-w-sm">
        <img src={image} alt="" className="w-full" />
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
