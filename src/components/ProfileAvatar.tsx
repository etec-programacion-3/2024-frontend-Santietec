import React from 'react';
import { useProfile } from '../contexts/ProfileContext';

const ProfileAvatar = () => {
  const { currentProfile } = useProfile();

  return (
    <img
      src={currentProfile.img}
      alt={currentProfile.name}
      className="w-8 h-8 rounded cursor-pointer"
    />
  );
};

export default ProfileAvatar; 