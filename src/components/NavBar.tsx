
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-kling-darker bg-opacity-80 backdrop-blur-lg border-b border-kling-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="text-kling-green font-bold text-2xl flex items-center">
                <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
                TempoMotion AI
              </div>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-gray-200 hover:text-kling-green px-3 py-2 rounded-md text-sm font-medium">Accueil</Link>
              <Link to="/studio" className="text-gray-200 hover:text-kling-green px-3 py-2 rounded-md text-sm font-medium">Studio Créatif</Link>
              <Link to="/api" className="text-gray-200 hover:text-kling-green px-3 py-2 rounded-md text-sm font-medium">API Platform</Link>
              <Link to="/about" className="text-gray-200 hover:text-kling-green px-3 py-2 rounded-md text-sm font-medium">À Propos</Link>
            </div>
          </div>
          <Button className="bg-kling-green hover:bg-kling-green/90 text-kling-dark font-semibold">
            Créer
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
