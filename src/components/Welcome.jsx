import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./welcome.scss";
import Authentication from "./Authentication";

const Welcome = () => {
  const history = useHistory();

  const isLoggedIn = () => {
    // Check if the user is logged in (use your preferred method)
    // For example, you can check if there's a stored token or any other authentication state
    const token = localStorage.getItem("token");
    return token !== null;
  };

  // Redirect to "/home" if the user is already logged in
  useEffect(() => {
    if (isLoggedIn()) {
      history.replace("/home");
    }
  }, [history]);

  return (
    <div className="welcome">
      <div className="welcome-message">
        <h1>Your gateway to a world class student guide.</h1>
      </div>
      <div className="welcome-hero">
        <div className="welcome-hero-image"></div>
        <Authentication />
      </div>
      <div className="arrow-right"></div>
      <div className="line"></div>
      <div className="diagonal"></div>
    </div>
  );
};

export default Welcome;
