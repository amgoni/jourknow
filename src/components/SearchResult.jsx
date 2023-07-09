import React, { useState } from "react";
import "./searchResult.scss";
import ResultItem from "./ResultItem";
import Journals from "../journals.jsx";
import Search from "./Search";

const SearchResult = ({ list }) => {
  // const [filteredList, setFilteredList] = useState(Journals);

  // const filterList = (event) => {
  //   let updatedList = Journals;
  //   updatedList = updatedList.filter((item) => {
  //     return (
  //       item.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1
  //     );
  //   });
  //   setFilteredList(updatedList);
  // };

  return (
    <div className="search-result">
      <h1>Search Results...</h1>
      {/* <Search searchFilter={filterList} /> */}
      {list.map((journal) => (
        <ResultItem
          key={journal.id}
          name={journal.name}
          description={journal.description}
        />
      ))}
    </div>
  );
};

export default SearchResult;
