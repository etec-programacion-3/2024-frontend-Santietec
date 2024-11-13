import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProfile } from '../contexts/ProfileContext';

const Profiles = () => {
  const { setCurrentProfile, profiles } = useProfile();
  const navigate = useNavigate();

  const handleProfileSelect = (profile: typeof profiles[0]) => {
    setCurrentProfile(profile);
    navigate('/browse');
    window.location.reload(); // Forzar recarga para actualizar la imagen
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl text-white mb-8">¿Quién está viendo ahora?</h1>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              onClick={() => handleProfileSelect(profile)}
              className="group flex flex-col items-center cursor-pointer"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-md overflow-hidden border-2 border-transparent group-hover:border-white transition duration-200">
                <img
                  src={profile.img}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="mt-2 text-gray-400 group-hover:text-white transition duration-200">
                {profile.name}
              </span>
            </div>
          ))}
        </div>
        <button className="mt-8 px-8 py-2 text-gray-400 border border-gray-400 hover:text-white hover:border-white transition duration-200">
          Administrar perfiles
        </button>
      </div>
    </div>
  );
};

export default Profiles;