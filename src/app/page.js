'use client'

import React, { useState } from 'react';
import { generateDummyData } from '../utils/dummyData';
import Pagination from '../components/Pagination';

const ITEMS_PER_PAGE_OPTIONS = [5, 10, 15, 20]; 

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(ITEMS_PER_PAGE_OPTIONS[1]); 
  const dummyData = generateDummyData();

  const totalItems = dummyData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(value);
    setCurrentPage(1); 
  };

  const getPageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return dummyData.slice(startIndex, endIndex);
  };

  return (
    <div className="container mx-auto pt-10 pb-10 flex flex-col justify-center">
      <h1 className="text-2xl font-bold mb-4">Reports</h1>
      <div className="mb-4">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border border-gray-200">Date</th>
              <th className="px-4 py-2 border border-gray-200">Report Name</th>
              <th className="px-4 py-2 border border-gray-200">Download</th>
            </tr>
          </thead>
          <tbody>
            {getPageData().map((report) => (
              <tr key={report.id}>
                <td className="px-4 py-2 border border-gray-200">
                  {report.date.toLocaleDateString()}
                </td>
                <td className="px-4 py-2 border border-gray-200">
                  {report.reportName}
                </td>
                <td className="px-4 py-2 border border-gray-200">
                  <button className="flex items-center px-2 py-1 bg-blue-500 text-white rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 4a1 1 0 00-1 1v8a2 2 0 002 2h8a1 1 0 100-2H7V5a1 1 0 00-1-1zm3 11a1 1 0 11-2 0 1 1 0 012 0zM8 6a1 1 0 00-1 1v6a1 1 0 102 0V7a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={handleItemsPerPageChange}
      />
      <div className="flex mb-2">
          <span className="mr-2">Items per page:</span>
          <select
            value={itemsPerPage}
            onChange={(e) => handleItemsPerPageChange(parseInt(e.target.value))}
            className="px-2 py-1 border rounded-md text-sm"
          >
            {ITEMS_PER_PAGE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
    </div>
  );
};

export default Home;
