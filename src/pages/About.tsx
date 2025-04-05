
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-kling-dark text-white">
      <NavBar />
      <div className="pt-24 pb-16 px-4 container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">À propos de TempoMotion AI</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-kling-gray rounded-lg p-8 mb-12 border border-kling-light-gray">
            <h2 className="text-2xl font-bold mb-6 text-kling-green">Notre mission</h2>
            <p className="text-lg text-gray-300 mb-6">
              Chez TempoMotion AI, nous révolutionnons la création vidéo en rendant accessible à tous 
              la puissance de l'intelligence artificielle. Notre mission est de démocratiser la production 
              vidéo de haute qualité, permettant aux créateurs de toutes compétences de donner vie à leurs idées.
            </p>
            <p className="text-lg text-gray-300">
              Nous croyons que la créativité ne devrait pas être limitée par les compétences techniques 
              ou les ressources, mais qu'elle devrait s'exprimer librement grâce à des outils intuitifs et puissants.
            </p>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Notre histoire</h2>
            <div className="space-y-6 text-gray-300">
              <p>
                TempoMotion AI a vu le jour en 2023, lorsqu'une équipe de passionnés de technologie et d'arts visuels 
                a réalisé le potentiel inexploité de l'intelligence artificielle dans la création de contenu vidéo.
              </p>
              <p>
                Après des mois de recherche et développement, nous avons lancé notre première version bêta, 
                qui a rapidement gagné en popularité auprès des créateurs de contenu et des professionnels du marketing. 
                Leur retour précieux nous a permis d'affiner notre technologie pour en faire l'outil puissant qu'il est aujourd'hui.
              </p>
              <p>
                En constante évolution, nous travaillons sans relâche pour repousser les limites de ce qui est possible 
                dans la génération vidéo assistée par IA, avec l'objectif de devenir la référence mondiale dans ce domaine.
              </p>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">L'équipe</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Membre 1 */}
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-kling-gray border border-kling-light-gray mx-auto mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-kling-green/30 to-blue-500/30 flex items-center justify-center">
                    <svg className="h-16 w-16 text-kling-green opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="font-bold">Sophie Dubois</h3>
                <p className="text-kling-green text-sm">CEO & Fondatrice</p>
              </div>
              
              {/* Membre 2 */}
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-kling-gray border border-kling-light-gray mx-auto mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-kling-green/30 to-blue-500/30 flex items-center justify-center">
                    <svg className="h-16 w-16 text-kling-green opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="font-bold">Thomas Martin</h3>
                <p className="text-kling-green text-sm">CTO</p>
              </div>
              
              {/* Membre 3 */}
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-kling-gray border border-kling-light-gray mx-auto mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-kling-green/30 to-blue-500/30 flex items-center justify-center">
                    <svg className="h-16 w-16 text-kling-green opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="font-bold">Julie Laurent</h3>
                <p className="text-kling-green text-sm">Directrice Produit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
