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
        customClassName="uppercase !text-[11px] mb-1"
        fontWeight="medium"
      >
        {heading}
      </Typography>
      <div className="relative -z-10">
        <img src={img} alt="" className="" />
        <img src={AddIcon} alt="" className="absolute bottom-0 right-0" />
      </div>
      <div>
        <Typography customClassName="!text-primary-dark !text-[10px] my-3">
          {date}
        </Typography>
        <Typography
          color="primary-dark"
          variant="title-l"
          fontWeight="regular"
          customClassName="capitalize cursor-pointer hover:underline"
          onClick={navigateToSingleNews}
        >
          {title}
        </Typography>
      </div>
    </div>
  );
};

export default SingleNews;
