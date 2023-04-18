import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <nav className="flex items-center justify-center py-10 mx-4 text-xl font-semibold text-slate-700">
        <ul className="flex flex-row space-x-20 navbar-nav ">
          <li className="transition duration-300 nav-item hover:scale-110 rotate-4 hover:shadow-lg">
            <Link to="/home">
              <a href="/" className="nav-link ">
                Home
              </a>
            </Link>
          </li>
          <li className="transition duration-300 nav-item hover:scale-110 hover:shadow-lg">
            <Link to="/about">
              <a href="/about" className="nav-link">
                About
              </a>
            </Link>
          </li>
          <li className="transition duration-300 nav-item hover:scale-110 hover:shadow-lg">
            <Link to="/contact">
              <a href="/contact" className="nav-link">
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex flex-col items-center justify-center gap-4 mb-10 text-center ">
        <h1 className="text-2xl font-bold md:text-4xl ">
          Welcome to my website
        </h1>
        <p className="flex items-center justify-center pt-10 text-center w-80 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl ">
          This is not a real online service! You know you need something like
          this in your life to help you realize your deepest dreams. Sign up now
          to get started.
        </p>
      </div>
    </div>
  );
};

export default Navbar;
