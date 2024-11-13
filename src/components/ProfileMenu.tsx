import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PenLine, FileDown, User, HelpCircle } from 'lucide-react';

interface ProfileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({ isOpen, onClose, onLogout }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="absolute top-full right-0 mt-2 w-56 bg-black/95 border border-gray-700 rounded-md shadow-lg overflow-hidden"
      onMouseLeave={onClose}
    >
      <div className="py-2">
        <div className="px-4 py-2 hover:bg-gray-600/30 cursor-pointer flex items-center gap-3">
          <img
            src="https://occ-0-1190-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
            alt="Profile"
            className="w-7 h-7 rounded"
          />
          <span>Rodrigo</span>
        </div>
        <div className="px-4 py-2 hover:bg-gray-600/30 cursor-pointer flex items-center gap-3">
          <img
            src="https://occ-0-1190-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdYJV5wt63AuZRXyzaXkb5O9kB6qEBCaV0gj6cX4oe6_6nqR0FGM-TUyovKJgYHXgUc15F2LJJxqHXEF1qZGloKF.png?r=f71"
            alt="Profile"
            className="w-7 h-7 rounded"
          />
          <span>Mariana</span>
        </div>
        <div className="border-t border-gray-700 my-2" />
        <div className="px-4 py-2 hover:bg-gray-600/30 cursor-pointer flex items-center gap-3">
          <PenLine className="w-5 h-5" />
          <span>Administrar perfiles</span>
        </div>
        <div className="px-4 py-2 hover:bg-gray-600/30 cursor-pointer flex items-center gap-3">
          <FileDown className="w-5 h-5" />
          <span>Transferir perfil</span>
        </div>
        <div className="px-4 py-2 hover:bg-gray-600/30 cursor-pointer flex items-center gap-3">
          <User className="w-5 h-5" />
          <span>Cuenta</span>
        </div>
        <div className="px-4 py-2 hover:bg-gray-600/30 cursor-pointer flex items-center gap-3">
          <HelpCircle className="w-5 h-5" />
          <span>Centro de ayuda</span>
        </div>
        <div className="border-t border-gray-700 my-2" />
        <div 
          className="px-4 py-2 hover:bg-gray-600/30 cursor-pointer"
          onClick={onLogout}
        >
          Cerrar sesión en Netflix
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;