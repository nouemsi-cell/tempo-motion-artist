
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Play, Wand2 } from 'lucide-react';

const HeroSection = () => {
  const [prompt, setPrompt] = useState('');
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const examplePrompts = [
    "Une femme marche dans une rue cyberpunk sous la pluie...",
    "Un astronaute sur une planète lointaine découvre une structure alien...",
    "Une forêt enchantée avec des créatures lumineuses la nuit...",
    "Un robot dans un désert post-apocalyptique cherche des ressources..."
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % examplePrompts.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  const handleGenerate = () => {
    // Redirection vers la page de création avec le prompt si fourni
    navigate('/create', { state: { prompt: prompt || examplePrompts[currentIndex] } });
  };
  
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center px-4 bg-cyberpunk-gradient overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-hero-pattern animate-pulse-glow"></div>
      
      {/* Abstract shapes */}
      <div className="absolute top-40 left-20 w-80 h-80 rounded-full bg-kling-green/5 blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl"></div>
      
      {/* Content */}
      <div className="z-10 text-center max-w-4xl mx-auto pt-20 animate-scale-in">
        <div className="inline-block px-6 py-2 mb-8 rounded-full bg-kling-green/10 border border-kling-green/20">
          <span className="text-kling-green font-medium text-sm flex items-center">
            <Wand2 className="mr-2 h-4 w-4" />
            Technologie IA de pointe pour créer des vidéos époustouflantes
          </span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-4 text-gradient">
          TempoMotion
        </h1>
        
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          From <span className="text-gray-300">Vision</span> to <span className="text-kling-green">Screen</span>
        </h2>
        
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Transformez vos idées en vidéos captivantes en quelques secondes grâce à notre IA avancée.
          Aucune compétence technique requise.
        </p>
        
        <div className="relative z-10 w-full max-w-2xl mx-auto mt-8 mb-12">
          <div className="relative group">
            <Input 
              placeholder={examplePrompts[currentIndex]}
              className="w-full px-6 py-6 text-lg bg-kling-gray border border-kling-light-gray rounded-full pr-40 transition-all input-glow"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <Button 
              className="absolute right-1 top-1 bottom-1 btn-primary"
              onClick={handleGenerate}
            >
              Générer
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <div className="absolute -bottom-8 left-0 w-full text-xs text-gray-400 flex justify-center">
              <span className="animate-pulse">Appuyez sur Entrée pour générer</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mt-12 text-sm text-gray-400">
          <span className="bg-kling-gray px-3 py-1 rounded-full hover:bg-kling-light-gray transition-colors cursor-pointer">#cyberpunk</span>
          <span className="bg-kling-gray px-3 py-1 rounded-full hover:bg-kling-light-gray transition-colors cursor-pointer">#portrait</span>
          <span className="bg-kling-gray px-3 py-1 rounded-full hover:bg-kling-light-gray transition-colors cursor-pointer">#néon</span>
          <span className="bg-kling-gray px-3 py-1 rounded-full hover:bg-kling-light-gray transition-colors cursor-pointer">#scifi</span>
          <span className="bg-kling-gray px-3 py-1 rounded-full hover:bg-kling-light-gray transition-colors cursor-pointer">#animation</span>
        </div>
      </div>
      
      {/* Video preview placeholder - would be replaced with actual video in real app */}
      <div className="mt-16 relative w-full max-w-6xl mx-auto overflow-hidden rounded-xl shadow-2xl animate-float group">
        <img 
          src="/lovable-uploads/7f8e8103-b68c-4b12-aac0-48f21605e9fd.png"
          alt="Cyberpunk scene" 
          className="w-full h-auto object-cover rounded-xl border border-kling-light-gray group-hover:border-kling-green/50 transition-colors"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="w-20 h-20 bg-kling-green bg-opacity-80 rounded-full flex items-center justify-center animate-pulse-glow cursor-pointer group-hover:scale-110 transition-transform">
            <Play className="h-10 w-10 text-kling-dark ml-1" fill="currentColor" />
          </div>
        </div>
      </div>
      
      {/* Stats section */}
      <div className="w-full max-w-4xl mx-auto mt-20 mb-10 flex flex-col md:flex-row justify-between gap-8 px-4">
        <div className="flex-1 text-center">
          <h3 className="text-4xl font-bold text-white mb-2">1M+</h3>
          <p className="text-gray-400">Vidéos générées</p>
        </div>
        <div className="flex-1 text-center">
          <h3 className="text-4xl font-bold text-white mb-2">50K+</h3>
          <p className="text-gray-400">Utilisateurs actifs</p>
        </div>
        <div className="flex-1 text-center">
          <h3 className="text-4xl font-bold text-white mb-2">4.9/5</h3>
          <p className="text-gray-400">Note moyenne</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
