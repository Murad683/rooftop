const asset = (file) => new URL(`../assets/${file}`, import.meta.url).href
const placeholderImage = asset('stock.jpg')

const withGroup = (group, items) => items.map((item) => ({ ...item, group }))

const veganSalads = [
  {
    name: 'Xırt-xırt Badımcan Salatı',
    description: 'Badımcan, rukola, pomidor, soya sousu, sweet chili, oyster sous, küncüt.',
    price: '14 ₼',
    image: asset('xırt-xırt-badımcan-salatı.jpg'),
  },
  {
    name: 'Vişnəli Pomidor Salatı',
    description: 'Vişnə, pomidor, qırmızı soğan, rukola.',
    price: '10 ₼',
    image: asset('vişnəli-pomidor-salatı.jpg'),
  },
  {
    name: 'Çoban Salatı',
    description: 'Pomidor, xiyar, ağ pendir, qırmızı soğan, bibər, zeytun yağı, limon.',
    price: '9 ₼',
    image: asset('coban-salatı.jpg'),
  },
]

const appetizerGroups = {
  'Soyuq Qəlyanaltılar': [
    {
      name: 'Məzə çeşidləri(yeni)',
      description: 'Humus, badımcan əzməsi, acılı əzmə, haydari, manqalda tərəvəzlər',
      price: '13 ₼',
      image: asset('meze-cesidleri-yeni.jpg'),
    },
    {
      name: 'Avropa Pendir çeşidləri',
      description: 'Çedar, ağ pendir, qauda, saçaq pendir, bal',
      price: '20 ₼',
      image: asset('avropa-pendir-cesidleri.jpg'),
    },
    {
      name: 'Milli Pendir çeşidləri',
      description: 'Keçi pendir,inək pendir,saçaq pendir',
      price: '6 ₼',
      image: asset('milli-pendir-cesidleri.jpg'),
    },
    {
      name: 'Turşu Assorti',
      description: 'Alça,pomidor,qöyəm,xıyar,alma turşuları',
      price: '5 ₼',
      image: asset('tursu-assorti.jpg'),
    },
    {
      name: 'Tərəvəz buketi',
      description: 'Pomidor,xıyar,göyərti',
      price: '5 ₼',
      image: asset('terevez-buketi.jpg'),
    },
  ],
  'İsti Qəlyanaltılar': [
    {
      name: 'Pələng Krevetkalar Ağ Çaxır Sousu ilə',
      description: 'Pələng krevetkaları, kərə yağı, kappers, ağ çaxır',
      price: '18 ₼',
      image: asset('peleng-krevetkalar-ag-caxır-sousu-ile.jpg'),
    },
    {
      name: 'Toyuq qanadları BBQ Sousu ilə',
      description: 'Toyuq qanadları, BBQ sous',
      price: '12 ₼',
      image: asset('toyuq-qanadlari-BBQ-sousu-ile.jpg'),
    },
    {
      name: 'Toyuq nuggets',
      description: 'Toyuq file, suxari, yumurta, kartof fri',
      price: '14 ₼',
      image: asset('toyuq-nuggets.jpg'),
    },
    {
      name: 'Qızardılmış Düşbərə',
      description: '',
      price: '8 ₼',
      image: asset('qizardilmis-dusbere.jpg'),
    },
    {
      name: 'Krevetka Panko',
      description: 'Krevetka,suxari,yumurta,un,sweet chili sous',
      price: '16 ₼',
      image: asset('krevetka-panko.jpg'),
    },
    {
      name: 'Mozzarella Çubuqları',
      description: 'Mozzarella pendir,suxari,yumurta,sweet chili sous,un',
      price: '14 ₼',
      image: asset('mozzarella-cubuqlari.jpg'),
    },
  ],
}

const saladClassics = [
  {
    name: 'Xırçıltılı toyuq salatı(yeni)',
    description: '',
    price: '12 ₼',
    image: asset('xırcıltılı-toyuq-salatı(yeni).jpg'),
  },
  {
    name: 'Sezar salatı - qızılbalıq ilə',
    description: '',
    price: '20 ₼',
    image: asset('sezar-salatı-qızılbalıq-ile.jpg'),
  },
  {
    name: 'Sezar salatı - krevet ilə',
    description: '',
    price: '18 ₼',
    image: asset('sezar-salatı-krevet-ile.jpg'),
  },
  {
    name: 'Sezar salatı - toyuq ilə',
    description: '',
    price: '16 ₼',
    image: asset('sezar-salatı-toyuq-ile.jpg'),
  },
  {
    name: 'Tay salat - can əti ilə',
    description: '',
    price: '18 ₼',
    image: asset('tay-salat-can-əti-ilə.jpg'),
  },
  {
    name: 'Yunan salatı',
    description: '',
    price: '10 ₼',
    image: asset('yunan-salati.jpg'),
  },
]

