import React from "react";
import "./hero.scss";
import Search from "./Search";
import Dropdown from "./Dropdown";

const Hero = () => {
  return (
    <div className="hero">
      <h1>Your gateway to world class research journals</h1>
      <div className="hero__fields">
        <Search />
        <Dropdown />
      </div>
    </div>
  );
};

export default Hero;
