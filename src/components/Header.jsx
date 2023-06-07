import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <nav id="navbar">
      <img src="../assets/logo.jpg" alt="ATBU logo" className="logo" />
      <h1>Department of Computer Science</h1>
      <ul className="nav-links">
        <li className="link">
          <a href="#">About</a>
        </li>
        <li className="link">
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
