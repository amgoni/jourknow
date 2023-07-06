import React, { useState } from "react";
import "./resultCard.scss";
import ResultItem from "./ResultItem";
import Journals from "../journals.jsx";
import Search from "./Search";

const ResultCard = () => {
  const [filteredList, setFilteredList] = useState(Journals);

  const filterList = (event) => {
    let updatedList = Journals;
    updatedList = updatedList.filter((item) => {
      return (
        item.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1
      );
    });
    setFilteredList(updatedList);
  };

  return (
    <div className="resultCard">
      <Search onChange={filterList} />
      {filteredList.map((journal) => (
        <ResultItem
          key={journal.id}
          name={journal.name}
          description={journal.description}
        />
      ))}
    </div>
  );
};

export default ResultCard;
