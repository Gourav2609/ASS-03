import React from 'react';
import classNames from 'classnames';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleClick = (page) => {
    onPageChange(page);
  };

  const renderPaginationItems = () => {
    const paginationItems = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        paginationItems.push(
          <a
            key={i}
            onClick={() => handleClick(i)}
            className={classNames(
              'px-3 py-2 rounded-md text-sm font-medium',
              {
                'bg-blue-600 text-white': currentPage === i,
                'text-gray-700 hover:bg-gray-100': currentPage !== i,
              }
            )}
          >
            {i}
          </a>
        );
      }
    } else {
      const startPage = Math.max(1, currentPage - 2);
      const endPage = Math.min(totalPages, startPage + 4);

      for (let i = startPage; i <= endPage; i++) {
        paginationItems.push(
          <a
            key={i}
            onClick={() => handleClick(i)}
            className={classNames(
              'px-3 py-2 rounded-md text-sm font-medium',
              {
                'bg-blue-600 text-white': currentPage === i,
                'text-gray-700 hover:bg-gray-100': currentPage !== i,
              }
            )}
          >
            {i}
          </a>
        );
      }

      if (endPage < totalPages) {
        paginationItems.push(
          <span key="ellipsis" className="px-3 py-2 text-sm font-medium">
            ...
          </span>
        );
        paginationItems.push(
          <a
            key={totalPages}
            onClick={() => handleClick(totalPages)}
            className={classNames(
              'px-3 py-2 rounded-md text-sm font-medium',
              {
                'bg-blue-600 text-white': currentPage === totalPages,
                'text-gray-700 hover:bg-gray-100': currentPage !== totalPages,
              }
            )}
          >
            {totalPages}
          </a>
        );
      }
    }

    return paginationItems;
  };

  return (
    <div className="flex justify-center mt-4">
      <nav className="flex" aria-label="Pagination">
        {currentPage !== 1 && (
          <a
            onClick={() => handleClick(currentPage - 1)}
            className={classNames(
              'px-6 py-2 rounded-md text-sm font-medium',
              {
                'bg-blue-600 text-white': currentPage === 1,
                'text-gray-700 hover:bg-gray-100': currentPage !== 1,
                'cursor-not-allowed': currentPage === 1,
              }
            )}
            disabled={currentPage === 1}
          >
            Prev
          </a>
        )}
        {renderPaginationItems()}
        {currentPage !== totalPages && (
          <a
            onClick={() => handleClick(currentPage + 1)}
            className={classNames(
              'px-3 py-2 rounded-md text-sm font-medium',
              {
                'bg-blue-600 text-white': currentPage === totalPages,
                'text-gray-700 hover:bg-gray-100': currentPage !== totalPages,
                'cursor-not-allowed': currentPage === totalPages,
              }
            )}
            disabled={currentPage === totalPages}
          >
            Next
          </a>
        )}
      </nav>
    </div>
  );
};

export default Pagination;
