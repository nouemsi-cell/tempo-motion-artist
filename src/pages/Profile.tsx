import React, { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const profileSchema = z.object({
  username: z.string().min(3, { message: "Le nom d'utilisateur doit contenir au moins 3 caractères" }).optional(),
  full_name: z.string().min(2, { message: "Le nom complet doit contenir au moins 2 caractères" }).optional(),
  avatar_url: z.string().optional(),
});

const Profile = () => {
  const { user, profile, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isUpdating, setIsUpdating] = useState(false);

  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      username: profile?.username || "",
      full_name: profile?.full_name || "",
      avatar_url: profile?.avatar_url || "",
    },
  });

  React.useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    }
  }, [user, loading, navigate]);

  React.useEffect(() => {
    if (profile) {
      form.reset({
        username: profile.username || "",
        full_name: profile.full_name || "",
        avatar_url: profile.avatar_url || "",
      });
    }
  }, [profile, form]);

  const onSubmit = async (values: z.infer<typeof profileSchema>) => {
    if (!user) return;

    setIsUpdating(true);
    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          username: values.username,
          full_name: values.full_name,
          avatar_url: values.avatar_url,
        })
        .eq('id', user.id);

      if (error) throw error;

      toast({
        title: "Profil mis à jour",
        description: "Vos informations ont été enregistrées avec succès.",
      });
    } catch (error: any) {
      toast({
        title: "Erreur",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsUpdating(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-kling-dark flex items-center justify-center">
        <div className="text-white">Chargement...</div>
      </div>
    );
  }

  const getInitials = () => {
    if (profile?.full_name) {
      return profile.full_name
        .split(' ')
        .map((name: string) => name[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
    }
    
    if (profile?.username) {
      return profile.username.slice(0, 2).toUpperCase();
    }
    
    return user?.email?.slice(0, 2).toUpperCase() || 'U';
  };

  return (
    <div className="min-h-screen bg-kling-dark pt-20 px-4 pb-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <Button 
            variant="ghost" 
            className="text-white hover:bg-kling-light-gray"
            onClick={() => navigate("/")}
          >
            ←
          </Button>
          <h1 className="text-3xl font-bold text-white ml-2">Mon profil</h1>
        </div>
        
        <Card className="bg-kling-gray border-kling-light-gray shadow-md">
          <CardHeader>
            <div className="flex items-center">
              <Avatar className="h-20 w-20 mr-6">
                <AvatarImage src={profile?.avatar_url || ''} />
                <AvatarFallback className="bg-kling-green text-kling-dark text-2xl">
                  {getInitials()}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl text-white">
                  {profile?.full_name || profile?.username || user?.email}
                </CardTitle>
                <CardDescription className="text-gray-400">
                  {user?.email}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <Separator className="bg-kling-light-gray" />
          <CardContent className="pt-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom d'utilisateur</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Nom d'utilisateur" 
                          {...field} 
                          className="bg-kling-dark border-kling-light-gray"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="full_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom complet</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Prénom Nom" 
                          {...field} 
                          className="bg-kling-dark border-kling-light-gray"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="avatar_url"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>URL de l'avatar (optionnel)</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="https://example.com/avatar.jpg" 
                          {...field} 
                          className="bg-kling-dark border-kling-light-gray"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="bg-kling-green hover:bg-kling-green/90 text-kling-dark font-semibold"
                  disabled={isUpdating}
                >
                  {isUpdating ? "Enregistrement..." : "Enregistrer les modifications"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
