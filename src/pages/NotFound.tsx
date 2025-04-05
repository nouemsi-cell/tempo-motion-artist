
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-kling-dark">
      <div className="text-center px-4">
        <h1 className="text-7xl font-bold mb-6 text-kling-green">404</h1>
        <p className="text-2xl text-white mb-4">Page non trouvée</p>
        <p className="text-lg text-gray-400 mb-2">
          La page <span className="font-mono bg-kling-gray px-2 py-1 rounded text-kling-green">{path}</span> n'existe pas ou a été déplacée.
        </p>
        <p className="text-md text-gray-500 mb-10 max-w-md mx-auto">
          Vérifiez l'URL ou utilisez les liens de navigation pour trouver ce que vous cherchez.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link to="/">
            <Button className="bg-kling-green hover:bg-kling-green/90 text-kling-dark font-semibold px-6 py-2 w-full md:w-auto">
              Retour à l'accueil
            </Button>
          </Link>
          <Link to="/features">
            <Button variant="outline" className="border-kling-light-gray text-white hover:bg-kling-gray w-full md:w-auto">
              Voir nos fonctionnalités
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
