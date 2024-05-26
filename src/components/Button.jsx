export const ButtonSm = ({ text, customStyle }) => {
  return (
    <button
      className={`w-full border-2 border-primary-main bg-white p-2 text-sm uppercase transition-all hover:bg-primary-main hover:text-white ${customStyle}`}
    >
      {text}
    </button>
  );
};

export const ButtonLg = ({ text, customStyle }) => {
  return (
    <button
      className={`w-full border-2 border-primary-main bg-primary-main p-2 text-sm uppercase text-white transition-all hover:bg-white hover:text-black-700 ${customStyle}`}
    >
      {text}
    </button>
  );
};

export const FloatingBtn = () => {
  return (
    <ButtonLg
      customStyle="!w-20 !text-[10px] -rotate-90 z-10 !uppercase fixed -right-5 top-[50%] md:right-0 md:!w-28 md:!h-28 md:rotate-0 md:!text-sm hover:!border-white"
      text="contact us"
    />
  );
};
