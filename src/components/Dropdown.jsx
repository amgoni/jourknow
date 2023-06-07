import React from "react";
import "./dropdown.scss";

const Fields = [
  { id: 1, name: "Networking" },
  { id: 2, name: "Software Development" },
  { id: 3, name: "Data Science" },
  { id: 4, name: "Artificial Intelligence" },
];

const Dropdown = () => {
  return (
    <div className="dropdown">
      <p>Search by field:</p>
      <select name="" id="">
        {Fields.map((field) => (
          <option value="" className="dropdown__options">
            {field.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
