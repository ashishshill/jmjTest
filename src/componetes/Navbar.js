import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbarContainer">
        <div className="navbar-logo">
          <img
            src="https://trustgroupofcomapnies.com/wp-content/uploads/2021/11/WhatsApp-Image-2023-02-07-at-7.41.26-PM.jpeg"
            alt="Logo"
          />
        </div>
        <ul className="navbar-links">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/services">Project</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
