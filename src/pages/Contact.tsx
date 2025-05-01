
import React from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Contact Header */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kapcsolat</h1>
          <p className="text-gray-600 max-w-3xl">
            Kérdésed van? Szeretnél többet megtudni gitárjainkról vagy kipróbálnád őket? Vedd fel velünk a kapcsolatot, és csapatunk örömmel segít.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row -mx-4">
            {/* Contact Form */}
            <div className="md:w-2/3 px-4 mb-8 md:mb-0">
              <h2 className="text-2xl font-bold mb-6">Írj nekünk</h2>
              
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Név</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mahogany focus:border-transparent"
                      placeholder="Teljes neved"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mahogany focus:border-transparent"
                      placeholder="Email címed"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 mb-2 font-medium">Tárgy</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mahogany focus:border-transparent"
                    placeholder="Üzeneted tárgya"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Üzenet</label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mahogany focus:border-transparent"
                    placeholder="Írd le kérdésed vagy üzeneted..."
                  ></textarea>
                </div>
                
                <div className="mb-6">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-mahogany"
                    />
                    <span className="ml-2 text-gray-700">
                      Elfogadom az adatvédelmi irányelveket és hozzájárulok adataim kezeléséhez.
                    </span>
                  </label>
                </div>
                
                <Button className="bg-mahogany hover:bg-mahogany-dark text-white px-8 py-3 rounded-md font-medium transition-colors duration-200 guitar-button">
                  Küldés
                </Button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="md:w-1/3 px-4">
              <h2 className="text-2xl font-bold mb-6">Elérhetőségeink</h2>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-lg mb-4">Budapest Bemutatóterem</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-mahogany mr-3 mt-1" />
                    <div>
                      <p className="text-gray-700">1065 Budapest</p>
                      <p className="text-gray-700">Nagymező utca 19.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-mahogany mr-3" />
                    <p className="text-gray-700">+36 1 234 5678</p>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-mahogany mr-3" />
                    <p className="text-gray-700">info@magyargitarok.hu</p>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-mahogany mr-3 mt-1" />
                    <div>
                      <p className="text-gray-700">Hétfő - Péntek: 10:00 - 18:00</p>
                      <p className="text-gray-700">Szombat: 10:00 - 14:00</p>
                      <p className="text-gray-700">Vasárnap: Zárva</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-4">Műhely</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-mahogany mr-3 mt-1" />
                    <div>
                      <p className="text-gray-700">1112 Budapest</p>
                      <p className="text-gray-700">Budaörsi út 45.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-mahogany mr-3" />
                    <p className="text-gray-700">+36 1 987 6543</p>
                  </div>
                  
                  <p className="text-gray-600 italic mt-4">
                    A műhely kizárólag előzetes egyeztetés alapján látogatható.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Látogass meg minket</h2>
          
          <div className="bg-gray-300 h-96 rounded-lg">
            {/* Map would go here (Consider using an iframe with Google Maps or similar service) */}
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-600">Térkép betöltése...</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
