import React from "react";

const Select = ({ image, optionHeading }) => {
  return (
    <div className="relative inline-block w-64">
      <select className="block appearance-none w-full bg-white border border-primary-main border-r-2 border-b-2 text-xs font-medium text-center text-primary-dark py-3 px-4 pr-8 leading-tight focus:outline-none focus:border-gray-500">
        <option hidden>{optionHeading}</option>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center px-2 text-gray-700">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Select;
