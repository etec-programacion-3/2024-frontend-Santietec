import React from 'react';
import { Heart, Plus } from 'lucide-react';

function MovieCard({ movie, onLike, onAddToList, isLiked, isInList }) {
  return (
    <div className="relative w-40 h-60 flex-shrink-0">
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-full object-cover rounded"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h3 className="text-white font-semibold mb-2">{movie.title}</h3>
        <div className="flex space-x-2">
          <button
            onClick={onLike}
            className={`p-1 rounded ${
              isLiked ? 'bg-red-600' : 'bg-gray-600'
            }`}
          >
            <Heart size={16} />
          </button>
          <button
            onClick={onAddToList}
            className={`p-1 rounded ${
              isInList ? 'bg-green-600' : 'bg-gray-600'
            }`}
          >
            <Plus size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
