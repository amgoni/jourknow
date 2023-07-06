import React from "react";
import "./resultItem.scss";

const ResultItem = ({ number, name, description }) => {
  return (
    <div className="resultItem">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ResultItem;
