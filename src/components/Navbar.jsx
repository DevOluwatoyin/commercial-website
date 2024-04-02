import { useEffect, useState } from "react";
// import { navItems } from "../constants/navItems";
import openIcon from "../assets/open.svg";
import closeIcon from "../assets/close.svg";
import { Link, useLocation } from "react-router-dom";
import { navItems } from "../constants/navLinks";

const NavItem = ({ items, onClick }) => {
  const location = useLocation();

  // Check if the current path matches the NavItem path
  const isActive = location.pathname === items.path;

  return (
    <li
      className={`hover:underline  underline-offset-4 transition-all ${
        isActive
          ? "text-red-500 underline hover:text-heart-color-hover"
          : "hover:text-heart-color-hover"
      }`}
    >
      <Link className="lg:text-xl" to={items.path} onClick={onClick}>
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
      className={`bg-bg-color z-50 w-full h-20 fixed flex justify-between items-center py-4 px-10 transition-all duration-500 ease-in-out ${
        isScrolled ? "navbar-scroll" : ""
      }`}
    >
      {/* <img src={logo} width={60} alt="movie logo" /> */}
      Logo
      <ul className="hidden w-1/2 h-full justify-between items-center font-bold md:flex">
        {navItems.map((items, index) => (
          <NavItem items={items} key={index} />
        ))}
      </ul>
      <button className="flex md:hidden text-text-color" onClick={handleToggle}>
        {navOpen ? (
          <img src={closeIcon} alt="close menu" />
        ) : (
          <img src={openIcon} alt="close menu" />
        )}
      </button>
      {navOpen && (
        <ul className="absolute bg-[#171717bb] w-full h-screen flex flex-col justify-center space-y-8 items-center font-bold top-12 left-0">
          {navItems.map((items, index) => (
            <NavItem
              items={items}
              key={index}
              onClick={() => setNavOpen(false)}
            />
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
