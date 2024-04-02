import React from "react";

const Footer = () => {
  return (
    <section>
      <div className="bg-red-3">
        <div>
          some texts
        </div>
        <small>
          &copy; Copyright 2023 Virk Personal Injury Law All Rights Reserved.
        </small>
      </div>
      <div className="w-full bg-primary">
        <p className="capitalize font-bold relative bottom-0 left-0 text-white md:text-8xl">
          Virk
        </p>
      </div>
    </section>
  );
};

export default Footer;
