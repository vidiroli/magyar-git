
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GuitarCard from '@/components/GuitarCard';
import { getFeaturedGuitars } from '@/data/guitars';

const Index = () => {
  const featuredGuitars = getFeaturedGuitars();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3" 
            alt="Magyar gitár" 
            className="w-full h-full object-cover opacity-70"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-xl animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Kézzel készített <span className="text-mahogany-light">prémium gitárok</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Több mint 30 év tapasztalatával készítjük Magyarország legjobb gitárjait mesteremberek gondosságával.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-mahogany hover:bg-mahogany-dark text-white px-8 py-6 rounded-md text-lg font-medium transition-all duration-200 guitar-button">
                <Link to="/gitarok/elektromos">Fedezd fel</Link>
              </Button>
              <Button variant="outline" className="bg-transparent border-2 border-white text-white px-8 py-6 rounded-md text-lg font-medium hover:bg-white/10 transition-all duration-200 guitar-button">
                <Link to="/rolunk">Rólunk</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Kiemelt gitárjaink</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fedezd fel legnépszerűbb és legkiemelkedőbb modelleinket, melyeket gitárosaink és vásárlóink egyaránt nagyra értékelnek.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredGuitars.map((guitar) => (
              <GuitarCard
                key={guitar.id}
                id={guitar.id}
                name={guitar.name}
                imageUrl={guitar.imageUrl}
                price={guitar.price}
                category={guitar.category === 'elektromos' ? 'Elektromos gitár' : 
                          guitar.category === 'akusztikus' ? 'Akusztikus gitár' : 'Basszusgitár'}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-mahogany hover:bg-mahogany-dark text-white px-6 py-2 rounded-md inline-flex items-center transition-all duration-200 guitar-button">
              <Link to="/gitarok/elektromos" className="inline-flex items-center">
                Összes gitár megtekintése 
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <img 
                src="https://images.unsplash.com/photo-1566913485826-6cd6eb84bc12?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3" 
                alt="Gitárkészítés" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Mesterségbeli tudás és innováció</h2>
              <p className="text-gray-600 mb-6">
                Minden Magyar gitár több évtizedes szakértelem és odaadás eredménye. Gitárkészítőink a hagyományos technikákat modern innovációval ötvözik, hogy kivételes hangzású és játszhatóságú hangszereket alkossanak.
              </p>
              <p className="text-gray-600 mb-6">
                A precíz kézi munka, a gondosan válogatott alapanyagok és a szigorú minőségellenőrzés biztosítja, hogy minden gitárunk megfeleljen a legmagasabb elvárásoknak.
              </p>
              <Link to="/rolunk" className="text-mahogany font-medium inline-flex items-center hover:underline transition-all duration-200">
                Tudj meg többet a készítési folyamatról
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Gitárkategóriák</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fedezd fel hangszereink teljes kínálatát, a klasszikus elektromos modellektől az akusztikus és basszusgitárokig.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Electric Guitars */}
            <div className="relative overflow-hidden rounded-lg group h-80">
              <img 
                src="https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3" 
                alt="Elektromos gitárok" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Elektromos gitárok</h3>
                <p className="text-gray-200 mb-4">Fedezd fel elektromos gitár választékunkat</p>
                <Link to="/gitarok/elektromos" className="inline-block bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-mahogany-light hover:text-white transition-colors duration-200">
                  Böngészés
                </Link>
              </div>
            </div>
            
            {/* Acoustic Guitars */}
            <div className="relative overflow-hidden rounded-lg group h-80">
              <img 
                src="https://images.unsplash.com/photo-1556449895-a33c9dba33dd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3" 
                alt="Akusztikus gitárok" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Akusztikus gitárok</h3>
                <p className="text-gray-200 mb-4">Prémium akusztikus hangszerek</p>
                <Link to="/gitarok/akusztikus" className="inline-block bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-mahogany-light hover:text-white transition-colors duration-200">
                  Böngészés
                </Link>
              </div>
            </div>
            
            {/* Bass Guitars */}
            <div className="relative overflow-hidden rounded-lg group h-80">
              <img 
                src="https://images.unsplash.com/photo-1550985616-8fb6a583d6d8?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3" 
                alt="Basszusgitárok" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Basszusgitárok</h3>
                <p className="text-gray-200 mb-4">Minőségi basszusgitárok profik számára</p>
                <Link to="/gitarok/basszus" className="inline-block bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-mahogany-light hover:text-white transition-colors duration-200">
                  Böngészés
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-wood-dark text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Amit művészeink mondanak</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Ismerd meg, miért választják Magyarország és a világ legjobb zenészei a Magyar gitárokat.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-wood text-white p-6 rounded-lg shadow-lg relative">
              <div className="mb-4 text-4xl text-mahogany-light opacity-80">"</div>
              <p className="mb-6 text-gray-100">
                A Magyar Custom 24 a legjobb gitár, amin valaha játszottam. Hihetetlen hangzás és játszhatóság jellemzi, tökéletes eszköz a színpadon és a stúdióban egyaránt.
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-gray-500 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold">Nagy Péter</h4>
                  <p className="text-sm text-gray-300">Szólógitáros, Hangfogó Zenekar</p>
                </div>
              </div>
            </div>
            
            <div className="bg-wood text-white p-6 rounded-lg shadow-lg relative">
              <div className="mb-4 text-4xl text-mahogany-light opacity-80">"</div>
              <p className="mb-6 text-gray-100">
                Az Akusztikus Pro modellel teljesen új dimenzióba került a játékom. A hang tisztasága és a gitár válaszkészsége minden alkalommal lenyűgöz.
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-gray-500 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold">Kovács Anna</h4>
                  <p className="text-sm text-gray-300">Dalszerző, előadó</p>
                </div>
              </div>
            </div>
            
            <div className="bg-wood text-white p-6 rounded-lg shadow-lg relative">
              <div className="mb-4 text-4xl text-mahogany-light opacity-80">"</div>
              <p className="mb-6 text-gray-100">
                A Magyar Basszus 4 modell tökéletes egyensúlyt teremt a mély, erőteljes hangzás és a játszhatóság között. Turnékon és stúdiómunkáknál egyaránt erre támaszkodom.
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-gray-500 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold">Szabó Tamás</h4>
                  <p className="text-sm text-gray-300">Basszusgitáros, Akusztik Zenekar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-mahogany rounded-lg p-8 md:p-12 shadow-xl text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Találd meg a tökéletes gitárt</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Böngéssz kínálatunkban és találd meg álmaid hangszerét, vagy vedd fel velünk a kapcsolatot személyre szabott tanácsadásért.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-mahogany hover:bg-gray-200 px-8 py-3 rounded-md font-medium transition-colors duration-200 guitar-button">
                <Link to="/gitarok/elektromos">Vásárlás</Link>
              </Button>
              <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-md font-medium transition-colors duration-200 guitar-button">
                <Link to="/kapcsolat">Kapcsolat</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
