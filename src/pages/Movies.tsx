import React from 'react';
import { Play, Plus, ThumbsUp } from 'lucide-react';

const Movies = () => {
  const movies = [
    { title: "The Gray Man", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500" },
    { title: "Red Notice", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500" },
    { title: "Don't Look Up", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500" },
    { title: "The Adam Project", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500" },
    { title: "Extraction", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500" },
  ];

  return (
    <div className="pt-20 bg-black min-h-screen px-4 md:px-16">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl md:text-3xl font-bold">Películas</h1>
        <select className="bg-black border border-white rounded px-4 py-1">
          <option>Géneros</option>
          <option>Acción</option>
          <option>Aventura</option>
          <option>Comedia</option>
          <option>Drama</option>
        </select>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {movies.map((movie, index) => (
          <div key={index} className="group relative">
            <img
              src={movie.image}
              alt={movie.title}
              className="rounded-md w-full aspect-[2/3] object-cover transition duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <div>
                <div className="flex space-x-2 mb-2">
                  <button className="p-2 bg-white rounded-full hover:bg-white/90">
                    <Play className="w-4 h-4 text-black" />
                  </button>
                  <button className="p-2 bg-gray-800/80 rounded-full hover:bg-gray-700/80">
                    <Plus className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-gray-800/80 rounded-full hover:bg-gray-700/80">
                    <ThumbsUp className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-sm font-semibold">{movie.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;