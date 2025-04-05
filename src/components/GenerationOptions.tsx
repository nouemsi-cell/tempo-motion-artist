
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

const GenerationOptions = () => {
  return (
    <section className="py-20 bg-kling-dark px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient text-center">Options de Génération</h2>
        <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto text-center">
          Personnalisez votre vidéo avec nos options avancées pour un contrôle créatif total.
        </p>
        
        <div className="bg-kling-gray rounded-xl p-6 border border-kling-light-gray shadow-xl">
          <Tabs defaultValue="text" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="text" className="data-[state=active]:bg-kling-green data-[state=active]:text-kling-dark">Prompt Texte</TabsTrigger>
              <TabsTrigger value="image" className="data-[state=active]:bg-kling-green data-[state=active]:text-kling-dark">Image Source</TabsTrigger>
              <TabsTrigger value="advanced" className="data-[state=active]:bg-kling-green data-[state=active]:text-kling-dark">Options Avancées</TabsTrigger>
            </TabsList>
            
            <TabsContent value="text" className="p-4">
              <Textarea 
                placeholder="Décrivez la scène que vous souhaitez générer en détail. Précisez le sujet, les mouvements, l'environnement, l'éclairage et l'ambiance..."
                className="min-h-[150px] bg-kling-dark border-kling-light-gray"
              />
              
              <div className="mt-6">
                <Label className="text-sm text-gray-400 mb-2">Prompt négatif</Label>
                <Textarea 
                  placeholder="Éléments à exclure de la génération (optionnel)..."
                  className="min-h-[80px] bg-kling-dark border-kling-light-gray mt-1"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="image" className="space-y-4 p-4">
              <div className="border-2 border-dashed border-kling-light-gray rounded-lg p-6 text-center">
                <div className="mx-auto w-20 h-20 mb-4 bg-kling-light-gray rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Glissez votre image ici</h3>
                <p className="text-sm text-gray-400 mt-2">ou cliquez pour sélectionner un fichier</p>
                <Button variant="outline" className="mt-4 bg-kling-light-gray hover:bg-kling-green hover:text-kling-dark border-none">
                  Parcourir
                </Button>
              </div>
              
              <div className="mt-6">
                <Label className="text-sm text-gray-400 mb-2">Prompt d'accompagnement (optionnel)</Label>
                <Textarea 
                  placeholder="Ajoutez un texte pour guider la génération à partir de l'image..."
                  className="min-h-[80px] bg-kling-dark border-kling-light-gray mt-1"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="advanced" className="space-y-6 p-4">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between">
                    <Label className="text-sm text-gray-400">Durée (secondes)</Label>
                    <span className="text-sm text-kling-green">15s</span>
                  </div>
                  <Slider defaultValue={[15]} max={120} step={1} className="mt-2" />
                </div>
                
                <div>
                  <div className="flex justify-between">
                    <Label className="text-sm text-gray-400">FPS</Label>
                    <span className="text-sm text-kling-green">30</span>
                  </div>
                  <Slider defaultValue={[30]} max={60} step={1} className="mt-2" />
                </div>
                
                <div>
                  <div className="flex justify-between">
                    <Label className="text-sm text-gray-400">Créativité</Label>
                    <span className="text-sm text-kling-green">Moyenne</span>
                  </div>
                  <Slider defaultValue={[50]} max={100} step={1} className="mt-2" />
                </div>
                
                <div className="space-y-4 mt-6 pt-4 border-t border-kling-light-gray">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm text-white">Lip Sync</Label>
                    <Switch />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label className="text-sm text-white">Motion Brush</Label>
                    <Switch />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label className="text-sm text-white">Haute qualité</Label>
                    <Switch />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-8 flex justify-center">
            <Button className="bg-kling-green hover:bg-kling-green/90 text-kling-dark font-semibold px-8 py-6 text-lg rounded-full">
              Générer la vidéo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenerationOptions;
