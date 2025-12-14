import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous page"
      >
        <ChevronLeft size={20} />
      </button>

      {[1, 2, 3].map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-10 h-10 rounded ${
            page === currentPage
              ? 'bg-blue-600 text-white font-semibold'
              : 'bg-white border border-gray-300 hover:bg-gray-50'
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next page"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

// Demo App
export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  
  // Sample data for 3 pages
  const allItems = [
    'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5',
    'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10',
    'Item 11', 'Item 12', 'Item 13', 'Item 14', 'Item 15'
  ];
  
  const totalPages = 3;
  
  const getCurrentPageItems = () => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return allItems.slice(start, end);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold mb-6 text-gray-800">
            Simple 3-Page Pagination
          </h1>
          
          <div className="mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded p-3 mb-4">
              <p className="text-gray-700 text-center">
                Page <span className="font-semibold">{currentPage}</span> of{' '}
                <span className="font-semibold">{totalPages}</span>
              </p>
            </div>
            
            <div className="space-y-3">
              {getCurrentPageItems().map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 rounded border border-gray-200 hover:bg-gray-100 transition"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}