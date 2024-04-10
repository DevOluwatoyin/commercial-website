import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FloatingBtn } from "../components/Button";

const Layout = () => {
  return (
    <>
      <Navbar />
      <FloatingBtn />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
