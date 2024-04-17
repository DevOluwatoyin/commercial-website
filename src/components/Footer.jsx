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
      <div className="bg-red-100 p-4 py-12 pb-2 md:p-12">
        <div className="flex flex-col justify-between gap-5 md:flex-row">
          <div className="md:w-2/5">
            <div className="space-y-5 md:w-2/3">
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
          <div className="flex w-3/5 flex-col justify-between gap-7 md:flex-row">
            <div className="flex flex-col space-y-10 pb-4 md:w-1/3">
              <div>
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
                        customClassName="!text-[12px] lg:!text-sm"
                      >
                        {contact.subject}
                      </Typography>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Typography customClassName="mb-5 uppercase">Follow</Typography>
                <div className="flex w-3/5 items-center justify-between gap-2">
                  {socials.map((social, id) => (
                    <a href={social.url} key={id}>
                      <img src={social.icon} alt="" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5 md:w-1/3">
              <div>
                <Typography customClassName="mb-3 uppercase">Firm</Typography>
                <div className="flex flex-col space-y-2 text-sm">
                  {firmLists.map((firm, id) => (
                    <Link
                      href={firm.url}
                      key={id}
                      className="text-[12px] text-primary-dark lg:text-sm"
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
                      customClassName="!text-[12px] lg:!text-sm"
                    >
                      {service}
                    </Typography>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:w-1/3">
              <Link
                to="/areas-of-practice"
                className="mb-3 inline-block text-body-m uppercase text-primary-main"
              >
                Areas of Practice
              </Link>
              <div className="flex flex-col space-y-2">
                {areasOfPractice.map((practice, id) => (
                  <Link
                    to={practice.href}
                    key={id}
                    className="text-[12px] text-sm text-primary-dark hover:text-primary-main lg:text-sm"
                  >
                    {practice.category}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <small className="mt-5 block">
          &copy; Copyright {new Date().getFullYear()} Virk Personal Injury Law
          All Rights Reserved.
        </small>
      </div>
      <div className="relative h-60 w-full bg-primary-main">
        <p className="absolute bottom-3 right-0 text-5xl font-medium uppercase tracking-[20px] text-white md:text-8xl">
          Virk
        </p>
      </div>
    </section>
  );
};

export default Footer;