const teaDrinks = [
  {
    name: 'Çay Dəstgahı',
    description:
      'Çay - 2 çaynik, çiyələk mürəbbəsi, ağ gilas mürəbbəsi, ağ və qara kişmiş, ərik qurusu, ananas qurusu, kivi qurusu, xurma, fındıq ləpə, qoz ləpə, yer fıstığı, lokum',
    price: '50 ₼',
    image: placeholderImage,
  },
  { name: 'Yaşıl çay (çaynik)', description: '', price: '14 ₼', image: placeholderImage },
  { name: 'Qara çay (çaynik)', description: '', price: '14 ₼', image: placeholderImage },
  { name: 'Fincan çay', description: '', price: '3 ₼', image: placeholderImage },
]

const coffeeDrinks = [
  { name: 'Ice latte', description: '', price: '8 ₼', image: placeholderImage },
  { name: 'Raf', description: '', price: '8 ₼', image: placeholderImage },
  { name: 'Karamel Latte', description: '', price: '10 ₼', image: placeholderImage },
  { name: 'Mocha', description: '', price: '9 ₼', image: placeholderImage },
  { name: 'Latte', description: '', price: '8 ₼', image: placeholderImage },
  { name: 'Cappuccino', description: '', price: '9 ₼', image: placeholderImage },
  { name: 'Flat White', description: '', price: '8 ₼', image: placeholderImage },
  { name: 'Buzlu Americano', description: '', price: '7 ₼', image: placeholderImage },
  { name: 'Frappuçino', description: '', price: '9 ₼', image: placeholderImage },
  { name: 'Americano', description: '', price: '6 ₼', image: placeholderImage },
  { name: 'Espresso Double', description: '', price: '7 ₼', image: placeholderImage },
  { name: 'Espresso', description: '', price: '5 ₼', image: placeholderImage },
  { name: 'Türk qəhvəsi', description: '', price: '6 ₼', image: placeholderImage },
]

const coldSoftDrinks = [
  { name: 'Su qazlı/qazsız (750 ml)', description: '', price: '8 ₼', image: placeholderImage },
  { name: 'Su qazlı/qazsız (330 ml)', description: '', price: '4 ₼', image: placeholderImage },
  { name: 'Coca Cola Zero', description: '', price: '6 ₼', image: placeholderImage },
  { name: 'Sprite', description: '', price: '6 ₼', image: placeholderImage },
  { name: 'Tonik', description: '', price: '6 ₼', image: placeholderImage },
  { name: 'Red Bull', description: '', price: '9 ₼', image: placeholderImage },
  { name: 'Meyvə şirəsi (0.25 lt)', description: '', price: '4 ₼', image: placeholderImage },
  { name: 'Kompot', description: '', price: '6 ₼', image: placeholderImage },
  { name: 'Fanta', description: '', price: '6 ₼', image: placeholderImage },
  { name: 'Ayran', description: '', price: '3 ₼', image: placeholderImage },
  { name: 'Coca Cola', description: '', price: '6 ₼', image: placeholderImage },
  { name: 'Ev Sayağı Limonad', description: '', price: '8 ₼', image: placeholderImage },
  { name: 'Ice Tea', description: '', price: '6 ₼', image: placeholderImage },
  { name: 'Gürcüstan Limonadı', description: '', price: '6 ₼', image: placeholderImage },
  { name: 'Meyvə şirəsi (1 lt)', description: '', price: '10 ₼', image: placeholderImage },
]

const freshJuices = [
  { name: 'Portağal şirəsi', description: '', price: '8 ₼', image: placeholderImage },
]

