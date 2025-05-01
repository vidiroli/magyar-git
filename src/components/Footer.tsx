
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Magyar<span className="text-mahogany-light">Gitárok</span></h3>
            <p className="text-gray-400 mb-4">
              Prémium minőségű, kézzel készített gitárok magyar mesterektől.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Gyors Linkek</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200">Főoldal</Link>
              </li>
              <li>
                <Link to="/gitarok/elektromos" className="text-gray-400 hover:text-white transition-colors duration-200">Elektromos gitárok</Link>
              </li>
              <li>
                <Link to="/gitarok/akusztikus" className="text-gray-400 hover:text-white transition-colors duration-200">Akusztikus gitárok</Link>
              </li>
              <li>
                <Link to="/gitarok/basszus" className="text-gray-400 hover:text-white transition-colors duration-200">Basszusgitárok</Link>
              </li>
              <li>
                <Link to="/tartozekok" className="text-gray-400 hover:text-white transition-colors duration-200">Tartozékok</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kapcsolat</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="block">Magyar Gitárok Kft.</span>
              </li>
              <li className="text-gray-400">
                <span className="block">1065 Budapest</span>
              </li>
              <li className="text-gray-400">
                <span className="block">Nagymező utca 19.</span>
              </li>
              <li className="text-gray-400">
                <span className="block">+36 1 234 5678</span>
              </li>
              <li className="text-gray-400">
                <span className="block">info@magyargitarok.hu</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hírlevelünk</h3>
            <p className="text-gray-400 mb-4">
              Iratkozz fel hírlevelünkre a legfrissebb termékek és akciók miatt!
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Email címed"
                className="px-4 py-2 rounded-l-md bg-gray-800 border-gray-700 text-white flex-grow focus:outline-none focus:ring-1 focus:ring-mahogany-light"
              />
              <button
                type="submit"
                className="bg-mahogany hover:bg-mahogany-dark text-white px-4 py-2 rounded-r-md transition-colors duration-200"
              >
                Feliratkozás
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Magyar Gitárok Kft. Minden jog fenntartva.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-500 hover:text-white text-sm">Adatvédelem</Link>
              <Link to="/terms" className="text-gray-500 hover:text-white text-sm">Felhasználási feltételek</Link>
              <Link to="/cookie-policy" className="text-gray-500 hover:text-white text-sm">Cookie szabályzat</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
