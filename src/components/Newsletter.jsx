import React from "react";
import Typography from "./Typography";
import { ButtonLg } from "./Button";

const NewsLetter = () => {
  return (
    <section className="bg-black-700 py-10 px-4">
      <div className="max-w-7xl mx-auto space-y-14">
        <Typography variant="headline-m" fontWeight="regular" customClassName="text-white">Sign up for our newsletter.</Typography>
        <div className="flex items-center gap-8">
          <input
            type="text"
            placeholder="Email"
            className="!w-4/5 px-6 py-2 placeholder:text-primary-dark"
          />
          <ButtonLg text="submit" customStyle="!w-[120px]" />
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
