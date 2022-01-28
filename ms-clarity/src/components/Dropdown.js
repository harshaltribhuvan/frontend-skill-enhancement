import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-4 text-center items-center bg-yellow-500 transition duration-300 ease-out"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link
        to="/"
        className="p-4 hover:bg-white hover:text-yellow-500 transition duration-300 ease-in-out"
      >
        Home
      </Link>
      <Link
        to="/menu"
        className="p-4 hover:bg-white hover:text-yellow-500 transition duration-300 ease-out"
      >
        Menu
      </Link>
      <Link
        to="/about"
        className="p-4 hover:bg-white hover:text-yellow-500 transition duration-300 ease-out"
      >
        About
      </Link>
      <Link
        to="/contact"
        className="p-4 hover:bg-white hover:text-yellow-500 transition duration-300 ease-out"
      >
        Contact
      </Link>
    </div>
  );
};

export default Dropdown;
