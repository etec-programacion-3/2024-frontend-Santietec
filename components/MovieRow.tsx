import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MovieCard from './MovieCard';

interface MovieRowProps {
  title: string;
  category: string;
  onPlayMovie: () => void;
  onLike: (id: number) => void;
  onAddToList: (id: number) => void;
  likedContent: number[];
  myList: number[];
  showOnlyMyList?: boolean;
}

export default function MovieRow({ 
  title, 
  category, 
  onPlayMovie, 
  onLike, 
  onAddToList, 
  likedContent, 
  myList,
  showOnlyMyList 
}: MovieRowProps) {
  const allMovies = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=500&q=80",
      title: "The Dark Forest",
      rating: "96%",
      year: 2024,
      duration: "2h 15m",
      description: "A mysterious journey into the unknown depths of an ancient forest."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&w=500&q=80",
      title: "Ocean's Mystery",
      rating: "94%",
      year: 2024,
      duration: "1h 55m",
      description: "Deep beneath the waves, a team of explorers discovers an ancient secret."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=500&q=80",
      title: "City Lights",
      rating: "98%",
      year: 2023,
      duration: "2h 5m",
      description: "In the heart of the city, stories intertwine in unexpected ways."
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?auto=format&fit=crop&w=500&q=80",
      title: "Mountain Peak",
      rating: "92%",
      year: 2024,
      duration: "2h 30m",
      description: "A thrilling adventure to reach the world's most dangerous summit."
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1626814026762-ea184a71c34c?auto=format&fit=crop&w=500&q=80",
      title: "Desert Storm",
      rating: "95%",
      year: 2023,
      duration: "2h 10m",
      description: "Survival against all odds in the world's harshest desert."
    },
  ];

  const movies = showOnlyMyList 
    ? allMovies.filter(movie => myList.includes(movie.id))
    : allMovies;

  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="group relative">
        <div className="flex space-x-4 overflow-x-hidden scroll-smooth">
          {movies.map((movie) => (
            <MovieCard 
              key={movie.id} 
              movie={movie} 
              onPlay={onPlayMovie}
              onLike={onLike}
              onAddToList={onAddToList}
              isLiked={likedContent.includes(movie.id)}
              isInList={myList.includes(movie.id)}
            />
          ))}
        </div>
        
        <button className="absolute left-0 top-1/2 hidden -translate-y-1/2 transform rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70 group-hover:block">
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <button className="absolute right-0 top-1/2 hidden -translate-y-1/2 transform rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70 group-hover:block">
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}