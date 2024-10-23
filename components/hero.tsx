import React, { useState } from 'react';
import { Play, Info } from 'lucide-react';

interface HeroProps {
  onPlay: () => void;
}

export default function Hero({ onPlay }: HeroProps) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="relative h-[95vh] w-full">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=2070&q=80"
          alt="Hero Background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
      </div>

      <div className="absolute bottom-[30%] left-8 max-w-xl">
        <h1 className="text-5xl font-bold">Stranger Things</h1>
        <p className="mt-4 text-lg text-gray-200">
          When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.
        </p>
        <div className="mt-8 flex space-x-4">
          <button 
            onClick={onPlay}
            className="flex items-center rounded-md bg-white px-8 py-2 font-semibold text-black transition hover:bg-white/90"
          >
            <Play className="mr-2 h-5 w-5" />
            Play
          </button>
          <button 
            onClick={() => setShowInfo(!showInfo)}
            className="flex items-center rounded-md bg-gray-500/70 px-8 py-2 font-semibold text-white transition hover:bg-gray-500/50"
          >
            <Info className="mr-2 h-5 w-5" />
            More Info
          </button>
        </div>

        {showInfo && (
          <div className="mt-6 rounded-md bg-zinc-900/95 p-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-2">About Stranger Things</h3>
            <div className="space-y-4">
              <div>
                <span className="text-green-500">96% Match</span>
                <span className="mx-2">2016-2024</span>
                <span className="border px-1 text-sm">TV-14</span>
              </div>
              <p className="text-gray-300">
                Set in the 1980s in Hawkins, Indiana, Stranger Things is a thrilling series that follows the mysterious disappearance of Will Byers and the extraordinary events that unfold as his friends, family, and local authorities search for answers. The investigation leads them to uncover supernatural forces, government experiments, and a unique girl with psychokinetic abilities.
              </p>
              <div>
                <p className="text-gray-400">Starring: Millie Bobby Brown, Finn Wolfhard, Noah Schnapp</p>
                <p className="text-gray-400">Creators: The Duffer Brothers</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}