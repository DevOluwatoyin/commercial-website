/* eslint-disable react/prop-types */
import AboutTxt from "../assets/about-header-txt.svg";
import Stars from "../assets/white-stars.svg";
import Quote from "../assets/quote.svg";
import Typography from "../components/Typography";
import AboutImg from "../assets/about-img.png";
import { reasonsToChoose, values } from "../constants/about";
import { ButtonLg } from "../components/Button";
import { useEffect } from "react";

const ReasonsToChoose = ({ reasons }) => {
  return (
    <div className="flex flex-col justify-between gap-3 py-8 md:flex-row md:gap-0">
      <div className="md:w-1/2">
        <Typography
          customClassName="!text-3xl !text-white md:w-2/3"
          fontWeight="regular"
        >
          {reasons.title}
        </Typography>
      </div>
      <div className="md:w-1/2 space-y-5">
        <Typography
          customClassName="mb-2 !text-lg !text-white"
          fontWeight="regular"
        >
          {reasons.text1}
        </Typography>
        <Typography
          customClassName="!text-lg !text-white"
          fontWeight="regular"
        >
          {reasons.text2}
        </Typography>
      </div>
    </div>
  );
};

const About = () => {

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="bg-primary-dark pb-10">
      <div className="flex h-screen flex-col items-center justify-center gap-28 px-3 pt-20">
        <p className="max-w-2xl text-center text-xl text-white md:text-3xl">
          With every client, we are driven by a singular mission: to champion
          our their rights with unwavering dedication and integrity.
        </p>
        <img src={AboutTxt} alt="About" className="self-start" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-3 py-8 md:flex-row md:items-center md:py-14 lg:items-start">
        <div className="space-y-5 px-1 md:w-1/2">
          <Typography
            color=""
            customClassName="uppercase !text-[11px] mb-1 !text-gray-300"
            fontWeight="medium"
          >
            From square one
          </Typography>
          <Typography
            customClassName="mb-1 !text-xl !text-white md:!text-3xl"
            fontWeight="regular"
          >
            Virk Personal Injury Law has been providing Hamilton and the
            surrounding areas with personal injury law services since 2013.
          </Typography>
          <Typography customClassName="mb-1 !text-lg !text-white" fontWeight="regular">
            Personal Injury Law can be very complex and overwhelming. With a
            sharp focus on personal injury cases, we navigate the legal
            landscape with precision and tenacity, ensuring that our clients
            receive the fair and just results they deserve. Our firm stands as a
            beacon of excellence, committed to delivering intelligent legal
            solutions and securing optimal outcomes for those we represent.
          </Typography>
        </div>

        <div className="md:w-1/2">
          <img
            src={AboutImg}
            className="w-full grayscale md:self-start"
            alt="About Image"
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-3">
        <Typography
          customClassName="uppercase !text-[15px] mb-1 !text-gray-300"
          fontWeight="bold"
        >
          Setting a high bar
        </Typography>

        <Typography
          // variant="headline-l"
          fontWeight="regular"
          customClassName="!text-white !text-5xl border-b border-b-gray-200 py-14"
        >
          This is why you want
          <Typography tag="span" customClassName="!text-5xl" variant="headline-l" fontWeight="regular">
            {" "}
            Virk
          </Typography>{" "}
          on your side.
        </Typography>

        <div className="pt-4">
          {reasonsToChoose.map((reason, id) => (
            <ReasonsToChoose reasons={reason} key={id} />
          ))}
        </div>
      </div>

      <div className="mx-auto my-16 flex max-w-7xl flex-col justify-between gap-5 bg-primary-main px-3 py-20 md:flex-row md:px-10 md:justify-start md:gap-20 lg:pl-10">
        <div className="space-y-2">
          <Typography
            customClassName="!text-white !text-lg"
            fontWeight="regular"
          >
            Peter Balach
          </Typography>
          <img src={Stars} alt="star rating" />
          <Typography
            customClassName="!text-[11px] !text-white !uppercase md:!mt-10"
            fontWeight="regular"
          >
            A year ago
          </Typography>
        </div>
        <div className="flex items-start gap-3 md:w-[70%] lg:gap-10 lg:w-[80%]">
          <img src={Quote} alt="Quote" className="w-4 md:w-16 lg:w-24" />
          <Typography
            customClassName="!text-white md:!text-2xl lg:!text-4xl"
            fontWeight="regular"
          >
            Maecenas ullamcorper molestie venenatis. Duis dapibus mi a elementum
            scelerisque. Quisque sit amet pulvinar neque, sit amet laoreet
            libero. Curabitur et massa quis augue tempus euismod nec pretium
            lorem. Ut imperdiet dui eget ligula mollis pharetra. Donec fermentum
            pellentesque lorem sed malesuada. Nullam id euismod dui. Integer
            pellentesque eros a elit vestibulum ullamcorper.
          </Typography>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-3 py-10">
        <Typography fontWeight="bold" customClassName="uppercase !text-primary-light !text-[15px]!tracking-widest">
          Our Values
        </Typography>

        <Typography
          variant="headline-m"
          fontWeight="regular"
          customClassName="!text-white mt-5"
        >
          Delivering results, fair and square.
        </Typography>
        <Typography
          fontWeight="regular"
          customClassName="!text-primary-light text-[10px] mt-5 md:max-w-sm"
        >
          For us, integrity is more than just a word it’s the cornerstone of
          everything we do. Grounded in our commitment to fairness and
          transparency, our core values drive everything we do.
        </Typography>

        <div className="mx-auto mt-14 grid max-w-7xl border border-primary-main sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {values.map((value, id) => (
            <div key={id} className="border border-primary-main p-4">
              <Typography
                variant="title-l"
                fontWeight="regular"
                customClassName="p-4 pb-0 !text-white"
              >
                {value.value}
              </Typography>
              <Typography
                fontWeight="regular"
                customClassName="p-4 pb-0 !text-white !text-[12px]"
              >
                {value.desc}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto my-36 flex max-w-7xl justify-between px-2 lg:px-0">
        <Typography customClassName="!text-[65px] px-2 !font-bold !text-white text-center md:!text-[130px] !leading-[1.1]">
          Let us{" "}
          <Typography
            tag="span"
            customClassName="!text-[65px] px-2 text-center !font-bold md:!text-[120px] !leading-[1.1]"
          >
            help
          </Typography>{" "}
          you.
        </Typography>
        <ButtonLg
          text="Contact Us"
          customStyle="!text-[10px] !uppercase !w-40 h-40 md:!text-sm hover:!border-white"
        />
      </div>
    </section>
  );
};

export default About;
