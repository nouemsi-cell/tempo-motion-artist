
import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import {
  Bell,
  Check,
  Clock,
  Gift,
  MessageSquare,
  ThumbsUp,
  Video,
  Filter,
  CheckCheck,
  Trash2
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from '@/hooks/use-toast';

interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: 'system' | 'video' | 'offer' | 'interaction';
}

const Notifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: 'Nouvelle version disponible',
      message: 'TempoMotion AI 1.0 est maintenant disponible avec de nouvelles fonctionnalités !',
      time: 'Il y a 2 heures',
      read: false,
      type: 'system'
    },
    {
      id: 2,
      title: 'Votre vidéo est prête',
      message: 'Votre vidéo "Scène cyberpunk" a été générée avec succès.',
      time: 'Il y a 1 jour',
      read: true,
      type: 'video'
    },
    {
      id: 3,
      title: 'Offre spéciale',
      message: 'Profitez de 20% de réduction sur l\'abonnement Pro jusqu\'à la fin du mois.',
      time: 'Il y a 2 jours',
      read: true,
      type: 'offer'
    },
    {
      id: 4,
      title: 'Commentaire sur votre vidéo',
      message: 'CyberCreator a commenté : "Impressionnant ! Quels paramètres as-tu utilisés ?"',
      time: 'Il y a 3 jours',
      read: false,
      type: 'interaction'
    },
    {
      id: 5,
      title: 'Like sur votre vidéo',
      message: 'NeuroDesigner et 5 autres personnes ont aimé votre vidéo "Paysage futuriste"',
      time: 'Il y a 4 jours',
      read: true,
      type: 'interaction'
    },
    {
      id: 6,
      title: 'Suggestion de création',
      message: 'D\'après vos créations récentes, vous pourriez aimer essayer le style "Anime Neo-Futuriste"',
      time: 'Il y a 5 jours',
      read: true,
      type: 'system'
    }
  ]);

  const [activeFilter, setActiveFilter] = useState<string>('all');

  const handleMarkAllAsRead = () => {
    const updatedNotifications = notifications.map(notification => ({
      ...notification,
      read: true
    }));
    
    setNotifications(updatedNotifications);
    toast({
      title: "Notifications",
      description: "Toutes les notifications ont été marquées comme lues",
      duration: 2000,
    });
  };

  const handleMarkAsRead = (id: number) => {
    const updatedNotifications = notifications.map(notification =>
      notification.id === id ? { ...notification, read: true } : notification
    );
    
    setNotifications(updatedNotifications);
    toast({
      title: "Notification",
      description: "La notification a été marquée comme lue",
      duration: 1500,
    });
  };

  const handleDelete = (id: number) => {
    const updatedNotifications = notifications.filter(notification => notification.id !== id);
    setNotifications(updatedNotifications);
    
    toast({
      title: "Notification supprimée",
      description: "La notification a été supprimée",
      duration: 1500,
    });
  };

  const handleClearAll = () => {
    setNotifications([]);
    toast({
      title: "Notifications supprimées",
      description: "Toutes les notifications ont été supprimées",
      duration: 2000,
    });
  };

  const getFilteredNotifications = () => {
    if (activeFilter === 'all') return notifications;
    if (activeFilter === 'unread') return notifications.filter(n => !n.read);
    return notifications.filter(n => n.type === activeFilter);
  };

  const filteredNotifications = getFilteredNotifications();
  const unreadCount = notifications.filter(n => !n.read).length;

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'system':
        return <Bell className="text-blue-400" />;
      case 'video':
        return <Video className="text-kling-green" />;
      case 'offer':
        return <Gift className="text-purple-400" />;
      case 'interaction':
        return <MessageSquare className="text-yellow-400" />;
      default:
        return <Bell className="text-gray-400" />;
    }
  };

  return (
    <div className="flex h-screen bg-kling-dark">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <NavBar />
        
        <div className="flex-1 p-6 pt-20 overflow-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-bold text-white">Notifications</h1>
                
                {unreadCount > 0 && (
                  <div className="bg-kling-green text-kling-dark text-sm font-medium px-2 py-0.5 rounded-full">
                    {unreadCount} non lu{unreadCount > 1 ? 's' : ''}
                  </div>
                )}
              </div>
              
              <div className="flex gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex items-center gap-1 text-sm border-kling-light-gray"
                    >
                      <Filter className="h-3.5 w-3.5 mr-1" />
                      {activeFilter === 'all' ? 'Tous' : 
                       activeFilter === 'unread' ? 'Non lus' : 
                       activeFilter === 'system' ? 'Système' :
                       activeFilter === 'video' ? 'Vidéos' : 
                       activeFilter === 'offer' ? 'Offres' : 'Interactions'}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-kling-gray border-kling-light-gray">
                    <DropdownMenuLabel>Filtrer par</DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-kling-light-gray" />
                    <DropdownMenuItem 
                      className="cursor-pointer focus:bg-kling-light-gray"
                      onClick={() => setActiveFilter('all')}
                    >
                      Tous
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      className="cursor-pointer focus:bg-kling-light-gray"
                      onClick={() => setActiveFilter('unread')}
                    >
                      Non lus
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      className="cursor-pointer focus:bg-kling-light-gray"
                      onClick={() => setActiveFilter('system')}
                    >
                      Système
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      className="cursor-pointer focus:bg-kling-light-gray"
                      onClick={() => setActiveFilter('video')}
                    >
                      Vidéos
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      className="cursor-pointer focus:bg-kling-light-gray"
                      onClick={() => setActiveFilter('offer')}
                    >
                      Offres
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      className="cursor-pointer focus:bg-kling-light-gray"
                      onClick={() => setActiveFilter('interaction')}
                    >
                      Interactions
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-kling-light-gray text-gray-300"
                  onClick={handleMarkAllAsRead}
                  disabled={!notifications.some(n => !n.read)}
                >
                  <CheckCheck className="h-3.5 w-3.5 mr-1.5" />
                  Tout marquer comme lu
                </Button>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-kling-light-gray text-gray-300"
                  onClick={handleClearAll}
                  disabled={notifications.length === 0}
                >
                  <Trash2 className="h-3.5 w-3.5 mr-1.5" />
                  Tout effacer
                </Button>
              </div>
            </div>
            
            <div className="space-y-4">
              {filteredNotifications.length > 0 ? (
                filteredNotifications.map((notification, index) => (
                  <div 
                    key={notification.id} 
                    className={`p-4 rounded-lg border transition-all duration-300 animate-slide-in-left ${
                      index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
                    } ${
                      notification.read ? 'bg-kling-gray border-kling-light-gray' : 'bg-kling-gray/80 border-kling-green'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex gap-3">
                      <div className={`mt-1 p-2 rounded-full ${
                        notification.read ? 'bg-kling-dark/50' : 'bg-kling-green/10'
                      }`}>
                        {getNotificationIcon(notification.type)}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h3 className={`font-medium ${notification.read ? 'text-white' : 'text-kling-green'}`}>
                            {notification.title}
                          </h3>
                          <span className="text-xs text-gray-400 flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {notification.time}
                          </span>
                        </div>
                        <p className="text-gray-300 mt-1">{notification.message}</p>
                        
                        <div className="flex justify-end mt-3 gap-2">
                          {!notification.read && (
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="text-xs text-kling-green hover:bg-kling-green/10"
                              onClick={() => handleMarkAsRead(notification.id)}
                            >
                              <Check className="h-3.5 w-3.5 mr-1.5" />
                              Marquer comme lu
                            </Button>
                          )}
                          
                          {notification.type === 'video' && (
                            <Button 
                              size="sm" 
                              className="text-xs bg-kling-green text-kling-dark hover:bg-kling-green/90"
                            >
                              <Video className="h-3.5 w-3.5 mr-1.5" />
                              Voir la vidéo
                            </Button>
                          )}
                          
                          {notification.type === 'offer' && (
                            <Button 
                              size="sm" 
                              className="text-xs bg-kling-green text-kling-dark hover:bg-kling-green/90"
                            >
                              <Gift className="h-3.5 w-3.5 mr-1.5" />
                              Voir l'offre
                            </Button>
                          )}
                          
                          {notification.type === 'interaction' && (
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="text-xs border-kling-light-gray"
                            >
                              <ThumbsUp className="h-3.5 w-3.5 mr-1.5" />
                              Répondre
                            </Button>
                          )}
                          
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-xs text-gray-400 hover:text-red-400 hover:bg-red-500/10"
                            onClick={() => handleDelete(notification.id)}
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-16 bg-kling-gray/30 border border-kling-light-gray rounded-lg animate-fade-in">
                  <Bell className="h-16 w-16 text-gray-500 mx-auto mb-4" />
                  <h2 className="text-xl font-medium text-white">Aucune notification</h2>
                  <p className="text-gray-400 mt-2 mb-6">
                    {activeFilter !== 'all' ? 
                      'Aucune notification correspondant au filtre sélectionné.' : 
                      'Vous n\'avez aucune notification pour le moment.'}
                  </p>
                  {activeFilter !== 'all' && (
                    <Button 
                      variant="outline" 
                      className="border-kling-light-gray"
                      onClick={() => setActiveFilter('all')}
                    >
                      Voir toutes les notifications
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
