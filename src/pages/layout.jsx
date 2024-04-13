import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FloatingBtn } from "../components/Button";
import DarkNavbar from "../components/DarkNavbar";
import { routeOptions } from "../constants/navLinks";

const Layout = () => {
  const [useWhiteNav, setUseWhiteNav] = useState(true);

  const location = useLocation();

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
      <FloatingBtn />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
