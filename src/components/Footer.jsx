import React from "react";
import Typography from "./Typography";
import { ButtonLg, ButtonSm } from "./Button";
import {
  areasOfPractice,
  areasOfService,
  contactItems,
  firmLists,
  socials,
} from "../constants/navLinks";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section>
      <div className="bg-red-300 p-12 pb-2">
        <div className="flex justify-between">
          <div className="w-2/5">
            <div className="w-2/3 space-y-5">
              <Typography
                variant="headline-l"
                fontWeight="medium"
                color="primary-dark"
              >
                We&apos;re here for you.
                <br /> Contact us for a free consultation.{" "}
                <Typography tag="span" variant="headline-1">
                  No strings.
                </Typography>
              </Typography>
              <div className="flex gap-4">
                <ButtonSm text="Email Us" />
                <ButtonLg text="Call us" />
              </div>
            </div>
          </div>
          <div className="flex justify-between w-3/5">
            <div className="flex flex-col space-y-10 pb-4">
              <div className="w-1/3">
                <Typography customClassName="uppercase mb-3">
                  Contact
                </Typography>
                <div className="space-y-3">
                  {contactItems.map((contact, id) => (
                    <div key={id} className="flex gap-3">
                      <img src={contact.icon} alt="" className="" />
                      <Typography
                        color="primary-dark"
                        tag="span"
                        fontWeight="regular"
                      >
                        {contact.subject}
                      </Typography>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Typography customClassName="mb-5 uppercase">Follow</Typography>
                <div className="flex items-center justify-between w-3/5">
                  {socials.map((social, id) => (
                    <a href={social.url} key={id}>
                      <img src={social.icon} alt="" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <Typography customClassName="mb-3 uppercase">Firm</Typography>
                <div className="flex flex-col space-y-2 text-sm">
                  {firmLists.map((firm, id) => (
                    <Link
                      href={firm.url}
                      key={id}
                      className="text-primary-dark"
                    >
                      {firm.title}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <Typography customClassName="mb-3 uppercase">
                  Areas we service
                </Typography>
                <div className="flex flex-col space-y-2">
                  {areasOfService.map((service, id) => (
                    <Typography
                      key={id}
                      color="primary-dark"
                      tag="span"
                      fontWeight="regular"
                    >
                      {service}
                    </Typography>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <Typography customClassName="mb-3 uppercase">
                Areas of Practice
              </Typography>
              <div className="flex flex-col space-y-2">
                {areasOfPractice.map((practice, id) => (
                  <Typography
                    key={id}
                    color="primary-dark"
                    tag="span"
                    fontWeight="regular"
                  >
                    {practice}
                  </Typography>
                ))}
              </div>
            </div>
          </div>
        </div>
        <small>
          &copy; Copyright {new Date().getFullYear()} Virk Personal Injury Law
          All Rights Reserved.
        </small>
      </div>
      <div className="w-full relative h-60 bg-primary-main">
        <p className="uppercase tracking-[20px] font-medium absolute bottom-0 right-0 text-white md:text-8xl">
          Virk
        </p>
      </div>
    </section>
  );
};

export default Footer;
