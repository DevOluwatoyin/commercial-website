import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="grid h-screen place-items-center">
      <div className="text-center text-xl md:text-2xl">
        <p>Hello</p>
        <p>
          Page not found. Go
          <Link
            to="/"
            className="text-[#ff2901] underline underline-offset-4 transition-colors hover:tracking-widest hover:text-white"
          >
            Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
