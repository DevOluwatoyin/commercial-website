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
          fontWeight="medium"
        >
          {reasons.title}
        </Typography>
      </div>
      <div className="space-y-5 md:w-1/2">
        <Typography
          customClassName="mb-2 !text-lg !text-white"
          fontWeight="regular"
        >
          {reasons.text1}
        </Typography>
        <Typography customClassName="!text-lg !text-white" fontWeight="regular">
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
      <div className="flex h-screen flex-col items-center justify-center gap-28 overflow-hidden px-3 pt-20">
        <p className="max-w-2xl text-center text-xl font-medium text-white md:text-3xl">
          With every client, we are driven by a singular mission: to champion
          our their rights with unwavering dedication and integrity.
        </p>
        <img
          src={AboutTxt}
          alt="About"
          className="-ml-8 w-[700px] self-start"
        />
      </div>

      <div className="relative ml-auto flex max-w-7xl flex-col justify-between gap-5 py-8 pl-3 md:flex-row md:items-center md:py-14 lg:items-start">
        <div className="absolute z-10 w-[800px] space-y-5 px-1">
          <Typography
            customClassName="uppercase !text-lg mb-1 !text-gray-300"
            fontWeight="bold"
          >
            From square one
          </Typography>
          <Typography
            customClassName="mb-1 !text-xl !text-white md:!text-[45px] !leading-[54px] relative max-w-[800px] tracking-tight"
            fontWeight="medium"
          >
            Virk Personal Injury Law has been providing Hamilton and the
            surrounding areas with personal injury law services since 2013.
          </Typography>
          <Typography
            customClassName="mb-1 !text-lg !text-white md:!text-[21px] max-w-[600px]"
            fontWeight="regular"
          >
            Personal Injury Law can be very complex and overwhelming. With a
            sharp focus on personal injury cases, we navigate the legal
            landscape with precision and tenacity, ensuring that our clients
            receive the fair and just results they deserve. Our firm stands as a
            beacon of excellence, committed to delivering intelligent legal
            solutions and securing optimal outcomes for those we represent.
          </Typography>
        </div>

        <div className="ml-auto md:w-[43%]">
          <img
            src={AboutImg}
            className="w-full grayscale md:self-start"
            alt="About Image"
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-3">
        <Typography
          customClassName="uppercase !text-lg mb-1 !text-gray-300"
          fontWeight="bold"
        >
          Setting a high bar
        </Typography>

        <Typography
          fontWeight="medium"
          customClassName="!text-white !text-5xl border-b border-b-gray-200 py-14"
        >
          This is why you want
          <Typography
            tag="span"
            customClassName="!text-5xl"
            variant="headline-l"
            fontWeight="medium"
          >
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

      <div className="mx-auto my-16 flex max-w-7xl flex-col justify-between gap-5 bg-primary-main px-3 py-20 md:flex-row md:justify-start md:gap-20 md:px-10 lg:pl-10">
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
        <div className="flex items-start gap-3 md:w-[70%] lg:w-[80%] lg:gap-10">
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

      <div className="py-10">
        <Typography
          customClassName="uppercase !text-gray-300 !text-lg px-3 md:pl-10"
          fontWeight="bold"
        >
          Our Values
        </Typography>
        <Typography
          variant="headline-m"
          fontWeight="medium"
          customClassName="!text-white mt-5 px-3 md:pl-10"
        >
          Delivering results, fair and square.
        </Typography>
        <Typography
          fontWeight="regular"
          customClassName="!text-white text-lg mt-5 md:max-w-md px-3 md:pl-10"
        >
          For us, integrity is more than just a word it’s the cornerstone of
          everything we do. Grounded in our commitment to fairness and
          transparency, our core values drive everything we do.
        </Typography>

        <div className="mt-14 grid border-y border-primary-main sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {values.map((value, id) => (
            <div
              key={id}
              className={`border-r border-primary-main p-4 ${id === values.length - 1 ? "border-r-0" : ""}`}
            >
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

      <div className="mx-auto my-20 flex max-w-7xl items-center px-2 lg:px-0 gap-20">
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
          text="Book a free consult"
          customStyle="!text-[10px] !uppercase max-w-[219px] h-10 md:!text-sm hover:!border-white"
        />
      </div>
    </section>
  );
};

export default About;
