import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Video, Film, Clock, Sparkles, AlignLeft, ImagePlus, Download, 
  Share2, Loader2, Settings, Check, Wand2, RefreshCw, Play 
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const VideoCreator = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialPrompt = location.state?.prompt || '';
  
  const [prompt, setPrompt] = useState(initialPrompt);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [selectedModel, setSelectedModel] = useState("standard");
  const [selectedRatio, setSelectedRatio] = useState("16:9");
  const [duration, setDuration] = useState([15]);
  const [selectedStyle, setSelectedStyle] = useState("realistic");
  
  const styles = [
    {
      id: "realistic",
      name: "Réaliste",
      description: "Style photo-réaliste avec détails fins"
    },
    {
      id: "anime",
      name: "Anime",
      description: "Style d'animation japonaise"
    },
    {
      id: "cyberpunk",
      name: "Cyberpunk",
      description: "Futuriste avec néons et technologie"
    },
    {
      id: "3d",
      name: "3D Rendu",
      description: "Style de rendu 3D avec textures"
    },
    {
      id: "cartoon",
      name: "Cartoon",
      description: "Style dessin animé coloré"
    },
    {
      id: "fantasy",
      name: "Fantasy",
      description: "Style médiéval fantastique"
    }
  ];
  
  const handleGenerate = () => {
    if (!prompt.trim()) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Veuillez entrer une description pour votre vidéo",
      });
      return;
    }
    
    setIsGenerating(true);
    
    setTimeout(() => {
      setIsGenerating(false);
      setGenerated(true);
      toast({
        title: "Génération terminée",
        description: "Votre vidéo a été générée avec succès!",
        duration: 3000,
      });
    }, 3000);
  };
  
  const handleSave = () => {
    toast({
      title: "Vidéo enregistrée",
      description: "La vidéo a été enregistrée dans votre bibliothèque",
    });
    navigate('/explorer');
  };
  
  const handleShare = () => {
    toast({
      title: "Lien copié",
      description: "Le lien de partage a été copié dans le presse-papiers",
    });
  };
  
  const handleModify = () => {
    setGenerated(false);
    toast({
      title: "Mode d'édition",
      description: "Vous pouvez maintenant modifier les paramètres",
    });
  };
  
  return (
    <div className="flex h-screen bg-kling-dark">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <NavBar />
        
        <div className="flex-1 p-6 pt-20 overflow-auto">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/3 space-y-6">
                <Card className="bg-kling-gray border-kling-light-gray shadow-lg">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                      <Video className="h-5 w-5 mr-2 text-kling-green" />
                      Créer une vidéo
                    </h2>
                    
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="prompt" className="text-sm text-gray-300">Description de la vidéo</Label>
                        <div className="relative mt-1.5">
                          <Textarea
                            id="prompt"
                            placeholder="Décrivez la vidéo que vous souhaitez créer..."
                            className="min-h-32 bg-kling-dark border-kling-light-gray text-white input-glow"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            disabled={isGenerating || generated}
                          />
                          <Button
                            size="sm"
                            variant="ghost"
                            className="absolute right-2 top-2 text-kling-green hover:bg-kling-dark/50"
                            disabled={isGenerating || generated}
                          >
                            <Wand2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <div>
                        <Label className="text-sm text-gray-300">Modèle</Label>
                        <RadioGroup 
                          value={selectedModel} 
                          onValueChange={setSelectedModel}
                          className="grid grid-cols-2 gap-2 mt-1.5"
                          disabled={isGenerating || generated}
                        >
                          <div>
                            <RadioGroupItem 
                              value="standard" 
                              id="model-standard" 
                              className="sr-only"
                            />
                            <Label
                              htmlFor="model-standard"
                              className={`flex flex-col items-center justify-center p-3 rounded-lg border ${
                                selectedModel === "standard"
                                  ? "bg-kling-green/10 border-kling-green text-white"
                                  : "bg-kling-dark border-kling-light-gray text-gray-300"
                              } cursor-pointer transition-all`}
                            >
                              <Film className="h-5 w-5 mb-1" />
                              <span>Standard</span>
                            </Label>
                          </div>
                          
                          <div>
                            <RadioGroupItem 
                              value="premium" 
                              id="model-premium" 
                              className="sr-only"
                            />
                            <Label
                              htmlFor="model-premium"
                              className={`flex flex-col items-center justify-center p-3 rounded-lg border ${
                                selectedModel === "premium"
                                  ? "bg-kling-green/10 border-kling-green text-white"
                                  : "bg-kling-dark border-kling-light-gray text-gray-300"
                              } cursor-pointer transition-all`}
                            >
                              <Sparkles className="h-5 w-5 mb-1" />
                              <span>Premium</span>
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>
                      
                      <div>
                        <Label className="text-sm text-gray-300">Format</Label>
                        <RadioGroup 
                          value={selectedRatio} 
                          onValueChange={setSelectedRatio}
                          className="grid grid-cols-3 gap-2 mt-1.5"
                          disabled={isGenerating || generated}
                        >
                          <div>
                            <RadioGroupItem 
                              value="16:9" 
                              id="ratio-16:9" 
                              className="sr-only"
                            />
                            <Label
                              htmlFor="ratio-16:9"
                              className={`flex flex-col items-center justify-center p-3 rounded-lg border ${
                                selectedRatio === "16:9"
                                  ? "bg-kling-green/10 border-kling-green text-white"
                                  : "bg-kling-dark border-kling-light-gray text-gray-300"
                              } cursor-pointer transition-all`}
                            >
                              <div className="w-12 h-6 rounded bg-kling-light-gray mb-1" />
                              <span>16:9</span>
                            </Label>
                          </div>
                          
                          <div>
                            <RadioGroupItem 
                              value="9:16" 
                              id="ratio-9:16" 
                              className="sr-only"
                            />
                            <Label
                              htmlFor="ratio-9:16"
                              className={`flex flex-col items-center justify-center p-3 rounded-lg border ${
                                selectedRatio === "9:16"
                                  ? "bg-kling-green/10 border-kling-green text-white"
                                  : "bg-kling-dark border-kling-light-gray text-gray-300"
                              } cursor-pointer transition-all`}
                            >
                              <div className="w-6 h-12 rounded bg-kling-light-gray mb-1" />
                              <span>9:16</span>
                            </Label>
                          </div>
                          
                          <div>
                            <RadioGroupItem 
                              value="1:1" 
                              id="ratio-1:1" 
                              className="sr-only"
                            />
                            <Label
                              htmlFor="ratio-1:1"
                              className={`flex flex-col items-center justify-center p-3 rounded-lg border ${
                                selectedRatio === "1:1"
                                  ? "bg-kling-green/10 border-kling-green text-white"
                                  : "bg-kling-dark border-kling-light-gray text-gray-300"
                              } cursor-pointer transition-all`}
                            >
                              <div className="w-8 h-8 rounded bg-kling-light-gray mb-1" />
                              <span>1:1</span>
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>
                      
                      <div>
                        <div className="flex justify-between">
                          <Label className="text-sm text-gray-300">Durée: {duration[0]} sec</Label>
                        </div>
                        <Slider
                          defaultValue={[15]}
                          min={5}
                          max={30}
                          step={5}
                          className="mt-2"
                          onValueChange={setDuration}
                          disabled={isGenerating || generated}
                        />
                        <div className="flex justify-between mt-1 text-xs text-gray-400">
                          <span>5s</span>
                          <span>30s</span>
                        </div>
                      </div>
                      
                      {!generated ? (
                        <Button 
                          className="w-full btn-primary mt-6"
                          onClick={handleGenerate}
                          disabled={isGenerating || !prompt.trim()}
                        >
                          {isGenerating ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Génération en cours...
                            </>
                          ) : (
                            <>
                              <Wand2 className="mr-2 h-4 w-4" />
                              Générer la vidéo
                            </>
                          )}
                        </Button>
                      ) : (
                        <div className="space-y-3">
                          <Button 
                            className="w-full flex items-center"
                            variant="outline"
                            onClick={handleModify}
                          >
                            <RefreshCw className="mr-2 h-4 w-4" />
                            Modifier les paramètres
                          </Button>
                          <div className="grid grid-cols-2 gap-3">
                            <Button 
                              className="w-full flex items-center"
                              variant="outline"
                              onClick={handleShare}
                            >
                              <Share2 className="mr-2 h-4 w-4" />
                              Partager
                            </Button>
                            <Button 
                              className="w-full flex items-center bg-kling-green text-kling-dark hover:bg-kling-green/90"
                              onClick={handleSave}
                            >
                              <Download className="mr-2 h-4 w-4" />
                              Enregistrer
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-kling-gray border-kling-light-gray shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium text-white mb-4">Style visuel</h3>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {styles.map((style) => (
                        <div key={style.id} className="relative">
                          <input
                            type="radio"
                            id={`style-${style.id}`}
                            name="style"
                            className="sr-only peer"
                            checked={selectedStyle === style.id}
                            onChange={() => setSelectedStyle(style.id)}
                            disabled={isGenerating || generated}
                          />
                          <label
                            htmlFor={`style-${style.id}`}
                            className="flex flex-col p-3 bg-kling-dark border border-kling-light-gray rounded-lg cursor-pointer transition-all peer-checked:border-kling-green peer-checked:bg-kling-green/10 hover:bg-kling-dark/80"
                          >
                            <span className="font-medium text-white">{style.name}</span>
                            <span className="text-xs text-gray-400">{style.description}</span>
                          </label>
                          {selectedStyle === style.id && (
                            <Check className="absolute top-3 right-3 h-4 w-4 text-kling-green" />
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="w-full md:w-2/3">
                <Card className="bg-kling-gray border-kling-light-gray shadow-lg h-full">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-2xl font-bold text-white flex items-center">
                        <Film className="h-5 w-5 mr-2 text-kling-green" />
                        Prévisualisation
                      </h2>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="text-xs">
                          <Clock className="h-3.5 w-3.5 mr-1" /> Historique
                        </Button>
                        <Button variant="outline" size="sm" className="text-xs">
                          <Settings className="h-3.5 w-3.5 mr-1" /> Avancé
                        </Button>
                      </div>
                    </div>
                    
                    <Tabs defaultValue="video" className="mt-2">
                      <TabsList className="bg-kling-dark border border-kling-light-gray">
                        <TabsTrigger value="video">Vidéo</TabsTrigger>
                        <TabsTrigger value="frames">Images-clés</TabsTrigger>
                        <TabsTrigger value="audio">Audio</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="video" className="mt-4">
                        <div className="relative aspect-video overflow-hidden rounded-lg border border-kling-light-gray bg-kling-darker flex items-center justify-center">
                          {isGenerating ? (
                            <div className="flex flex-col items-center">
                              <Loader2 className="h-16 w-16 text-kling-green animate-spin mb-4" />
                              <p className="text-white text-lg">Génération en cours...</p>
                              <p className="text-gray-400 mt-2">Cela peut prendre quelques secondes</p>
                            </div>
                          ) : generated ? (
                            <div className="w-full h-full bg-gradient-to-br from-kling-green/5 to-blue-500/10 flex items-center justify-center">
                              <img 
                                src="/lovable-uploads/7f8e8103-b68c-4b12-aac0-48f21605e9fd.png"
                                alt="Generated video preview" 
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 flex items-center justify-center">
                                <Button size="lg" className="rounded-full bg-kling-green/80 hover:bg-kling-green text-kling-dark">
                                  <Play className="h-6 w-6 ml-1" />
                                </Button>
                              </div>
                            </div>
                          ) : (
                            <div className="text-center">
                              <ImagePlus className="h-16 w-16 text-kling-light-gray mx-auto mb-4" />
                              <p className="text-gray-300 text-lg">Votre vidéo apparaîtra ici</p>
                              <p className="text-gray-400 mt-2">Remplissez les détails et cliquez sur générer</p>
                            </div>
                          )}
                        </div>
                        
                        {generated && (
                          <div className="mt-6">
                            <h3 className="text-lg font-medium text-white mb-3">Détails</h3>
                            <div className="bg-kling-dark rounded-lg p-4 border border-kling-light-gray">
                              <div className="flex flex-wrap gap-4 text-sm">
                                <div>
                                  <span className="text-gray-400 block">Style:</span>
                                  <span className="text-white">{styles.find(s => s.id === selectedStyle)?.name}</span>
                                </div>
                                <div>
                                  <span className="text-gray-400 block">Format:</span>
                                  <span className="text-white">{selectedRatio}</span>
                                </div>
                                <div>
                                  <span className="text-gray-400 block">Durée:</span>
                                  <span className="text-white">{duration[0]} secondes</span>
                                </div>
                                <div>
                                  <span className="text-gray-400 block">Modèle:</span>
                                  <span className="text-white capitalize">{selectedModel}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </TabsContent>
                      
                      <TabsContent value="frames" className="mt-4">
                        <div className="relative aspect-video overflow-hidden rounded-lg border border-kling-light-gray bg-kling-darker flex items-center justify-center">
                          <div className="text-center">
                            <AlignLeft className="h-16 w-16 text-kling-light-gray mx-auto mb-4" />
                            <p className="text-gray-300 text-lg">Images-clés de votre vidéo</p>
                            <p className="text-gray-400 mt-2">Générez d'abord la vidéo pour voir les images-clés</p>
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="audio" className="mt-4">
                        <div className="relative aspect-video overflow-hidden rounded-lg border border-kling-light-gray bg-kling-darker flex items-center justify-center">
                          <div className="text-center">
                            <AlignLeft className="h-16 w-16 text-kling-light-gray mx-auto mb-4" />
                            <p className="text-gray-300 text-lg">Options audio</p>
                            <p className="text-gray-400 mt-2">Bientôt disponible</p>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCreator;
