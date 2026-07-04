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
          'Discover the vibrant soul of Marrakech through its iconic landmarks, colorful souks, historic palaces, and beautiful gardens on a guided half-day tour.',
        image: '/destinations/marrakech.jpg',
      },
      {
        slug: 'ourika-valley-day-trip',
        title: 'Full Day Trip From Marrakech To The Ourika Valley',
        description:
          'Escape to the breathtaking Ourika Valley and discover Berber villages, scenic waterfalls, lush mountain landscapes, and authentic Moroccan culture.',
        image: '/destinations/ourika.jpg',
      },
      {
        slug: 'agafay-desert-day-trip',
        title: 'Agafay Desert Quad Adventure',
        description:
          'Ride across the rocky Agafay Desert on a thrilling quad adventure with sweeping Atlas Mountain views and authentic Moroccan hospitality.',
        image: '/activities/quad.jpg',
      },
      {
        slug: 'imlil-valley-day-trip',
        title: 'Day Trip from Marrakech to the Imlil Valley',
        description:
          'Discover the breathtaking Imlil Valley with scenic mountain hikes, traditional Berber villages, and unforgettable views of the High Atlas Mountains.',
        image: '/destinations/imlil.jpg',
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
          duration: '1-2 Hours',
        },
        {
          title: 'Quad Biking',
          description:
            'Adrenaline-pumping rides through dunes and rocky desert terrain.',
          image: '/activities/quad.jpg',
          duration: '2-4 Hours',
        },
        {
          title: 'Camel Trekking',
          description:
            'Experience the timeless tradition of crossing desert landscapes by camel.',
          image: '/activities/camel-riding.jpg',
          duration: '1-3 Days',
        },
        {
          title: 'Surfing',
          description:
            'Ride Atlantic waves near Essaouira or Taghazout with options for all levels.',
          image: '/activities/surf.jpg',
          duration: '2-3 Hours',
        },
        {
          title: 'Hiking',
          description:
            'Explore High Atlas trails, Berber villages, rivers, and hidden valleys.',
          image: '/activities/hiking.jpg',
          duration: '2-6 Hours',
        },
        {
          title: 'Buggy Tours',
          description:
            'Enjoy off-road adventure through desert tracks and scenic mountain paths.',
          image: '/activities/buggy.jpg',
          duration: '2-4 Hours',
        },
        {
          title: 'Sunset Dinner',
          description:
            'Share a magical dinner experience under the open Moroccan sky.',
          image: '/activities/sunset-dinner.jpg',
          duration: '3-4 Hours',
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
          'Decouvrez l ame vibrante de Marrakech avec ses monuments, souks colores, palais historiques et jardins.',
        image: '/destinations/marrakech.jpg',
      },
      {
        slug: 'ourika-valley-day-trip',
        title: 'Excursion de Marrakech vers la vallee de l Ourika',
        description:
          'Echappez-vous vers la vallee de l Ourika, ses villages berberes, cascades, paysages de montagne et culture authentique.',
        image: '/destinations/ourika.jpg',
      },
      {
        slug: 'agafay-desert-day-trip',
        title: 'Aventure en quad dans le desert d Agafay',
        description:
          'Parcourez le desert rocheux d Agafay en quad avec vues sur les montagnes de l Atlas et hospitalite marocaine authentique.',
        image: '/activities/quad.jpg',
      },
      {
        slug: 'imlil-valley-day-trip',
        title: 'Excursion de Marrakech vers la vallee d Imlil',
        description:
          'Decouvrez la vallee d Imlil avec randonnees, villages berberes et vues sur le Haut Atlas.',
        image: '/destinations/imlil.jpg',
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
          duration: '1-2 heures',
        },
        {
          title: 'Quad',
          description:
            'Vivez une aventure dans les dunes et pistes rocheuses du desert.',
          image: '/activities/quad.jpg',
          duration: '2-4 heures',
        },
        {
          title: 'Balade a dos de chameau',
          description:
            'Decouvrez la tradition du voyage dans les paysages desertiques a dos de chameau.',
          image: '/activities/camel-riding.jpg',
          duration: '1-3 jours',
        },
        {
          title: 'Surf',
          description:
            'Profitez des vagues atlantiques pres d Essaouira ou Taghazout, pour tous niveaux.',
          image: '/activities/surf.jpg',
          duration: '2-3 heures',
        },
        {
          title: 'Randonnee',
          description:
            'Explorez les sentiers du Haut Atlas, les villages berberes, rivieres et vallees cachees.',
          image: '/activities/hiking.jpg',
          duration: '2-6 heures',
        },
        {
          title: 'Buggy',
          description:
            'Profitez d une aventure hors piste dans le desert ou les chemins de montagne.',
          image: '/activities/buggy.jpg',
          duration: '2-4 heures',
        },
        {
          title: 'Diner au coucher du soleil',
          description:
            'Partagez une experience magique sous le ciel marocain.',
          image: '/activities/sunset-dinner.jpg',
          duration: '3-4 heures',
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
