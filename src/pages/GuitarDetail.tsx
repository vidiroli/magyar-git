
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Heart, Share, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getGuitarById, getGuitarsByCategory } from '@/data/guitars';
import GuitarCard from '@/components/GuitarCard';

const GuitarDetail = () => {
  const { id } = useParams<{ id: string }>();
  const guitar = getGuitarById(id || '');
  const [mainImage, setMainImage] = useState(guitar?.imageUrl || '');
  const [activeTab, setActiveTab] = useState('description');
  
  if (!guitar) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-16 flex-grow">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Gitár nem található</h1>
            <p className="mb-8">A keresett gitár nem található vagy nem létezik.</p>
            <Button className="bg-mahogany hover:bg-mahogany-dark text-white">
              <Link to="/">Vissza a főoldalra</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Get related guitars (same category, excluding current)
  const relatedGuitars = getGuitarsByCategory(guitar.category).filter(g => g.id !== guitar.id).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3">
        <div className="container mx-auto px-4">
          <nav className="text-sm">
            <ol className="list-none p-0 flex flex-wrap">
              <li className="flex items-center">
                <Link to="/" className="text-gray-500 hover:text-mahogany">Főoldal</Link>
                <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
              </li>
              <li className="flex items-center">
                <Link 
                  to={`/gitarok/${guitar.category}`} 
                  className="text-gray-500 hover:text-mahogany"
                >
                  {guitar.category === 'elektromos' ? 'Elektromos gitárok' : 
                   guitar.category === 'akusztikus' ? 'Akusztikus gitárok' : 'Basszusgitárok'}
                </Link>
                <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
              </li>
              <li className="text-gray-700 font-medium">{guitar.name}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row -mx-4">
            {/* Product Images */}
            <div className="lg:w-1/2 px-4 mb-8 lg:mb-0">
              <div className="mb-4">
                <img 
                  src={mainImage} 
                  alt={guitar.name} 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {guitar.galleryImages.map((image, index) => (
                  <div 
                    key={index} 
                    className={`cursor-pointer rounded-md overflow-hidden border-2 ${mainImage === image ? 'border-mahogany' : 'border-transparent'}`}
                    onClick={() => setMainImage(image)}
                  >
                    <img 
                      src={image} 
                      alt={`${guitar.name} - kép ${index + 1}`} 
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div className="lg:w-1/2 px-4">
              <span className="inline-block text-gray-500 mb-2">
                {guitar.category === 'elektromos' ? 'Elektromos gitár' : 
                 guitar.category === 'akusztikus' ? 'Akusztikus gitár' : 'Basszusgitár'}
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold mb-2">{guitar.name}</h1>
              <div className="mb-6">
                <span className="text-2xl font-bold text-mahogany-dark">{guitar.price.toLocaleString('hu-HU')} Ft</span>
                <span className="text-sm text-gray-500 ml-2">Áfával</span>
              </div>

              <div className="mb-6">
                <p className="text-gray-700">{guitar.description}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Főbb jellemzők:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {guitar.features.map((feature, index) => (
                    <li key={index} className="text-gray-700">{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-8">
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-mahogany hover:bg-mahogany-dark text-white px-8 py-6 rounded-md flex items-center text-lg font-medium transition-all duration-200 guitar-button">
                    <ShoppingCart className="mr-2 h-5 w-5" /> Kosárba
                  </Button>
                  <Button variant="outline" className="border-2 border-gray-300 text-gray-700 px-4 py-6 rounded-md hover:bg-gray-100 transition-all duration-200 guitar-button">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" className="border-2 border-gray-300 text-gray-700 px-4 py-6 rounded-md hover:bg-gray-100 transition-all duration-200 guitar-button">
                    <Share className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="block text-gray-500 text-sm">Kategória:</span>
                    <span className="font-medium">
                      {guitar.category === 'elektromos' ? 'Elektromos gitár' : 
                       guitar.category === 'akusztikus' ? 'Akusztikus gitár' : 'Basszusgitár'}
                    </span>
                  </div>
                  <div>
                    <span className="block text-gray-500 text-sm">Cikkszám:</span>
                    <span className="font-medium">MG-{guitar.id.toUpperCase()}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  Raktáron - 3-5 munkanapon belül szállítjuk
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Tabs */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                className={`py-4 px-1 border-b-2 ${activeTab === 'description' ? 'border-mahogany text-mahogany font-medium' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                onClick={() => setActiveTab('description')}
              >
                Leírás
              </button>
              <button
                className={`py-4 px-1 border-b-2 ${activeTab === 'specifications' ? 'border-mahogany text-mahogany font-medium' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                onClick={() => setActiveTab('specifications')}
              >
                Specifikációk
              </button>
            </nav>
          </div>
          
          <div className="py-6">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="mb-4">{guitar.description}</p>
                <h3 className="text-xl font-semibold mb-3">Jellemzők</h3>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                  {guitar.features.map((feature, index) => (
                    <li key={index} className="text-gray-700">{feature}</li>
                  ))}
                </ul>
                <p className="mb-4">
                  A {guitar.name} kézzel készül Magyarországon, a legmagasabb minőségi elvárásoknak megfelelően. 
                  Minden gitárunk szigorú minőségellenőrzésen esik át, mielőtt eljut hozzád, hogy a lehető legjobb 
                  játékélményt és hangzást biztosítsa.
                </p>
                <p>
                  A gitárhoz 2 év teljes körű garanciát biztosítunk, valamint ingyenes beállítást kínálunk 
                  a vásárlástól számított 6 hónapon belül.
                </p>
              </div>
            )}
            
            {activeTab === 'specifications' && (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody className="divide-y divide-gray-200">
                    {Object.entries(guitar.specifications).map(([key, value]) => (
                      <tr key={key}>
                        <td className="py-3 pl-4 pr-8 text-sm font-medium text-gray-900 align-top w-1/3">{key}</td>
                        <td className="py-3 px-4 text-sm text-gray-700 align-top">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Related Products */}
      {relatedGuitars.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Hasonló gitárok</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedGuitars.map((relatedGuitar) => (
                <GuitarCard
                  key={relatedGuitar.id}
                  id={relatedGuitar.id}
                  name={relatedGuitar.name}
                  imageUrl={relatedGuitar.imageUrl}
                  price={relatedGuitar.price}
                  category={relatedGuitar.category === 'elektromos' ? 'Elektromos gitár' : 
                           relatedGuitar.category === 'akusztikus' ? 'Akusztikus gitár' : 'Basszusgitár'}
                />
              ))}
            </div>
          </div>
        </section>
      )}
      
      <Footer />
    </div>
  );
};

export default GuitarDetail;
