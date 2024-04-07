import React from "react";
import { newsPost } from "../constants/partners";
import SingleNews from "./SingleNews";
import Typography from "./Typography";

const News = () => {
  return (
    <section className="p-4 md:p-20">
      <Typography customClassName="uppercase !text-primary-light !text-[11px] !tracking-widest">
        Latest from Virk
      </Typography>
      <Typography
        color="primary-dark"
        variant="headline-l"
        fontWeight="regular"
        customClassName="my-5"
      >
        News
      </Typography>

      <div className="flex flex-col items-cent gap-4 md:flex-row">
        {newsPost.map((post, id) => (
          <SingleNews
            key={id}
            date={post.date}
            heading={post.heading}
            img={post.img}
            title={post.title}
          />
        ))}
      </div>
    </section>
  );
};

export default News;
