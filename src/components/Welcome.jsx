import React from "react";
import "./welcome.scss";
import Authentication from "./Authentication";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="welcome-message">
        <h1>Your gateway to world class research journals.</h1>
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
