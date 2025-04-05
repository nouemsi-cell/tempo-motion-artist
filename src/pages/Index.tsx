
import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import GenerationOptions from '@/components/GenerationOptions';
import PricingSection from '@/components/PricingSection';
import Footer from '@/components/Footer';
import AuthModal from '@/components/AuthModal';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  
  return (
    <main className="bg-kling-dark min-h-screen text-white">
      <NavBar />
      
      <HeroSection />
      <FeaturesSection />
      <GenerationOptions />
      <PricingSection />
      
      {/* Call to Action */}
      <section className="py-20 bg-kling-dark px-4 relative">
        <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
            Commencez à créer des vidéos extraordinaires dès aujourd'hui
          </h2>
          <p className="text-lg text-gray-300 mb-10">
            Rejoignez des milliers d'artistes, créateurs et professionnels qui utilisent déjà TempoMotion AI.
          </p>
          <Button 
            className="bg-kling-green hover:bg-kling-green/90 text-kling-dark font-semibold px-8 py-6 text-lg rounded-full"
            onClick={() => setIsAuthModalOpen(true)}
          >
            Commencer gratuitement
          </Button>
        </div>
      </section>
      
      <Footer />
      
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </main>
  );
};

export default Index;
