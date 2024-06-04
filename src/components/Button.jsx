/* eslint-disable react/prop-types */
export const ButtonSm = ({ text, customStyle, icon }) => {
  return (
    <button
      className={`w-full border-2 border-primary-main bg-white p-2 text-sm uppercase transition-all hover:bg-primary-main hover:text-white ${customStyle}`}
    >
      {text}
      {icon ? <img src={icon} alt="" /> : null}
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

export const FloatingBtn = ({ floatStyle }) => {
  return (
    <button className={`fixed -right-5 top-[50%] z-10 !w-20 -rotate-90 border-2 border-primary-main bg-primary-main p-2 !text-[10px] text-sm uppercase text-white transition-all hover:!border-white hover:bg-white hover:text-black-700 md:right-0 md:!h-28 md:!w-28 md:rotate-0 md:!text-sm ${floatStyle}`}>
      contact us
    </button>
  );
};
