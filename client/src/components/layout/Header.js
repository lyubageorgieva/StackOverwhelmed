import React from "react";
import { Link } from "react-router-dom";
import Hands from "../../img/hands.svg";


export const Header = () => {
  return (
    <div>
      <section className="hero-section">
        <div className="container">
          <div className="left-col">
            <h1>
              Questions Taken To The <span>Next Level</span>
            </h1>
            <p className="subhead">
              A local platform building the definitive collection of <br />
              Student Questions &amp; Answers
            </p>
            <Link to="/feed" className="discover-btn">
              Discover Now &#8594;{" "}
            </Link>
          </div>
          <img src={Hands} className="hero-img" alt="hand shaking" />
        </div>
      </section>
    </div>
  );
};

export default Header;
