import React from 'react';
import { Play, Info } from 'lucide-react';

function Hero({ onPlay }) {
  return (
    <div className="relative h-[56.25vw] max-h-[80vh]">
      <img
        src="/hero-image.jpg"
        alt="Hero"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
      <div className="absolute bottom-1/4 left-8 md:left-16 space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold">Movie Title</h1>
        <p className="text-lg md:text-xl max-w-md">
          A brief description of the movie that captures the viewer's attention and interest.
        </p>
        <div className="space-x-4">
          <button
            onClick={onPlay}
            className="bg-white text-black px-4 py-2 rounded flex items-center"
          >
            <Play className="mr-2" size={20} />
            Play
          </button>
          <button className="bg-gray-500 bg-opacity-50 text-white px-4 py-2 rounded flex items-center">
            <Info className="mr-2" size={20} />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
