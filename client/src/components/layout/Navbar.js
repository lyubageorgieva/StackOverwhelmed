import React, { Fragment } from "react";
import LogoName from "../../img/bigLogo1.svg";
import ExitMobile from "../../img/exit1.svg";
import MenuMobile from "../../img/menu.svg";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import PropTypes from "prop-types";


export const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <nav>
      <ul id="MenuItems">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/feed">Q&A</Link>
        </li>
        <li>
          <Link to="/account">Account</Link>
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
      <img src={ExitMobile} alt="exit button" id="menu-exit" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/feed">Q&A</Link>
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
            <img src={LogoName} alt="stack overwhelmed logo with name" />
          </Link>
        </div>
        <img src={MenuMobile}  alt="menu button" id="menuBtn"/>
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
