import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./search.scss";
import ResultCard from "./ResultCard";

const Search = ({ searchFilter }) => {
  return (
    <div className="search">
      <form className="search__form">
        <input
          type="search"
          placeholder="Enter title or author"
          className="search__form-input"
          onChange={searchFilter}
        />
        {/* <button type="button" className="search__form-button">
          <FontAwesomeIcon
            icon="fas fa-search"
            className="search__form-button-icon"
          />
        </button> */}
      </form>
    </div>
  );
};

export default Search;
