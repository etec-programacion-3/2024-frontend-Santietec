import React, { useState } from 'react';
import { Play, Plus, ThumbsUp, ChevronDown } from 'lucide-react';

interface MovieCardProps {
  movie: {
    id: number;
    image: string;
    title?: string;
    duration?: string;
    rating?: string;
    year?: number;
    description?: string;
  };
  onPlay: () => void;
  onLike: (id: number) => void;
  onAddToList: (id: number) => void;
  isLiked: boolean;
  isInList: boolean;
}

export default function MovieCard({ 
  movie, 
  onPlay, 
  onLike, 
  onAddToList, 
  isLiked, 
  isInList 
}: MovieCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative min-w-[200px] transform cursor-pointer transition duration-300 hover:scale-110 hover:z-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={movie.image}
        alt={movie.title || `Movie ${movie.id}`}
        className="h-[300px] w-full rounded-md object-cover"
      />
      
      {isHovered && (
        <div className="absolute inset-0 rounded-md bg-black/80 p-4">
          <div className="h-full flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold">{movie.title || `Movie ${movie.id}`}</h3>
              <div className="mt-2 flex items-center space-x-2">
                <span className="text-green-500">{movie.rating || '98%'} Match</span>
                <span>{movie.duration || '2h 15m'}</span>
                <span>{movie.year || '2024'}</span>
              </div>
              <p className="mt-2 text-sm text-gray-300">
                {movie.description || 'A thrilling story of adventure and discovery...'}
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onPlay();
                  }}
                  className="rounded-full bg-white p-2 text-black hover:bg-white/90"
                >
                  <Play className="h-5 w-5" />
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onAddToList(movie.id);
                  }}
                  className={`rounded-full border-2 p-2 transition-colors ${
                    isInList ? 'border-white text-white' : 'border-gray-400 text-gray-400'
                  } hover:border-white hover:text-white`}
                >
                  <Plus className="h-5 w-5" />
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onLike(movie.id);
                  }}
                  className={`rounded-full border-2 p-2 transition-colors ${
                    isLiked ? 'border-white text-white' : 'border-gray-400 text-gray-400'
                  } hover:border-white hover:text-white`}
                >
                  <ThumbsUp className="h-5 w-5" />
                </button>
                <button className="rounded-full border-2 border-gray-400 p-2 hover:border-white ml-auto">
                  <ChevronDown className="h-5 w-5" />
                </button>
              </div>
              
              <div className="flex space-x-2">
                <span className="text-sm font-bold text-white">Action</span>
                <span className="text-sm font-bold text-white">•</span>
                <span className="text-sm font-bold text-white">Thriller</span>
                <span className="text-sm font-bold text-white">•</span>
                <span className="text-sm font-bold text-white">Adventure</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}