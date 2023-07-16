// Dropdown.js
import React from "react";
import "./dropdown.scss";

const Dropdown = ({ onDropdownSelect, branches }) => {
  return (
    <div className="dropdown">
      {/* Render a label for the dropdown */}
      <p>Search by field:</p>

      {/* Render a select dropdown element */}
      <select name="" id="" onChange={onDropdownSelect}>
        {/* Render an option for each branch */}
        <option value="All">All</option>
        {branches.map((branch, index) => (
          <option key={index} value={branch} className="dropdown__options">
            {branch}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
