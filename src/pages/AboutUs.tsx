
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1566913485826-6cd6eb84bc12?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3" 
            alt="Gitárkészítés" 
            className="w-full h-full object-cover opacity-70"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Rólunk</h1>
            <p className="text-xl text-gray-200">
              A magyar gitárművészet történetét és szenvedélyét viszszük tovább több mint 30 éve.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Történetünk</h2>
            <p className="text-gray-700 mb-6">
              A Magyar Gitárok története 1990-ben kezdődött, amikor Kovács István, egy fiatal és tehetséges hangszerkészítő úgy döntött, hogy saját műhelyt nyit Budapesten. István már fiatal korától kezdve gitárokat készített, de álma az volt, hogy olyan minőségi hangszereket alkosson, amelyek felveszik a versenyt a világ legjobb gitárjaival.
            </p>
            <p className="text-gray-700 mb-6">
              Az első években kisebb műhelyben, mindössze három munkatárssal dolgozott. A kitartó munka és a részletekre való odafigyelés hamar meghozta gyümölcsét, és a Magyar Gitárok hírneve gyorsan terjedt a hazai zenészek körében.
            </p>
            <p className="text-gray-700 mb-6">
              A 2000-es évek elejére márnevünk már Európa-szerte ismertté vált, és 2010-ben megnyitottuk első külföldi bemutatótermünket Bécsben. Ma már több mint 30 szakember dolgozik azon, hogy a legmagasabb minőségű gitárokat készítsük, amelyeket a világ minden táján értékelnek a zenészek.
            </p>
            <blockquote className="border-l-4 border-mahogany pl-4 py-2 italic text-gray-600 my-8">
              "A mi filozófiánk mindig is az volt, hogy nem gyártunk, hanem alkotunk. Minden egyes gitár egy műalkotás, amely a zenész és a zene szolgálatában áll."
              <footer className="text-gray-500 mt-2">- Kovács István, alapító</footer>
            </blockquote>
            <p className="text-gray-700">
              Ma már második generációs gitárkészítők is dolgoznak nálunk, és büszkék vagyunk arra, hogy a hagyományos kézműves technikákat modern innovációval ötvözve hozzuk létre hangszereinket. Minden egyes Magyar gitár a magyar kreativitás és kézműves hagyományok megtestesítője.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Értékeink</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-mahogany/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-mahogany" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Kézműves hagyomány</h3>
              <p className="text-gray-600 text-center">
                Minden gitárunk kézzel készül, a hagyományos technikákat alkalmazva, amelyeket generációkon át adtak tovább mesterek tanítványaiknak.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-mahogany/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-mahogany" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Innováció</h3>
              <p className="text-gray-600 text-center">
                Folyamatosan fejlesztjük termékeink és folyamatainkat, ötvözve a klasszikus módszereket modern technológiai megoldásokkal.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-mahogany/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-mahogany" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Minőség</h3>
              <p className="text-gray-600 text-center">
                Nem ismerünk kompromisszumot a minőséget illetően. Csak a legjobb anyagokat használjuk, és minden gitárt szigorú teszteknek vetünk alá.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold mb-6">Mesterségbeli tudás</h2>
              <p className="text-gray-700 mb-4">
                A Magyar Gitárok műhelyében minden hangszer elkészítése hosszú, aprólékos folyamat. Gitárkészítő mestereink átlagosan 15-20 év tapasztalattal rendelkeznek, és folyamatosan képzik magukat a legújabb technikákról és anyagokról.
              </p>
              <p className="text-gray-700 mb-4">
                Minden gitár elkészítése körülbelül 100-120 munkaórát vesz igénybe. A fa kiválasztásától kezdve, a nyak formázásán át, egészen a végső beállításig, minden lépést a legnagyobb gondossággal végzünk.
              </p>
              <p className="text-gray-700">
                Büszkék vagyunk arra, hogy gitárjaink hangzása és játszhatósága egyedülálló. Ez a különleges minőség annak köszönhető, hogy mestereink nemcsak készítői, hanem gyakran játékosai is a hangszereknek, így pontosan értik a zenészek igényeit és elvárásait.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3" 
                alt="Gitárkészítés" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Csapatunk</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-gray-300">
                {/* Placeholder for team member photo */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Kovács István</h3>
                <p className="text-mahogany mb-3">Alapító, Vezető Gitárkészítő</p>
                <p className="text-gray-600">
                  István több mint 35 éve készít gitárokat. Ő alapította a vállalatot 1990-ben, és azóta is a vállalat kreatív vezetője.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-gray-300">
                {/* Placeholder for team member photo */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Nagy Judit</h3>
                <p className="text-mahogany mb-3">Vezérigazgató</p>
                <p className="text-gray-600">
                  Judit 2010-ben csatlakozott a csapathoz és kulcsszerepet játszott a vállalat nemzetközi terjeszkedésében.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-gray-300">
                {/* Placeholder for team member photo */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Szabó Péter</h3>
                <p className="text-mahogany mb-3">Vezető Fejlesztő</p>
                <p className="text-gray-600">
                  Péter gitáros és mérnök, aki a pickupok és elektronika fejlesztéséért felel. 2005 óta tagja a csapatnak.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
