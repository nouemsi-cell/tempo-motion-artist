
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Video, Film, Bell, User, ChevronRight, ChevronLeft, Settings, Sparkles, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const Sidebar = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const mainMenuItems = [
    { path: '/', icon: Home, label: 'Accueil' },
    { path: '/explorer', icon: Film, label: 'Explorer' },
    { path: '/create', icon: Video, label: 'Créer' },
  ];
  
  const accountMenuItems = [
    { path: '/notifications', icon: Bell, label: 'Notifications' },
    { path: '/profile', icon: User, label: 'Profil' },
    { path: '/settings', icon: Settings, label: 'Paramètres' },
  ];

  const renderNavItem = (item: { path: string, icon: any, label: string }) => {
    const Icon = item.icon;
    const active = isActive(item.path);
    
    return (
      <li key={item.path}>
        <TooltipProvider delayDuration={200}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to={item.path}
                className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                  active 
                    ? 'bg-kling-green/10 text-kling-green border-l-2 border-kling-green' 
                    : 'text-gray-300 hover:bg-kling-dark/50 hover:text-white'
                }`}
              >
                <Icon className={`h-5 w-5 ${active ? 'text-kling-green' : ''} transition-colors`} />
                {!collapsed && <span className="ml-3 whitespace-nowrap">{item.label}</span>}
              </Link>
            </TooltipTrigger>
            {collapsed && (
              <TooltipContent side="right" className="bg-kling-gray text-white border-kling-light-gray">
                {item.label}
              </TooltipContent>
            )}
          </Tooltip>
        </TooltipProvider>
      </li>
    );
  };

  return (
    <div 
      className={`${
        collapsed ? 'w-16' : 'w-56'
      } bg-kling-gray border-r border-kling-light-gray flex flex-col h-screen fixed left-0 z-20 transition-all duration-300`}
    >
      <div className="p-4 border-b border-kling-light-gray flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold text-kling-green">TM</span>
          {!collapsed && (
            <span className="text-xl font-bold text-white ml-1">otionAI</span>
          )}
        </Link>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleSidebar} 
          className="text-gray-400 hover:text-white hover:bg-kling-dark/30"
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </Button>
      </div>

      <nav className="flex-1 py-6 flex flex-col justify-between">
        <div>
          <ul className="space-y-1 px-2">
            {mainMenuItems.map(renderNavItem)}
          </ul>

          <div className={`mt-8 ${collapsed ? 'px-2' : 'px-4'}`}>
            {!collapsed && (
              <h3 className="text-xs uppercase text-gray-500 font-medium mb-2 px-2">Compte</h3>
            )}
            <ul className="space-y-1">
              {accountMenuItems.map(renderNavItem)}
            </ul>
          </div>
        </div>
        
        <div className={`mb-6 ${collapsed ? 'px-2' : 'px-4'}`}>
          {!collapsed ? (
            <div className="p-3 bg-gradient-to-r from-kling-dark to-kling-gray border border-kling-light-gray rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="h-4 w-4 text-kling-green" />
                <span className="text-sm font-medium text-white">Passer Pro</span>
              </div>
              <p className="text-xs text-gray-400 mb-3">Débloquez toutes les fonctionnalités premium</p>
              <Button className="w-full py-1 h-8 bg-kling-green text-kling-dark hover:bg-kling-green/90 text-xs">
                Mettre à niveau
              </Button>
            </div>
          ) : (
            <TooltipProvider delayDuration={200}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button className="w-full p-2 bg-kling-green text-kling-dark hover:bg-kling-green/90">
                    <Star className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right" className="bg-kling-gray text-white border-kling-light-gray">
                  Passer Pro
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
