import React from "react";
import Select from "./Select";
import { ButtonLg } from "./Button";

const ContactForm = ({ image }) => {
  return (
    <form action="" className="space-y-8">
      <Select
        image={image}
        optionHeading="Office"
        customSelectStyle="!text-left !border-primary-light !border-b !border-r"
        customWrapperStyle="!w-full"
      />
      <input
        type="text"
        placeholder="Name*"
        className="w-full border border-primary-light p-3 placeholder:text-primary-dark"
      />
      <input
        type="text"
        placeholder="Email*"
        className="w-full border border-primary-light p-3 placeholder:text-primary-dark"
      />
      <input
        type="text"
        placeholder="Phone Number*"
        className="w-full border border-primary-light p-3 placeholder:text-primary-dark"
      />
      <textarea
        name=""
        id=""
        cols="30"
        rows="4"
        placeholder="Tell us what happended...*"
        className="w-full border border-primary-light p-3 placeholder:text-primary-dark"
      ></textarea>
      <ButtonLg text="Submit" customStyle="!w-[100px]" />
    </form>
  );
};

export default ContactForm;
