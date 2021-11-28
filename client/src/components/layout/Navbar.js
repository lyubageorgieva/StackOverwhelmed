import React, { Fragment } from "react";
import ScriptTag from "react-script-tag";
import Logo from "../../img/1.svg";
import BigLogo1 from "../../img/bigLogo1.svg";
import Exit1 from "../../img/exit1.svg";
import Menu from "../../img/menu.png";
import Menu1 from "../../img/menu.svg";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import PropTypes from "prop-types";

import { useState } from "react";
import Helmet from "react-helmet";


export const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <nav>
      <ul id="MenuItems">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/question">Q&A</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link onClick={logout} to="/">
            <i className="fas fa-sign-out-alt" />{" "}
            <span className="hide-sm">Logout</span>
          </Link>
        </li>
      </ul>
    </nav>
  );

  const guestLinks = (
    <nav>
      <img src={Exit1} alt="exit button" id="menu-exit" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signup">Q&A</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={BigLogo1} alt="stack overwhelmed logo with name" />
          </Link>
        </div>
        <img src={Menu}  alt="menu button" id="menuBtn"/>
        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
      </div>
    </div>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

// I will need to fix the navbar to be responsive with react
// const mobileBtn = document.getElementById("menuBtn");
// const nav = document.querySelector("nav");
// const mobileBtnExit = document.getElementById("menu-exit");

// mobileBtn.addEventListener("click", () => {
//   nav.classList.add("menu-btn");
// });

// mobileBtnExit.addEventListener("click", () => {
//   nav.classList.remove("menu-btn");
// });


export default connect(mapStateToProps, { logout })(Navbar);
