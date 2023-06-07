import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./search.scss";

const Search = () => {
  return (
    <div className="search">
      <form className="search__form">
        <input
          type="text"
          placeholder="Enter title or author"
          className="search__form-input"
        />
        <button type="button" className="search__form-button">
          <FontAwesomeIcon
            icon="fas fa-search"
            className="search__form-button-icon"
          />
        </button>
      </form>
    </div>
  );
};

export default Search;
