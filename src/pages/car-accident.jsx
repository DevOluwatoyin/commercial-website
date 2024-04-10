import React from "react";
import PageHeader from "../components/PageHeader";
import RedBox from "../assets/red-box.svg";
import ContactForm from "../components/ContactForm";
import caret from "../assets/caret-red.svg";
import Typography from "../components/Typography";
import { ButtonSm } from "../components/Button";

const CarAccident = () => {
  return (
    <section>
      <PageHeader
        image={RedBox}
        heading="Car Accident"
        summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in lorem sed arcu varius porttitor. Fusce pretium orci a mollis sollicitudin. Mauris vulputate orci eget diam dictum aliquet"
      />

      <div className="flex flex-col justify-between max-w-7xl mx-auto my-10 gap-8 md:flex-row">
        <div className="w-1/2">
          <Typography
            color="primary-dark"
            customClassName="!text-title-l !font-regular mb-5"
          >
            Levelling the field between you and the insurance company.
          </Typography>

          <div className="border-b border-b-primary-light pb-7 space-y-3">
            <Typography
              color="primary-dark"
              fontWeight="regular"
              customClassName="!text-[13px] leading-[1.8]"
            >
              The aftermath of a car accident can be overwhelming as you have
              entered unfamiliar territory and no doubt have a lot of unanswered
              questions. Whether you suffered a spinal cord injury, brain injury
              or fractures, you need to know your rights immediately – before
              you discuss the matter with an insurance adjuster and before
              signing any documents.
            </Typography>
            <Typography
              color="primary-dark"
              fontWeight="regular"
              customClassName="!text-[13px] leading-[1.8]"
            >
              Insurance companies scrutinize and defend claims vigorously and
              are looking out for their own interests, not yours. There are many
              strict time frames (some as short as 7 days after a car accident)
              as well as many procedures which need to be followed. Insurance
              companies complicate the process further by demanding in-person
              meetings and requiring complex forms to be completed within a very
              short timeframe. Understanding how to navigate through all of
              these issues, while trying to recover from an injury or mourning
              the loss of a loved one, is often too much to handle without help.
            </Typography>
            <Typography
              color="primary-dark"
              fontWeight="regular"
              customClassName="!text-[13px] leading-[1.8]"
            >
              We will explain your rights in simple terms and take on the
              insurance companies and at-fault parties so that you can focus on
              recovering from your injuries, rather than fighting a legal battle
            </Typography>
          </div>

          <div className="border-b border-b-primary-light pb-7 space-y-3">
            <Typography
              color="primary-dark"
              customClassName="!text-title-l !font-regular my-5"
            >
              Your rights after a car accident.
            </Typography>

            <Typography
              color="primary-dark"
              fontWeight="regular"
              customClassName="!text-[13px] leading-[1.8]"
            >
              If you were injured in a motor vehicle accident, whether you were
              a driver, passenger, cyclist or a pedestrian, you have two sets of
              rights:
            </Typography>

            <ol className="list-decimal space-y-4">
              <li>
                <Typography
                  color="primary-dark"
                  customClassName="!text-[13px] leading-[1.8]"
                >
                  Accident Benefits:{" "}
                  <Typography
                    color="primary-dark"
                    fontWeight="regular"
                    customClassName="!text-[13px] leading-[1.8]"
                    tag="span"
                  >
                    No-fault benefits that are payable immediately to ensure
                    quick access to necessary treatment and care and to
                    supplement your lost income regardless of who is at fault
                    for the accident. These benefits include:
                  </Typography>
                </Typography>

                <ul className="list-disc">
                  <li>
                    <Typography
                      color="primary-dark"
                      fontWeight="regular"
                      customClassName="!text-[13px] leading-[1.8]"
                    >
                      <Typography
                        customClassName="!text-[13px] leading-[1.8]"
                        tag="span"
                      >
                        Income Replacement Benefits
                      </Typography>{" "}
                      - if you are unable to work
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      color="primary-dark"
                      fontWeight="regular"
                      customClassName="!text-[13px] leading-[1.8]"
                    >
                      <Typography
                        customClassName="!text-[13px] leading-[1.8]"
                        tag="span"
                      >
                        Non-Earner Benefits
                      </Typography>{" "}
                      - if you suffered a complete inability to return to normal
                      life
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      color="primary-dark"
                      fontWeight="regular"
                      customClassName="!text-[13px] leading-[1.8]"
                    >
                      <Typography
                        customClassName="!text-[13px] leading-[1.8]"
                        tag="span"
                      >
                        Medical and Rehabilitation Benefits
                      </Typography>{" "}
                      including chiropractic, psychological, physiotherapy
                      services, medication, rehabilitative equipment, vocational
                      training, home accessibility modifications and vehicle
                      modifications.
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      color="primary-dark"
                      fontWeight="regular"
                      customClassName="!text-[13px] leading-[1.8]"
                    >
                      <Typography
                        customClassName="!text-[13px] leading-[1.8]"
                        tag="span"
                      >
                        Medical and Rehabilitation Benefits
                      </Typography>{" "}
                      including chiropractic, psychological, physiotherapy
                      services, medication, rehabilitative equipment, vocational
                      training, home accessibility modifications and vehicle
                      modifications.
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      color="primary-dark"
                      fontWeight="regular"
                      customClassName="!text-[13px] leading-[1.8]"
                    >
                      <Typography
                        customClassName="!text-[13px] leading-[1.8]"
                        tag="span"
                      >
                        Attendant Care Benefits
                      </Typography>{" "}
                      - for a home attendant and nursing care
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      color="primary-dark"
                      fontWeight="regular"
                      customClassName="!text-[13px] leading-[1.8]"
                    >
                      <Typography
                        customClassName="!text-[13px] leading-[1.8]"
                        tag="span"
                      >
                        House Keeping and Home Maintenance Benefits
                      </Typography>{" "}
                      - if you are catastrophically
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      color="primary-dark"
                      fontWeight="regular"
                      customClassName="!text-[13px] leading-[1.8]"
                    >
                      <Typography
                        customClassName="!text-[13px] leading-[1.8]"
                        tag="span"
                      >
                        Caregiver Benefits
                      </Typography>{" "}
                      - if you are catastrophically
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      color="primary-dark"
                      fontWeight="regular"
                      customClassName="!text-[13px] leading-[1.8]"
                    >
                      <Typography
                        customClassName="!text-[13px] leading-[1.8]"
                        tag="span"
                      >
                        Other Expenses
                      </Typography>{" "}
                      - visitor expenses, funeral expenses, damaged items in the
                      accident, and lost educational expenses.
                    </Typography>
                  </li>
                </ul>
              </li>

              <li>
                <Typography
                  color="primary-dark"
                  customClassName="!text-[13px] leading-[1.8]"
                >
                  A claim for damages against those who caused injury to you:
                  <Typography
                    color="primary-dark"
                    fontWeight="regular"
                    customClassName="!text-[13px] leading-[1.8]"
                    tag="span"
                  >
                    We can file a personal injury lawsuit and pursue the
                    at-fault party for financial compensation. This compensation
                    includes:
                  </Typography>
                </Typography>

                <ul className="list-disc">
                  <li>
                    <Typography
                      color="primary-dark"
                      fontWeight="regular"
                      customClassName="!text-[13px] leading-[1.8]"
                    >
                      Pain and suffering damages (for loss of your enjoyment of
                      life)
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      color="primary-dark"
                      fontWeight="regular"
                      customClassName="!text-[13px] leading-[1.8]"
                    >
                      Loss of future earnings (financial loss due to the
                      inability to work, reduced earning capacity and loss of
                      future opportunity)
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      color="primary-dark"
                      fontWeight="regular"
                      customClassName="!text-[13px] leading-[1.8]"
                    >
                      Future care costs (medical care, rehabilitation and other
                      future costs including nursing or attendant care beyond
                      what is available from accident benefits)
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      color="primary-dark"
                      fontWeight="regular"
                      customClassName="!text-[13px] leading-[1.8]"
                    >
                      Housekeeping and Homemaking Services
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      color="primary-dark"
                      fontWeight="regular"
                      customClassName="!text-[13px] leading-[1.8]"
                    >
                      Compensation for family members affected by your injuries
                      (for cost of services you provided and the loss of care,
                      guidance and companionship they have suffered)
                    </Typography>
                  </li>
                </ul>
              </li>
            </ol>
          </div>

          <div className="pb-7 space-y-3">
            <Typography
              color="primary-dark"
              customClassName="!text-title-l !font-regular my-5"
            >
              Choosing the best car accident lawyer for your injury.
            </Typography>

            <Typography
              color="primary-dark"
              customClassName="leading-[2] !font-regular mb-5"
            >
              You need a personal injury lawyer that specializes in car
              accidents since this type of law is complex and is constantly
              changing. At Virk Personal Injury law, we have extensive
              experience in complicated litigation and we ensure that we will
              get you the maximum compensation available to you. We will do
              whatever is necessary to achieve this including engaging the right
              medical experts, rehabilitation specialists, accident
              reconstruction engineers and financial analysts to assist us in
              the discovery and development of your claim. We will confront the
              responsible party’s insurer with the facts of your case, and fight
              for your right to collect damages and recover lost income all the
              way to trial if necessary.
            </Typography>
          </div>
        </div>

        <div className="w-1/2">
          <div className="bg-red-100 py-14 px-20">
            <Typography
              color="primary-dark"
              customClassName="!text-headline-m !font-regular mb-14"
            >
              Book a free consultation.
            </Typography>
            <ContactForm image={caret} />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between items-center mb-20 max-w-7xl mx-auto md:flex-row">
        <Typography customClassName="!text-[65px] px-2 !text-primary-dark text-center md:!text-[120px] !leading-[1.1]">
          Let us
          <Typography
            tag="span"
            customClassName="!text-[65px] px-2 md:!text-[120px] !leading-[1.1]"
          >
            {" "}
            help
          </Typography>{" "}
          you.
        </Typography>

        <ButtonSm
          text="Book a free consult"
          customStyle="w-1/5 !uppercase font-medium"
        />
      </div>
    </section>
  );
};

export default CarAccident;