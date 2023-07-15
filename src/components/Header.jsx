import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./header.scss";
import logo from "../images/logo.jpg";

const Header = () => {
  // State to toggle the menu
  const [toggleMenu, setToggleMenu] = useState(false);

  // Function to toggle the menu
  const toggleHandler = () => setToggleMenu((prev) => !prev);

  return (
    <>
      {/* Desktop navigation */}
      <nav id="navbar" className="navbar-desktop">
        <img src={logo} alt="ATBU logo" className="logo" />
        <h1>Department of Computer Science</h1>
        <ul className="nav-links">
          <li className="link">
            <Link to="/">Home</Link>
          </li>
          <li className="link">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      {/* Mobile navigation */}
      <nav className="navbar-mobile">
        <img src={logo} alt="ATBU logo" className="logo" />
        <h1>Department of Computer Science</h1>
        {toggleMenu ? (
          <RiCloseLine color="138601" size={30} onClick={toggleHandler} />
        ) : (
          <RiMenu3Line color="138601" size={30} onClick={toggleHandler} />
        )}
        {toggleMenu && (
          <div className="navbar-mobile-container">
            <ul className="nav-links">
              <li className="link">
                <a href="/">Home</a>
              </li>
              <li className="link">
                <a href="/about">About</a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
