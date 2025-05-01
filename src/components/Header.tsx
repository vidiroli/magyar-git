
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-mahogany-dark">
              Magyar<span className="text-black">Gitárok</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-mahogany transition-colors duration-200">
              Főoldal
            </Link>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-mahogany transition-colors duration-200">
                Gitárok <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md p-2 invisible group-hover:visible transition-all duration-200 opacity-0 group-hover:opacity-100">
                <Link to="/gitarok/elektromos" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                  Elektromos gitárok
                </Link>
                <Link to="/gitarok/akusztikus" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                  Akusztikus gitárok
                </Link>
                <Link to="/gitarok/basszus" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                  Basszusgitárok
                </Link>
              </div>
            </div>
            <Link to="/tartozekok" className="text-gray-700 hover:text-mahogany transition-colors duration-200">
              Tartozékok
            </Link>
            <Link to="/rolunk" className="text-gray-700 hover:text-mahogany transition-colors duration-200">
              Rólunk
            </Link>
            <Link to="/kapcsolat" className="text-gray-700 hover:text-mahogany transition-colors duration-200">
              Kapcsolat
            </Link>
          </nav>

          {/* Search, Cart, Menu button */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-mahogany p-1" aria-label="Keresés">
              <Search className="h-5 w-5" />
            </button>
            <Link to="/kosar" className="text-gray-700 hover:text-mahogany p-1" aria-label="Kosár">
              <ShoppingCart className="h-5 w-5" />
            </Link>
            <button className="md:hidden text-gray-700 p-1" onClick={toggleMenu} aria-label="Menü">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <Link to="/" className="block py-2 text-gray-700" onClick={toggleMenu}>
              Főoldal
            </Link>
            <div className="py-2">
              <p className="text-gray-700 font-medium">Gitárok</p>
              <Link to="/gitarok/elektromos" className="block py-2 pl-4 text-gray-600" onClick={toggleMenu}>
                Elektromos gitárok
              </Link>
              <Link to="/gitarok/akusztikus" className="block py-2 pl-4 text-gray-600" onClick={toggleMenu}>
                Akusztikus gitárok
              </Link>
              <Link to="/gitarok/basszus" className="block py-2 pl-4 text-gray-600" onClick={toggleMenu}>
                Basszusgitárok
              </Link>
            </div>
            <Link to="/tartozekok" className="block py-2 text-gray-700" onClick={toggleMenu}>
              Tartozékok
            </Link>
            <Link to="/rolunk" className="block py-2 text-gray-700" onClick={toggleMenu}>
              Rólunk
            </Link>
            <Link to="/kapcsolat" className="block py-2 text-gray-700" onClick={toggleMenu}>
              Kapcsolat
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
