
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const Features = () => {
  return (
    <div className="min-h-screen bg-kling-dark text-white">
      <NavBar />
      <div className="pt-24 pb-16 px-4 container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Nos fonctionnalités</h1>
        <p className="text-xl text-center mb-12 text-gray-300">
          Découvrez tout ce que TempoMotion AI peut faire pour vous
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="border border-kling-light-gray rounded-lg p-6 bg-kling-gray hover:border-kling-green transition-all">
            <div className="h-12 w-12 rounded-lg bg-kling-green/20 flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-kling-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-3">Génération vidéo IA</h2>
            <p className="text-gray-400">
              Transformez du texte simple en vidéos captivantes grâce à notre moteur IA avancé. 
              Contrôlez le style, le rythme et l'atmosphère de vos créations.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="border border-kling-light-gray rounded-lg p-6 bg-kling-gray hover:border-kling-green transition-all">
            <div className="h-12 w-12 rounded-lg bg-kling-green/20 flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-kling-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-3">Bibliothèque de styles</h2>
            <p className="text-gray-400">
              Accédez à une vaste collection de styles visuels prédéfinis, des animations 3D 
              aux effets cinématographiques, pour personnaliser vos vidéos.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="border border-kling-light-gray rounded-lg p-6 bg-kling-gray hover:border-kling-green transition-all">
            <div className="h-12 w-12 rounded-lg bg-kling-green/20 flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-kling-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-3">Analyse de performances</h2>
            <p className="text-gray-400">
              Suivez l'engagement et les performances de vos vidéos avec des analyses 
              détaillées pour optimiser votre stratégie de contenu.
            </p>
          </div>
          
          {/* Feature 4 */}
          <div className="border border-kling-light-gray rounded-lg p-6 bg-kling-gray hover:border-kling-green transition-all">
            <div className="h-12 w-12 rounded-lg bg-kling-green/20 flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-kling-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-3">Partage instantané</h2>
            <p className="text-gray-400">
              Publiez directement vos créations sur les réseaux sociaux ou exportez-les 
              dans différents formats pour une utilisation polyvalente.
            </p>
          </div>
          
          {/* Feature 5 */}
          <div className="border border-kling-light-gray rounded-lg p-6 bg-kling-gray hover:border-kling-green transition-all">
            <div className="h-12 w-12 rounded-lg bg-kling-green/20 flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-kling-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-3">Collaboration en équipe</h2>
            <p className="text-gray-400">
              Travaillez ensemble sur vos projets vidéo avec des outils de collaboration 
              avancés pour une création fluide et efficace.
            </p>
          </div>
          
          {/* Feature 6 */}
          <div className="border border-kling-light-gray rounded-lg p-6 bg-kling-gray hover:border-kling-green transition-all">
            <div className="h-12 w-12 rounded-lg bg-kling-green/20 flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-kling-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-3">API Developer</h2>
            <p className="text-gray-400">
              Intégrez nos capacités de génération vidéo IA directement dans vos applications 
              grâce à notre API robuste et bien documentée.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Features;