const alcoholicGroups = {
  Araq: [
    { name: 'Absolut (4cl)', description: 'Araq', price: '8 ₼', image: placeholderImage },
    { name: 'XAN 1860 (Şüşə)', description: 'Araq', price: '105 ₼', image: placeholderImage },
    { name: 'Finlandiya (0.5 LT)', description: 'Araq', price: '45 ₼', image: placeholderImage },
    { name: 'Grey Goose (4 CL)', description: 'Araq', price: '9 ₼', image: placeholderImage },
    { name: 'Xan Almaz (0.7 lt)', description: 'Araq', price: '55 ₼', image: placeholderImage },
    { name: 'Xan Sapphire (0.7 lt)', description: 'Araq', price: '35 ₼', image: placeholderImage },
    { name: 'Grey Goose (0.7 lt)', description: 'Araq', price: '110 ₼', image: placeholderImage },
    { name: 'Finlandiya (1 lt)', description: 'Araq', price: '85 ₼', image: placeholderImage },
    { name: 'Absolute (1 lt)', description: 'Araq', price: '85 ₼', image: placeholderImage },
    { name: 'Xan Sapphire (4 CL)', description: 'Araq', price: '4 ₼', image: placeholderImage },
    { name: 'Absalute (0.5 lt)', description: 'Araq', price: '60 ₼', image: placeholderImage },
    { name: 'Finlandiya (0.7 lt)', description: 'Araq', price: '75 ₼', image: placeholderImage },
  ],
  Pivələr: [
    { name: 'Xirdalan (0.5) Bottle', description: 'Pivə', price: '8 ₼', image: placeholderImage },
    { name: 'Corona', description: 'Pivə', price: '11 ₼', image: placeholderImage },
    { name: 'Erdinger Bottle (0.5)', description: 'Pivə', price: '14 ₼', image: placeholderImage },
  ],
  Konyak: [
    { name: 'R-DELISLE XO (4 CL)', description: 'Konyak', price: '45 ₼', image: placeholderImage },
    { name: 'Xan 1860 Xo (0.7LT)', description: 'Konyak', price: '175 ₼', image: placeholderImage },
    { name: 'Xan 1860 XO (4 CL)', description: 'Konyak', price: '12 ₼', image: placeholderImage },
    { name: 'Martell VSOP (4 CL)', description: 'Konyak', price: '15 ₼', image: placeholderImage },
  ],
  Gin: [
    { name: 'Hendriks (4 CL)', description: 'Gin', price: '9 ₼', image: placeholderImage },
    { name: 'Bombay Sapphire (4 CL)', description: 'Gin', price: '8 ₼', image: placeholderImage },
    { name: 'Gordon (4 CL)', description: 'Gin', price: '7 ₼', image: placeholderImage },
  ],
  Tekila: [
    { name: 'Patron Silver (4CL)', description: 'Tekila', price: '15 ₼', image: placeholderImage },
    { name: 'Olmega Gold (4 CL)', description: 'Tekila', price: '8 ₼', image: placeholderImage },
    { name: 'Olmega Siver (4 CL)', description: 'Tekila', price: '8 ₼', image: placeholderImage },
    { name: 'Olmega Silver (1LT)', description: 'Tekila', price: '120 ₼', image: placeholderImage },
    { name: 'Sierra Silver (4 CL)', description: 'Tekila', price: '7 ₼', image: placeholderImage },
  ],
  Likor: [
    { name: 'Jagermeister 6 ed (4 CL)', description: 'Likor', price: '45 ₼', image: placeholderImage },
    { name: 'Martini (4 CL)', description: 'Likor', price: '5 ₼', image: placeholderImage },
    { name: 'Absent Xenta (4 CL)', description: 'Likor', price: '8 ₼', image: placeholderImage },
    { name: 'Cointreau (4 CL)', description: 'Likor', price: '7 ₼', image: placeholderImage },
    { name: 'Baileys (4 CL)', description: 'Likor', price: '7 ₼', image: placeholderImage },
    { name: 'Aperol (4 CL)', description: 'Likor', price: '7 ₼', image: placeholderImage },
    { name: 'Kahlua (4 CL)', description: 'Likor', price: '7 ₼', image: placeholderImage },
    { name: 'Campari (4 CL)', description: 'Likor', price: '7 ₼', image: placeholderImage },
    { name: 'Jagermeister (4 CL)', description: 'Likor', price: '8 ₼', image: placeholderImage },
    { name: 'Jagermeister (1LT)', description: 'Likor', price: '120 ₼', image: placeholderImage },
    { name: 'Sambuca (4 CL)', description: 'Likor', price: '10 ₼', image: placeholderImage },
  ],
  Viski: [
    { name: 'Black Label 4cl', description: 'Viski', price: '12 ₼', image: placeholderImage },
    { name: 'Chivas Regal18 4cl', description: 'Viski', price: '20 ₼', image: placeholderImage },
    { name: 'Glenfiddich12 4cl', description: 'Viski', price: '14 ₼', image: placeholderImage },
    { name: 'Ballantines 4 cl', description: 'Viski', price: '8 ₼', image: placeholderImage },
    { name: 'Gold Label 4cl', description: 'Viski', price: '15 ₼', image: placeholderImage },
    { name: 'Chivas Regal 18 (0.7LT)', description: 'Viski', price: '250 ₼', image: placeholderImage },
    { name: "Jack Daniels 4cl", description: 'Viski', price: '11 ₼', image: placeholderImage },
    { name: 'Red Label 4cl', description: 'Viski', price: '8 ₼', image: placeholderImage },
    { name: 'Jameson 4cl', description: 'Viski', price: '11 ₼', image: placeholderImage },
    { name: 'Chivas Regal 12 4cl', description: 'Viski', price: '9 ₼', image: placeholderImage },
    { name: 'Chivas Regal 12 (1 LT)', description: 'Viski', price: '200 ₼', image: placeholderImage },
    { name: 'Red Label (1 LT)', description: 'Viski', price: '130 ₼', image: placeholderImage },
    { name: 'Jameson (1 LT)', description: 'Viski', price: '155 ₼', image: placeholderImage },
    { name: "Jack Daniel's (1 LT)", description: 'Viski', price: '135 ₼', image: placeholderImage },
    { name: 'Jim Beam 4cl', description: 'Viski', price: '7 ₼', image: placeholderImage },
  ],
  Rom: [
    { name: 'Malibu (4 CL)', description: 'Rom', price: '9 ₼', image: placeholderImage },
    { name: 'Bacardi 4cl', description: 'Rom', price: '8 ₼', image: placeholderImage },
  ],
}

