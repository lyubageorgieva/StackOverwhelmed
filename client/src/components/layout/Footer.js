import React from "react";
import AppStore from "../../img/app_store.png";
import PlayStore from "../../img/play_store_logo.png";

export const Footer = () => {
  return (
    //Footer
    <footer>
      <div className="container">
        <div className="left-col">
          <h3>Download our app on:</h3>
          <img
            src={PlayStore}
            className="play-store-img"
            alt="google play store banner"
          />
          <img
            src={AppStore}
            className="app-store-img"
            alt="google play store and app store download banners"
          />
          <p>
            For more than 100 years, Stack Overwhelmed's story has always been
            about innovation.
          </p>
        </div>
        <div className="right-col">
          <div className="links-col">
            <h3>Useful Links</h3>
            <ul>
              <li>Moodle</li>
              <li>myConcordia</li>
              <li>WebWork</li>
              <li>COLE Concordia</li>
              <li>Udemy</li>
            </ul>
          </div>
          <div className="socials-col">
            <h3>Follow Us</h3>
            <ul>
              <li>Facebook</li>
              <li>Youtube</li>
              <li>Instagram</li>
              <li>Snapchat</li>
              <li>TikTok</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
