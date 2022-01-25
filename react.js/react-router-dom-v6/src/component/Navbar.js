import { NavLink } from "react-router-dom";
import "./css/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="link__container">
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
            to="/about"
            style={({ isActive }) => {
              return { color: isActive ? "crimson" : "" };
            }}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={({ isActive }) => {
              return { color: isActive ? "darkcyan" : "" };
            }}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
