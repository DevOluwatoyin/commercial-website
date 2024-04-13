import React from "react";
import ContactImg from "../assets/contact-img.png";
import NewsLetter from "../components/Newsletter";
import Typography from "../components/Typography";
import ContactForm from "../components/ContactForm";
import Image from "../assets/caret-red.svg";

const Contact = () => {
  return (
    <section className="bg-primary-dark pb-10">
      <div>
        <img src={ContactImg} alt="Contact" className="grayscale" />
      </div>

      <div className="bg-white p-20 flex justify-between mt-10 max-w-6xl mx-auto">
        <Typography
          variant="headline-l"
          color="primary-dark"
          fontWeight="regular"
          customClassName="md:max-w-xs"
        >
          Book a free consultation.
        </Typography>
        <div className="w-1/2">
          <ContactForm image={Image} />
        </div>
      </div>

      <NewsLetter />
    </section>
  );
};

export default Contact;
