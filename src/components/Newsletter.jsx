import Typography from "./Typography";
import { ButtonLg } from "./Button";

const NewsLetter = () => {
  return (
    <section className="bg-black-700 px-4 py-12 h-72">
      <div className="mx-auto max-w-7xl flex flex-col justify-between h-full">
        <Typography
          variant="display-s"
          fontWeight="regular"
          customClassName="text-white md:!text-5xl"
        >
          Sign up for our newsletter.
        </Typography>
        <div className="flex items-center gap-8">
          <input
            type="text"
            placeholder="Email"
            className="!w-4/5 px-6 py-2 placeholder:text-primary-dark"
          />
          <ButtonLg text="submit" customStyle="!w-[160px] !uppercase" />
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
