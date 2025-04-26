import React from "react";
import { NavLink } from "react-router";
import "../App.css";

const Header = () => {
  return (
    <nav>
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Log In</NavLink>
      </ul>
    </nav>
  );
};

export default Header;
