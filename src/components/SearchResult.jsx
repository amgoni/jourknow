import React from "react";
import ResultItem from "./ResultItem";
import "./searchResult.scss";

const SearchResult = ({ list }) => {
  return (
    <div className="search-result">
      {/* Map over the list of journals and render a ResultItem component for each journal */}
      {list.map((journal) => (
        <ResultItem
          key={journal.issn}
          title={journal.title}
          publisher={journal.publisher}
          language={journal.language}
          issn={journal.issn}
          url={journal.url}
        />
      ))}
    </div>
  );
};

export default SearchResult;
