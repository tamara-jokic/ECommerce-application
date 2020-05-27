import React, { Component } from "react";
import logo from "../images/logo.jpg";
import { Link } from "react-router-dom";
import { NavLink } from "reactstrap";

const Logo = (props) => {
  return (
    <div>
      <NavLink href="/" className="navbar-logo">
        <img src={logo} />
      </NavLink>
      {/* <Link to="/">
        <img src={logo} />
      </Link> */}
    </div>
  );
};

export default Logo;
