import React from "react";
import ContactImg from "../assets/contact-img.png";
import NewsLetter from "../components/Newsletter";
import Typography from "../components/Typography";
import ContactForm from "../components/ContactForm";
import Image from "../assets/caret-red.svg";
import { contactDetails } from "../constants/contact";

const Contact = () => {
  return (
    <section className="bg-primary-dark pb-10">
      <div>
        <img src={ContactImg} alt="Contact" className="grayscale" />
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-gray-300 py-4">
        {contactDetails.map((contact, id) => (
          <div
            className="grid grid-cols-[500px_400px_400px] border-b border-gray-300 py-4"
            key={id}
          >
            <Typography
              variant="headline-s"
              fontWeight="regular"
              customClassName="!text-white md:max-w-xs"
            >
              {contact.location}
            </Typography>
            <div>
              <Typography
                variant="title-m"
                fontWeight="regular"
                customClassName="md:max-w-xs mb-2"
              >
                Address
              </Typography>
              <Typography fontWeight="regular" customClassName="!text-white">
                {contact.addressLn1}
              </Typography>
              <Typography fontWeight="regular" customClassName="!text-white">
                {contact.addressLn2}
              </Typography>
              <Typography fontWeight="regular" customClassName="!text-white">
                {contact.addressLn3}
              </Typography>
            </div>
            <div>
              <Typography
                variant="title-m"
                fontWeight="regular"
                customClassName="md:max-w-xs mb-2"
              >
                Email
              </Typography>
              <Typography customClassName="!text-white md:max-w-xs">
                info@virklawyers.com
              </Typography>
              <Typography
                variant="title-m"
                fontWeight="regular"
                customClassName="md:max-w-xs my-2"
              >
                Fax
              </Typography>
              <Typography
                fontWeight="regular"
                customClassName="!text-white md:max-w-xs"
              >
                905.521.8858
              </Typography>
            </div>

            <div className="col-span-2 col-end-4">
              <Typography
                variant="headline-l"
                fontWeight="regular"
                customClassName="!text-white md:max-w-xs"
              >
                {contact.cord1}
              </Typography>
              <Typography
                variant="headline-l"
                fontWeight="regular"
                customClassName="!text-white md:max-w-xs"
              >
                {contact.cord2}
              </Typography>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto my-20 flex max-w-5xl justify-between">
        <Typography
          fontWeight="regular"
          variant="headline-m"
          customClassName="!text-white"
        >
          You can also find us in:
        </Typography>
        <div className="space-y-4">
          <Typography
            fontWeight="regular"
            variant="headline-m"
            customClassName="!text-white"
          >
            Mississauga, Ontario
          </Typography>
          <Typography
            fontWeight="regular"
            variant="headline-m"
            customClassName="!text-white"
          >
            Niagara Falls, Ontario
          </Typography>
          <Typography
            fontWeight="regular"
            variant="headline-m"
            customClassName="!text-white"
          >
            St. Catharines, Ontario
          </Typography>
          <Typography
            fontWeight="regular"
            variant="headline-m"
            customClassName="!text-white"
          >
            Toronto, Ontario
          </Typography>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl justify-between bg-white p-20">
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
