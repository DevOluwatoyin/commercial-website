import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FloatingBtn } from "../components/Button";
import DarkNavbar from "../components/DarkNavbar";
import { routeOptions } from "../constants/navLinks";

const Layout = () => {
  const [useWhiteNav, setUseWhiteNav] = useState(true);

  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 200) {
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

  useEffect(() => {
    if (location.pathname in routeOptions) {
      setUseWhiteNav(false);
    } else {
      setUseWhiteNav(true);
    }
  }, [location.pathname]);

  return (
    <>
      {useWhiteNav ? <Navbar /> : <DarkNavbar />}
      <FloatingBtn floatStyle={`${isScrolled ? "top-1/2" : "top-[85%]"}`} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
