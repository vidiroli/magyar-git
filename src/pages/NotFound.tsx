
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <div className="flex-grow flex items-center justify-center py-12">
        <div className="text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-mahogany">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-6">Az oldal nem található</h2>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            Sajnáljuk, de a keresett oldal nem található. Lehetséges, hogy el lett távolítva, 
            megváltozott a neve, vagy átmenetileg nem érhető el.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-mahogany hover:bg-mahogany-dark text-white">
              <Link to="/">Vissza a főoldalra</Link>
            </Button>
            <Button variant="outline" className="border-mahogany text-mahogany hover:bg-mahogany/10">
              <Link to="/kapcsolat">Kapcsolat</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
