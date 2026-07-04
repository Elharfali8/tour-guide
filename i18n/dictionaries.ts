import { defaultLocale, type Locale } from './config'

export const dictionaries = {
  en: {
    metadata: {
      title: 'TFM Tours',
      description: 'Private tours and professional driver services across Morocco',
    },
    nav: {
      logo: 'LOGO',
      links: [
        { name: 'Home', href: '/' },
        { name: 'Why Choose Us', href: '/#why-choose-us' },
        { name: 'Popular Tours', href: '/#popular-tours' },
        { name: 'Destinations', href: '/#destinations' },
        { name: 'Activities', href: '/#activities' },
        { name: 'Contact', href: '/#contact' },
      ],
    },
    hero: {
      badge: 'Youssef Qostassi - Professional Private Driver',
      title: 'Discover Morocco',
      titleAccent: 'Your Way',
      description:
        'Comfortable private travel, breathtaking places, and unforgettable memories across Morocco with Youssef Qostassi.',
      primaryCta: 'Explore Tours',
      secondaryCta: 'Contact Us',
    },
    whyChooseUs: {
      badge: 'Why Choose Us',
      title: 'A calmer, more personal way to explore Morocco',
      description:
        'We combine local knowledge, private transportation, and flexible planning to make every journey feel smooth, safe, and beautifully tailored to you.',
      primaryCta: 'Explore Tours',
      secondaryCta: 'Contact Us',
      imageLabel: 'Local expertise',
      imageText:
        'From Marrakech to the Atlas Mountains, coast, desert, and imperial cities, your route is planned with comfort and care.',
      features: [
        {
          title: 'Comfortable Private Vehicles',
          description:
            'Travel in clean, air-conditioned cars and vans prepared for couples, families, groups, and business travelers.',
        },
        {
          title: 'Safe Local Driver',
          description:
            'Enjoy the confidence of an experienced Morocco driver who knows the roads, routes, timing, and local culture.',
        },
        {
          title: 'Flexible Itineraries',
          description:
            'Start when you want, stop where you like, and shape the journey around your pace, interests, and travel style.',
        },
        {
          title: 'Punctual Transfers',
          description:
            'Reliable airport, hotel, and city transfers with clear communication and smooth pickup coordination.',
        },
        {
          title: 'Authentic Routes',
          description:
            'Discover scenic roads, Berber villages, desert gateways, coastal towns, valleys, kasbahs, and hidden viewpoints.',
        },
        {
          title: 'Premium Experience',
          description:
            'A polished private travel service with thoughtful details, warm hospitality, and comfort from start to finish.',
        },
      ],
    },
    services: {
      badge: 'Our Services',
      title: 'Travel Morocco Your Way',
      description:
        'From airport transfers to unforgettable private tours, we provide comfortable, safe, and personalized transportation experiences across Morocco.',
      learnMore: 'Learn More',
      items: [
        {
          title: 'Private Driver',
          description:
            'Enjoy a professional private driver for business trips, sightseeing, or daily transportation with complete flexibility.',
        },
        {
          title: 'Airport Transfers',
          description:
            'Reliable pickups and drop-offs from all major Moroccan airports with punctual service and comfortable vehicles.',
        },
        {
          title: 'Day Trips',
          description:
            "Discover Morocco's most beautiful destinations including Ouzoud, Ourika Valley, Essaouira, Agafay, and more.",
        },
        {
          title: 'Multi-Day Tours',
          description:
            'Explore the Sahara Desert, imperial cities, mountains, and coastal towns through customized multi-day adventures.',
        },
        {
          title: 'Custom Tours',
          description:
            'Build your own itinerary and travel at your own pace with a fully personalized private experience.',
        },
        {
          title: 'VIP Transport',
          description:
            'Luxury transportation for business travelers, weddings, special events, and premium experiences.',
        },
      ],
    },
    popularTours: {
      badge: 'Popular Tours',
      title: 'Guest Favorite Morocco Experiences',
      description:
        'Handpicked private tours designed for comfort, beautiful routes, and unforgettable moments with a trusted local driver.',
      seeMore: 'See More Tours',
      cardCta: 'See More',
    },
    toursPage: {
      badge: 'Morocco Tours',
      title: 'Choose Your Private Morocco Experience',
      description:
        'Explore our most requested private tours, from Marrakech city discoveries to mountain valleys and scenic day trips with a comfortable private driver.',
      backHome: 'Back Home',
      planCustom: 'Plan Custom Tour',
    },
    tours: [
      {
        slug: 'marrakech-city-tour',
        title: 'Marrakech',
        description:
          'Discover Marrakech differently on a guided half-day tour with your professional guide.',
        image: '/destinations/marrakech.jpg',
        caption:
          'Discover Marrakech differently on a guided half-day tour with your professional guide.',
        overview:
          'Discover Marrakech differently on a guided half-day tour with your professional guide. At 9:00 AM, your driver picks you up from your accommodation to immerse you in the second largest imperial city of Morocco. This complete visit allows you to discover the must-see monuments, historical places, and most emblematic cultural sites of Marrakech: the Koutoubia Mosque, the Saadian Tombs, the Majorelle Garden, the Bahia Palace, and the famous souks of the medina.',
        highlights: [
          'Koutoubia Mosque: the symbol of Marrakech, built by the Almohads in the 12th century, known for its refined architecture and minaret that inspired the Giralda of Seville and the Hassan Tower in Rabat.',
          'Jemaa El-Fna Square: the living heart of the city, listed as UNESCO Intangible Cultural Heritage, with snake charmers, storytellers, musicians, artisans, and a unique atmosphere to experience at least once.',
          'Menara Gardens: a peaceful space with a splendid view of the Atlas Mountains, perfect for enjoying a quiet moment in the middle of the lively city.',
          "Saadian Tombs: a 16th-century royal necropolis and one of Marrakech's historical treasures, discovered in 1917 and known for Italian marble columns and carved wooden ceilings.",
          'Majorelle Garden: created by Jacques Majorelle and restored by Yves Saint Laurent, this botanical garden is an artistic haven with exotic plants, colorful basins, and the Berber Museum.',
          'Bahia Palace: an architectural masterpiece blending Moroccan and Andalusian styles, built in the 19th century and reflecting the elegance and refinement of old Moroccan palaces.',
          "Marrakech Souks: get lost in the colorful maze of the medina, including the tanners' souk, potters' souk, dyers' souk, leather souk, jewelry, spices, and local crafts.",
        ],
        included: [
          'Professional driver',
          'Experienced local guide',
          'Private air-conditioned transportation',
          'Fuel included',
        ],
        excluded: [
          'Lunch',
          'Entrance fees to monuments',
          'Drinks',
        ],
        itinerary: [
          {
            title: '9:00 AM - Pickup at your accommodation',
            description: 'Your driver picks you up from your accommodation.',
          },
          {
            title: 'Marrakech iconic monuments',
            description: 'Discover the iconic monuments of Marrakech.',
          },
          {
            title: 'Historic gardens',
            description: 'Walk through the historic gardens.',
          },
          {
            title: 'Souks',
            description: 'Enjoy a guided visit of the souks.',
          },
          {
            title: 'Local culture and traditions',
            description: 'Immerse yourself in local culture and traditions.',
          },
          {
            title: 'Jemaa El-Fna Square',
            description: 'End the visit at Jemaa El-Fna Square.',
          },
          {
            title: 'A half-day of history, culture, and emotion',
            description:
              'Ideal for those who wish to understand the true soul of Marrakech.',
          },
        ],
      },
      {
        slug: 'ourika-valley-day-trip',
        title: 'Full Day Trip to the Ourika Valley From Marrakech',
        description:
          'Set off for a full day of exploration in the magnificent Ourika Valley, located in the heart of the High Atlas Mountains.',
        image: '/destinations/ourika.jpg',
        caption:
          'Set off for a full day of exploration in the magnificent Ourika Valley from Marrakech.',
        overview:
          'Set off for a full day of exploration in the magnificent Ourika Valley, located in the heart of the High Atlas Mountains. If you love nature, calm, and want to discover the authentic life of the Berbers, this private excursion is the ideal choice. Your professional and certified driver will accompany you throughout the journey, allowing you to experience it at your own pace: green landscapes, traditional villages, waterfalls, and a warm local atmosphere. A unique immersion close to the inhabitants that will give your day an unforgettable character.',
        highlights: [
          'Discover the breathtaking landscapes of the Ourika Valley.',
          'Visit a Berber family and immerse yourself in their traditional way of life.',
          'Enjoy a guided hike to the famous Setti Fatma waterfalls.',
          'Have lunch in a local restaurant facing the river (optional).',
        ],
        included: [
          'Hotel pick-up and drop-off',
          'Professional driver (French-speaking or English-speaking)',
          'Private air-conditioned transportation',
          'Fuel included',
        ],
        excluded: [
          'Lunch and drinks not included',
          'Local hiking guide (paid option)',
        ],
        itinerary: [
          {
            title: 'Departure from Marrakech',
            description:
              'After your departure from Marrakech, you will cross the plains before reaching the first Berber villages nestled at the foot of the Atlas Mountains.',
          },
          {
            title: 'Organic aromatic gardens',
            description: 'Discover traditional medicinal plants.',
          },
          {
            title: 'Berber house',
            description:
              'Taste mint tea and learn more about Berber culture and daily life.',
          },
          {
            title: 'Weekly market',
            description:
              'If your visit is on a Monday or Friday, discover an authentic moment where locals have sold and bought their products for generations.',
          },
          {
            title: 'Setti Fatma waterfalls',
            description:
              'Reach the waterfalls after a short hike accompanied by a local guide.',
          },
          {
            title: 'Barbary monkeys',
            description: 'Often visible during the journey.',
          },
          {
            title: 'Riverside restaurant',
            description:
              'Enjoy a relaxing moment in a restaurant by the river, a perfect setting to unwind before returning to Marrakech.',
          },
          {
            title: 'Return to Marrakech',
            description: 'Return to Marrakech around 5:00 PM.',
          },
        ],
      },
      {
        slug: 'agafay-desert-day-trip',
        title: 'Agafay Desert Quad Adventure',
        description:
          'Take a break from the bustle of Marrakech and discover the magnificent Agafay Desert.',
        image: '/activities/quad.jpg',
        caption:
          'Take a break from the bustle of Marrakech and discover the magnificent Agafay Desert.',
        overview:
          'Take a break from the bustle of Marrakech and discover the magnificent Agafay Desert. This rocky desert, located at the gates of the city, offers surprising landscapes, a peaceful atmosphere, and unforgettable activities such as camel rides, quad biking, and a delicious traditional lunch. It is the ideal excursion for a relaxing and exotic day without long hours on the road to the Sahara.',
        highlights: [
          'Visit the Agafay Desert, former nomadic territory in the 18th century.',
          'Enjoy a nature escape only a few kilometers from Marrakech.',
          'Take a camel ride or experience a quad adventure (optional).',
          'Share a traditional lunch with a local family and discover their way of life.',
          'Cross authentic Berber villages with views of the majestic Atlas Mountains.',
          'Experience a peaceful day combining adventure, culture, and magnificent panoramas.',
        ],
        included: [
          'Pick-up and drop-off at your accommodation',
          'Professional driver / guide',
          'Private air-conditioned transportation',
          'Fuel included',
        ],
        excluded: [
          'Lunch and drinks (unless option selected)',
          'Optional activities (quad, camel, etc.)',
        ],
        itinerary: [
          {
            title: 'Around 9:00 AM - Pickup in Marrakech',
            description:
              'Your day begins around 9:00 AM with pick-up at your hotel or riad in Marrakech.',
          },
          {
            title: 'Departure to the Agafay Desert',
            description:
              'You gradually leave the city to reach the rocky landscapes of the Agafay Desert, often called the desert of Marrakech.',
          },
          {
            title: 'Camel ride or quad excursion',
            description:
              'On site, you can take a peaceful camel ride or go on a quad excursion to explore the desert tracks and hills.',
          },
          {
            title: 'Open desert setting',
            description:
              'The setting is calm and open, with spectacular views, perfect for taking photos and recharging.',
          },
          {
            title: 'Traditional lunch with a local family',
            description:
              'After your activities, you will be welcomed by a local family to share a traditional lunch if you choose this option, and discover their hospitality, customs, and daily life.',
          },
          {
            title: 'Atlas surroundings',
            description:
              'In the afternoon, your excursion continues toward the Atlas surroundings, where you can admire rolling landscapes and enjoy superb panoramas of the mountains.',
          },
          {
            title: 'Return to Marrakech',
            description:
              'At the end of the day, you return to Marrakech; arrival is generally around 5:00 PM.',
          },
        ],
      },
      {
        slug: 'imlil-valley-day-trip',
        title: 'Day Trip from Marrakech to the Imlil Valley',
        description:
          'Set off for an adventure in the High Atlas Mountains and discover the Imlil Valley.',
        image: '/destinations/imlil.jpg',
        caption:
          'Set off for a magnificent adventure in the heart of the High Atlas Mountains and discover the Imlil Valley.',
        overview:
          'Set off for a magnificent adventure in the heart of the High Atlas Mountains and discover the Imlil Valley, a must-see place for lovers of nature and authentic landscapes. Your driver guide will take you through traditional Berber villages, where you can explore local life, breathe the pure mountain air, and admire the iconic panoramas of the Toubkal massif. Enjoy a guided hike, a visit to the Berber market depending on the day, a traditional lunch as an option, and unique moments in nature. An immersive experience rich in encounters and human discoveries.',
        highlights: [
          'Explore traditional Berber villages and the natural beauty of the Atlas Mountains.',
          'Discover local culture and Berber traditions with a professional mountain guide.',
          'Visit the weekly Berber market depending on the day: Tuesday or Saturday.',
          'Cross orchards, rivers, and valleys while enjoying breathtaking scenery.',
          "Visit a women's argan oil cooperative.",
          'Enjoy a 1.5 to 2 hour hike with panoramic views.',
          'Have lunch in a traditional restaurant facing the mountain or at Kasbah Toubkal (option).',
        ],
        included: [
          'Hotel pick-up and drop-off',
          'Professional driver (French-speaking or English-speaking)',
          'Private air-conditioned transportation',
          'Fuel',
        ],
        excluded: [
          'Lunch and drinks',
          'Local hiking guide (paid option)',
        ],
        itinerary: [
          {
            title: '9:00 AM - Hotel pickup',
            description:
              'Your day begins at 9:00 AM with pick-up at your hotel. You will take the road toward the magnificent green landscapes of the High Atlas.',
          },
          {
            title: 'First stop: Tahanaout',
            description:
              'Discover a charming village known for its lively Berber market every Tuesday, an ideal opportunity to observe local life, fresh products, and traditional crafts.',
          },
          {
            title: 'Second stop: Asni',
            description:
              'Famous for its Saturday market, Asni is a lively crossroads where mountain inhabitants come to sell their products. Possibility of taking a mule or camel ride (optional).',
          },
          {
            title: 'Imlil',
            description:
              'Continue toward Imlil, an iconic mountain village located at the foot of Mount Toubkal, the highest peak in North Africa.',
          },
          {
            title: 'Guided hike',
            description:
              'Meet a local mountain guide who will take you on a guided hike around the village, waterfalls, and surrounding valleys.',
          },
          {
            title: 'Traditional lunch',
            description:
              'After the hike, enjoy a traditional lunch in a local restaurant or at Kasbah Toubkal (optional), offering a spectacular view of the mountains.',
          },
          {
            title: 'Return to Marrakech',
            description:
              'At the end of the afternoon, return to Marrakech with unforgettable memories of your day.',
          },
        ],
      },
      {
        slug: 'ouarzazate-ait-ben-haddou',
        title: 'Day Trip from Marrakech to Ouarzazate and Ait Ben Haddou',
        description:
          'Journey through the High Atlas Mountains to discover the UNESCO-listed Ait Ben Haddou, the cinematic city of Ouarzazate, and breathtaking Moroccan landscapes.',
        image: '/destinations/ouarzazat.jpg',
      },
      {
        slug: 'marrakech-palmeraie-camel-ride',
        title: 'Marrakech Camel Riding Experience',
        description:
          "Enjoy a peaceful camel ride through Marrakech's Palm Grove, visit Berber villages, wear traditional Tuareg clothing, and share Moroccan mint tea.",
        image: '/activities/camel-riding.jpg',
      },
    ],
    destinations: {
      badge: 'Top Destinations',
      title: 'Explore the Best of Morocco',
      description:
        "From the mountains to the coast, discover Morocco's most beautiful places with a local driver you can trust.",
      planTrip: 'Plan this trip',
      items: [
        {
          title: 'Ourika Valley',
          description:
            'Mountains, waterfalls, Berber villages, and a refreshing escape from Marrakech.',
          imageSrc: '/destinations/ourika.jpg',
          href: '/tours/ourika-valley-day-trip',
        },
        {
          title: 'Marrakech',
          description:
            'Historic palaces, colorful souks, gardens, monuments, and the energy of the Red City.',
          imageSrc: '/destinations/marrakech.jpg',
          href: '/tours/marrakech-city-tour',
        },
        {
          title: 'Essaouira',
          description:
            'Ocean air, fortified medina streets, seafood, art shops, and a relaxed coastal rhythm.',
          imageSrc: '/destinations/essouira.jpg',
          href: '/#contact',
        },
        {
          title: 'Ouzoud Waterfalls',
          description:
            "One of North Africa's most beautiful waterfalls with scenic viewpoints and local nature.",
          imageSrc: '/destinations/ouzoud.jpg',
          href: '/#contact',
        },
        {
          title: 'Ouarzazate',
          description:
            'Kasbahs, Atlas Mountain roads, cinematic landscapes, and Ait Ben Haddou heritage.',
          imageSrc: '/destinations/ouarzazat.jpg',
          href: '/tours/ouarzazate-ait-ben-haddou',
        },
      ],
    },
    activities: {
      badge: 'Exciting Activities',
      title: 'Adventures Across Morocco',
      description:
        'From the sky to the sea, add unforgettable activities to your private Morocco journey.',
      items: [
        {
          title: 'Hot Air Balloon',
          description:
            'Float above the Atlas Mountains at sunrise with breathtaking panoramic views.',
          image: '/activities/hot-air-balloon.jpg',
        },
        {
          title: 'Quad Biking',
          description:
            'Adrenaline-pumping rides through dunes and rocky desert terrain.',
          image: '/activities/quad.jpg',
        },
        {
          title: 'Camel Trekking',
          description:
            'Experience the timeless tradition of crossing desert landscapes by camel.',
          image: '/activities/camel-riding.jpg',
        },
        {
          title: 'Surfing',
          description:
            'Ride Atlantic waves near Essaouira or Taghazout with options for all levels.',
          image: '/activities/surf.jpg',
        },
        {
          title: 'Hiking',
          description:
            'Explore High Atlas trails, Berber villages, rivers, and hidden valleys.',
          image: '/activities/hiking.jpg',
        },
        {
          title: 'Buggy Tours',
          description:
            'Enjoy off-road adventure through desert tracks and scenic mountain paths.',
          image: '/activities/buggy.jpg',
        },
        {
          title: 'Sunset Dinner',
          description:
            'Share a magical dinner experience under the open Moroccan sky.',
          image: '/activities/sunset-dinner.jpg',
        },
      ],
    },
    contact: {
      badge: 'Contact Us',
      title: 'Plan your Morocco journey with Youssef Qostassi',
      description:
        'Contact Youssef Qostassi, a professional private driver in Marrakech, for day trips, private transfers, Sahara tours, and custom itineraries across Morocco.',
      followUs: 'Follow us',
      formTitle: 'Send Youssef a message',
      formDescription:
        'Share your route, dates, and pickup location. Youssef usually replies within 24 hours.',
      fields: {
        fullName: 'Full Name',
        phone: 'Phone Number',
        email: 'Email Address',
        tour: 'Tour',
        message: 'Message',
        send: 'Send Message',
        sending: 'Sending...',
      },
      placeholders: {
        fullName: 'John Doe',
        phone: '+212 6 00 00 00 00',
        email: 'john@example.com',
        tour: 'Select a tour',
        message: 'Tell us about your route, dates, group size, and pickup location...',
      },
      successTitle: 'Message sent',
      successDescription:
        'Thank you for reaching out. We will get back to you shortly.',
      whatsappGreeting: 'Hi Youssef, I am',
      info: [
        { label: 'Driver', value: 'Youssef Qostassi' },
        { label: 'Location', value: 'Marrakech, Morocco' },
        { label: 'Phone', value: '+212 669897876' },
        { label: 'Email', value: 'qostassiyoussef@gmail.com' },
      ],
    },
    footer: {
      rights: 'All rights reserved.',
    },
  },
  fr: {
    metadata: {
      title: 'TFM Tours',
      description: 'Circuits prives et chauffeur professionnel partout au Maroc',
    },
    nav: {
      logo: 'LOGO',
      links: [
        { name: 'Accueil', href: '/' },
        { name: 'Pourquoi nous', href: '/#why-choose-us' },
        { name: 'Circuits populaires', href: '/#popular-tours' },
        { name: 'Destinations', href: '/#destinations' },
        { name: 'Activites', href: '/#activities' },
        { name: 'Contact', href: '/#contact' },
      ],
    },
    hero: {
      badge: 'Youssef Qostassi - Chauffeur prive professionnel',
      title: 'Decouvrez le Maroc',
      titleAccent: 'A votre rythme',
      description:
        'Voyage prive confortable, lieux magnifiques et souvenirs inoubliables au Maroc avec Youssef Qostassi.',
      primaryCta: 'Voir les circuits',
      secondaryCta: 'Contactez-nous',
    },
    whyChooseUs: {
      badge: 'Pourquoi nous choisir',
      title: 'Une facon plus calme et plus personnelle de decouvrir le Maroc',
      description:
        'Nous combinons connaissance locale, transport prive et organisation flexible pour rendre chaque trajet fluide, sur et parfaitement adapte a vous.',
      primaryCta: 'Voir les circuits',
      secondaryCta: 'Contactez-nous',
      imageLabel: 'Expertise locale',
      imageText:
        'De Marrakech aux montagnes de l Atlas, la cote, le desert et les villes imperiales, votre itineraire est prepare avec confort et attention.',
      features: [
        {
          title: 'Vehicules prives confortables',
          description:
            'Voyagez dans des voitures et vans propres, climatises et adaptes aux couples, familles, groupes et voyageurs professionnels.',
        },
        {
          title: 'Chauffeur local fiable',
          description:
            'Profitez de l experience d un chauffeur marocain qui connait les routes, les horaires et la culture locale.',
        },
        {
          title: 'Itineraires flexibles',
          description:
            'Commencez quand vous voulez, arretez-vous ou vous aimez et voyagez selon votre rythme et vos envies.',
        },
        {
          title: 'Transferts ponctuels',
          description:
            'Transferts aeroport, hotel et ville avec communication claire et prise en charge organisee.',
        },
        {
          title: 'Routes authentiques',
          description:
            'Decouvrez routes panoramiques, villages berberes, desert, cote, vallees, kasbahs et points de vue caches.',
        },
        {
          title: 'Experience premium',
          description:
            'Un service prive soigne, avec hospitalite, confort et attention aux details du debut a la fin.',
        },
      ],
    },
    services: {
      badge: 'Nos services',
      title: 'Voyagez au Maroc a votre facon',
      description:
        'Des transferts aeroport aux circuits prives inoubliables, nous proposons des experiences de transport confortables, sures et personnalisees partout au Maroc.',
      learnMore: 'En savoir plus',
      items: [
        {
          title: 'Chauffeur prive',
          description:
            'Profitez d un chauffeur prive professionnel pour vos voyages d affaires, visites ou deplacements quotidiens.',
        },
        {
          title: 'Transferts aeroport',
          description:
            'Prises en charge et depots fiables depuis les principaux aeroports marocains avec ponctualite et confort.',
        },
        {
          title: 'Excursions a la journee',
          description:
            'Decouvrez Ouzoud, la vallee de l Ourika, Essaouira, Agafay et bien plus encore.',
        },
        {
          title: 'Circuits de plusieurs jours',
          description:
            'Explorez le desert du Sahara, les villes imperiales, les montagnes et la cote avec des aventures personnalisees.',
        },
        {
          title: 'Circuits sur mesure',
          description:
            'Creez votre propre itineraire et voyagez a votre rythme avec une experience privee personnalisee.',
        },
        {
          title: 'Transport VIP',
          description:
            'Transport de luxe pour voyageurs d affaires, mariages, evenements speciaux et experiences premium.',
        },
      ],
    },
    popularTours: {
      badge: 'Circuits populaires',
      title: 'Experiences preferees au Maroc',
      description:
        'Des circuits prives selectionnes pour le confort, les belles routes et les moments inoubliables avec un chauffeur local de confiance.',
      seeMore: 'Voir plus de circuits',
      cardCta: 'Voir plus',
    },
    toursPage: {
      badge: 'Circuits au Maroc',
      title: 'Choisissez votre experience privee au Maroc',
      description:
        'Explorez nos circuits les plus demandes, de Marrakech aux vallees de montagne et excursions panoramiques avec chauffeur prive.',
      backHome: 'Retour accueil',
      planCustom: 'Planifier un circuit',
    },
    tours: [
      {
        slug: 'marrakech-city-tour',
        title: 'Marrakech',
        description:
          'Decouvrez Marrakech autrement lors d une visite guidee de demi-journee, accompagnes par votre guide professionnel.',
        image: '/destinations/marrakech.jpg',
        caption:
          'Decouvrez Marrakech autrement lors d une visite guidee de demi-journee, accompagnes par votre guide professionnel.',
        overview:
          'Decouvrez Marrakech autrement lors d une visite guidee de demi-journee, accompagnes par votre guide professionnel. A 9h00, votre chauffeur vient vous recuperer a votre hebergement pour vous faire vivre une immersion dans la deuxieme plus grande cite imperiale du Maroc. Cette visite complete vous permettra de decouvrir les monuments incontournables, les lieux historiques et les sites culturels les plus emblematiques de Marrakech : la Mosquee Koutoubia, les Tombeaux Saadiens, le jardin Majorelle, le Palais Bahia ainsi que les celebres souks de la medina.',
        highlights: [
          'Mosquee de la Koutoubia : symbole de Marrakech, construite par les Almohades au XIIe siecle, elle se distingue par son architecture raffinee et son minaret qui a inspire la Giralda de Seville et la tour Hassan a Rabat.',
          'Place Jemaa El-Fna : coeur vivant de la ville, classee Patrimoine Culturel Immateriel de l UNESCO. Vous y rencontrerez charmeurs de serpents, conteurs, musiciens, artisans... Une ambiance unique qu il faut vivre au moins une fois.',
          'Les Jardins de la Menara : un espace paisible offrant une vue splendide sur les montagnes de l Atlas, parfait pour profiter d un moment de calme au milieu de la ville animee.',
          'Tombeaux Saadiens : necropole royale du XVIe siecle et l un des tresors historiques de Marrakech. Decouverts en 1917, ces tombeaux impressionnent par leurs colonnes en marbre italien et leurs plafonds en bois sculpte.',
          'Jardin Majorelle : cree par Jacques Majorelle et restaure par Yves Saint Laurent, ce jardin botanique est un havre artistique abritant plantes exotiques, bassins colores et le Musee Berbere.',
          'Palais Bahia : chef-d oeuvre architectural melant styles marocains et andalous. Construit au XIXe siecle, il temoigne de l elegance et du raffinement des anciens palais marocains.',
          'Les Souks de Marrakech : perdez-vous dans le labyrinthe colore de la medina : souk des tanneurs, souk des potiers, souk des teinturiers, souk du cuir, bijoux, epices, artisanat local...',
        ],
        included: [
          'Chauffeur professionnel',
          'Guide local experimente',
          'Transport prive climatise',
          'Carburant inclus',
        ],
        excluded: [
          'Dejeuner non inclus',
          'Frais d entree aux monuments',
          'Boissons',
        ],
        itinerary: [
          {
            title: '9h00 : prise en charge a votre hebergement',
            description: 'Prise en charge a votre hebergement.',
          },
          {
            title: 'Decouverte des monuments iconiques de Marrakech',
            description: 'Decouverte des monuments iconiques de Marrakech.',
          },
          {
            title: 'Balade dans les jardins historiques',
            description: 'Balade dans les jardins historiques.',
          },
          {
            title: 'Visite guidee des souks',
            description: 'Visite guidee des souks.',
          },
          {
            title: 'Immersion dans la culture locale et les traditions',
            description:
              'Immersion dans la culture locale et les traditions.',
          },
          {
            title: 'Fin de la visite a la place Jemaa El-Fna',
            description: 'Fin de la visite a la place Jemaa El-Fna.',
          },
          {
            title: 'Une demi-journee riche en histoire, culture et emotions',
            description:
              'Ideale pour ceux qui souhaitent comprendre la veritable ame de Marrakech.',
          },
        ],
      },
      {
        slug: 'ourika-valley-day-trip',
        title: 'Excursion Journee Complete a la Vallee de l Ourika Depuis Marrakech',
        description:
          'Partez pour une journee complete d exploration dans la magnifique vallee de l Ourika, situee au coeur des montagnes du Haut Atlas.',
        image: '/destinations/ourika.jpg',
        caption:
          'Excursion journee complete a la Vallee de l Ourika depuis Marrakech.',
        overview:
          'Partez pour une journee complete d exploration dans la magnifique vallee de l Ourika, situee au coeur des montagnes du Haut Atlas. Si vous aimez la nature, le calme, et souhaitez decouvrir la vie authentique des Berberes, cette excursion privee est le choix ideal. Votre chauffeur professionnel et certifie vous accompagnera tout au long du trajet, afin de vous permettre de vivre l experience a votre rythme : paysages verdoyants, villages traditionnels, cascades et ambiance locale chaleureuse. Une immersion unique au plus pres des habitants qui donnera a votre journee un caractere inoubliable.',
        highlights: [
          'Decouvrez les paysages epoustouflants de la Vallee de l Ourika.',
          'Visitez une famille berbere et plongez dans leur mode de vie traditionnel.',
          'Profitez d une randonnee guidee vers les celebres cascades de Setti Fatma.',
          'Dejeunez dans un restaurant local face a la riviere (en option).',
        ],
        included: [
          'Prise en charge et retour a votre hotel',
          'Chauffeur professionnel (francophone ou anglophone)',
          'Transport prive et climatise',
          'Carburant inclus',
        ],
        excluded: [
          'Dejeuner et boissons non inclus',
          'Guide local pour la randonnee (option payante)',
        ],
        itinerary: [
          {
            title: 'Depart de Marrakech',
            description:
              'Apres votre depart de Marrakech, vous traverserez les plaines avant d atteindre les premiers villages berberes niches au pied de l Atlas.',
          },
          {
            title: 'Les jardins aromatiques bio',
            description:
              'Vous decouvrirez les plantes medicinales traditionnelles.',
          },
          {
            title: 'Une maison berbere',
            description:
              'Degustez un the a la menthe et apprenez davantage sur leur culture et leur quotidien.',
          },
          {
            title: 'Le marche hebdomadaire',
            description:
              'Si votre visite est un lundi ou un vendredi, decouvrez un moment authentique ou les habitants vendent et achetent leurs produits depuis des generations.',
          },
          {
            title: 'Les cascades de Setti Fatma',
            description:
              'Accessibles apres une petite randonnee accompagnee d un guide local.',
          },
          {
            title: 'Les singes de Barbarie',
            description: 'Souvent visibles durant le trajet.',
          },
          {
            title: 'Restaurant au bord de la riviere',
            description:
              'Savourez un moment de detente dans un restaurant au bord de la riviere, un cadre parfait pour vous relaxer avant le retour a Marrakech.',
          },
          {
            title: 'Retour a Marrakech',
            description: 'Retour a Marrakech vers 17h00.',
          },
        ],
      },
      {
        slug: 'agafay-desert-day-trip',
        title: 'Aventure en quad dans le desert d Agafay',
        description:
          'Offrez-vous une pause loin de l agitation de Marrakech et partez a la decouverte du magnifique desert d Agafay.',
        image: '/activities/quad.jpg',
        caption:
          'Offrez-vous une pause loin de l agitation de Marrakech et partez a la decouverte du magnifique desert d Agafay.',
        overview:
          'Offrez-vous une pause loin de l agitation de Marrakech et partez a la decouverte du magnifique desert d Agafay. Ce desert rocheux, situe aux portes de la ville, offre des paysages etonnants, une ambiance paisible et des activites inoubliables comme les balades a dos de dromadaire, le quad et un delicieux dejeuner traditionnel. C est l excursion ideale pour vivre une journee relaxante et depaysante, sans faire de longues heures de route jusqu au Sahara.',
        highlights: [
          'Visitez le desert d Agafay, ancien territoire de nomades au XVIIIe siecle.',
          'Profitez d une escapade en pleine nature a seulement quelques kilometres de Marrakech.',
          'Faites une balade a dos de dromadaire ou vivez une aventure en quad (en option).',
          'Partagez un dejeuner traditionnel avec une famille locale et decouvrez leur mode de vie.',
          'Traversez des villages berberes authentiques avec vue sur les majestueuses montagnes de l Atlas.',
          'Vivez une journee paisible melant aventure, culture et magnifiques panoramas.',
        ],
        included: [
          'Prise en charge et retour a votre hebergement',
          'Chauffeur / guide professionnel',
          'Transport prive et climatise',
          'Carburant inclus',
        ],
        excluded: [
          'Dejeuner et boissons (sauf si option choisie)',
          'Activites optionnelles (quad, dromadaire, etc.)',
        ],
        itinerary: [
          {
            title: 'Vers 9h00 - Prise en charge a Marrakech',
            description:
              'Votre journee commence vers 9h00 avec une prise en charge a votre hotel ou riad a Marrakech.',
          },
          {
            title: 'Depart vers le desert d Agafay',
            description:
              'Vous quittez progressivement la ville pour rejoindre les paysages rocheux du desert d Agafay, souvent appele le desert de Marrakech.',
          },
          {
            title: 'Balade a dos de dromadaire ou excursion en quad',
            description:
              'Sur place, vous aurez la possibilite de faire une balade paisible a dos de dromadaire ou de partir pour une excursion en quad afin d explorer les pistes et les collines desertiques.',
          },
          {
            title: 'Cadre ouvert du desert',
            description:
              'Le cadre est calme, ouvert et offre des vues spectaculaires, parfait pour prendre des photos et se ressourcer.',
          },
          {
            title: 'Dejeuner traditionnel avec une famille locale',
            description:
              'Apres vos activites, vous serez accueillis par une famille locale pour partager un dejeuner traditionnel si vous choisissez cette option, et decouvrir leur hospitalite, leurs coutumes et leur quotidien.',
          },
          {
            title: 'Environs de l Atlas',
            description:
              'L apres-midi, votre excursion se poursuit vers les environs de l Atlas, ou vous pourrez admirer les paysages vallonnes et profiter de superbes panoramas sur les montagnes.',
          },
          {
            title: 'Retour a Marrakech',
            description:
              'En fin de journee, vous reprenez la route vers Marrakech ; l arrivee se fait generalement vers 17h.',
          },
        ],
      },
      {
        slug: 'imlil-valley-day-trip',
        title: 'Excursion de Marrakech vers la vallee d Imlil',
        description:
          'Partez pour une magnifique aventure au coeur des montagnes du Haut Atlas et decouvrez la Vallee d Imlil.',
        image: '/destinations/imlil.jpg',
        caption:
          'Partez pour une magnifique aventure au coeur des montagnes du Haut Atlas et decouvrez la Vallee d Imlil.',
        overview:
          'Partez pour une magnifique aventure au coeur des montagnes du Haut Atlas et decouvrez la Vallee d Imlil, un lieu incontournable pour les amoureux de la nature et des paysages authentiques. Votre chauffeur guide vous conduira a travers des villages berberes traditionnels, ou vous pourrez explorer la vie locale, respirer l air pur des montagnes, et admirer les panoramas emblematiques du massif du Toubkal. Profitez d une randonnee guidee, d une visite du marche berbere selon le jour, d un dejeuner traditionnel en option et de moments uniques en pleine nature. Une experience immersive, riche en rencontres et en decouvertes humaines.',
        highlights: [
          'Explorez les villages berberes traditionnels et la beaute naturelle des montagnes de l Atlas.',
          'Decouvrez la culture locale et les traditions berberes avec un guide de montagne professionnel.',
          'Visitez le marche berbere hebdomadaire selon le jour : mardi ou samedi.',
          'Traversez les vergers, les rivieres et les vallees en profitant d un paysage epoustouflant.',
          'Visitez une cooperative feminine d huile d argan.',
          'Profitez d une randonnee de 1h30 a 2h avec vues panoramiques.',
          'Dejeunez dans un restaurant traditionnel face a la montagne ou au Kasbah Toubkal (option).',
        ],
        included: [
          'Prise en charge et retour a votre hotel',
          'Chauffeur professionnel (francophone ou anglophone)',
          'Transport prive et climatise',
          'Carburant',
        ],
        excluded: [
          'Dejeuner et boissons',
          'Guide local pour la randonnee (option payante)',
        ],
        itinerary: [
          {
            title: '9h00 - Prise en charge a votre hotel',
            description:
              'Votre journee commence a 9h00 avec une prise en charge a votre hotel. Vous prendrez la route en direction des magnifiques paysages verdoyants du Haut Atlas.',
          },
          {
            title: 'Premier arret : Tahanaout',
            description:
              'Decouvrez un charmant village connu pour son marche berbere anime tous les mardis. L occasion ideale pour observer la vie locale, les produits frais et l artisanat traditionnel.',
          },
          {
            title: 'Deuxieme arret : Asni',
            description:
              'Celebre pour son marche du samedi, Asni est un carrefour dynamique ou les habitants des montagnes viennent vendre leurs produits. Possibilite de faire un tour a dos de mule ou de chameau (optionnel).',
          },
          {
            title: 'Imlil',
            description:
              'Ensuite, vous continuerez vers Imlil, un village de montagne emblematique situe au pied du Mont Toubkal, le plus haut sommet d Afrique du Nord.',
          },
          {
            title: 'Randonnee guidee',
            description:
              'Vous y rencontrerez un guide de montagne local qui vous emmenera pour une randonnee guidee autour du village, des cascades et des vallees avoisinantes.',
          },
          {
            title: 'Dejeuner traditionnel',
            description:
              'Apres la randonnee, profitez d un dejeuner traditionnel dans un restaurant local ou au Kasbah Toubkal (optionnel), offrant une vue spectaculaire sur les montagnes.',
          },
          {
            title: 'Retour a Marrakech',
            description:
              'En fin d apres-midi, retour a Marrakech avec des souvenirs inoubliables de votre journee.',
          },
        ],
      },
      {
        slug: 'ouarzazate-ait-ben-haddou',
        title: 'Excursion vers Ouarzazate et Ait Ben Haddou',
        description:
          'Traversez le Haut Atlas pour decouvrir Ait Ben Haddou, Ouarzazate et des paysages marocains spectaculaires.',
        image: '/destinations/ouarzazat.jpg',
      },
      {
        slug: 'marrakech-palmeraie-camel-ride',
        title: 'Balade a dos de chameau a Marrakech',
        description:
          'Profitez d une balade paisible a dos de chameau dans la Palmeraie de Marrakech avec villages berberes, tenue traditionnelle et the a la menthe.',
        image: '/activities/camel-riding.jpg',
      },
    ],
    destinations: {
      badge: 'Meilleures destinations',
      title: 'Explorez le meilleur du Maroc',
      description:
        'Des montagnes a la cote, decouvrez les plus beaux endroits du Maroc avec un chauffeur local de confiance.',
      planTrip: 'Planifier ce voyage',
      items: [
        {
          title: 'Vallee de l Ourika',
          description:
            'Montagnes, cascades, villages berberes et une escapade rafraichissante depuis Marrakech.',
          imageSrc: '/destinations/ourika.jpg',
          href: '/tours/ourika-valley-day-trip',
        },
        {
          title: 'Marrakech',
          description:
            'Palais historiques, souks colores, jardins, monuments et energie de la ville rouge.',
          imageSrc: '/destinations/marrakech.jpg',
          href: '/tours/marrakech-city-tour',
        },
        {
          title: 'Essaouira',
          description:
            'Air de l ocean, medina fortifiee, fruits de mer, boutiques d art et ambiance detendue.',
          imageSrc: '/destinations/essouira.jpg',
          href: '/#contact',
        },
        {
          title: 'Cascades d Ouzoud',
          description:
            'Une des plus belles cascades d Afrique du Nord avec points de vue et nature locale.',
          imageSrc: '/destinations/ouzoud.jpg',
          href: '/#contact',
        },
        {
          title: 'Ouarzazate',
          description:
            'Kasbahs, routes de l Atlas, paysages cinematographiques et patrimoine d Ait Ben Haddou.',
          imageSrc: '/destinations/ouarzazat.jpg',
          href: '/tours/ouarzazate-ait-ben-haddou',
        },
      ],
    },
    activities: {
      badge: 'Activites',
      title: 'Aventures a travers le Maroc',
      description:
        'Du ciel a la mer, ajoutez des activites inoubliables a votre voyage prive au Maroc.',
      items: [
        {
          title: 'Montgolfiere',
          description:
            'Survolez les montagnes de l Atlas au lever du soleil avec des vues panoramiques.',
          image: '/activities/hot-air-balloon.jpg',
        },
        {
          title: 'Quad',
          description:
            'Vivez une aventure dans les dunes et pistes rocheuses du desert.',
          image: '/activities/quad.jpg',
        },
        {
          title: 'Balade a dos de chameau',
          description:
            'Decouvrez la tradition du voyage dans les paysages desertiques a dos de chameau.',
          image: '/activities/camel-riding.jpg',
        },
        {
          title: 'Surf',
          description:
            'Profitez des vagues atlantiques pres d Essaouira ou Taghazout, pour tous niveaux.',
          image: '/activities/surf.jpg',
        },
        {
          title: 'Randonnee',
          description:
            'Explorez les sentiers du Haut Atlas, les villages berberes, rivieres et vallees cachees.',
          image: '/activities/hiking.jpg',
        },
        {
          title: 'Buggy',
          description:
            'Profitez d une aventure hors piste dans le desert ou les chemins de montagne.',
          image: '/activities/buggy.jpg',
        },
        {
          title: 'Diner au coucher du soleil',
          description:
            'Partagez une experience magique sous le ciel marocain.',
          image: '/activities/sunset-dinner.jpg',
        },
      ],
    },
    contact: {
      badge: 'Contact',
      title: 'Planifiez votre voyage au Maroc avec Youssef Qostassi',
      description:
        'Contactez Youssef Qostassi, chauffeur prive professionnel a Marrakech, pour excursions, transferts, circuits Sahara et itineraires sur mesure.',
      followUs: 'Suivez-nous',
      formTitle: 'Envoyer un message a Youssef',
      formDescription:
        'Partagez votre trajet, vos dates et votre lieu de prise en charge. Youssef repond generalement sous 24 heures.',
      fields: {
        fullName: 'Nom complet',
        phone: 'Telephone',
        email: 'Adresse email',
        tour: 'Circuit',
        message: 'Message',
        send: 'Envoyer le message',
        sending: 'Envoi...',
      },
      placeholders: {
        fullName: 'Jean Dupont',
        phone: '+212 6 00 00 00 00',
        email: 'jean@example.com',
        tour: 'Choisir un circuit',
        message: 'Indiquez votre trajet, dates, taille du groupe et lieu de prise en charge...',
      },
      successTitle: 'Message envoye',
      successDescription:
        'Merci pour votre message. Nous vous repondrons rapidement.',
      whatsappGreeting: 'Bonjour Youssef, je suis',
      info: [
        { label: 'Chauffeur', value: 'Youssef Qostassi' },
        { label: 'Localisation', value: 'Marrakech, Maroc' },
        { label: 'Telephone', value: '+212 669897876' },
        { label: 'Email', value: 'qostassiyoussef@gmail.com' },
      ],
    },
    footer: {
      rights: 'Tous droits reserves.',
    },
  },
} as const

export type Dictionary = (typeof dictionaries)[Locale]

export const getDictionary = (locale: Locale = defaultLocale) => {
  return dictionaries[locale] ?? dictionaries[defaultLocale]
}
