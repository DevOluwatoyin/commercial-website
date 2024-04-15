import React from "react";
import PageHeader from "../components/PageHeader";
import Scan from "../assets/scan.jpg";
import Typography from "../components/Typography";
import ContactForm from "../components/ContactForm";
import caret from "../assets/caret-red.svg";
import { Link } from "react-router-dom";
import NewsLetter from "../components/Newsletter";

const NewsDetails = () => {
  return (
    <section>
      <PageHeader
        image={Scan}
        heading="What You Need To Know About Diffuse Axonal Injuries"
        summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in lorem sed arcu varius porttitor. Fusce pretium orci a mollis sollicitudin. Mauris vulputate orci eget diam dictum aliquet"
      />

      <div className="mx-auto my-10 flex max-w-7xl flex-col justify-between gap-8 md:flex-row">
        <div className="w-1/2 space-y-3">
          <Typography
            color="primary-dark"
            customClassName="!text-body-l !font-regular leading-[1.8]"
          >
            Diffuse axonal injuries (DAI) are severe and potentially
            life-threatening{" "}
            <Link
              to="/news-details"
              className="cursor-pointer text-primary-main underline transition-all hover:text-primary-light"
            >
              brain injuries.
            </Link>{" "}
            They can be caused by many different types of accidents, including{" "}
            <Link
              to="/news-details"
              className="cursor-pointer text-primary-main underline transition-all hover:text-primary-light"
            >
              car crashes,
            </Link>{" "}
            <Link
              to="/news-details"
              className="cursor-pointer text-primary-main underline transition-all hover:text-primary-light"
            >
              falls,
            </Link>{" "}
            physical assaults, and sports collisions. DAI can have serious
            consequences for victims, leaving them with long-term disabilities
            that may require extensive{" "}
            <Link
              to="/news-details"
              className="cursor-pointer text-primary-main underline transition-all hover:text-primary-light"
            >
              medical care and rehabilitation.
            </Link>
          </Typography>

          <Typography
            color="primary-dark"
            customClassName="!text-body-l !font-regular leading-[1.8]"
          >
            If you or a loved one have been the victim of a diffuse axonal
            injury, it is important to understand the risks, diagnosis, and
            treatment of this serious condition. An experienced personal injury
            lawyer will be able to walk you through the process of obtaining
            compensation to assist in rebuilding your life and obtaining the
            necessary treatment and services to reach maximum medical recovery.
          </Typography>

          <div className="space-y-3">
            <Typography
              color="primary-dark"
              customClassName="!text-headline-s !font-regular mb-14"
            >
              What is A Diffuse Axonal Injury?
            </Typography>

            <Typography
              color="primary-dark"
              customClassName="!text-body-l !font-regular leading-[1.8]"
            >
              A diffuse axonal injury is a type of traumatic brain injury (TBI)
              causes widespread damage to nerve fibres throughout the brain,
              resulting in bleeding, bruising of brain tissue, and tearing of
              nerve fibres.
            </Typography>

            <Typography
              color="primary-dark"
              customClassName="!text-body-l !font-regular leading-[1.8]"
            >
              The force of the injury may cause shearing of the axons – these
              are also known as nerve fibres, and refer to a portion of the
              nerve cell designed to carry nerve impulses away from the main
              cell body. Essentially, they are responsible for carrying
              electricalimpulses between nerve cells.
            </Typography>

            <Typography
              color="primary-dark"
              customClassName="!text-headline-s !font-regular mb-14"
            >
              What Causes A Diffuse Axonal Injury?
            </Typography>

            <Typography
              color="primary-dark"
              customClassName="!text-body-l !font-regular leading-[1.8]"
            >
              DAI is most often caused by strong blows to the head, and some of
              the most common causes include:
            </Typography>

            <div className="space-y-3">
              <Typography
                color="primary-dark"
                customClassName="!text-headline-s !font-regular"
              >
                Car Accidents
              </Typography>
              <Typography
                color="primary-dark"
                customClassName="!text-body-l !font-regular leading-[1.8]"
              >
                The force of car{" "}
                <Link
                  to="/news-details"
                  className="cursor-pointer text-primary-dark underline transition-all hover:text-primary-light"
                >
                  accidents
                </Link>{" "}
                can cause a violent acceleration and deceleration of the head,
                resulting in the shearing of nerve fibres.
              </Typography>

              <Typography
                color="primary-dark"
                customClassName="!text-headline-s !font-regular mb-14"
              >
                Falls
              </Typography>
              <Typography
                color="primary-dark"
                customClassName="!text-body-l !font-regular leading-[1.8]"
              >
                <Link
                  to="/news-details"
                  className="cursor-pointer text-primary-dark underline transition-all hover:text-primary-light"
                >
                  Falls from heights,
                </Link>{" "}
                or onto hard surfaces, can also lead to a diffuse axonal injury.
                This is especially true if there is an impact on the head or
                neck as a result of the fall.
              </Typography>

              <Typography
                color="primary-dark"
                customClassName="!text-headline-s !font-regular mb-14"
              >
                Assault
              </Typography>
              <Typography
                color="primary-dark"
                customClassName="!text-body-l !font-regular leading-[1.8]"
              >
                Physical assaults are also a common cause of DAI. The force of a
                punch, kick, or another strike to the head can cause shearing of
                nerve fibres and result in longterm disability.
              </Typography>

              <Typography
                color="primary-dark"
                customClassName="!text-headline-s !font-regular mb-14"
              >
                Sport Injuries
              </Typography>
              <Typography
                color="primary-dark"
                customClassName="!text-body-l !font-regular leading-[1.8]"
              >
                Sports injuries, such as those experienced in soccer, hockey,
                and football, can also lead to diffuse axonal injury. Even with
                protective headgear, the force of the impact can cause extensive
                damage to nerve fibres.
              </Typography>

              <Typography
                color="primary-dark"
                customClassName="!text-headline-s !font-regular mb-14"
              >
                What Are The Symptoms Of Diffuse Axonal Injury?
              </Typography>
              <Typography
                color="primary-dark"
                customClassName="!text-body-l !font-regular leading-[1.8]"
              >
                The symptoms of DAI vary depending on the severity of the
                injury. Common symptoms include:
              </Typography>

              <Typography
                color="primary-dark"
                customClassName="!text-headline-s !font-regular mb-14"
              >
                Loss of Consciousness
              </Typography>
              <Typography
                color="primary-dark"
                customClassName="!text-body-l !font-regular leading-[1.8]"
              >
                Suffering a loss of consciousness is one of the main signs of a
                diffuse axonal injury. This can range from a brief period of
                unconsciousness to an extended coma.
              </Typography>

              <Typography
                color="primary-dark"
                customClassName="!text-headline-s !font-regular mb-14"
              >
                Headache
              </Typography>
              <Typography
                color="primary-dark"
                customClassName="!text-body-l !font-regular leading-[1.8]"
              >
                Headaches are often present in those who have experienced a DAI
                and may be accompanied by nausea or vomiting, particularly if
                this seems uncontrollable.
              </Typography>

              <Typography
                color="primary-dark"
                customClassName="!text-headline-s !font-regular mb-14"
              >
                Confusion & Disorientation
              </Typography>
              <Typography
                color="primary-dark"
                customClassName="!text-body-l !font-regular leading-[1.8]"
              >
                Diffuse axonal injury may cause confusion and disorientation.
                This can range from mild confusion to complete memory loss and a
                lack of understanding of basic concepts.
              </Typography>

              <Typography
                color="primary-dark"
                customClassName="!text-headline-s !font-regular mb-14"
              >
                Physical Injuries
              </Typography>
              <Typography
                color="primary-dark"
                customClassName="!text-body-l !font-regular leading-[1.8]"
              >
                DAI can also cause physical injuries, such as paralysis or loss
                of sensation in the limbs. This is a result of the extensive
                damage done to nerve fibres in the brain.
              </Typography>

              <Typography
                color="primary-dark"
                customClassName="!text-headline-s !font-regular mb-14"
              >
                Cognitive Impairment
              </Typography>
              <Typography
                color="primary-dark"
                customClassName="!text-body-l !font-regular leading-[1.8]"
              >
                Those suffering from a diffuse axonal injury may also suffer
                from cognitive impairments, such as difficulty understanding
                concepts, decreased problemsolving skills, and difficulty with
                speech. This can be especially true in cases of severe DAI.
              </Typography>

              <Typography
                color="primary-dark"
                customClassName="!text-headline-s !font-regular mb-14"
              >
                Behavioural Changes
              </Typography>
              <Typography
                color="primary-dark"
                customClassName="!text-body-l !font-regular leading-[1.8]"
              >
                DAI can also cause changes in behaviour, such as mood swings,
                impulsiveness, and difficulty controlling emotions
              </Typography>

              <Typography
                color="primary-dark"
                customClassName="!text-headline-s !font-regular mb-14"
              >
                How Is Diffuse Axonal Injury Diagnosed?
              </Typography>
              <Typography
                color="primary-dark"
                customClassName="!text-body-l !font-regular leading-[1.8]"
              >
                DAI is typically diagnosed using imaging scans, such as an MRI
                or CT scan. These scans will be able to detect the shearing of
                nerve fibres in the brain, as well as any bleeding or swelling
                that may have occurred.
              </Typography>
              <Typography
                color="primary-dark"
                customClassName="!text-body-l !font-regular leading-[1.8]"
              >
                In addition, a neurological assessment and neuropsychological
                assessment may be conducted to determine the extent of cognitive
                impairment. This can involve cognitive tests, as well as an
                assessment of physical injuries and behavioural and emotional
                changes.
              </Typography>

              <Typography
                color="primary-dark"
                customClassName="!text-headline-s !font-regular mb-14"
              >
                How Is Diffuse Axonal Injury Treated?
              </Typography>
              <Typography
                color="primary-dark"
                customClassName="!text-body-l !font-regular leading-[1.8]"
              >
                Treatment for DAI typically involves supportive care and
                rehabilitation. Medications may be prescribed to reduce
                swelling, manage pain, and control seizures.Experts may also
                recommend physical therapy to help to improve coordination and
                balance, as well as strengthen weakened muscles.
              </Typography>
              <Typography
                color="primary-dark"
                customClassName="!text-body-l !font-regular leading-[1.8]"
              >
                In addition, cognitive rehabilitation may be necessary to help
                improve cognitive abilities, such as problem-solving, language,
                and memory skills. Behavioural therapy may also be helpful in
                managing changes in behaviour.
              </Typography>

              <Typography
                color="primary-dark"
                customClassName="!text-headline-s !font-regular mb-14"
              >
                How Is Diffuse Axonal Injury Claims
              </Typography>
              <Typography
                color="primary-dark"
                customClassName="!text-body-l !font-regular leading-[1.8]"
              >
                If you have suffered a diffuse axonal injury as the result of
                another person or party’s negligence, you may be eligible to
                contact a personal injury lawyer Hamilton and make a personal
                injury claim. This could involve receiving compensation for
                medical bills and treatments,{" "}
                <Link
                  to="/news-details"
                  className="cursor-pointer text-primary-main underline transition-all hover:text-primary-light"
                >
                  lost wages
                </Link>{" "}
                if you cannot work, pain and suffering, and other damages.
              </Typography>
              <Typography
                color="primary-dark"
                customClassName="!text-body-l !font-regular leading-[1.8]"
              >
                In order to make a successful claim, it is important that you
                have evidence proving that the other party was at fault for your
                injuries – an experienced brain injury lawyer Hamilton will be
                able to assist you in gathering the evidence you need for
                diffuse axonal, injury claims, and building a strong case.
              </Typography>

              <Typography
                color="primary-dark"
                customClassName="!text-headline-s !font-regular mb-14"
              >
                Contact A Personal Injury Lawyer in Hamilton
              </Typography>
              <Typography
                color="primary-dark"
                customClassName="!text-body-l !font-regular leading-[1.8]"
              >
                If you or someone you love has suffered a diffuse axonal injury,
                contact a{" "}
                <Link
                  to="/news-details"
                  className="cursor-pointer text-primary-main underline transition-all hover:text-primary-light"
                >
                  personal injury lawyer in Hamilton
                </Link>{" "}
                immediately to discuss your case. Here at Virk Personal Injury
                Law, our team will be able to help you gather the evidence
                needed to make a successful claim and get the compensation you
                deserve – get in touch today, and see how we can help.
              </Typography>
            </div>
          </div>
        </div>

        <div className="w-1/2">
          <div className="bg-red-100 px-20 py-14">
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

      <NewsLetter />
    </section>
  );
};

export default NewsDetails;
