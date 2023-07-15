import React from "react";
import "./dropdown.scss";

// Array of fields for the dropdown options
const Fields = [
  { id: 0, name: "All" },
  { id: 1, name: "Networking" },
  { id: 2, name: "Software Development" },
  { id: 3, name: "Data Science" },
  { id: 4, name: "Artificial Intelligence" },
];

const Dropdown = () => {
  return (
    <div className="dropdown">
      {/* Render a label for the dropdown */}
      <p>Search by field:</p>

      {/* Render a select dropdown element */}
      <select name="" id="">
        {/* Iterate through the Fields array and render an option for each field */}
        {Fields.map((field) => (
          <option key={field.id} value="" className="dropdown__options">
            {field.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
