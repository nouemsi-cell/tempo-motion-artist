
import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Search, Filter, Play, Clock, Heart, Bookmark, Share2, 
  MoreHorizontal, Download, ChevronDown, Video 
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { toast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

const Explorer = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  
  const videoCategories = [
    { id: 'all', name: 'Tout' },
    { id: 'trending', name: 'Tendances' },
    { id: 'cyberpunk', name: 'Cyberpunk' },
    { id: 'landscape', name: 'Paysages' },
    { id: 'animation', name: 'Animation' },
    { id: 'scifi', name: 'Sci-Fi' },
    { id: 'portrait', name: 'Portraits' },
  ];
  
  // Exemples de vidéos pour la démo
  const videos = [
    {
      id: 1,
      title: "Balade cyberpunk",
      description: "Une femme marche dans une rue futuriste sous la pluie néon",
      category: "cyberpunk",
      duration: "15s",
      username: "NeoCreator",
      likes: 342,
      trending: true,
      time: "Il y a 2h"
    },
    {
      id: 2,
      title: "Désert martien",
      description: "Exploration d'un paysage désertique avec formations rocheuses",
      category: "landscape",
      duration: "12s",
      username: "SpaceWanderer",
      likes: 187,
      trending: true,
      time: "Il y a 5h"
    },
    {
      id: 3,
      title: "Anime Dream",
      description: "Personnage d'anime explorant une forêt enchantée",
      category: "animation",
      duration: "20s",
      username: "AnimeArtist",
      likes: 521,
      trending: true,
      time: "Il y a 1j"
    },
    {
      id: 4,
      title: "Contact extraterrestre",
      description: "Rencontre avec une civilisation alien dans l'espace lointain",
      category: "scifi",
      duration: "25s",
      username: "StarGazer",
      likes: 267,
      trending: false,
      time: "Il y a 2j"
    },
    {
      id: 5,
      title: "Portrait néon",
      description: "Portrait artistique avec éclairage néon et ambiance nocturne",
      category: "portrait",
      duration: "10s",
      username: "LightPainter",
      likes: 430,
      trending: false,
      time: "Il y a 3j"
    },
    {
      id: 6,
      title: "Ville du futur",
      description: "Panorama d'une métropole futuriste avec architecture avancée",
      category: "cyberpunk",
      duration: "18s",
      username: "UrbanVisionary",
      likes: 312,
      trending: false,
      time: "Il y a 1s"
    },
  ];
  
  const filteredVideos = videos.filter(video => {
    // Filtrer par onglet sélectionné
    if (activeTab !== 'all' && activeTab !== 'trending') {
      if (video.category !== activeTab) return false;
    }
    
    if (activeTab === 'trending' && !video.trending) return false;
    
    // Filtrer par recherche
    if (searchQuery) {
      return (
        video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return true;
  });
  
  const handleLike = (id: number) => {
    toast({
      title: "Vidéo aimée",
      description: "Cette vidéo a été ajoutée à vos favoris",
      duration: 2000,
    });
  };
  
  const handleBookmark = (id: number) => {
    toast({
      title: "Vidéo sauvegardée",
      description: "Cette vidéo a été ajoutée à votre collection",
      duration: 2000,
    });
  };
  
  const handleShare = (id: number) => {
    toast({
      title: "Lien copié",
      description: "Le lien de partage a été copié dans le presse-papiers",
      duration: 2000,
    });
  };
  
  const handleCreate = () => {
    navigate('/create');
  };
  
  return (
    <div className="flex h-screen bg-kling-dark">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <NavBar />
        
        <div className="flex-1 p-6 pt-20 overflow-auto">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div className="flex items-center">
                <h1 className="text-3xl font-bold text-white mr-4">Explorer</h1>
                <Badge variant="outline" className="bg-kling-green/10 border-kling-green text-kling-green">
                  {filteredVideos.length} vidéos
                </Badge>
              </div>
              
              <div className="flex w-full md:w-auto gap-3 flex-col sm:flex-row">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input 
                    placeholder="Rechercher..." 
                    className="bg-kling-gray border-kling-light-gray pl-10 w-full input-glow"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="gap-1 border-kling-light-gray">
                      <Filter className="h-4 w-4 mr-1" />
                      Filtrer
                      <ChevronDown className="h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-kling-gray border-kling-light-gray">
                    <DropdownMenuLabel>Filtrer par</DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-kling-light-gray" />
                    <DropdownMenuItem className="focus:bg-kling-light-gray">
                      Les plus récents
                    </DropdownMenuItem>
                    <DropdownMenuItem className="focus:bg-kling-light-gray">
                      Les plus populaires
                    </DropdownMenuItem>
                    <DropdownMenuItem className="focus:bg-kling-light-gray">
                      Les mieux notés
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                <Button className="btn-primary gap-1" onClick={handleCreate}>
                  <Video className="h-4 w-4 mr-1" />
                  Créer
                </Button>
              </div>
            </div>
            
            <Tabs 
              value={activeTab} 
              onValueChange={setActiveTab}
              className="mb-8"
            >
              <TabsList className="bg-kling-dark border border-kling-light-gray p-1 overflow-x-auto flex w-full sm:w-auto">
                {videoCategories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="data-[state=active]:bg-kling-green data-[state=active]:text-kling-dark data-[state=active]:shadow-none"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {videoCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-6">
                  {filteredVideos.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-in-bottom">
                      {filteredVideos.map((video) => (
                        <div 
                          key={video.id}
                          className="bg-kling-gray border border-kling-light-gray rounded-xl overflow-hidden card-hover"
                        >
                          <div className="relative aspect-video bg-gradient-to-br from-kling-green/20 to-blue-500/30">
                            {/* Thumbnail placeholder */}
                            <div className="absolute inset-0 flex items-center justify-center group cursor-pointer">
                              <Button 
                                size="icon" 
                                className="bg-kling-green text-kling-dark rounded-full opacity-90 hover:opacity-100 scale-90 group-hover:scale-100 transition-all"
                              >
                                <Play className="h-5 w-5 ml-0.5" />
                              </Button>
                            </div>
                            
                            {/* Duration badge */}
                            <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded">
                              {video.duration}
                            </div>
                            
                            {/* Trending badge */}
                            {video.trending && (
                              <div className="absolute top-2 left-2 bg-kling-green text-kling-dark text-xs px-2 py-0.5 rounded-full flex items-center">
                                <span className="w-1.5 h-1.5 bg-kling-dark rounded-full mr-1"></span>
                                Tendance
                              </div>
                            )}
                          </div>
                          
                          <div className="p-4">
                            <h3 className="font-medium text-white text-lg mb-1 line-clamp-1">{video.title}</h3>
                            <p className="text-sm text-gray-400 mb-4 line-clamp-2">{video.description}</p>
                            
                            <div className="flex justify-between items-center mt-4">
                              <div className="flex items-center">
                                <div className="w-6 h-6 rounded-full bg-kling-green/30 flex items-center justify-center text-xs font-medium text-kling-green">
                                  {video.username.charAt(0)}
                                </div>
                                <div className="ml-2">
                                  <span className="text-xs text-white block">{video.username}</span>
                                  <span className="text-xs text-gray-400">{video.time}</span>
                                </div>
                              </div>
                              
                              <div className="flex items-center gap-1.5">
                                <Button 
                                  variant="ghost" 
                                  size="icon"
                                  className="h-8 w-8 text-gray-400 hover:text-kling-green hover:bg-kling-dark/50"
                                  onClick={() => handleLike(video.id)}
                                >
                                  <Heart className="h-4 w-4" />
                                </Button>
                                
                                <Button 
                                  variant="ghost" 
                                  size="icon"
                                  className="h-8 w-8 text-gray-400 hover:text-kling-green hover:bg-kling-dark/50"
                                  onClick={() => handleBookmark(video.id)}
                                >
                                  <Bookmark className="h-4 w-4" />
                                </Button>
                                
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button 
                                      variant="ghost" 
                                      size="icon"
                                      className="h-8 w-8 text-gray-400 hover:text-white hover:bg-kling-dark/50"
                                    >
                                      <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent className="bg-kling-gray border-kling-light-gray">
                                    <DropdownMenuItem 
                                      className="cursor-pointer focus:bg-kling-light-gray"
                                      onClick={() => handleShare(video.id)}
                                    >
                                      <Share2 className="h-4 w-4 mr-2" />
                                      <span>Partager</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="cursor-pointer focus:bg-kling-light-gray">
                                      <Download className="h-4 w-4 mr-2" />
                                      <span>Télécharger</span>
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-16 bg-kling-gray/30 border border-kling-light-gray rounded-xl">
                      <Search className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                      <h3 className="text-xl font-medium text-white mb-2">Aucune vidéo trouvée</h3>
                      <p className="text-gray-400">
                        Essayez de modifier vos critères de recherche ou créez votre propre vidéo
                      </p>
                      <Button className="mt-6 btn-primary" onClick={handleCreate}>
                        Créer une vidéo
                      </Button>
                    </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explorer;
