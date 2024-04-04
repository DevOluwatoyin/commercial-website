import React from "react";

export const ButtonSm = ({ text, customStyle }) => {
  return (
    <button
      className={`text-sm w-full bg-white border-2 border-primary-main capitalize p-2 hover:bg-primary-main hover:text-white hover:border-none transition-all ${customStyle}`}
    >
      {text}
    </button>
  );
};

export const ButtonLg = ({ text, customStyle }) => {
  return (
    <button
      className={`text-sm w-full bg-primary-main text-white capitalize p-2 hover:bg-white hover:text-black-700 hover:border-primary-main hover:border-2 transition-all ${customStyle}`}
    >
      {text}
    </button>
  );
};
