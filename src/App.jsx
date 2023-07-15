import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./app.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchResult from "./components/SearchResult";
import Footer from "./components/Footer";
import Pagination from "./components/Pagination";
import About from "./pages/About";

const App = () => {
  // State variables
  const [journalList, setJournalList] = useState([]);
  const [filteredJournalList, setFilteredJournalList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [journalsPerPage] = useState(20);

  // Calculate the range of displayed journals
  const indexOfLastJournal = currentPage * journalsPerPage;
  const indexOfFirstJournal = indexOfLastJournal - journalsPerPage;
  const currentJournals = filteredJournalList.slice(
    indexOfFirstJournal,
    indexOfLastJournal
  );

  // Fetch journals on component mount
  useEffect(() => {
    fetchJournals();
  }, []);

  // Fetch journals from the API
  const fetchJournals = async () => {
    try {
      // List of search queries
      const queries = [
        "machine learning",
        "data science",
        "network security",
        "web development",
        "algorithms",
        "software engineering",
        "computer vision",
        "artificial intelligence",
        "operating systems",
        "computer networks",
        "computer architecture",
        "computer science",
        "programming languages",
      ];

      const allJournals = [];

      // Iterate through the search queries and fetch journal data
      for (const query of queries) {
        const response = await fetch(
          `https://core.ac.uk:443/api-v2/journals/search/${encodeURIComponent(
            query
          )}?pageSize=20&apiKey=tM9I3NuzHnOCFyAa1UxW7vBqZK68krT5`
        );

        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const data = await response.json();
        allJournals.push(...data.data);

        // Break the loop if the desired number of results (100) is reached
        if (allJournals.length >= 100) {
          break;
        }
      }

      // Transform the fetched data into the desired format
      const transformedJournals = allJournals.slice(0, 100).map((journal) => ({
        id: journal.id,
        title: journal.title,
        publisher: journal.publisher || "No publisher available",
        language: journal.language || "Unknown language",
        issn: extractISSN(journal.identifiers),
        url: extractURL(journal.identifiers),
      }));

      // Sort the transformed journals alphabetically by title
      transformedJournals.sort((a, b) => a.title.localeCompare(b.title));

      // Update state variables with the fetched and transformed journals
      setJournalList(transformedJournals);
      setFilteredJournalList(transformedJournals);
      setIsLoading(false);
    } catch (error) {
      // Handle fetch error
      setError("Something went wrong!");
      setIsLoading(false);
    }
  };

  // Extract the ISSN from the identifiers array
  const extractISSN = (identifiers) => {
    const issnIdentifier = identifiers.find((identifier) =>
      identifier.startsWith("issn:")
    );

    if (issnIdentifier) {
      return issnIdentifier.slice(5);
    }

    return "";
  };

  // Extract the URL from the identifiers array
  const extractURL = (identifiers) => {
    const urlIdentifier = identifiers.find((identifier) =>
      identifier.startsWith("url:")
    );

    if (urlIdentifier) {
      const match = urlIdentifier.match(/url:(.+)/);
      if (match && match[1]) {
        return match[1];
      }
    }

    return "";
  };

  // Handle search input
  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredList = journalList.filter((journal) =>
      journal.title.toLowerCase().includes(searchTerm)
    );
    setFilteredJournalList(filteredList);
  };

  // Handle pagination
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Router>
      <div>
        {/* Render the Header component */}
        <Header />

        {/* Define routes */}
        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {/* Render the Hero component with search functionality */}
              <Hero onSearch={handleSearch} />

              {/* Render different components based on the loading, error, and filtered journal list states */}
              {isLoading ? (
                <h3>Loading...</h3>
              ) : error ? (
                <h3>{error}</h3>
              ) : filteredJournalList.length === 0 ? (
                <h3>No journals found</h3>
              ) : (
                <>
                  {/* Render the SearchResult component */}
                  <SearchResult
                    list={currentJournals}
                    totalJournals={filteredJournalList.length}
                    journalsPerPage={journalsPerPage}
                  />

                  {/* Render the Pagination component */}
                  <Pagination
                    journalsPerPage={journalsPerPage}
                    totalJournals={filteredJournalList.length}
                    currentPage={currentPage}
                    paginate={paginate}
                  />
                </>
              )}
            </>
          )}
        />

        {/* Render the About component */}
        <Route path="/about" component={About} />

        {/* Render the Footer component */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
