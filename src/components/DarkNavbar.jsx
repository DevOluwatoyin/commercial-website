/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import openIcon from "../assets/open.svg";
import closeIcon from "../assets/close.svg";
import { Link, useLocation } from "react-router-dom";
import { navItems } from "../constants/navLinks";
import { ButtonLg, ButtonSm } from "./Button";
import Logo from "../assets/logo-dark.png";

const NavItem = ({ items, onClick }) => {
  const location = useLocation();

  // Check if the current path matches the NavItem path
  const isActive = location.pathname === items.path;

  return (
    <li
      className={`underline-offset-4 transition-all hover:underline ${
        isActive
          ? "text-primary-main underline hover:text-white"
          : "text-white hover:text-primary-main"
      }`}
    >
      <Link className="lg:text-base" to={items.path} onClick={onClick}>
        {items.name}
      </Link>
    </li>
  );
};

const DarkNavbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const handleToggle = () => {
    setNavOpen(!navOpen);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-bg-color fixed z-50 flex h-20 w-full items-center justify-between bg-primary-dark px-10 py-4 transition-all duration-500 ease-in-out ${
        isScrolled ? "h-16 shadow-md shadow-red-100" : ""
      }`}
    >
      <Link to="/" className="block w-28">
        <img src={Logo} alt="logo" className="w-full" />
      </Link>
      <div className="hidden items-center justify-between gap-20 md:flex md:w-4/5 lg:w-3/5">
        <ul className="flex h-full w-1/2 items-center justify-between">
          {navItems.map((items, index) => (
            <NavItem items={items} key={index} />
          ))}
        </ul>
        <div className="flex w-1/2 items-center gap-5">
          <ButtonSm
            text="Email us"
            customStyle="!w-1/3 text-primary-main border-white md:!w-1/2 hover:border-primary-main"
          />
          <ButtonLg
            text="Book a free consult"
            customStyle="w-2/3 hover:border-white"
          />
        </div>
      </div>
      <button className="text-text-color flex md:hidden" onClick={handleToggle}>
        {navOpen ? (
          <img src={closeIcon} alt="close menu" />
        ) : (
          <img src={openIcon} alt="close menu" />
        )}
      </button>
      {navOpen && (
        <div className="absolute left-0 top-20 flex h-screen w-full flex-col items-start space-y-4 bg-primary-dark pl-4">
          <ul className="flex flex-col justify-center space-y-4">
            {navItems.map((items, index) => (
              <NavItem
                items={items}
                key={index}
                onClick={() => setNavOpen(false)}
              />
            ))}
          </ul>
          <div className="flex flex-col items-center gap-5">
            <ButtonSm
              text="Email us"
              customStyle="border-white hover:border-primary-main"
            />
            <ButtonLg
              text="Book a free consult"
              customStyle="hover:border-white"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default DarkNavbar;
