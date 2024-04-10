import React from "react";

export const ButtonSm = ({ text, customStyle }) => {
  return (
    <button
      className={`text-sm w-full bg-white border-2 border-primary-main capitalize p-2 hover:bg-primary-main hover:text-white transition-all ${customStyle}`}
    >
      {text}
    </button>
  );
};

export const ButtonLg = ({ text, customStyle }) => {
  return (
    <button
      className={`text-sm w-full bg-primary-main text-white capitalize p-2 hover:bg-white hover:text-black-700 border-primary-main border-2 transition-all ${customStyle}`}
    >
      {text}
    </button>
  );
};

export const FloatingBtn = () => {
  return (
    <ButtonLg
      customStyle="!w-20 !text-[10px] -rotate-90 !uppercase fixed -right-5 top-[50%] md:right-0 md:!w-28 md:!h-28 md:rotate-0 md:!text-sm"
      text="contact us"
    />
  );
}
