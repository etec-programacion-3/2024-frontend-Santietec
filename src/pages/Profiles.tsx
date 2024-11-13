import React from 'react';
import { Link } from 'react-router-dom';

const profiles = [
  { id: 1, name: 'Usuario 1', img: 'https://occ-0-1190-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41' },
  { id: 2, name: 'Usuario 2', img: 'https://occ-0-1190-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdYJV5wt63AuZRXyzaXkb5O9kB6qEBCaV0gj6cX4oe6_6nqR0FGM-TUyovKJgYHXgUc15F2LJJxqHXEF1qZGloKF.png?r=f71' },
  { id: 3, name: 'Usuario 3', img: 'https://occ-0-1190-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQbPHLHMADSYHIjUxaJt0J4YCpLsDJoB7v_m_0_HJ3uWZsLnFZEwBHZPBUaB9J9ZOQqXTuS6ZPNq8T2V1UDHXEjPn9I.png?r=06d' },
  { id: 4, name: 'Niños', img: 'https://occ-0-1190-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcENEq3AWngawkGVZn_4_AuFHKhYrGdgj_kqYmo6YH7VJX6-T-VHqQ_T1qjLWbNHG0YgdJH7TL3FvM_D-LlHD5pjxho.png?r=f08' },
];

const Profiles = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl mb-8">¿Quién está viendo?</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {profiles.map((profile) => (
            <Link
              key={profile.id}
              to="/browse"
              className="group flex flex-col items-center"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded overflow-hidden border-2 border-transparent group-hover:border-white transition duration-200">
                <img
                  src={profile.img}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="mt-2 text-gray-400 group-hover:text-white transition duration-200">
                {profile.name}
              </span>
            </Link>
          ))}
        </div>
        <button className="mt-8 px-4 py-2 border border-gray-400 text-gray-400 hover:text-white hover:border-white transition duration-200">
          Administrar perfiles
        </button>
      </div>
    </div>
  );
};

export default Profiles;