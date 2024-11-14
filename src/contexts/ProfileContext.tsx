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
      img: "/src/contexts/netflix-profile-pictures-1000-x-1000-w3lqr61qe57e9yt8.webp"
    },
    { 
      id: 2, 
      name: 'Mamá', 
      img: '/src/contexts/imagenes-de-perfil-de-netflix-62wgyitks6f4l79m.webp'
    },
    { 
      id: 3, 
      name: 'Santi', 
      img: '/src/contexts/personalizatu-perfil-de-netflix-con-la-imagen-perfecta-88wkdmjrorckekha.jpg'
    },
    { 
      id: 4, 
      name: 'Abuelo', 
      img: '/src/contexts/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp'
    },
    { 
      id: 5, 
      name: 'Hermano', 
      img: '/src/contexts/mantenteconectado-con-netflix-vnl1thqrh02x7ra2.jpg'
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