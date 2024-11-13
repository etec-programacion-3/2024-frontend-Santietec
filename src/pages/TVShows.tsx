import React, { useState, useRef, useEffect } from 'react';
import { Play, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import VideoPlayer from '../components/VideoPlayer';
import MovieCard from '../components/MovieCard';
import HeroVideo from '../components/HeroVideo';
import { useProfile } from '../contexts/ProfileContext';

interface Show {
  id: number;
  title: string;
  image: string;
  duration: string;
  rating: string;
  year: number;
  genres: string[];
  match: number;
  videoUrl: string;
  tag?: string;
}

const ShowRow = ({
  title,
  shows,
  onPlayShow,
}: {
  title: string;
  shows: Show[];
  onPlayShow: (show: Show) => void;
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
        {shows.map((show, index) => (
          <div key={index} className="flex-none w-[250px]">
            <MovieCard movie={show} onPlay={onPlayShow} />
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

const TVShows = () => {
  const [selectedShow, setSelectedShow] = useState<Show | null>(null);
  const { currentProfile } = useProfile();
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Cada vez que cambie el perfil, actualizamos la key para forzar el re-render
    setKey(prev => prev + 1);
  }, [currentProfile]);

  const shows: Show[] = [
    {
      id: 1,
      title: "Stranger Things",
      image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500",
      duration: "50m",
      rating: "16+",
      year: 2022,
      genres: ["Drama", "Sci-Fi", "Terror"],
      match: 97,
      videoUrl: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4",
      tag: "Nuevo episodio"
    },
    {
      id: 2,
      title: "Wednesday",
      image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500",
      duration: "45m",
      rating: "13+",
      year: 2023,
      genres: ["Comedia", "Fantasía", "Misterio"],
      match: 95,
      videoUrl: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4",
      tag: "Nueva Temporada"
    },
    {
      id: 3,
      title: "The Crown",
      image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500",
      duration: "58m",
      rating: "16+",
      year: 2023,
      genres: ["Drama", "Historia", "Británico"],
      match: 93,
      videoUrl: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4"
    },
    {
      id: 4,
      title: "Black Mirror",
      image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500",
      duration: "60m",
      rating: "18+",
      year: 2023,
      genres: ["Sci-Fi", "Drama", "Suspenso"],
      match: 96,
      videoUrl: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4",
      tag: "Nueva Temporada"
    },
    {
      id: 5,
      title: "Dark",
      image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500",
      duration: "55m",
      rating: "16+",
      year: 2020,
      genres: ["Sci-Fi", "Misterio", "Drama"],
      match: 98,
      videoUrl: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4"
    },
    {
      id: 6,
      title: "Bridgerton",
      image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500",
      duration: "58m",
      rating: "16+",
      year: 2023,
      genres: ["Romance", "Drama", "Histórico"],
      match: 92,
      videoUrl: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4"
    },
    {
      id: 7,
      title: "The Witcher",
      image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500",
      duration: "60m",
      rating: "18+",
      year: 2023,
      genres: ["Fantasía", "Acción", "Drama"],
      match: 94,
      videoUrl: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4"
    },
    {
      id: 8,
      title: "Ozark",
      image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500",
      duration: "60m",
      rating: "18+",
      year: 2022,
      genres: ["Drama", "Crimen", "Suspenso"],
      match: 96,
      videoUrl: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4"
    }
  ];

  const handlePlayShow = (show: Show) => {
    setSelectedShow(show);
  };

  return (
    <div key={key} className="pt-20 bg-black min-h-screen">
      {selectedShow && (
        <VideoPlayer
          videoUrl={selectedShow.videoUrl}
          title={selectedShow.title}
          onClose={() => setSelectedShow(null)}
        />
      )}

      <HeroVideo
        title="Spider-Man"
        description="¡Spider-Man vuelve a la gran pantalla! Prepárate para una nueva aventura épica con tu amigable vecino."
        onPlay={() => handlePlayShow(shows[0])}
      />

      <div className="pt-8">
        <ShowRow title="Tendencias" shows={shows} onPlayShow={handlePlayShow} />
        <ShowRow title="Series aclamadas" shows={shows} onPlayShow={handlePlayShow} />
        <ShowRow title="Nuevos lanzamientos" shows={shows} onPlayShow={handlePlayShow} />
        <ShowRow title="Mi lista" shows={shows} onPlayShow={handlePlayShow} />
      </div>
    </div>
  );
};

export default TVShows;