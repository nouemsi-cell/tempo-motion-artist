
import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Settings as SettingsIcon, 
  User, 
  CreditCard, 
  Bell, 
  Shield, 
  PaintBucket, 
  Save,
  Trash2, 
  Download,
  LogOut,
  Key,
  Languages,
  Clock
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Settings = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    marketing: false
  });
  
  const handleSaveSettings = () => {
    toast({
      title: "Paramètres enregistrés",
      description: "Vos paramètres ont été mis à jour avec succès.",
      duration: 2000,
    });
  };

  return (
    <div className="flex h-screen bg-kling-dark">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <NavBar />
        
        <div className="flex-1 p-6 pt-20 overflow-auto">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center mb-8">
              <SettingsIcon className="h-6 w-6 mr-3 text-kling-green" />
              <h1 className="text-3xl font-bold text-white">Paramètres</h1>
            </div>
            
            <Tabs defaultValue="profile" className="mt-6">
              <TabsList className="grid grid-cols-6 bg-kling-gray border border-kling-light-gray mb-8">
                <TabsTrigger value="profile" className="data-[state=active]:bg-kling-green data-[state=active]:text-kling-dark">
                  <User className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Profil</span>
                </TabsTrigger>
                <TabsTrigger value="account" className="data-[state=active]:bg-kling-green data-[state=active]:text-kling-dark">
                  <Key className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Compte</span>
                </TabsTrigger>
                <TabsTrigger value="billing" className="data-[state=active]:bg-kling-green data-[state=active]:text-kling-dark">
                  <CreditCard className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Facturation</span>
                </TabsTrigger>
                <TabsTrigger value="notifications" className="data-[state=active]:bg-kling-green data-[state=active]:text-kling-dark">
                  <Bell className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Notifications</span>
                </TabsTrigger>
                <TabsTrigger value="appearance" className="data-[state=active]:bg-kling-green data-[state=active]:text-kling-dark">
                  <PaintBucket className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Apparence</span>
                </TabsTrigger>
                <TabsTrigger value="privacy" className="data-[state=active]:bg-kling-green data-[state=active]:text-kling-dark">
                  <Shield className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Confidentialité</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="profile" className="animate-slide-in-bottom">
                <Card className="bg-kling-gray border-kling-light-gray shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-white">Profil</CardTitle>
                    <CardDescription className="text-gray-400">
                      Gérez vos informations personnelles et votre profil public.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex flex-col sm:flex-row gap-6">
                      <div className="flex items-center justify-center sm:justify-start">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-kling-green/30 to-kling-dark flex items-center justify-center">
                          <User className="h-12 w-12 text-kling-green" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-white font-medium">Photo de profil</h3>
                        <p className="text-sm text-gray-400">
                          Cette photo sera affichée sur votre profil et à côté de vos créations.
                        </p>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="border-kling-light-gray">
                            Changer
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-400 border-kling-light-gray">
                            Supprimer
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-gray-300">Nom d'utilisateur</Label>
                        <Input id="name" defaultValue="TempoUser" className="mt-1.5 bg-kling-dark border-kling-light-gray input-glow" />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-gray-300">Email</Label>
                        <Input id="email" type="email" defaultValue="user@example.com" className="mt-1.5 bg-kling-dark border-kling-light-gray input-glow" />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="bio" className="text-gray-300">Bio</Label>
                        <textarea 
                          id="bio" 
                          className="w-full h-24 mt-1.5 px-3 py-2 bg-kling-dark border border-kling-light-gray rounded-md text-white resize-none focus:outline-none focus:ring-2 focus:ring-kling-green input-glow"
                          defaultValue="Créateur de vidéos IA passionné."
                        />
                        <p className="text-xs text-gray-400 mt-1">Maximum 160 caractères</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t border-kling-light-gray pt-5">
                    <Button variant="outline" className="border-kling-light-gray">
                      Annuler
                    </Button>
                    <Button className="bg-kling-green text-kling-dark hover:bg-kling-green/90" onClick={handleSaveSettings}>
                      <Save className="mr-2 h-4 w-4" />
                      Enregistrer les modifications
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="account" className="animate-slide-in-bottom">
                <Card className="bg-kling-gray border-kling-light-gray shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-white">Compte</CardTitle>
                    <CardDescription className="text-gray-400">
                      Gérez les paramètres de votre compte et vos préférences.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="language" className="text-gray-300">Langue</Label>
                        <Select defaultValue="fr">
                          <SelectTrigger className="mt-1.5 bg-kling-dark border-kling-light-gray input-glow">
                            <SelectValue placeholder="Sélectionner une langue" />
                          </SelectTrigger>
                          <SelectContent className="bg-kling-gray border-kling-light-gray">
                            <SelectGroup>
                              <SelectItem value="fr">Français</SelectItem>
                              <SelectItem value="en">English</SelectItem>
                              <SelectItem value="es">Español</SelectItem>
                              <SelectItem value="de">Deutsch</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="timezone" className="text-gray-300">Fuseau horaire</Label>
                        <Select defaultValue="europe_paris">
                          <SelectTrigger className="mt-1.5 bg-kling-dark border-kling-light-gray input-glow">
                            <SelectValue placeholder="Sélectionner un fuseau horaire" />
                          </SelectTrigger>
                          <SelectContent className="bg-kling-gray border-kling-light-gray">
                            <SelectGroup>
                              <SelectItem value="europe_paris">Europe/Paris (UTC+1)</SelectItem>
                              <SelectItem value="america_new_york">America/New York (UTC-5)</SelectItem>
                              <SelectItem value="asia_tokyo">Asia/Tokyo (UTC+9)</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-kling-light-gray">
                      <h3 className="text-white font-medium mb-4 flex items-center">
                        <Key className="h-4 w-4 mr-2" />
                        Sécurité
                      </h3>
                      <div className="space-y-4">
                        <Button variant="outline" size="sm" className="border-kling-light-gray">
                          Changer le mot de passe
                        </Button>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-white">Authentification à deux facteurs</h4>
                            <p className="text-sm text-gray-400">Ajoutez une couche supplémentaire de sécurité</p>
                          </div>
                          <Switch />
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-kling-light-gray">
                      <h3 className="text-white font-medium mb-4 flex items-center">
                        <Download className="h-4 w-4 mr-2" />
                        Données et exportation
                      </h3>
                      <div className="space-y-4">
                        <Button variant="outline" size="sm" className="border-kling-light-gray">
                          Télécharger mes données
                        </Button>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-kling-light-gray">
                      <h3 className="text-red-400 font-medium mb-4 flex items-center">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Zone dangereuse
                      </h3>
                      <div className="space-y-4">
                        <div className="p-4 border border-red-500/20 bg-red-500/5 rounded-lg">
                          <h4 className="text-white mb-2">Supprimer mon compte</h4>
                          <p className="text-sm text-gray-400 mb-4">
                            Cette action est irréversible et supprimera toutes vos données, 
                            vidéos et paramètres.
                          </p>
                          <Button variant="outline" size="sm" className="text-red-400 border-red-500/30 hover:bg-red-500/20">
                            Supprimer définitivement mon compte
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="notifications" className="animate-slide-in-bottom">
                <Card className="bg-kling-gray border-kling-light-gray shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-white">Notifications</CardTitle>
                    <CardDescription className="text-gray-400">
                      Configurez comment et quand vous souhaitez être notifié.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white">Notifications par email</h4>
                          <p className="text-sm text-gray-400">Recevoir des notifications par email</p>
                        </div>
                        <Switch 
                          checked={notifications.email} 
                          onCheckedChange={(checked) => setNotifications({...notifications, email: checked})} 
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white">Notifications push</h4>
                          <p className="text-sm text-gray-400">Recevoir des notifications sur votre navigateur</p>
                        </div>
                        <Switch 
                          checked={notifications.push} 
                          onCheckedChange={(checked) => setNotifications({...notifications, push: checked})} 
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white">Notifications marketing</h4>
                          <p className="text-sm text-gray-400">Recevoir des offres et actualités</p>
                        </div>
                        <Switch 
                          checked={notifications.marketing} 
                          onCheckedChange={(checked) => setNotifications({...notifications, marketing: checked})} 
                        />
                      </div>
                    </div>
                    
                    <div className="pt-6 border-t border-kling-light-gray">
                      <h3 className="text-white font-medium mb-4">Paramètres de notification</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <Label className="text-gray-300">Fréquence des résumés</Label>
                          <Select defaultValue="daily">
                            <SelectTrigger className="mt-1.5 bg-kling-dark border-kling-light-gray input-glow">
                              <SelectValue placeholder="Sélectionner une fréquence" />
                            </SelectTrigger>
                            <SelectContent className="bg-kling-gray border-kling-light-gray">
                              <SelectGroup>
                                <SelectItem value="realtime">Temps réel</SelectItem>
                                <SelectItem value="daily">Quotidien</SelectItem>
                                <SelectItem value="weekly">Hebdomadaire</SelectItem>
                                <SelectItem value="never">Jamais</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t border-kling-light-gray pt-5">
                    <Button variant="outline" className="border-kling-light-gray">
                      Restaurer les paramètres par défaut
                    </Button>
                    <Button className="bg-kling-green text-kling-dark hover:bg-kling-green/90" onClick={handleSaveSettings}>
                      <Save className="mr-2 h-4 w-4" />
                      Enregistrer les préférences
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="appearance" className="animate-slide-in-bottom">
                <Card className="bg-kling-gray border-kling-light-gray shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-white">Apparence</CardTitle>
                    <CardDescription className="text-gray-400">
                      Personnalisez l'apparence de l'interface.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-white font-medium mb-4 flex items-center">
                        <PaintBucket className="h-4 w-4 mr-2" />
                        Thème de couleur
                      </h3>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="relative cursor-pointer">
                          <input type="radio" id="theme-green" name="theme" className="sr-only peer" defaultChecked />
                          <label 
                            htmlFor="theme-green" 
                            className="flex flex-col items-center p-4 bg-kling-dark rounded-lg border border-kling-light-gray peer-checked:border-kling-green transition-all"
                          >
                            <div className="w-8 h-8 rounded-full bg-kling-green mb-2"></div>
                            <span className="text-white">Vert</span>
                          </label>
                        </div>
                        <div className="relative cursor-pointer">
                          <input type="radio" id="theme-blue" name="theme" className="sr-only peer" />
                          <label 
                            htmlFor="theme-blue" 
                            className="flex flex-col items-center p-4 bg-kling-dark rounded-lg border border-kling-light-gray peer-checked:border-blue-500 transition-all"
                          >
                            <div className="w-8 h-8 rounded-full bg-blue-500 mb-2"></div>
                            <span className="text-white">Bleu</span>
                          </label>
                        </div>
                        <div className="relative cursor-pointer">
                          <input type="radio" id="theme-purple" name="theme" className="sr-only peer" />
                          <label 
                            htmlFor="theme-purple" 
                            className="flex flex-col items-center p-4 bg-kling-dark rounded-lg border border-kling-light-gray peer-checked:border-purple-500 transition-all"
                          >
                            <div className="w-8 h-8 rounded-full bg-purple-500 mb-2"></div>
                            <span className="text-white">Violet</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-6 border-t border-kling-light-gray">
                      <h3 className="text-white font-medium mb-2">Densité de l'interface</h3>
                      <p className="text-sm text-gray-400 mb-4">
                        Ajustez l'espacement entre les éléments de l'interface.
                      </p>
                      <Slider
                        defaultValue={[2]}
                        min={1}
                        max={3}
                        step={1}
                        className="mt-2"
                      />
                      <div className="flex justify-between mt-1 text-xs text-gray-400">
                        <span>Compact</span>
                        <span>Normal</span>
                        <span>Spacieux</span>
                      </div>
                    </div>
                    
                    <div className="pt-6 border-t border-kling-light-gray">
                      <h3 className="text-white font-medium mb-4">Options d'affichage</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-white">Réduire les animations</h4>
                            <p className="text-sm text-gray-400">Pour améliorer les performances</p>
                          </div>
                          <Switch />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-white">Mode haute performance</h4>
                            <p className="text-sm text-gray-400">Réduire certains effets visuels</p>
                          </div>
                          <Switch />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t border-kling-light-gray pt-5">
                    <Button variant="outline" className="border-kling-light-gray">
                      Restaurer par défaut
                    </Button>
                    <Button className="bg-kling-green text-kling-dark hover:bg-kling-green/90" onClick={handleSaveSettings}>
                      <Save className="mr-2 h-4 w-4" />
                      Appliquer les changements
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="billing" className="animate-slide-in-bottom">
                <Card className="bg-kling-gray border-kling-light-gray shadow-lg mb-6">
                  <CardHeader>
                    <CardTitle className="text-white">Abonnement actuel</CardTitle>
                    <CardDescription className="text-gray-400">
                      Gérez votre abonnement et vos informations de paiement.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4 border border-kling-green/20 bg-kling-green/5 rounded-lg flex justify-between items-center">
                      <div>
                        <h3 className="text-xl font-semibold text-white">Plan Gratuit</h3>
                        <p className="text-sm text-gray-400 mt-1">
                          5 générations de vidéos par mois
                        </p>
                        <div className="mt-2">
                          <span className="text-xs bg-kling-green/20 text-kling-green py-0.5 px-2 rounded-full">
                            2 générations restantes ce mois-ci
                          </span>
                        </div>
                      </div>
                      <Button className="bg-kling-green text-kling-dark hover:bg-kling-green/90">
                        Mettre à niveau
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-kling-gray border-kling-light-gray shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-white">Plans disponibles</CardTitle>
                    <CardDescription className="text-gray-400">
                      Comparez nos offres et choisissez celle qui vous correspond.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="border border-kling-light-gray rounded-lg p-5">
                        <h3 className="font-medium text-white mb-2">Plan Gratuit</h3>
                        <div className="text-2xl font-bold text-white mb-4">0€<span className="text-sm font-normal text-gray-400"> / mois</span></div>
                        <ul className="space-y-2 mb-6">
                          <li className="text-sm text-gray-300 flex items-start">
                            <svg className="h-5 w-5 mr-2 text-kling-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>5 générations de vidéos/mois</span>
                          </li>
                          <li className="text-sm text-gray-300 flex items-start">
                            <svg className="h-5 w-5 mr-2 text-kling-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Vidéos de 15 sec maximum</span>
                          </li>
                          <li className="text-sm text-gray-300 flex items-start">
                            <svg className="h-5 w-5 mr-2 text-kling-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Qualité standard</span>
                          </li>
                        </ul>
                        <Button variant="outline" className="w-full border-kling-light-gray">
                          Plan actuel
                        </Button>
                      </div>
                      
                      <div className="border border-kling-green rounded-lg p-5 bg-kling-green/5 relative">
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-kling-green text-kling-dark text-xs px-3 py-1 rounded-full font-medium">
                          Populaire
                        </div>
                        <h3 className="font-medium text-white mb-2">Plan Pro</h3>
                        <div className="text-2xl font-bold text-white mb-4">19.99€<span className="text-sm font-normal text-gray-400"> / mois</span></div>
                        <ul className="space-y-2 mb-6">
                          <li className="text-sm text-gray-300 flex items-start">
                            <svg className="h-5 w-5 mr-2 text-kling-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>50 générations de vidéos/mois</span>
                          </li>
                          <li className="text-sm text-gray-300 flex items-start">
                            <svg className="h-5 w-5 mr-2 text-kling-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Vidéos jusqu'à 30 sec</span>
                          </li>
                          <li className="text-sm text-gray-300 flex items-start">
                            <svg className="h-5 w-5 mr-2 text-kling-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Haute qualité</span>
                          </li>
                          <li className="text-sm text-gray-300 flex items-start">
                            <svg className="h-5 w-5 mr-2 text-kling-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Support prioritaire</span>
                          </li>
                        </ul>
                        <Button className="w-full bg-kling-green text-kling-dark hover:bg-kling-green/90">
                          Mettre à niveau
                        </Button>
                      </div>
                      
                      <div className="border border-kling-light-gray rounded-lg p-5">
                        <h3 className="font-medium text-white mb-2">Plan Entreprise</h3>
                        <div className="text-2xl font-bold text-white mb-4">49.99€<span className="text-sm font-normal text-gray-400"> / mois</span></div>
                        <ul className="space-y-2 mb-6">
                          <li className="text-sm text-gray-300 flex items-start">
                            <svg className="h-5 w-5 mr-2 text-kling-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Générations illimitées</span>
                          </li>
                          <li className="text-sm text-gray-300 flex items-start">
                            <svg className="h-5 w-5 mr-2 text-kling-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Vidéos jusqu'à 60 sec</span>
                          </li>
                          <li className="text-sm text-gray-300 flex items-start">
                            <svg className="h-5 w-5 mr-2 text-kling-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Qualité maximale</span>
                          </li>
                          <li className="text-sm text-gray-300 flex items-start">
                            <svg className="h-5 w-5 mr-2 text-kling-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Accès API et modèles avancés</span>
                          </li>
                        </ul>
                        <Button variant="outline" className="w-full border-kling-light-gray">
                          Contacter les ventes
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="privacy" className="animate-slide-in-bottom">
                <Card className="bg-kling-gray border-kling-light-gray shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-white">Confidentialité et Sécurité</CardTitle>
                    <CardDescription className="text-gray-400">
                      Gérez vos paramètres de confidentialité et de sécurité.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-white font-medium">Visibilité du profil</h3>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white">Profil public</h4>
                          <p className="text-sm text-gray-400">Votre profil est visible par tous les utilisateurs</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white">Afficher mes créations</h4>
                          <p className="text-sm text-gray-400">Vos vidéos sont visibles dans l'explorateur</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white">Afficher l'activité</h4>
                          <p className="text-sm text-gray-400">Votre activité est visible par les autres utilisateurs</p>
                        </div>
                        <Switch />
                      </div>
                    </div>
                    
                    <div className="pt-6 border-t border-kling-light-gray">
                      <h3 className="text-white font-medium mb-4">Données et confidentialité</h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-white">Utilisation des données pour amélioration</h4>
                            <p className="text-sm text-gray-400">Nous utilisons vos données pour améliorer le service</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-white">Partage anonyme des créations</h4>
                            <p className="text-sm text-gray-400">Vos créations peuvent être utilisées pour l'entraînement de l'IA</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <Button variant="outline" size="sm" className="border-kling-light-gray">
                          Télécharger mes données
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t border-kling-light-gray pt-5">
                    <Button variant="outline" className="border-kling-light-gray">
                      Annuler
                    </Button>
                    <Button className="bg-kling-green text-kling-dark hover:bg-kling-green/90" onClick={handleSaveSettings}>
                      <Save className="mr-2 h-4 w-4" />
                      Enregistrer les préférences
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
