/* eslint-disable react/prop-types */
const Select = ({
  image,
  optionHeading,
  customWrapperStyle,
  customSelectStyle,
}) => {
  return (
    <div className={`relative inline-block w-64 ${customWrapperStyle}`}>
      <select
        className={`block w-full appearance-none border border-b-2 border-r-2 border-primary-main bg-white px-4 py-3 pr-8 text-center text-xs font-medium leading-tight text-primary-dark focus:border-gray-500 focus:outline-none ${customSelectStyle}`}
      >
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
