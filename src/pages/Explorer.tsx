
import React from 'react';
import NavBar from '@/components/NavBar';
import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Explorer = () => {
  return (
    <div className="flex h-screen bg-kling-dark">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <NavBar />
        
        <div className="flex-1 p-6 pt-20 overflow-auto">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <h1 className="text-3xl font-bold text-white mb-4 md:mb-0">Explorer les créations</h1>
              
              <div className="flex w-full md:w-auto gap-2">
                <Input 
                  placeholder="Rechercher..." 
                  className="bg-kling-gray border-kling-light-gray w-full md:w-64"
                />
                <Button className="bg-kling-green text-kling-dark hover:bg-kling-green/90">
                  Rechercher
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div 
                  key={i}
                  className="bg-kling-gray border border-kling-light-gray rounded-lg overflow-hidden hover:border-kling-green transition-colors"
                >
                  <div className="aspect-video bg-gradient-to-br from-kling-green/20 to-blue-500/30 flex items-center justify-center">
                    <svg className="h-12 w-12 text-white opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-medium text-white">Vidéo créative {i}</h3>
                    <p className="text-sm text-gray-400 mt-1">Création cyberpunk</p>
                    
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-kling-green/30"></div>
                        <span className="text-xs text-gray-400 ml-2">Utilisateur</span>
                      </div>
                      
                      <Button variant="ghost" size="sm" className="text-xs text-kling-green">
                        Voir
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explorer;
