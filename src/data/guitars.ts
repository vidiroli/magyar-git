
export interface Guitar {
  id: string;
  name: string;
  category: 'elektromos' | 'akusztikus' | 'basszus';
  price: number;
  description: string;
  features: string[];
  specifications: Record<string, string>;
  imageUrl: string;
  galleryImages: string[];
  featured?: boolean;
}

export const guitars: Guitar[] = [
  {
    id: 'magyar-custom-24',
    name: 'Magyar Custom 24',
    category: 'elektromos',
    price: 899000,
    description: 'A legkeresettebb Magyar gitár modell, kiváló hangzással és sokoldalúsággal. Kézzel készített mahagóni testtel és juharfa tetővel, amely tökéletes egyensúlyt biztosít a meleg basszusok és a csillogó magas hangok között.',
    features: [
      'Mahagóni test juharfa tetővel',
      '24 érintős paliszander fogólap',
      'Magyar humbucker pickupok',
      'Tremolo híd',
      'Zárt hangolókulcsok'
    ],
    specifications: {
      'Test': 'Mahagóni',
      'Tető': 'Lángolt juhar',
      'Nyak': 'Mahagóni',
      'Fogólap': 'Paliszander',
      'Érintők': '24 medium jumbo',
      'Menzúra': '25"',
      'Pickupok': 'Magyar 58/15 humbucker (nyak és híd)',
      'Vezérlés': '1 hangerő, 1 tónus push/pull coil split funkcióval, 3-állású kapcsoló',
      'Híd': 'Magyar tremolo rendszer',
      'Hangolókulcsok': 'Magyar zárt'
    },
    imageUrl: 'https://images.unsplash.com/photo-1550985616-10810253b84d?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3',
    galleryImages: [
      'https://images.unsplash.com/photo-1550985616-10810253b84d?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1558098329-a11cff621064?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3'
    ],
    featured: true
  },
  {
    id: 'magyar-single-cut',
    name: 'Magyar SingleCut',
    category: 'elektromos',
    price: 949000,
    description: 'Klasszikus forma modern hangzással. A Magyar SingleCut egyesíti a vintage gitárok karakterét a modern játszhatósággal, erőteljes hangzást és kiváló sustain-t biztosítva.',
    features: [
      'Vastag mahagóni test juharfa tetővel',
      '22 érintős ébenfa fogólap',
      'Magyar 58/15 humbucker pickupok',
      'Tune-o-matic típusú híd',
      'Kiváló sustain'
    ],
    specifications: {
      'Test': 'Mahagóni',
      'Tető': 'Lángolt juhar',
      'Nyak': 'Mahagóni',
      'Fogólap': 'Ébenfa',
      'Érintők': '22 medium jumbo',
      'Menzúra': '24.5"',
      'Pickupok': 'Magyar 58/15 humbucker (nyak és híd)',
      'Vezérlés': '2 hangerő, 2 tónus, 3-állású kapcsoló',
      'Híd': 'Tune-o-matic típusú fix híd',
      'Hangolókulcsok': 'Magyar vintage típusú'
    },
    imageUrl: 'https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3',
    galleryImages: [
      'https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1577079527570-564623c795eb?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1605020420620-20c943cc4669?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3'
    ],
    featured: true
  },
  {
    id: 'magyar-hollowbody-ii',
    name: 'Magyar Hollowbody II',
    category: 'elektromos',
    price: 1299000,
    description: 'Elegáns félakusztikus gitár, amely tökéletes a jazz és blues műfajokban. Meleg, gazdag hanggal és csodálatos kidolgozással.',
    features: [
      'Félakusztikus kialakítás',
      'Juhar test és tető',
      '22 érintős ébenfa fogólap',
      'Magyar 58/15 LT humbucker pickupok',
      'Piezo híd rendszerrel'
    ],
    specifications: {
      'Test': 'Juhar, félakusztikus',
      'Tető': 'Lángolt juhar',
      'Nyak': 'Mahagóni',
      'Fogólap': 'Ébenfa',
      'Érintők': '22 medium jumbo',
      'Menzúra': '25"',
      'Pickupok': 'Magyar 58/15 LT humbucker (nyak és híd), Piezo',
      'Vezérlés': '2 hangerő, 2 tónus, 3-állású kapcsoló, piezo hangerő',
      'Híd': 'Magyar állítható Piezo rendszerrel',
      'Hangolókulcsok': 'Magyar prémium'
    },
    imageUrl: 'https://images.unsplash.com/photo-1550985616-1ff21c5c3fb3?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3',
    galleryImages: [
      'https://images.unsplash.com/photo-1550985616-1ff21c5c3fb3?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=2729&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1611902254133-f648c4701c3b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3'
    ],
    featured: true
  },
  {
    id: 'magyar-akusztikus-pro',
    name: 'Magyar Akusztikus Pro',
    category: 'akusztikus',
    price: 749000,
    description: 'Professzionális akusztikus gitár csodálatos hanggal és kiváló megjelenéssel. Ideális stúdióba és színpadra egyaránt.',
    features: [
      'Lucfenyő tető',
      'Paliszander hát és oldalak',
      'Mahagóni nyak',
      'Ébenfa fogólap',
      'Magyar elektronika'
    ],
    specifications: {
      'Felsőlap': 'Tömör lucfenyő',
      'Hát és oldalak': 'Tömör paliszander',
      'Nyak': 'Mahagóni',
      'Fogólap': 'Ébenfa',
      'Érintők': '20 medium',
      'Menzúra': '25.3"',
      'Híd': 'Ébenfa',
      'Elektronika': 'Magyar akusztikus pickup rendszer',
      'Kulcsok': 'Prémium zárt'
    },
    imageUrl: 'https://images.unsplash.com/photo-1588449668365-d15e397f6787?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3',
    galleryImages: [
      'https://images.unsplash.com/photo-1588449668365-d15e397f6787?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1514649923863-ceaf75b7ec00?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3'
    ]
  },
  {
    id: 'magyar-basszus-4',
    name: 'Magyar Basszus 4',
    category: 'basszus',
    price: 829000,
    description: 'Professzionális 4 húros basszusgitár, amely egyedülálló hangzást és játszhatóságot kínál. Az aktív elektronika és a prémium anyagok kombinációja teszi tökéletes választássá komoly zenészek számára.',
    features: [
      'Kőrisfa test',
      'Juharfa nyak grafit merevítéssel',
      'Paliszander fogólap',
      'Magyar aktív basszus pickupok',
      '3-sávos EQ'
    ],
    specifications: {
      'Test': 'Kőrisfa',
      'Nyak': 'Juharfa grafit merevítéssel',
      'Fogólap': 'Paliszander',
      'Érintők': '22 medium jumbo',
      'Menzúra': '34"',
      'Pickupok': 'Magyar aktív humbucker (nyak és híd)',
      'Elektronika': 'Aktív 3-sávos EQ, hangerőszabályzó, balansz',
      'Híd': 'Magyar nehéz basszushíd',
      'Hangolókulcsok': 'Magyar nehéz basszuskulcsok'
    },
    imageUrl: 'https://images.unsplash.com/photo-1550985616-8fb6a583d6d8?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3',
    galleryImages: [
      'https://images.unsplash.com/photo-1550985616-8fb6a583d6d8?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1612225330862-5c7b1ae572e0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1445985543470-41fba5c3144a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3'
    ]
  },
  {
    id: 'magyar-akusztikus-se',
    name: 'Magyar Akusztikus SE',
    category: 'akusztikus',
    price: 599000,
    description: 'Elegáns akusztikus gitár különleges formával és hangzással. A Magyar Akusztikus SE tökéletes választás azoknak, akik egyedi megjelenésű és csodás hangú gitárt keresnek.',
    features: [
      'Cédrus tető',
      'Mahagóni hát és oldalak',
      'Mahagóni nyak',
      'Ébenfa fogólap abalone berakásokkal',
      'Beépített előerősítő és hangerő'
    ],
    specifications: {
      'Felsőlap': 'Tömör cédrus',
      'Hát és oldalak': 'Mahagóni',
      'Nyak': 'Mahagóni',
      'Fogólap': 'Ébenfa',
      'Érintők': '20 medium',
      'Menzúra': '25.3"',
      'Híd': 'Ébenfa',
      'Elektronika': 'Magyar akusztikus előerősítő rendszer',
      'Kulcsok': 'Prémium zárt'
    },
    imageUrl: 'https://images.unsplash.com/photo-1556449895-a33c9dba33dd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3',
    galleryImages: [
      'https://images.unsplash.com/photo-1556449895-a33c9dba33dd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1471478331149-c72f17e33c73?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3'
    ]
  }
];

export const getFeaturedGuitars = (): Guitar[] => {
  return guitars.filter(guitar => guitar.featured);
};

export const getGuitarsByCategory = (category: string): Guitar[] => {
  return guitars.filter(guitar => guitar.category === category);
};

export const getGuitarById = (id: string): Guitar | undefined => {
  return guitars.find(guitar => guitar.id === id);
};
