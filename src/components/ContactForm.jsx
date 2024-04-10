import React from "react";
import Select from "./Select";
import { ButtonLg } from "./Button";
import caret from "../assets/caret-red.svg";


const ContactForm = () => {
  return (
    <form action="">
      <Select image={caret} optionHeading="Office"  />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <ButtonLg text="Submit" />
    </form>
  );
};

export default ContactForm;
