import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggle }) => {
  return (
    <div className="py-8">
      <nav
        className="flex justify-between items-center h-16 bg-white text-black top-0 fixed inset-x-0 shadow font-lora"
        role="navigation"
      >
        <Link to="/" className="pl-8 font-lora text-2xl">
          EGG<span className="text-sm text-yellow-500">CELLENT</span>
        </Link>
        <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div className="pr-8 md:block  hidden">
          <Link to="/" className="p-4 hover:text-yellow-500">
            Home
          </Link>
          <Link to="/menu" className="p-4 hover:text-yellow-500">
            Menu
          </Link>
          <Link to="/about" className="p-4 hover:text-yellow-500">
            About
          </Link>
          <Link to="/contact" className="p-4 hover:text-yellow-500">
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
