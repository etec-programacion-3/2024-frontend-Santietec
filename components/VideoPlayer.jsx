import React from 'react';
import { X } from 'lucide-react';

function VideoPlayer({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white"
      >
        <X size={24} />
      </button>
      <video
        className="w-full h-full object-contain"
        controls
        autoPlay
      >
        <source src="/sample-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;

