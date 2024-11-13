import React, { useState, useRef, useEffect } from 'react';
import { Play, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import VideoPlayer from '../components/VideoPlayer';
import MovieCard from '../components/MovieCard';
import HeroVideo from '../components/HeroVideo';
import { useProfile } from '../contexts/ProfileContext';

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

      {/* Botón de Scroll Izquierda */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full z-10"
        aria-label="Desplazar a la izquierda"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Contenedor de Películas con Referencia */}
      <div
        className="flex space-x-4 overflow-x-scroll scroll-smooth px-4 md:px-16 scrollbar-hide scrollbar-thumb-gray-600 scrollbar-track-transparent"
        ref={rowRef}
      >
        {movies.map((movie) => (
          <div key={movie.id} className="flex-none w-[250px]">
            <MovieCard movie={movie} onPlay={onPlayMovie} />
          </div>
        ))}
      </div>

      {/* Botón de Scroll Derecha */}
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full z-10"
        aria-label="Desplazar a la derecha"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

const Browse = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const { currentProfile } = useProfile();
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Cada vez que cambie el perfil, actualizamos la key para forzar el re-render
    setKey(prev => prev + 1);
  }, [currentProfile]);

  const trendingMovies: Movie[] = [
    {
      id: 1,
      title: 'Stranger Things',
      image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500',
      duration: '1h 46m',
      rating: '16+',
      year: 2022,
      genres: ['Suspenso', 'Terror', 'Adolescentes'],
      match: 97,
      videoUrl:
        'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4',
    },
    {
      id: 2,
      title: 'The Crown',
      image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500',
      duration: '2h 15m',
      rating: '16+',
      year: 2023,
      genres: ['Drama', 'Historia', 'Británico'],
      match: 95,
      videoUrl:
        'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4',
    },
    { 
      id: 3, 
      title: "The Crown",
      image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500",
      duration: "2h 15m",
      rating: "16+",
      year: 2023,
      genres: ["Drama", "Historia", "Británico"],
      match: 95,
      videoUrl: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4"
    },
    {
      id: 4,
      title: "The Crown",
      image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500",
      duration: "2h 15m",
      rating: "16+",
      year: 2023,
      genres: ["Drama", "Historia", "Británico"],
      match: 95,
      videoUrl: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4"
    },
    {
      id: 5,
      title: "The Crown",
      image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500",
      duration: "2h 15m",
      rating: "16+",
      year: 2023,
      genres: ["Drama", "Historia", "Británico"],
      match: 95,
      videoUrl: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4"
    },
    {
      id: 6,
      title: "The Crown",
      image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500",
      duration: "2h 15m",
      rating: "16+",
      year: 2023,
      genres: ["Drama", "Historia", "Británico"],
      match: 95,
      videoUrl: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4"
    },
    {
      id: 7,
      title: "The Crown",
      image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500",
      duration: "2h 15m",
      rating: "16+",
      year: 2023,
      genres: ["Drama", "Historia", "Británico"],
      match: 95,
      videoUrl: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4"
    },
    {
      id: 8,
      title: "The Crown",
      image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500",
      duration: "2h 15m",
      rating: "16+",
      year: 2023,
      genres: ["Drama", "Historia", "Británico"],
      match: 95,
      videoUrl: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4"
    }
    // Add more movies with similar detailed data...
  ];

  const handlePlayMovie = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div key={key} className="pt-20 bg-black min-h-screen">
      {selectedMovie && (
        <VideoPlayer
          videoUrl={selectedMovie.videoUrl}
          title={selectedMovie.title}
          onClose={() => setSelectedMovie(null)}
        />
      )}

      {/* Sección de "Título destacado" */}
      <HeroVideo
        title="Título destacado"
        description="Una descripción breve de la película o serie destacada que captura la atención del espectador."
        onPlay={() => handlePlayMovie(trendingMovies[0])}
      />

      {/* Filas de Películas */}
      <MovieRow title="Tendencias" movies={trendingMovies} onPlayMovie={handlePlayMovie} />
      <MovieRow title="Originales de Netflix" movies={trendingMovies} onPlayMovie={handlePlayMovie} />
      <MovieRow title="Continuar viendo" movies={trendingMovies} onPlayMovie={handlePlayMovie} />
      <MovieRow title="Mi lista" movies={trendingMovies} onPlayMovie={handlePlayMovie} />
    </div>
  );
};

export default Browse;