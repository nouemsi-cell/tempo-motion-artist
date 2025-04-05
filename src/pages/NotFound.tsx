
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

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
        <p className="text-2xl text-white mb-8">Page non trouvée</p>
        <p className="text-lg text-gray-400 mb-10 max-w-md mx-auto">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link to="/">
          <Button className="bg-kling-green hover:bg-kling-green/90 text-kling-dark font-semibold px-6 py-2">
            Retour à l'accueil
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
