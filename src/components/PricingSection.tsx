
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="py-20 bg-kling-darker px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">Plans et Tarifs</h2>
        <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
          Choisissez le plan qui correspond à vos besoins, de l'essai gratuit aux options professionnelles.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* Free Plan */}
          <Card className="bg-kling-gray border-kling-light-gray hover:border-kling-green transition-all">
            <CardHeader className="pb-0">
              <CardTitle className="text-2xl font-bold text-white">Essai</CardTitle>
              <p className="text-5xl font-bold mt-4">
                0€
                <span className="text-sm text-gray-400 font-normal">/mois</span>
              </p>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3 text-left">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-kling-green mr-2" />
                  <span className="text-gray-300">166 crédits gratuits</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-kling-green mr-2" />
                  <span className="text-gray-300">Vidéos 720p</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-kling-green mr-2" />
                  <span className="text-gray-300">15 secondes max</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-kling-green mr-2" />
                  <span className="text-gray-300">Options de base</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-transparent hover:bg-kling-green hover:text-kling-dark text-white border border-kling-green">
                Essayer maintenant
              </Button>
            </CardFooter>
          </Card>
          
          {/* Standard Plan */}
          <Card className="bg-kling-gray border-kling-light-gray hover:border-kling-green transition-all relative">
            <div className="absolute -top-4 left-0 right-0 mx-auto w-max px-4 py-1 bg-kling-green text-kling-dark rounded-full text-sm font-semibold">
              Le plus populaire
            </div>
            <CardHeader className="pb-0">
              <CardTitle className="text-2xl font-bold text-white">Standard</CardTitle>
              <p className="text-5xl font-bold mt-4">
                29€
                <span className="text-sm text-gray-400 font-normal">/mois</span>
              </p>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3 text-left">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-kling-green mr-2" />
                  <span className="text-gray-300">1000 crédits/mois</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-kling-green mr-2" />
                  <span className="text-gray-300">Vidéos 1080p</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-kling-green mr-2" />
                  <span className="text-gray-300">45 secondes max</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-kling-green mr-2" />
                  <span className="text-gray-300">Lip Sync inclus</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-kling-green hover:bg-kling-green/90 text-kling-dark">
                S'abonner
              </Button>
            </CardFooter>
          </Card>
          
          {/* Pro Plan */}
          <Card className="bg-kling-gray border-kling-light-gray hover:border-kling-green transition-all">
            <CardHeader className="pb-0">
              <CardTitle className="text-2xl font-bold text-white">Pro</CardTitle>
              <p className="text-5xl font-bold mt-4">
                99€
                <span className="text-sm text-gray-400 font-normal">/mois</span>
              </p>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3 text-left">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-kling-green mr-2" />
                  <span className="text-gray-300">5000 crédits/mois</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-kling-green mr-2" />
                  <span className="text-gray-300">Vidéos 4K</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-kling-green mr-2" />
                  <span className="text-gray-300">2 minutes max</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-kling-green mr-2" />
                  <span className="text-gray-300">Toutes les options</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-transparent hover:bg-kling-green hover:text-kling-dark text-white border border-kling-green">
                S'abonner
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
