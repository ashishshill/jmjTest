// QuickLinks.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css"; // Create and import your CSS file

const Footer = () => {
  return (
    <div className="quickLinksContainer">
      <div className="footerWrapper">
        <div className="footerLogo">
          <div className="logoSection">
            <img
              src="https://trustgroupofcomapnies.com/wp-content/uploads/2021/11/WhatsApp-Image-2023-02-07-at-7.41.26-PM-150x150.jpeg"
              alt="Trust Group Logo"
              className="logo"
            />
          </div>
          <div className="linksSection">
            <h2 className="linksHeader">Quick Links</h2>
            <div className="linkList">
              <a className="link" href="#">
                About
              </a>
              <a className="link" href="#">
                Project
              </a>
              <a className="link" href="#">
                Contact
              </a>
            </div>
          </div>
        </div>
        <div className="socialSection">
          <FontAwesomeIcon icon={faFacebookF} className="socialIcon facebook" />
          <FontAwesomeIcon icon={faTwitter} className="socialIcon twitter" />
          <FontAwesomeIcon icon={faYoutube} className="socialIcon youtube" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
