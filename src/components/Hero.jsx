import React from "react";
import "./hero.scss";
import Search from "./Search";

const Hero = ({ onSearch }) => {
  return (
    <div className="hero">
      <h1>Your gateway to world class research journals</h1>
      <div className="hero__fields">
        <Search searchFilter={onSearch} />
      </div>
    </div>
  );
};

export default Hero;
