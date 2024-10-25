import React from 'react';
import { X } from 'lucide-react';

function ProfileSelector({ onClose }) {
  const profiles = [
    { id: 1, name: 'User 1', avatar: '/avatar1.png' },
    { id: 2, name: 'User 2', avatar: '/avatar2.png' },
    { id: 3, name: 'User 3', avatar: '/avatar3.png' },
    { id: 4, name: 'User 4', avatar: '/avatar4.png' },
  ];

  return (
    <div className="fixed inset-0 bg-zinc-900 bg-opacity-90 z-50 flex items-center justify-center">
      <div className="bg-zinc-800 p-8 rounded-lg max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Who's watching?</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {profiles.map((profile) => (
            <button
              key={profile.id}
              className="flex flex-col items-center space-y-2"
              onClick={() => {
                // Handle profile selection
                onClose();
              }}
            >
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-24 h-24 rounded-md"
              />
              <span className="text-sm">{profile.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfileSelector;

