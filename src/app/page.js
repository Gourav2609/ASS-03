'use client'

import React, { useState } from 'react';
import { generateDummyData } from '../utils/dummyData';
import Pagination from '../components/Pagination';

const ITEMS_PER_PAGE = 10;

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dummyData = generateDummyData();

  const totalItems = dummyData.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getPageData = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return dummyData.slice(startIndex, endIndex);
  };

  return (
    <div className="container mx-auto flex flex-col h-screen justify-center">
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
      />
    </div>
  );
};

export default Home;
