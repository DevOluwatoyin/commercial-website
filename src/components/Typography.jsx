/* eslint-disable react/prop-types */
import clsx from "clsx";

const variantClassMap = {
  "display-l": "text-display-l",
  "display-m": "text-display-m",
  "display-s": "text-display-s",
  "headline-l": "text-headline-l",
  "headline-m": "text-headline-m",
  "headline-s": "text-headline-s",
  "title-l": "text-title-l",
  "title-m": "text-title-m",
  "title-s": "text-title-s",
  "label-l": "text-label-l",
  "label-m": "text-label-m",
  "label-s": "text-label-s",
  "body-l": "text-body-l",
  "body-m": "text-body-m",
  "body-s": "text-body-s",
  "caption-r": "text-caption-r",
};

// Font weight class map
const fontWeightClassMap = {
  thin: "font-thin",
  "ultra-light": "font-ultra-light",
  light: "font-light",
  regular: "font-regular",
  medium: "font-medium",
  "semi-bold": "font-semi-bold",
  bold: "font-bold",
  "extra-bold": "font-extra-bold",
  black: "font-black",
};

// Underline class map
const underlineClassMap = {
  always: "underline",
  hover: "hover:underline",
  none: "",
};

// Align class map
const alignClassMap = {
  center: "text-center",
  start: "text-start",
  end: "text-end",
  left: "text-left",
  right: "text-right",
  justify: "text-justify",
};

// Align class map
const colorClassMap = {
  primary: "text-primary-main",
  error: "text-red-500",
  neutral20: "text-neutral-20",
  coolGray400: "text-cool-gray-400",
  coolGray500: "text-cool-gray-500",
  coolGray600: "text-cool-gray-600",
  coolGray700: "text-cool-gray-700",
  coolGray800: "text-cool-gray-800",
  secondary: "text-gray-200",
  gSBody: "text-grayscale-body",
  gSPlacehold: "text-grayscale-placehold",
  gSLabel: "text-grayscale-label",
};

const variantMapping = {
  "display-l": "h1",
  "display-m": "h2",
  "display-s": "h3",
  "headline-l": "h2",
  "headline-m": "h3",
  "headline-s": "h4",
  "title-l": "h4",
  "title-m": "h5",
  "title-s": "h6",
  "label-l": "p",
  "label-m": "p",
  "label-s": "p",
  "body-l": "p",
  "body-m": "p",
  "body-s": "p",
  "caption-r": "p",
};

// Typography component
const Typography = (props) => {
  const {
    variant = "body-m",
    tag,
    underline = "none",
    fontWeight,
    gutterBottom,
    noWrap,
    align = "left",
    color = "primary",
    customClassName = "",
    children,
    ...rest
  } = props;

  // Resolved tag
  const Tag = tag || variantMapping[variant] || "p";

  // Classes
  const className = clsx(
    fontWeight && fontWeightClassMap[fontWeight],
    gutterBottom && "mb-4",
    noWrap && "overflow-hidden text-ellipsis whitespace-nowrap",
    colorClassMap[color],
    variantClassMap[variant],
    underlineClassMap[underline],
    underlineClassMap[underline],
    alignClassMap[align],
  );

  return (
    <Tag className={`${customClassName} ${className} `} {...rest}>
      {children}
    </Tag>
  );
};

export default Typography;
