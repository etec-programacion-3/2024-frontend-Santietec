import React, { useState, useRef } from 'react';
import { Play, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import VideoPlayer from '../components/VideoPlayer';
import MovieCard from '../components/MovieCard';
import HeroVideo from '../components/HeroVideo';

interface Movie {
  id: number;
  title: string;
  image: string;
  duration: string;
  rating: string;
  year: number;
  genres: string[];
  match: number;
  videoUrl: string;
}

const MovieRow = ({
  title,
  movies,
  onPlayMovie,
}: {
  title: string;
  movies: Movie[];
  onPlayMovie: (movie: Movie) => void;
}) => {
  const rowRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    rowRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    rowRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="mb-8 relative">
      <h2 className="text-xl font-semibold mb-4 px-4 md:px-16">{title}</h2>

      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800/50 hover:bg-gray-800/75 text-white p-2 rounded-full z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <div
        ref={rowRef}
        className="flex space-x-4 overflow-x-scroll scroll-smooth px-4 md:px-16 scrollbar-hide"
      >
        {movies.map((movie) => (
          <div key={movie.id} className="flex-none w-[250px]">
            <MovieCard movie={movie} onPlay={onPlayMovie} />
          </div>
        ))}
      </div>

      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800/50 hover:bg-gray-800/75 text-white p-2 rounded-full z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

const Movies = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const trendingMovies: Movie[] = [
    {
      id: 1,
      title: "Whiplash",
      image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500",
      duration: "1h 46m",
      rating: "16+",
      year: 2022,
      genres: ["Drama", "Música"],
      match: 97,
      videoUrl: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4"
    },
    {
      id: 2,
      title: "Inception",
      image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500",
      duration: "2h 28m",
      rating: "13+",
      year: 2023,
      genres: ["Acción", "Sci-Fi", "Thriller"],
      match: 95,
      videoUrl: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4"
    },
    {
      id: 3,
      title: "The Godfather",
      image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500",
      duration: "2h 55m",
      rating: "18+",
      year: 1972,
      genres: ["Drama", "Crimen", "Clásico"],
      match: 99,
      videoUrl: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4"
    },
    {
      id: 4,
      title: "Pulp Fiction",
      image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500",
      duration: "2h 34m",
      rating: "18+",
      year: 1994,
      genres: ["Crimen", "Drama", "Comedia negra"],
      match: 96,
      videoUrl: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4"
    },
    {
      id: 5,
      title: "The Dark Knight",
      image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500",
      duration: "2h 32m",
      rating: "13+",
      year: 2008,
      genres: ["Acción", "Drama", "Crimen"],
      match: 98,
      videoUrl: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4"
    },
    {
      id: 6,
      title: "La La Land",
      image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500",
      duration: "2h 8m",
      rating: "13+",
      year: 2016,
      genres: ["Romance", "Drama", "Musical"],
      match: 92,
      videoUrl: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4"
    },
    {
      id: 7,
      title: "Interstellar",
      image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500",
      duration: "2h 49m",
      rating: "13+",
      year: 2014,
      genres: ["Sci-Fi", "Aventura", "Drama"],
      match: 94,
      videoUrl: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4"
    },
    {
      id: 8,
      title: "The Matrix",
      image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500",
      duration: "2h 16m",
      rating: "16+",
      year: 1999,
      genres: ["Sci-Fi", "Acción", "Cyberpunk"],
      match: 96,
      videoUrl: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4"
    }
  ];

  const handlePlayMovie = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="pt-20 bg-black min-h-screen">
      {selectedMovie && (
        <VideoPlayer
          videoUrl={selectedMovie.videoUrl}
          title={selectedMovie.title}
          onClose={() => setSelectedMovie(null)}
        />
      )}

      <HeroVideo
        title="Spider-Man"
        description="¡Spider-Man vuelve a la gran pantalla! Prepárate para una nueva aventura épica con tu amigable vecino."
        onPlay={() => handlePlayMovie(trendingMovies[0])}
      />

      <div className="pt-8">
        <MovieRow title="Tendencias" movies={trendingMovies} onPlayMovie={handlePlayMovie} />
        <MovieRow title="Películas premiadas" movies={trendingMovies} onPlayMovie={handlePlayMovie} />
        <MovieRow title="Nuevos lanzamientos" movies={trendingMovies} onPlayMovie={handlePlayMovie} />
        <MovieRow title="Mi lista" movies={trendingMovies} onPlayMovie={handlePlayMovie} />
      </div>
    </div>
  );
};

export default Movies;