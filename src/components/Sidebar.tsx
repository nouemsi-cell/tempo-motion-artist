
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Video, Film, Bell, User } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="w-16 md:w-56 bg-kling-gray border-r border-kling-light-gray flex flex-col h-screen fixed left-0 z-20">
      <div className="p-4 border-b border-kling-light-gray">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold text-white hidden md:block">TempoMotion AI</span>
          <span className="text-xl font-bold text-kling-green md:hidden">TM</span>
        </Link>
      </div>

      <nav className="flex-1 py-6">
        <ul className="space-y-2">
          <li>
            <Link
              to="/"
              className={`flex items-center px-4 py-3 ${
                isActive('/') ? 'bg-kling-dark text-kling-green' : 'text-gray-300 hover:bg-kling-dark/50'
              }`}
            >
              <Home className="h-5 w-5" />
              <span className="ml-3 hidden md:block">Maison</span>
            </Link>
          </li>
          <li>
            <Link
              to="/explorer"
              className={`flex items-center px-4 py-3 ${
                isActive('/explorer') ? 'bg-kling-dark text-kling-green' : 'text-gray-300 hover:bg-kling-dark/50'
              }`}
            >
              <Film className="h-5 w-5" />
              <span className="ml-3 hidden md:block">Explorer</span>
            </Link>
          </li>
          <li>
            <Link
              to="/create"
              className={`flex items-center px-4 py-3 ${
                isActive('/create') ? 'bg-kling-dark text-kling-green' : 'text-gray-300 hover:bg-kling-dark/50'
              }`}
            >
              <Video className="h-5 w-5" />
              <span className="ml-3 hidden md:block">Créer</span>
            </Link>
          </li>
        </ul>

        <div className="mt-8 px-4">
          <h3 className="text-xs uppercase text-gray-500 font-medium mb-2 hidden md:block">Compte</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/notifications"
                className={`flex items-center px-4 py-3 ${
                  isActive('/notifications') ? 'bg-kling-dark text-kling-green' : 'text-gray-300 hover:bg-kling-dark/50'
                }`}
              >
                <Bell className="h-5 w-5" />
                <span className="ml-3 hidden md:block">Notifications</span>
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className={`flex items-center px-4 py-3 ${
                  isActive('/profile') ? 'bg-kling-dark text-kling-green' : 'text-gray-300 hover:bg-kling-dark/50'
                }`}
              >
                <User className="h-5 w-5" />
                <span className="ml-3 hidden md:block">Profil</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
