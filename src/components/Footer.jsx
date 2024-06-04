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
    <section className="overflow-hidden">
      <div className="bg-red-100 p-4 py-12 pb-2 md:p-12">
        <div className="mx-auto flex flex-col justify-between gap-5 md:flex-row lg:w-[95%] xl:max-w-full">
          <div className="md:w-2/5">
            <div className="space-y-9 md:w-2/3">
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
              <div className="flex gap-4 md:max-w-[70%]">
                <ButtonSm text="Email Us" customStyle="font-medium" />
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
                    <div key={id} className="flex items-start gap-3">
                      <img src={contact.icon} alt="" className="" />
                      <div>
                        <Typography
                          color="primary-dark"
                          tag="span"
                          fontWeight="regular"
                          customClassName="!text-[12px] lg:!text-sm"
                        >
                          {contact.subject}
                        </Typography>
                        <Typography
                          color="primary-dark"
                          fontWeight="regular"
                          customClassName="!text-[12px] lg:!text-sm"
                        >
                          {contact.line2}
                        </Typography>
                        <Typography
                          color="primary-dark"
                          tag="span"
                          fontWeight="regular"
                          customClassName="!text-[12px] lg:!text-sm"
                        >
                          {contact.line3}
                        </Typography>
                      </div>
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
                      className="!text-[12px] transition hover:text-primary-main lg:!text-sm"
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
                    <Link
                      to=""
                      key={id}
                      className="!text-[12px] transition hover:text-primary-main lg:!text-sm"
                    >
                      {service}
                    </Link>
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
      <div className="relative h-[400px] w-full bg-primary-main">
        <p className="absolute -bottom-5 -right-5 text-5xl font-[700] uppercase tracking-[15px] text-white md:text-8xl">
          Virk
        </p>
      </div>
    </section>
  );
};

export default Footer;
