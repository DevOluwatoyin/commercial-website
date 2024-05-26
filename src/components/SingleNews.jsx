import AddIcon from "../assets/add-icon.svg";
import Typography from "./Typography";
import { useNavigate } from "react-router-dom";

const SingleNews = ({ heading, img, date, title }) => {
  const navigate = useNavigate();
  const navigateToSingleNews = () => {
    navigate("/news-details");
  };

  return (
    <div className="flex-1">
      <Typography
        color="primary-dark"
        customClassName="uppercase !text-[11px] mb-1 tracking-widest"
        fontWeight="bold"
      >
        {heading}
      </Typography>
      <div className="relative">
        <img src={img} alt="" className="" />
        <img src={AddIcon} alt="" className="absolute bottom-0 right-0 cursor-pointer" />
      </div>
      <div>
        <Typography fontWeight="medium" customClassName="!text-primary-dark !text-xs my-3">
          {date}
        </Typography>
        <Typography
          color="primary-dark"
          variant="title-l"
          fontWeight="medium"
          customClassName="capitalize cursor-pointer hover:underline hover:text-primary-main transition"
          onClick={navigateToSingleNews}
        >
          {title}
        </Typography>
      </div>
    </div>
  );
};

export default SingleNews;
