import React from "react";
import { Link } from "react-router-dom";
import RentoLogo from "../assets/RentoLogo.png";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-cyan-800 to-blue-400">
      <div className="flex justify-between items-center p-3 mx-auto">
        <Link to="/">
          <img
            className="w-24 sm:w-32"
            src={RentoLogo}
            alt="find your dream home"
          />
        </Link>

        <form className="flex items-center bg-slate-300 rounded-lg px-3">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent h-10 focus:outline-none w-24 sm:w-64 font-gilroy"
          />
          <FaSearch className="bg-transparent"></FaSearch>
        </form>

        <ul className="flex gap-4  font-sans text-white font-semibold">
          <Link to="/">
            <li className="hidden sm:inline hover:underline hover:text-gray-600">
              Home
            </li>
          </Link>

          <Link to="/about">
            <li className="sm:inline hover:underline hover:text-gray-600">
              About
            </li>
          </Link>

          <Link to="/sign-in">
            <li className="sm:inline hover:underline hover:text-gray-600">
              Sign in
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
