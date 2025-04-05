
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-kling-darker px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">Fonctionnalités Avancées</h2>
        <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
          Notre IA de génération de vidéo utilise des algorithmes d'attention 
          spatiotemporelle 3D pour créer des mouvements réalistes et des interactions physiques cohérentes.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {/* Feature 1 */}
          <Card className="bg-kling-gray border-kling-light-gray hover:border-kling-green transition-all">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-full bg-kling-light-gray flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-kling-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Vidéos Haute Qualité</h3>
              <p className="text-gray-400">
                Générez des vidéos jusqu'à 2 minutes en 1080p à 30 fps
                avec plusieurs ratios disponibles (16:9, 9:16, 1:1).
              </p>
            </CardContent>
          </Card>
          
          {/* Feature 2 */}
          <Card className="bg-kling-gray border-kling-light-gray hover:border-kling-green transition-all">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-full bg-kling-light-gray flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-kling-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Lip Sync</h3>
              <p className="text-gray-400">
                Synchronisez parfaitement les mouvements de la bouche 
                avec une piste audio vocale pour des résultats réalistes.
              </p>
            </CardContent>
          </Card>
          
          {/* Feature 3 */}
          <Card className="bg-kling-gray border-kling-light-gray hover:border-kling-green transition-all">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-full bg-kling-light-gray flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-kling-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Motion Brush</h3>
              <p className="text-gray-400">
                Contrôlez précisément les zones de mouvement dans une image
                grâce à notre outil Motion Brush intuitif.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
