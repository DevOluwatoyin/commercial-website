/* eslint-disable react/prop-types */
import { ButtonLg } from "./Button";

const ContactForm = () => {
  return (
    <form action="" className="space-y-8">
      <input
        type="text"
        placeholder="Name"
        className="w-full border border-primary-light p-3 placeholder:text-lg placeholder:font-medium placeholder:text-primary-dark"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full border border-primary-light p-3 placeholder:text-lg placeholder:font-medium placeholder:text-primary-dark"
      />
      <input
        type="text"
        placeholder="Phone Number"
        className="w-full border border-primary-light p-3 placeholder:text-lg placeholder:font-medium placeholder:text-primary-dark"
      />
      <textarea
        name=""
        id=""
        cols="30"
        rows="4"
        placeholder="Tell us what happended..."
        className="w-full border border-primary-light p-3 placeholder:text-lg placeholder:font-medium placeholder:text-primary-dark"
      ></textarea>
      <ButtonLg text="Submit" customStyle="!w-[100px]" />
    </form>
  );
};

export default ContactForm;
