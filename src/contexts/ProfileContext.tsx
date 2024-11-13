import React, { createContext, useContext, useState } from 'react';

export interface Profile {
  id: number;
  name: string;
  img: string;
}

interface ProfileContextType {
  currentProfile: Profile;
  setCurrentProfile: (profile: Profile) => void;
  profiles: Profile[];
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const profiles = [
    { 
      id: 1, 
      name: 'Papá', 
      img: 'https://occ-0-1190-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41' 
    },
    { 
      id: 2, 
      name: 'Mamá', 
      img: 'https://occ-0-1190-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdYJV5wt63AuZRXyzaXkb5O9kB6qEBCaV0gj6cX4oe6_6nqR0FGM-TUyovKJgYHXgUc15F2LJJxqHXEF1qZGloKF.png?r=f71' 
    },
    { 
      id: 3, 
      name: 'Santi', 
      img: 'https://occ-0-1190-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQbPHLHMADSYHIjUxaJt0J4YCpLsDJoB7v_m_0_HJ3uWZsLnFZEwBHZPBUaB9J9ZOQqXTuS6ZPNq8T2V1UDHXEjPn9I.png?r=06d' 
    },
    { 
      id: 4, 
      name: 'Abuelo', 
      img: 'https://occ-0-1190-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcENEq3AWngawkGVZn_4_AuFHKhYrGdgj_kqYmo6YH7VJX6-T-VHqQ_T1qjLWbNHG0YgdJH7TL3FvM_D-LlHD5pjxho.png?r=f08' 
    },
    { 
      id: 5, 
      name: 'Hermano', 
      img: 'https://occ-0-1190-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcENEq3AWngawkGVZn_4_AuFHKhYrGdgj_kqYmo6YH7VJX6-T-VHqQ_T1qjLWbNHG0YgdJH7TL3FvM_D-LlHD5pjxho.png?r=f08' 
    }
  ];

  const [currentProfile, setCurrentProfile] = useState(profiles[0]);

  return (
    <ProfileContext.Provider value={{ currentProfile, setCurrentProfile, profiles }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
}; 