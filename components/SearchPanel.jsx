import React, { useState } from 'react';
import { X, Search } from 'lucide-react';

function SearchPanel({ onClose }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="fixed inset-0 bg-zinc-900 bg-opacity-90 z-50 flex items-start justify-center pt-20">
      <div className="bg-zinc-800 p-8 rounded-lg max-w-2xl w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Search</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSearch} className="flex items-center mb-6">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for movies, TV shows, genres..."
            className="flex-grow bg-zinc-700 text-white px-4 py-2 rounded-l focus:outline-none"
          />
          <button
            type="submit"
            className="bg-red-600 text-white px-4 py-2 rounded-r"
          >
            <Search size={20} />
          </button>
        </form>
        {/* Add search results here */}
      </div>
    </div>
  );
}

export default SearchPanel;

