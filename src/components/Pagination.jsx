import React from "react";
import "./pagination.scss";

const Pagination = ({
  journalsPerPage,
  totalJournals,
  currentPage,
  paginate,
}) => {
  const pageNumbers = [];

  // Calculate the total number of pages needed for pagination
  for (let i = 1; i <= Math.ceil(totalJournals / journalsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      {/* Render each page number as a list item */}
      {pageNumbers.map((number) => (
        <li key={number} className="page-item">
          {/* Display the page number as a clickable link */}
          <a
            href="#!"
            className={
              currentPage === number ? "page-link active" : "page-link"
            }
            onClick={() => paginate(number)}
          >
            {number}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
