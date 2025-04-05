
import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-kling-darker py-12 border-t border-kling-gray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="inline-block">
              <div className="text-kling-green font-bold text-2xl flex items-center">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
                TempoMotion AI
              </div>
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              Transformez vos idées en vidéos captivantes grâce à notre technologie d'IA de pointe.
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="#" className="text-gray-400 hover:text-kling-green">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-kling-green">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Produit</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/studio" className="text-gray-400 hover:text-kling-green">Studio Créatif</Link></li>
              <li><Link to="/api" className="text-gray-400 hover:text-kling-green">API Platform</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-kling-green">Tarifs</Link></li>
              <li><Link to="/showcase" className="text-gray-400 hover:text-kling-green">Galerie</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Ressources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/docs" className="text-gray-400 hover:text-kling-green">Documentation</Link></li>
              <li><Link to="/tutorials" className="text-gray-400 hover:text-kling-green">Tutoriels</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-kling-green">Blog</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-kling-green">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Entreprise</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-400 hover:text-kling-green">À propos</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-kling-green">Contact</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-kling-green">Confidentialité</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-kling-green">Conditions d'utilisation</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-kling-gray mt-12 pt-8">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} TempoMotion AI. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
