
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Bell, Menu, Video, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import UserAvatar from '@/components/UserAvatar';
import { toast } from '@/hooks/use-toast';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeSheet = () => {
    setIsOpen(false);
  };
  
  const handleNotificationClick = () => {
    // Utiliser le toast pour afficher une notification
    toast({
      title: "Nouvelles notifications",
      description: "Vous avez 3 nouvelles notifications",
      duration: 3000,
    });
  };

  const isHome = location.pathname === '/';

  return (
    <header 
      className={`fixed w-full top-0 z-10 transition-all duration-300 ${
        scrolled || !isHome 
          ? 'bg-kling-dark/90 backdrop-blur-md border-b border-kling-light-gray' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl font-bold flex items-center gap-2 group"
        >
          <span className="text-kling-green group-hover:scale-110 transition-transform duration-300">TM</span>
          <span className="text-white">TempoMotion AI</span>
        </Link>

        {/* Navigation sur grand écran */}
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            to="/" 
            className={`text-gray-300 hover:text-white transition-colors relative ${
              location.pathname === '/' ? 'after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-kling-green' : ''
            }`}
          >
            Accueil
          </Link>
          <Link 
            to="/features" 
            className={`text-gray-300 hover:text-white transition-colors relative ${
              location.pathname === '/features' ? 'after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-kling-green' : ''
            }`}
          >
            Fonctionnalités
          </Link>
          <Link 
            to="/pricing" 
            className={`text-gray-300 hover:text-white transition-colors relative ${
              location.pathname === '/pricing' ? 'after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-kling-green' : ''
            }`}
          >
            Tarifs
          </Link>
          
          <div className="flex items-center gap-4 ml-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full text-gray-300 hover:text-white hover:bg-kling-gray transition-colors"
              onClick={handleNotificationClick}
              asChild
            >
              <Link to="/notifications">
                <Bell className="h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full text-gray-300 hover:text-white hover:bg-kling-gray transition-colors"
              asChild
            >
              <Link to="/explorer">
                <Search className="h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full text-gray-300 hover:text-white hover:bg-kling-gray transition-colors"
              asChild
            >
              <Link to="/create">
                <Video className="h-5 w-5" />
              </Link>
            </Button>
            
            <UserAvatar />
          </div>
        </nav>

        {/* Menu mobile */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" className="p-2">
              <Menu className="h-6 w-6 text-white" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-kling-gray border-kling-light-gray">
            <nav className="flex flex-col gap-4 mt-8">
              <Link to="/" onClick={closeSheet} className="text-lg text-white py-2 hover:text-kling-green transition-colors">
                Accueil
              </Link>
              <Link to="/features" onClick={closeSheet} className="text-lg text-white py-2 hover:text-kling-green transition-colors">
                Fonctionnalités
              </Link>
              <Link to="/pricing" onClick={closeSheet} className="text-lg text-white py-2 hover:text-kling-green transition-colors">
                Tarifs
              </Link>
              <Link to="/notifications" onClick={closeSheet} className="text-lg text-white py-2 hover:text-kling-green transition-colors">
                Notifications
              </Link>
              <Link to="/explorer" onClick={closeSheet} className="text-lg text-white py-2 hover:text-kling-green transition-colors">
                Explorer
              </Link>
              <Link to="/create" onClick={closeSheet} className="text-lg text-white py-2 hover:text-kling-green transition-colors">
                Créer
              </Link>
              <div onClick={closeSheet} className="py-2">
                <UserAvatar />
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default NavBar;
