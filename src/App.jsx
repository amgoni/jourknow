import React, { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchResult from "./components/SearchResult";
import Journals from "./journals.jsx";

library.add(faSearch);

const App = () => {
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
    <div>
      <Header />
      <Hero newList={filterList} />
      <SearchResult list={filteredList} />
    </div>
  );
};

export default App;
