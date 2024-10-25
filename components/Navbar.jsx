import React from 'react';
import { Search, Bell, User } from 'lucide-react';

function Navbar({ activeSection, onSectionChange, onSearchClick, onNotificationsClick, onProfileClick }) {
  return (
    <nav className="fixed top-0 z-50 w-full bg-gradient-to-b from-zinc-900 to-transparent px-4 py-4 md:px-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <img src="/netflix-logo.png" alt="Netflix" className="h-8" />
          <ul className="hidden space-x-4 md:flex">
            {['home', 'tvshows', 'movies', 'new', 'mylist'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => onSectionChange(section)}
                  className={`text-sm font-medium ${
                    activeSection === section ? 'text-white' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={onSearchClick} className="text-gray-300 hover:text-white">
            <Search className="h-5 w-5" />
          </button>
          <button onClick={onNotificationsClick} className="text-gray-300 hover:text-white">
            <Bell className="h-5 w-5" />
          </button>
          <button onClick={onProfileClick} className="text-gray-300 hover:text-white">
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

