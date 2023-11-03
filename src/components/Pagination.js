import React from 'react';
import './style.css'; // Import your CSS file

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="pagination">
      {currentPage > 1 && (
        <button onClick={() => onPageChange(currentPage - 1)} className="pagination-button">
          Previous
        </button>
      )}
      {pageNumbers.slice(currentPage - 1, currentPage + 9).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`pagination-button ${page === currentPage ? 'active' : ''}`}
        >
          {page}
        </button>
      ))}
      {currentPage < totalPages && (
        <button onClick={() => onPageChange(currentPage + 1)} className="pagination-button">
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
