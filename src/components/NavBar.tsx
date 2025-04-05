
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import UserAvatar from '@/components/UserAvatar';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeSheet = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed w-full top-0 z-10 bg-kling-dark border-b border-kling-light-gray">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-white">
          TempoMotion AI
        </Link>

        {/* Navigation sur grand écran */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-300 hover:text-white">Accueil</Link>
          <Link to="/features" className="text-gray-300 hover:text-white">Fonctionnalités</Link>
          <Link to="/pricing" className="text-gray-300 hover:text-white">Tarifs</Link>
          <UserAvatar />
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
              <Link to="/" onClick={closeSheet} className="text-lg text-white py-2 hover:text-kling-green">
                Accueil
              </Link>
              <Link to="/features" onClick={closeSheet} className="text-lg text-white py-2 hover:text-kling-green">
                Fonctionnalités
              </Link>
              <Link to="/pricing" onClick={closeSheet} className="text-lg text-white py-2 hover:text-kling-green">
                Tarifs
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
