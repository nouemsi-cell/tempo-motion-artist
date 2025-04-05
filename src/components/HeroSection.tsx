
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center px-4 bg-cyberpunk-gradient overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-hero-pattern"></div>
      
      {/* Content */}
      <div className="z-10 text-center max-w-4xl mx-auto pt-20">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 text-gradient">
          TempoMotion
        </h1>
        
        <h2 className="text-4xl md:text-6xl font-bold mb-12">
          From <span className="text-gray-300">Vision</span> to <span className="text-kling-green">Screen</span>
        </h2>
        
        <div className="relative z-10 w-full max-w-2xl mx-auto mt-8 mb-12">
          <div className="relative">
            <Input 
              placeholder="Une femme marche dans une rue cyberpunk sous la pluie..." 
              className="w-full px-6 py-6 text-lg bg-kling-gray border border-kling-light-gray rounded-full pr-32"
            />
            <Button className="absolute right-1 top-1 bottom-1 bg-kling-green hover:bg-kling-green/90 text-kling-dark font-semibold px-6 rounded-full">
              Générer
            </Button>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mt-4 text-sm text-gray-400">
          <span className="bg-kling-gray px-3 py-1 rounded-full">#cyberpunk</span>
          <span className="bg-kling-gray px-3 py-1 rounded-full">#portrait</span>
          <span className="bg-kling-gray px-3 py-1 rounded-full">#néon</span>
          <span className="bg-kling-gray px-3 py-1 rounded-full">#scifi</span>
          <span className="bg-kling-gray px-3 py-1 rounded-full">#animation</span>
        </div>
      </div>
      
      {/* Video preview placeholder - would be replaced with actual video in real app */}
      <div className="mt-16 relative w-full max-w-6xl mx-auto overflow-hidden rounded-lg shadow-2xl animate-float">
        <img 
          src="/lovable-uploads/7f8e8103-b68c-4b12-aac0-48f21605e9fd.png"
          alt="Cyberpunk scene" 
          className="w-full h-auto object-cover rounded-lg border border-kling-light-gray"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-kling-green bg-opacity-80 rounded-full flex items-center justify-center animate-pulse-glow">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
