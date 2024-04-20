"use client";

import React, { useState } from "react";
import { generateDummyData } from "../utils/dummyData";
import Pagination from "../components/Pagination";

const ITEMS_PER_PAGE_OPTIONS = [5, 10, 15, 20];

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [model , setModel] = useState(false);
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
    <>
    {model && <SearchModel />}
    <div className="container mx-auto pt-10 pb-10 flex flex-col justify-center">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold mb-4">Reports</h1>
        <div className="flex gap-4">
          <div className="border p-2 rounded-lg flex justify-center hover:bg-gray-200"
            onClick={() => setModel(true)}
          >
            <svg
              className="w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" />
            </svg>
          </div>
          <div className="border p-2 rounded-lg flex justify-center hover:bg-gray-200">
            <svg className="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
            </svg>
          </div>
        </div>
      </div>
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
    </>
  );
};


const SearchModel = () =>{
  return(
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Search</h1>
        <input type="text" className="border p-2 rounded-lg w-full mb-4" placeholder="Search here" />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Search</button>
      </div>
    </div>
  )
}

export default Home;
