import React from "react";
import "./resultItem.scss";

const ResultItem = ({ title, publisher, language, issn, url, branch }) => {
  return (
    <div className="result-item">
      {/* Render the title of the journal */}
      <h2>{title}</h2>

      {/* Render the publisher of the journal */}
      <em>
        <p>Publisher: {publisher}</p>
      </em>

      {/* Render the field of the journal */}

      {/* <em>
        <p>Field: {branch}</p>
      </em> */}

      {/* Render the language of the journal */}
      <em>
        <p>Language: {language}</p>
      </em>

      {/* Render the ISSN of the journal */}
      <em>
        <p>ISSN: {issn}</p>
      </em>

      {/* Render a link to view the journal if URL is available */}
      {url ? (
        <a href={url} target="_blank" rel="noopener noreferrer">
          View Journal
        </a>
      ) : (
        <p>No URL available</p>
      )}
    </div>
  );
};

export default ResultItem;