const cocktailGroups = {
  'Alkoqolsuz kokteyllər': [
    { name: 'Sunrise', description: 'Alkoqolsuz kokteyl.', price: '16 ₼', image: placeholderImage },
    { name: 'Energy Mojito', description: 'Alkoqolsuz kokteyl.', price: '12 ₼', image: placeholderImage },
    { name: 'Milkshake (çiyələkli)', description: 'Alkoqolsuz kokteyl.', price: '9 ₼', image: placeholderImage },
    { name: 'Milkshake (Şokoladlı)', description: 'Alkoqolsuz kokteyl.', price: '9 ₼', image: placeholderImage },
    { name: 'Milkshake (Vanilyalı)', description: 'Alkoqolsuz kokteyl.', price: '9 ₼', image: placeholderImage },
    { name: 'Mojito Virgin', description: 'Alkoqolsuz kokteyl.', price: '9 ₼', image: placeholderImage },
  ],
  'Alkoqollu kokteyllər': [
    { name: 'White Lady', description: 'Alkoqollu kokteyl.', price: '16 ₼', image: placeholderImage },
    { name: 'Dry Martini', description: 'Alkoqollu kokteyl.', price: '13 ₼', image: placeholderImage },
    { name: 'Negroni', description: 'Alkoqollu kokteyl.', price: '16 ₼', image: placeholderImage },
    { name: 'Americano', description: 'Alkoqollu kokteyl.', price: '14 ₼', image: placeholderImage },
    { name: 'Margarita', description: 'Alkoqollu kokteyl.', price: '14 ₼', image: placeholderImage },
    { name: 'Mojito', description: 'Alkoqollu kokteyl.', price: '14 ₼', image: placeholderImage },
    { name: 'Pina Kolada', description: 'Alkoqollu kokteyl.', price: '16 ₼', image: placeholderImage },
    { name: 'Cosmopolitan', description: 'Alkoqollu kokteyl.', price: '14 ₼', image: placeholderImage },
    { name: 'Long Iceland', description: 'Alkoqollu kokteyl.', price: '16 ₼', image: placeholderImage },
    { name: 'Sex On The Beach', description: 'Alkoqollu kokteyl.', price: '14 ₼', image: placeholderImage },
    { name: 'Aperol Spritz', description: 'Alkoqollu kokteyl.', price: '18 ₼', image: placeholderImage },
  ],
}

