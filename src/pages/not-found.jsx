import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen grid place-items-center">
      <div className="text-center text-xl md:text-2xl">
        <p>Hello</p>
        <p>
          Page not found. Go
          <Link
            to="/"
            className="text-[#ff2901] underline underline-offset-4 hover:text-white hover:tracking-widest transition-colors"
          >
            Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
