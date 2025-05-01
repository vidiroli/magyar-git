
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GuitarCard from '@/components/GuitarCard';
import { getGuitarsByCategory, Guitar } from '@/data/guitars';

type CategoryTitleMapping = {
  [key: string]: string;
};

const categoryTitles: CategoryTitleMapping = {
  'elektromos': 'Elektromos gitárok',
  'akusztikus': 'Akusztikus gitárok',
  'basszus': 'Basszusgitárok'
};

const categoryDescriptions: CategoryTitleMapping = {
  'elektromos': 'Fedezd fel elektromos gitár kínálatunkat, a klasszikus formáktól a modern dizájnokig. Minden elektromos gitárunk kiváló játszhatóságot és páratlan hangzást kínál.',
  'akusztikus': 'Akusztikus gitárjaink ötvözik a hagyományos kézműves technikákat a modern innováció előnyeivel, hogy kivételes hangzást és inspiráló játékélményt nyújtsanak.',
  'basszus': 'Basszusgitárjaink masszív alapot biztosítanak bármilyen zenei stílushoz, kiváló hangzással és kiemelkedő játszhatósággal.'
};

const GuitarCategory = () => {
  const { category } = useParams<{ category: string }>();
  const guitars = getGuitarsByCategory(category || '');

  const categoryTitle = category ? categoryTitles[category] || 'Gitárok' : 'Gitárok';
  const categoryDescription = category ? categoryDescriptions[category] || '' : '';

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Category Header */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{categoryTitle}</h1>
          <p className="text-gray-600 max-w-3xl">{categoryDescription}</p>
        </div>
      </section>
      
      {/* Filters */}
      <section className="py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between">
            <div className="mb-2 sm:mb-0">
              <span className="text-gray-600">Találatok: {guitars.length}</span>
            </div>
            <div className="flex items-center space-x-4">
              <label htmlFor="sort" className="text-gray-600">Rendezés:</label>
              <select 
                id="sort"
                className="border rounded-md px-3 py-1 focus:outline-none focus:ring-1 focus:ring-mahogany"
                defaultValue="popular"
              >
                <option value="popular">Népszerűség szerint</option>
                <option value="price_asc">Ár: alacsony-magas</option>
                <option value="price_desc">Ár: magas-alacsony</option>
                <option value="newest">Legújabb</option>
              </select>
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {guitars.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {guitars.map((guitar: Guitar) => (
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
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-600">Nincs találat ebben a kategóriában.</h3>
            </div>
          )}
        </div>
      </section>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default GuitarCategory;
