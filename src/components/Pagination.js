import React from 'react';
import classNames from 'classnames';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const range = (start, end) =>
    Array.from({ length: end - start + 1 }, (_, i) => start + i);

  const handleClick = (page) => {
    onPageChange(page);
  };

  return (
    <div className="flex justify-center mt-4">
      <nav className="flex" aria-label="Pagination">
        <ul className="flex list-none">
          {range(1, totalPages).map((page) => (
            <li key={page}>
              <a
                onClick={() => handleClick(page)}
                className={classNames(
                  'px-3 py-2 rounded-md text-sm font-medium',
                  {
                    'bg-blue-600 text-white': currentPage === page,
                    'text-gray-700 hover:bg-gray-100': currentPage !== page,
                  }
                )}
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
