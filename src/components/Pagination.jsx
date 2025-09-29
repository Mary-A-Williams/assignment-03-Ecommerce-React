import React from 'react';

export default function Pagination({ currentPage, setCurrentPage, totalPages }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className="pagination">
      <a href="#" onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}>‹</a>
      {pages.map(p => (
        <a
          href="#"
          key={p}
          onClick={() => setCurrentPage(p)}
          style={{ fontWeight: currentPage === p ? 'bold' : 'normal' }}
        >
          {p}
        </a>
      ))}
      <a href="#" onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}>›</a>
    </div>
  );
}
