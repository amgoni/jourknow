import React from "react";
import "./search.scss";

const Search = ({ searchFilter }) => {
  return (
    <div className="search">
      {/* Render the search form */}
      <form className="search__form">
        {/* Render the search input */}
        <input
          type="search"
          placeholder="Search by title"
          className="search__form-input"
          onChange={searchFilter}
        />
      </form>
    </div>
  );
};

export default Search;
