import Typography from "./Typography";
import { offers } from "../constants/navLinks";
import AccommodateImg from "../assets/accommodate.png";
import { Link } from "react-router-dom";

const Accommodate = () => {
  return (
    <section className="mx-auto max-w-[1440px] space-y-10 px-4 py-10">
      <Typography
        color="primary-dark"
        variant="headline-l"
        fontWeight="semi-bold"
      >
        We
        <Typography tag="span" variant="headline-l" fontWeight="semi-bold">
          {" "}
          accommodate
        </Typography>{" "}
        you.
      </Typography>
      <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:gap-40">
        <div className="md:w-1/2">
          <img src={AccommodateImg} alt="" className="w-full" />
        </div>
        <div className="flex flex-col border-b border-b-gray-200 md:w-1/2">
          {offers.map((offer, id) => (
            <Link
              to=""
              key={id}
              className="border-t border-t-gray-200 py-4 text-title-m font-medium transition text-primary-light hover:text-primary-main"
            >
              {offer}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accommodate;
