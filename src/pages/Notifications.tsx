
import React from 'react';
import NavBar from '@/components/NavBar';
import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      title: 'Nouvelle version disponible',
      message: 'TempoMotion AI 1.0 est maintenant disponible avec de nouvelles fonctionnalités !',
      time: 'Il y a 2 heures',
      read: false
    },
    {
      id: 2,
      title: 'Votre vidéo est prête',
      message: 'Votre vidéo "Scène cyberpunk" a été générée avec succès.',
      time: 'Il y a 1 jour',
      read: true
    },
    {
      id: 3,
      title: 'Offre spéciale',
      message: 'Profitez de 20% de réduction sur l\'abonnement Pro jusqu\'à la fin du mois.',
      time: 'Il y a 2 jours',
      read: true
    },
  ];

  return (
    <div className="flex h-screen bg-kling-dark">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <NavBar />
        
        <div className="flex-1 p-6 pt-20 overflow-auto">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-white">Notifications</h1>
              
              <Button variant="outline" className="border-kling-light-gray text-gray-300">
                Tout marquer comme lu
              </Button>
            </div>
            
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div 
                  key={notification.id} 
                  className={`p-4 rounded-lg border ${
                    notification.read ? 'bg-kling-gray border-kling-light-gray' : 'bg-kling-gray/80 border-kling-green'
                  }`}
                >
                  <div className="flex justify-between">
                    <h3 className={`font-medium ${notification.read ? 'text-white' : 'text-kling-green'}`}>
                      {notification.title}
                    </h3>
                    <span className="text-xs text-gray-400">{notification.time}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{notification.message}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