const wineGroups = {
  'Şərablar (qədəh)': [
    { name: 'Savalan (qədəh)', description: '', price: '10 ₼', image: placeholderImage },
    { name: 'Xan GöyGöl (qədəh)', description: '', price: '8 ₼', image: placeholderImage },
  ],
  'Şərablar (şüşə)': [
    { name: 'Xan GöyGöl (Şüşə)', description: '', price: '22 ₼', image: placeholderImage },
    { name: 'Xan Qarabağ (Şüşə)', description: '', price: '40 ₼', image: placeholderImage },
    { name: 'Xan Jemcujina (0.75 lt)', description: '', price: '40 ₼', image: placeholderImage },
    { name: 'Pearl Champagne', description: '', price: '45 ₼', image: placeholderImage },
    { name: 'Scanavino Prosecco', description: '', price: '85 ₼', image: placeholderImage },
    { name: 'Yelenendorf Muskat', description: '', price: '45 ₼', image: placeholderImage },
    { name: 'Savalan (Şüşə)', description: 'Ağ / Qırmızı / Rose', price: '55 ₼', image: placeholderImage },
    { name: 'Terra Leone Cabernet Sauvignon', description: 'Qırmızı', price: '50 ₼', image: placeholderImage },
    { name: 'Terra Leone Merlot', description: 'Qırmızı', price: '50 ₼', image: placeholderImage },
    { name: 'Terra Leone Sauvignon Blanc', description: 'Ağ', price: '50 ₼', image: placeholderImage },
    { name: 'Terra Leone Rose', description: 'Rose', price: '50 ₼', image: placeholderImage },
    { name: 'Terra Leone Pomegranate', description: 'Nar', price: '50 ₼', image: placeholderImage },
    { name: 'Chabiant', description: 'Ağ | Qırmızı', price: '60 ₼', image: placeholderImage },
    { name: 'Moet Chandon Imperial Brut', description: '', price: '350 ₼', image: placeholderImage },
  ],
}
export const menuCategories = [
  {
    id: 'biznes-lanc',
    title: 'Biznes Lanç',
    items: [
      {
        name: 'Biznes Lanç 15',
        description: 'Qiymət bir nəfər üçündür',
        price: '15 ₼',
        image: asset('business-lunch.jpg'),
      },
      {
        name: 'Biznes Lanç 20',
        description: 'Qiymət bir nəfər üçündür',
        price: '20 ₼',
        image: asset('business-lunch.jpg'),
      },
      {
        name: 'Biznes Lanç 25',
        description: 'Qiymət bir nəfər üçündür',
        price: '25 ₼',
        image: asset('business-lunch.jpg'),
      },
    ],
  },
  {
    id: 'gurcu-metbexi',
    title: 'Gürcü Mətbəxi',
    items: [
      {
        name: 'Xəngəl seti 2 nəfərlik',
        description:
          'Gürcü xəngəli - 8 ədəd, Yarpaq xəngəli - 2 ədəd, turşu assorti, acika, qatıq, 6 ədəd məzə, Gürcü limonadı(0.5l), Sirab premium(0.75l)',
        price: '49 ₼',
        image: asset('xengel-seti-2-neferlik.jpg'),
      },
      {
        name: 'Xəngəl seti 4 nəfərlik',
        description:
          'Gürcü xəngəli - 16 ədəd, Yarpaq xəngəli - 4 boşqab, turşu assorti, acika, qatıq, 6 ədəd məzə, 2 ədəd Gürcü limonadı(0.5l), 2 ədəd Sirab premium(0.75l)',
        price: '89 ₼',
        image: asset('xengel-seti-4-neferlik.jpg'),
      },
      {
        name: 'Gürcü xəngəli - 1 ədəd (qaynadılmış)',
        description: 'Qaynadılmış',
        price: '1,3 ₼',
        image: asset('gurcu-xengeli-qaynadilmis.jpg'),
      },
      {
        name: 'Gürcü xəngəli - 1 ədəd (qızardılmış)',
        description: 'Qızardılmış',
        price: '1.5 ₼',
        image: asset('gurcu-xengeli-qizardilmis.jpg'),
      },
      {
        name: 'Yarpaq xəngəli',
        description: '',
        price: '8 ₼',
        image: asset('yarpaq-xengeli.jpg'),
      },
      {
        name: 'Yarpaq xəngəli (yarım porsiya)',
        description: 'Yarım porsiya',
        price: '5 ₼',
        image: asset('yarpaq-xengeli.jpg'),
      },
      {
        name: 'Gürzə',
        description: 'Gürzə(quzu əti),qatıq',
        price: '12 ₼',
        image: asset('gurze.jpg'),
      },
      {
        name: 'Qızardılmış Gürzə',
        description: '',
        price: '12 ₼',
        image: asset('qizardilmis-gurze.jpg'),
      },
    ],
  },
  {
    id: 'seher-menyusu',
    title: 'Səhər menyusu',
    items: [
      {
        name: 'Səhər Yeməyi 2 Nəfərlik',
        description:
          'Pomidor yumurta, şokolad yağı, bal, qaymaq, kərə yağı, zeytun, holland pendiri, ağ pendir, pomidor, xiyar, kəsmik, mürəbbə, kolbasa, qızardılmış sosiska, siqara börək, blinçik, çörək, meyvə şirəsi(2 stəkan), çay',
        price: '40 ₼',
        image: asset('seher-yemeyi-2-neferlik.jpg'),
      },
      {
        name: 'Səhər Yeməyi 4 Nəfərlik',
        description:
          'Kükü, pomidor yumurta, omlet, şokolad yağı, bal, qaymaq, kərə yağı, zeytun, holland pendiri, ağ pendir, pomidor, xiyar, kəsmik, şirin kəsmik, mürəbbə, kolbasa, qızardılmış sosiska, siqara börək, blinçik, çörək, meyvə şirəsi(4 stəkan), çay',
        price: '65 ₼',
        image: asset('seher-yemeyi-4-neferlik.jpg'),
      },
      {
        name: 'İngilissayağı Səhər Yeməyi',
        description: 'Göz yumurta,qırmızı lobya,göbələk,pomidor,yumurtalı tost',
        price: '18 ₼',
        image: asset('ingilissayagi-seher-yemeyi.jpg'),
      },
      {
        name: 'Norveç Benedikt Norveç',
        description: 'Hisə verilmiş qızıl balıq, tost çörək, yumurta, ispanaq',
        price: '16 ₼',
        image: asset('norvec-benedikt-norvec.jpg'),
      },
      {
        name: 'Quymaq',
        description: 'Un, süt, qaymaq, bəhməz, darçın',
        price: '7 ₼',
        image: asset('quymaq.jpg'),
      },
      {
        name: 'Sucuklu Göz Yumurta',
        description: 'Sucuk, yumurta',
        price: '6 ₼',
        image: asset('sucuklu-goz-yumurta.jpg'),
      },
      {
        name: 'Kükü',
        description: 'Qarışıq qöyərti, yumurta, kərə yağı',
        price: '5 ₼',
        image: asset('kuku.jpg'),
      },
      {
        name: 'Pomidor yumurta',
        description: 'Pomidor, yumurta',
        price: '5 ₼',
        image: asset('pomidor-yumurta.jpg'),
      },
      {
        name: 'Omlet',
        description: 'Qaymaq,yumurta',
        price: '5 ₼',
        image: asset('omlet.jpg'),
      },
      {
        name: 'Göz Yumurta',
        description: 'Yumurta',
        price: '5 ₼',
        image: asset('goz-yumurta.jpg'),
      },
    ],
  },
  {
    id: 'qelyanaltilar',
    title: 'Qəlyanaltılar',
    items: [
      ...withGroup('Soyuq Qəlyanaltılar', appetizerGroups['Soyuq Qəlyanaltılar']),
      ...withGroup('İsti Qəlyanaltılar', appetizerGroups['İsti Qəlyanaltılar']),
    ],
  },
  {
    id: 'sorbalar',
    title: 'Şorbalar',
    items: [
      {
        name: 'Kremli Tomat şorbası',
        description: 'Pomidor,soğan,kərəviz,kök,tomat pasta',
        price: '6 ₼',
        image: asset('kremli-tomat-sorbasi.jpg'),
      },
      {
        name: 'Göbələk şorbası',
        description: 'Göbelek, qaymaq, soğan, sarımsaq',
        price: '7 ₼',
        image: asset('gobelek-sorbasi.jpg'),
      },
      {
        name: 'Mərci şorbası',
        description: 'Qırmizi mərci, kök, soğan, tomat pasta, nanə, limon',
        price: '5 ₼',
        image: asset('merci-sorbasi.jpg'),
      },
      {
        name: 'Toyuq şorbası',
        description: 'Kənd toyuqu,soğan,kök,bibər,göyərti',
        price: '6 ₼',
        image: asset('toyuq-sorbasi.jpg'),
      },
      {
        name: 'Düşbərə',
        description: 'Quzu əti, üzüm sirkəsi, nanə',
        price: '8 ₼',
        image: asset('dusbere.jpg'),
      },
    ],
  },
  {
    id: 'salatlar',
    title: 'Salatlar',
    items: [
      ...saladClassics,
      ...withGroup('VEQAN', veganSalads),
    ],
  },
  {
    id: 'avropa-metbexi',
    title: 'Avropa Mətbəxi',
    items: [
      {
        name: 'T–bone Steyk',
        description: 'demiglas sousu, qrildə tərəvəzlər',
        price: '55 ₼',
        image: asset('t–bone-steyk.jpg'),
      },
      {
        name: 'Dallas Steyk',
        description: 'Qrildə dana əti, kartof, istiotlu sous, pomidor, acı bibər, demi glasse sousu',
        price: '55 ₼',
        image: asset('dallas-steyk.jpg'),
      },
      {
        name: 'Medalyon Steyki',
        description: 'Can əti, zeytun yağı, qrildə badımcan, qrildə balqabaq, çeri pomidoru, acı bibər',
        price: '28 ₼',
        image: asset('medalyon-steyki.jpg'),
      },
      {
        name: 'Qrildə Qızılbalıq',
        description:
          'Qızılbalıq, pomidor, acı bibər, balqabaq, qaymaq, parmezan pendiri, qaymaqlı soya sousu, limon, balzamik sousu',
        price: '29 ₼',
        image: asset('qrilde-qizilbaliq.jpg'),
      },
      {
        name: 'Beef Stroganoff',
        description:
          'Can əti, ağ soğan, xiyar turşusu, göbələk, pomidor, qaymaq, qauda pendiri, parmezan pendiri',
        price: '29 ₼',
        image: asset('beef-stroganoff.jpg'),
      },
      {
        name: 'Chicken Suvi With Green Salad',
        description:
          'Toyuq filesi, balzamik qlaze, yaşıllıq, kartof, soya sousu, özəl sous, küncüt, bal, xardal',
        price: '20 ₼',
        image: asset('chicken-suvi-with-green-salad.jpg'),
      },
      {
        name: 'Toyuq çöpşiş',
        description:
          'toyuq, limon, pomidor, göyərti, portağal, aysberq, zeytun yağı, pomidor əzməsi',
        price: '18 ₼',
        image: asset('toyuq-çöpşiş.jpg'),
      },
      {
        name: 'Dorado With Vegetable',
        description:
          'Dorado balığı, rəngli bibər, limon, pomidor, zeytun yağı, yaşıllıq, xüsusi sous',
        price: '18 ₼',
        image: asset('dorado-with-vegetable.jpg'),
      },
      {
        name: 'Gordon Blue Toyuq ilə',
        description:
          'Hisə verilmiş toyuq filesi, vetçina, göbələk, qaymaq, çedar pendiri, yumurta, suxari, parmezan pendiri, xardal, kartof fri',
        price: '14 ₼',
        image: asset('gordon-blue-toyuq-ilə.jpg'),
      },
    ],
  },
  {
    id: 'milli-metbex',
    title: 'Milli Mətbəx',
    items: [
      {
        name: 'Qarışıq sac (yeni)',
        description: 'Can əti, quzu əti, toyuq filesi, rəngli bibər, lavaş, pomidor, acı bibər, soğan',
        price: '49 ₼',
        image: asset('Qarışıq sac(yeni).jpg'),
      },
      {
        name: 'Beyti kabab (yeni)',
        description: 'Quzu əti, mal əti, soğan, lavaş, rəngli bibər',
        price: '33 ₼',
        image: asset('Beyti kabab(yeni).jpg'),
      },
      {
        name: 'Dolma',
        description: 'üzum yarpağı, quzu əti, yumru düyü, göyərti, qatıq',
        price: '16 ₼',
        image: asset('Dolma.jpg'),
      },
      {
        name: 'Turşulu Plov',
        description:
          'Quzu əti, uzun düyü, albuxara, qayısı, kişmiş (sarı), şabalıd, ağ soğan, kərə yağı',
        price: '16 ₼',
        image: asset('Turşulu Plov.jpg'),
      },
      {
        name: 'Quzu Nar Qovurması',
        description: 'Quzu əti, kartof, nar turşusu, soğan, göyərti',
        price: '21 ₼',
        image: asset('Quzu Nar Qovurması.jpg'),
      },
      {
        name: 'Forel balığı',
        description: 'Forel balığı, narşərab, limon, qırmızı soğan',
        price: '20 ₼',
        image: asset('Forel balığı.jpg'),
      },
      {
        name: 'Çoban Qovurma',
        description: 'Can əti, ağ soğan, pomidor, bibər, kartof, kərə yağı, göyərti',
        price: '21 ₼',
        image: asset('Çoban Qovurma.jpg'),
      },
      {
        name: 'Qrildə Qızardılmış Quzu Qabırğa',
        description:
          'Quzu əti, qızardılmış tərəvəzlər, sumax, tartar sous, qırmızı soğan, ağ soğan',
        price: '21 ₼',
        image: asset('Qrildə Qızardılmış Quzu Qabırğa.jpg'),
      },
      {
        name: 'Sac çolpa',
        description:
          'Kənd çolpası, kartof, bibər, pomidor, göbələk, badımcan, ağ soğan, lavaş',
        price: '28 ₼',
        image: asset('Sac çolpa.jpg'),
      },
      {
        name: 'Sac Quzu',
        description:
          'Quzu əti, kartof, bibər, göbələk, pomidor, lavaş, yaşıllıq, badımcan, kərə yağı',
        price: '34 ₼',
        image: asset('Sac Quzu.jpg'),
      },
    ],
  },
  {
    id: 'vegan',
    title: 'Veqan',
    items: [
      {
        name: 'Veqan çöpşiş - Avocado Quinoa ilə',
        description: 'Göbələk, pomidor, bibər, avokado, kinoya',
        price: '23 ₼',
        image: asset('Veqan çöpşiş - Avocado Quinoa ilə.jpg'),
      },
      {
        name: 'Kartoflu qızardılmış tərəvəzlər',
        description: 'Göbələk, kartof, pomidor, ispanaq, noxud, qaymaq, parmezan pendiri',
        price: '15 ₼',
        image: asset('Kartoflu qızardılmış tərəvəzlər.jpg'),
      },
      {
        name: 'Pomidor Sousunda Dənli Bitkilərlə Düyü',
        description: 'Pomidor, dənli bitkilər, düyü',
        price: '14 ₼',
        image: asset('Pomidor Sousunda Dənli Bitkilərlə Düyü.jpg'),
      },
    ],
  },
  {
    id: 'fast-food',
    title: 'Fast Food',
    items: [
      {
        name: 'Tacos (yeni)',
        description: 'Toyuq file, acı bibər, lobya, qarğıdalı dənələri',
        price: '13 ₼',
        image: asset('Tacos(yeni).jpg'),
      },
      {
        name: 'Toyuq Quesadilla (yeni)',
        description:
          'Toyuq əti, çeddar pendiri, mozzarella pendiri, avocado, rəngli bibər, oreqano, soğan, sarımsaq',
        price: '16 ₼',
        image: asset('Toyuq Quesadilla(yeni).jpg'),
      },
      {
        name: 'Çizburger (300q)',
        description:
          'Dana əti, ağ soğan, qırmızı soğan, burger çörək, kartof fri, mayonez, pomidor, aysberq, xiyar, xardal sousu, çeddar pendiri',
        price: '19 ₼',
        image: asset('Çizburger (300q).jpg'),
      },
      {
        name: 'Toyuq Burger (300q)',
        description:
          'Toyuq file, ağ soğan, burger çörəyi, kartof fri, pomidor, xiyar, xardal, qırmızı soğan, qauda pendiri, duru yağ',
        price: '14 ₼',
        image: asset('Toyuq Burger (300q).jpg'),
      },
      {
        name: 'Club Sandwich (300q)',
        description:
          'Tost çörək, toyuq file, yumurta, pendir, kartof fri, ketçup, mayonez, aysberq, xiyar, pomidor, qırmızı soğan',
        price: '14 ₼',
        image: asset('Club Sandwich (300q).jpg'),
      },
      {
        name: 'Sezar Roll',
        description:
          'Lavaş, toyuq file, pomidor, duzlu xiyar, mayonez, kartof fri, aysberq, duru yağ',
        price: '11 ₼',
        image: asset('Sezar Roll.jpg'),
      },
    ],
  },
  {
    id: 'pastalar',
    title: 'Pastalar',
    items: [
      {
        name: 'Pendir Souslu Penne',
        description:
          'Penne pasta, süd, un, çeddar pendir, qırmızı soğan, rəngli bibər',
        price: '9 ₼',
        image: asset('Pendir Souslu Penne.jpg'),
      },
      {
        name: 'Penne Arrabbiata',
        description: 'Penne pasta, arrabbiata sous, parmezan pendiri, yaşıllıq',
        price: '8 ₼',
        image: asset('Penne Arrabbiata.jpg'),
      },
      {
        name: 'Spaghetti Bolognese',
        description: 'Spaghetti pasta, bolonez sousu, yaşıllıq, parmezan pendiri, pomidor',
        price: '16 ₼',
        image: asset('Spaghetti Bolognese.jpg'),
      },
      {
        name: 'Fettuccine Qızıl Balıq ilə',
        description:
          'Fettuccine pasta, qızıl balıq, duru yağ, parmezan pendiri, qaymaq, yaşıllıq, zeytun yağı',
        price: '21 ₼',
        image: asset('Fettuccine Qızıl Balıq ilə.jpg'),
      },
      {
        name: 'Fettuccine Toyuqlu - göbələkli',
        description:
          'Fettucini pasta, toyuq filesi, göbələk, qaymaq, parmezan pendiri, yaşıllıq, çeri pomidor',
        price: '16 ₼',
        image: asset('Fettuccine Toyuqlu -göbələkli.jpg'),
      },
    ],
  },
  {
    id: 'qarnirler',
    title: 'Qarnirlər',
    items: [
      { name: 'Düyü', description: '', price: '4 ₼', image: asset('Düyü.jpg') },
      { name: 'Püre', description: '', price: '4 ₼', image: asset('Püre.jpg') },
      { name: 'Kartof Fri', description: '', price: '4 ₼', image: asset('Kartof Fri.jpg') },
      { name: 'Evsayağı Kartof', description: '', price: '5 ₼', image: asset('Evsayağı Kartof.jpg') },
      { name: 'Tərəvəz Qrildə', description: '', price: '5 ₼', image: asset('Tərəvəz Qrildə.jpg') },
    ],
  },
  {
    id: 'desert',
    title: 'Desert',
    items: [
      { name: 'Brownie Dondurma ilə', description: '', price: '13 ₼', image: asset('Brownie Dondurma Ilə.jpg') },
      { name: 'San Sebastian çizkeyk', description: '', price: '13 ₼', image: asset('San Sebastian çizkeyk.jpg') },
      { name: 'Ballı Tort', description: '', price: '12 ₼', image: asset('Ballı Tort.jpg') },
      { name: 'Çiyələkli Cheesecake', description: '', price: '11 ₼', image: asset('Çiyələkli Cheesecake.jpg') },
      { name: 'Dondurma', description: 'Seçilmiş dadlar.', price: '10 ₼', image: asset('Dondurma.jpg') },
      { name: 'Meyvə Assorti', description: '', price: '15 ₼', image: asset('Meyvə Assorti.jpg') },
      { name: 'Mürəbbə', description: '', price: '7 ₼', image: placeholderImage },
    ],
  },
  {
    id: 'alkoqolsuz-ickiler',
    title: 'Alkoqolsuz İçkilər',
    items: [
      ...withGroup('Çaylar', teaDrinks),
      ...withGroup('Kofe', coffeeDrinks),
      ...withGroup('Soyuq içkilər', coldSoftDrinks),
      ...withGroup('Təzə sıxılmış şirələr', freshJuices),
    ],
  },
  {
    id: 'alkoqollu-ickiler',
    title: 'Alkoqollu İçkilər',
    items: [
      ...withGroup('Araq', alcoholicGroups.Araq),
      ...withGroup('Pivələr', alcoholicGroups.Pivələr),
      ...withGroup('Konyak', alcoholicGroups.Konyak),
      ...withGroup('Gin', alcoholicGroups.Gin),
      ...withGroup('Tekila', alcoholicGroups.Tekila),
      ...withGroup('Likor', alcoholicGroups.Likor),
      ...withGroup('Viski', alcoholicGroups.Viski),
      ...withGroup('Rom', alcoholicGroups.Rom),
    ],
  },
  {
    id: 'kokteyller',
    title: 'Kokteyllər',
    items: [
      ...withGroup('Alkoqolsuz kokteyllər', cocktailGroups['Alkoqolsuz kokteyllər']),
      ...withGroup('Alkoqollu kokteyllər', cocktailGroups['Alkoqollu kokteyllər']),
    ],
  },
  {
    id: 'serablar',
    title: 'Şərablar',
    items: [
      ...withGroup('Şərablar (qədəh)', wineGroups['Şərablar (qədəh)']),
      ...withGroup('Şərablar (şüşə)', wineGroups['Şərablar (şüşə)']),
    ],
  },
]
