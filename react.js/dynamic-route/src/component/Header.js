import React from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="parent">
      <div className="header">
        <div className="header__logo">
          <h2>
            <Link to="/">Dynamo</Link>
          </h2>
        </div>
        <div className="header__navLinks">
          <ul>
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => {
                  return { color: isActive ? "darkgoldenrod" : "" };
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/work"
                style={({ isActive }) => {
                  return { color: isActive ? "darkgoldenrod" : "" };
                }}
              >
                Our Work
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                style={({ isActive }) => {
                  return { color: isActive ? "darkgoldenrod" : "" };
                }}
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                style={({ isActive }) => {
                  return { color: isActive ? "darkgoldenrod" : "" };
                }}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
