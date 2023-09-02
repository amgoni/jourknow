import React from "react";
import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <h1>About this project</h1>
      <p>
        This application is a web-based tool designed to provide users with
        access to a wide range of research journals. The application allows
        users to search for journals based on various fields of study, such as
        machine learning, data science, networking, and more. The search results
        are displayed in a paginated format, allowing users to navigate through
        multiple pages of journal listings.
      </p>
      <p>
        The project consists of several key components, including the App,
        Header, Hero, Pagination, Search, ResultItem, and SearchResult
        components. The App component serves as the entry point of the
        application and manages the state of the journal data, loading
        indicators, and error handling. The Header component provides a
        navigation menu with links to the home page and an about page. The Hero
        component displays the main title of the application and includes search
        functionality to filter the journal list. The Pagination component
        enables pagination of the search results, allowing users to navigate
        between different pages. The Search component provides an input field
        for users to enter search queries, triggering search events. The
        ResultItem component represents an individual journal item within the
        search results, displaying its title, publisher, language, ISSN, and a
        link to view the journal. The SearchResult component serves as a
        container for displaying the search results, rendering multiple
        ResultItem components based on the provided list of journals.
      </p>
      <p>
        Throughout the project, proper documentation has been provided to ensure
        a clear understanding of each component's purpose and functionality. The
        documentation includes detailed explanations of each line of code, the
        significance of certain functions, and their relationship with other
        components. This documentation serves as a valuable resource for
        maintaining, enhancing, and extending the Journal Search Application in
        the future. The Journal Search Application offers a user-friendly
        interface and efficient search functionality, enabling users to easily
        explore and access a vast array of research journals across various
        fields of study. It provides a valuable tool for researchers, academics,
        and anyone interested in staying updated with the latest advancements in
        their respective fields.
      </p>
      <h2>For more information, please contact:</h2>
      <h3>
        <a href="mailto:ameen.m.goney@gmail.com">ameen.m.goney@gmail.com</a>
      </h3>
    </div>
  );
};

export default About;
