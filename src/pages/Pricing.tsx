
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-kling-dark text-white">
      <NavBar />
      <div className="pt-24 pb-16 px-4 container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Nos tarifs</h1>
        <p className="text-xl text-center mb-12 text-gray-300">
          Choisissez le forfait qui correspond à vos besoins
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Forfait Découverte */}
          <div className="border border-kling-light-gray rounded-lg p-6 bg-kling-gray hover:border-kling-green transition-all">
            <h2 className="text-2xl font-bold mb-4">Découverte</h2>
            <div className="text-4xl font-bold mb-4">Gratuit</div>
            <p className="text-gray-400 mb-6">Parfait pour débuter</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-kling-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                5 vidéos par mois
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-kling-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                720p max
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-kling-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Support par email
              </li>
            </ul>
            <button className="w-full py-2 bg-kling-green text-kling-dark font-semibold rounded hover:bg-kling-green/90">
              Commencer
            </button>
          </div>
          
          {/* Forfait Pro */}
          <div className="border-2 border-kling-green rounded-lg p-6 bg-kling-gray relative transform scale-105 z-10">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-kling-green text-kling-dark px-4 py-1 rounded-full text-sm font-semibold">
              Populaire
            </div>
            <h2 className="text-2xl font-bold mb-4">Pro</h2>
            <div className="text-4xl font-bold mb-4">29€<span className="text-xl text-gray-400">/mois</span></div>
            <p className="text-gray-400 mb-6">Pour les créateurs réguliers</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-kling-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                50 vidéos par mois
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-kling-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                1080p max
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-kling-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Support prioritaire
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-kling-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Styles premium
              </li>
            </ul>
            <button className="w-full py-2 bg-kling-green text-kling-dark font-semibold rounded hover:bg-kling-green/90">
              S'abonner
            </button>
          </div>
          
          {/* Forfait Enterprise */}
          <div className="border border-kling-light-gray rounded-lg p-6 bg-kling-gray hover:border-kling-green transition-all">
            <h2 className="text-2xl font-bold mb-4">Enterprise</h2>
            <div className="text-4xl font-bold mb-4">99€<span className="text-xl text-gray-400">/mois</span></div>
            <p className="text-gray-400 mb-6">Pour les équipes et studios</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-kling-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Vidéos illimitées
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-kling-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                4K max
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-kling-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Support dédié 24/7
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-kling-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                API accès illimité
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-kling-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Personnalisation avancée
              </li>
            </ul>
            <button className="w-full py-2 border border-kling-green text-kling-green font-semibold rounded hover:bg-kling-green hover:text-kling-dark transition-colors">
              Contacter les ventes
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
