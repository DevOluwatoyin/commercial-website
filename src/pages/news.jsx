import React from "react";
import RedBox from "../assets/red-box.svg";
import PageHeader from "../components/PageHeader";
import Select from "../components/Select";
import caret from "../assets/caret-black.svg";
import Typography from "../components/Typography";
import SingleNews from "../components/SingleNews";
import { newsPost } from "../constants/partners";
import { ButtonLg, ButtonSm } from "../components/Button";
import NewsLetter from "../components/Newsletter";

const News = () => {
  return (
    <section>
      <PageHeader
        image={RedBox}
        heading="News"
        summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in lorem sed arcu varius porttitor. Fusce pretium orci a mollis sollicitudin. Mauris vulputate orci eget diam dictum aliquet"
      />

      <div className="mx-auto my-14 max-w-7xl px-4 md:my-20">
        <div className="flex items-center gap-4">
          <Select image={caret} optionHeading="FILTER BY EXPERTISE" />
          <Select image={caret} optionHeading="SORT" />
        </div>

        <div className="mt-10">
          <Typography
            color="primary-dark"
            variant="headline-m"
            fontWeight="regular"
            customClassName="mb-10"
          >
            All Posts
          </Typography>
          <div className="border-b border-primary-light">
            <div className="flex flex-col gap-4 md:flex-row">
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

            <p className="mb-10 mt-14 text-right">Pagination</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-8 pb-10 pt-24 md:flex-row md:gap-0">
          <Typography customClassName="!text-[65px] px-2 !text-primary-dark !leading-[1.1] text-center md:!text-[120px]">
            Let us
            <Typography
              tag="span"
              customClassName="!text-[65px] px-2 !leading-[1.1] md:!text-[120px]"
            >
              {" "}
              help
            </Typography>{" "}
            you.
          </Typography>

          <ButtonSm
            text="Book a free consult"
            customStyle="!uppercase font-medium md:w-1/5"
          />
        </div>
      </div>

      <NewsLetter />
    </section>
  );
};

export default News;
