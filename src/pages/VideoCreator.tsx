
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from '@/components/ui/use-toast';
import NavBar from '@/components/NavBar';
import Sidebar from '@/components/Sidebar';

const VideoCreator = () => {
  const { toast } = useToast();
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  
  const handleGenerate = () => {
    if (!prompt.trim()) {
      toast({
        title: "Le prompt ne peut pas être vide",
        description: "Veuillez entrer une description pour votre vidéo",
        variant: "destructive"
      });
      return;
    }
    
    setIsGenerating(true);
    
    // Simuler la génération
    setTimeout(() => {
      setIsGenerating(false);
      toast({
        title: "Vidéo générée avec succès",
        description: "Votre vidéo est maintenant disponible",
        variant: "default"
      });
    }, 3000);
  };

  return (
    <div className="flex h-screen bg-kling-dark">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <NavBar />
        
        <div className="flex-1 p-6 pt-20 overflow-auto">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <h1 className="text-4xl font-bold mb-2 text-kling-green">Modèle TempoMotion 1.0</h1>
              <p className="text-gray-300">Superbe adhérence rapide, esthétique et mouvements !</p>
              
              <Button 
                variant="outline" 
                className="mt-4 bg-kling-gray/30 text-white border-kling-light-gray"
              >
                Expérience
              </Button>
            </div>
            
            <Tabs defaultValue="creatifs" className="w-full">
              <TabsList className="mb-6 bg-kling-gray border border-kling-light-gray">
                <TabsTrigger 
                  value="creatifs"
                  className="data-[state=active]:bg-kling-green data-[state=active]:text-kling-dark"
                >
                  Créatifs
                </TabsTrigger>
                <TabsTrigger 
                  value="shorts"
                  className="data-[state=active]:bg-kling-green data-[state=active]:text-kling-dark"
                >
                  Shorts
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="creatifs" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="aspect-video bg-kling-gray border border-kling-light-gray rounded-lg overflow-hidden relative group cursor-pointer">
                    <img 
                      src="/lovable-uploads/bb4cc558-dda2-437c-83a4-7a3817310edf.png"
                      alt="Exemple créatif" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button className="bg-kling-green text-kling-dark hover:bg-kling-green/90">
                        Utiliser ce style
                      </Button>
                    </div>
                  </div>
                  
                  <div className="aspect-video bg-kling-gray border border-kling-light-gray rounded-lg overflow-hidden relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-kling-green/20 to-blue-500/30 flex items-center justify-center">
                      <Button className="bg-kling-green text-kling-dark hover:bg-kling-green/90">
                        Créer nouveau
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-kling-gray rounded-lg border border-kling-light-gray">
                  <h2 className="text-xl font-bold mb-4 text-white">Création rapide</h2>
                  
                  <div className="flex flex-col space-y-4">
                    <Input
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="Une femme marche dans une rue cyberpunk sous la pluie..." 
                      className="bg-kling-dark border-kling-light-gray"
                    />
                    
                    <Button 
                      className="bg-kling-green hover:bg-kling-green/90 text-kling-dark"
                      onClick={handleGenerate}
                      disabled={isGenerating}
                    >
                      {isGenerating ? 'Génération en cours...' : 'Générer la vidéo'}
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="shorts" className="space-y-6">
                <div className="p-6 bg-kling-gray rounded-lg border border-kling-light-gray">
                  <h2 className="text-xl font-bold mb-4 text-white">Shorts</h2>
                  <p className="text-gray-300">Créez des vidéos courtes optimisées pour les plateformes sociales</p>
                  
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button 
                      variant="outline"
                      className="border-kling-light-gray"
                    >
                      Format vertical
                    </Button>
                    <Button 
                      variant="outline"
                      className="border-kling-light-gray"
                    >
                      Format stories
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCreator;
