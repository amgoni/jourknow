import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchResult from "./components/SearchResult";

library.add(faSearch);

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <SearchResult />
    </div>
  );
};

export default App;
