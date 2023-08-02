import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./header.scss";
import logo from "../images/logo.jpg";
import AuthContext from "../store/auth-context";

const Header = () => {
  // State to toggle the menu
  const [toggleMenu, setToggleMenu] = useState(false);

  // Function to toggle the menu
  const toggleHandler = () => setToggleMenu((prev) => !prev);

  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <>
      {/* Desktop navigation */}
      <nav id="navbar" className="navbar-desktop">
        <Link to="/" className="logo">
          <img src={logo} alt="ATBU logo" className="logo" />
          <h1>Department of Mathematical Science</h1>
        </Link>
        <ul className="nav-links">
          <li className="link">
            <Link to="/about">About</Link>
          </li>
          {isLoggedIn && (
            <li>
              <Link to="/" onClick={logoutHandler}>
                Logout
              </Link>
            </li>
          )}
        </ul>
      </nav>

      {/* Mobile navigation */}
      <nav className="navbar-mobile">
        <Link to="/" className="logo">
          <img src={logo} alt="ATBU logo" className="logo" />
          <h1>Department of Mathematical Science</h1>
        </Link>
        {toggleMenu ? (
          <RiCloseLine color="138601" size={30} onClick={toggleHandler} />
        ) : (
          <RiMenu3Line color="138601" size={30} onClick={toggleHandler} />
        )}
        {toggleMenu && (
          <div className="navbar-mobile-container">
            <ul className="nav-links">
              <li className="link">
                <a href="/about">About</a>
              </li>
              {isLoggedIn && (
                <li>
                  <a onClick={logoutHandler}>Logout</a>
                </li>
              )}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
