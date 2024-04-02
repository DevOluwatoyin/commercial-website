import { useEffect, useState } from "react";
import openIcon from "../assets/open.svg";
import closeIcon from "../assets/close.svg";
import { Link, useLocation } from "react-router-dom";
import { navItems } from "../constants/navLinks";
import { ButtonLg, ButtonSm } from "./Button";

const NavItem = ({ items, onClick }) => {
  const location = useLocation();

  // Check if the current path matches the NavItem path
  const isActive = location.pathname === items.path;

  return (
    <li
      className={`hover:underline underline-offset-4 transition-all ${
        isActive
          ? "text-primary underline hover:text-gray-sm"
          : "text-black hover:text-gray-sm"
      }`}
    >
      <Link className="lg:text-base" to={items.path} onClick={onClick}>
        {items.name}
      </Link>
    </li>
  );
};

const Navbar = () => {
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
      className={`bg-bg-color z-50 w-full h-20 bg-white fixed flex justify-between items-center py-4 px-10 transition-all duration-500 ease-in-out ${
        isScrolled ? "navbar-scroll" : ""
      }`}
    >
      {/* <img src={Logo} alt="logo" />  */}
      <p>Logo</p>
      <div className="hidden items-center justify-between w-3/5 gap-20 md:flex">
        <ul className="w-1/2 h-full items-center justify-between flex">
          {navItems.map((items, index) => (
            <NavItem items={items} key={index} />
          ))}
        </ul>
        <div className="flex items-center w-1/2 gap-5">
          <ButtonSm text="Email us" customStyle="!w-1/3" />
          <ButtonLg text="Book a free consult" customStyle="w-2/3" />
        </div>
      </div>
      <button className="flex md:hidden text-text-color" onClick={handleToggle}>
        {navOpen ? (
          <img src={closeIcon} alt="close menu" />
        ) : (
          <img src={openIcon} alt="close menu" />
        )}
      </button>
      {navOpen && (
        <div className="absolute bg-white w-full h-screen top-20 left-0 flex flex-col  items-start space-y-4 pl-4">
          <ul className="flex flex-col justify-center space-y-4">
            {navItems.map((items, index) => (
              <NavItem
                items={items}
                key={index}
                onClick={() => setNavOpen(false)}
              />
            ))}
          </ul>
          <div className="flex items-center flex-col gap-5">
            <ButtonSm text="Email us" />
            <ButtonLg text="Book a free consult" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;