

export const tours = [
  {
    title: 'Marrakech',
    description:
      'Discover the vibrant soul of Marrakech through its iconic landmarks, colorful souks, historic palaces, and beautiful gardens on a guided half-day tour.',
    image: '/destinations/marrakech.jpg',
    href: '/tours/marrakech-city-tour',
  },
  {
    title: 'Full Day Trip From Marrakech To The Ourika Valley',
    description:
      'Escape to the breathtaking Ourika Valley and discover Berber villages, scenic waterfalls, lush mountain landscapes, and authentic Moroccan culture.',
    image: '/destinations/ourika.jpg',
    href: '/tours/ourika-valley-day-trip',
  },
  {
    title: 'Day Trip from Marrakech to the Imlil Valley',
    description:
      'Discover the breathtaking Imlil Valley with scenic mountain hikes, traditional Berber villages, and unforgettable views of the High Atlas Mountains.',
    image: '/destinations/imlil.jpg',
    href: '/tours/imlil-valley-day-trip',
    },
  {
    title: 'Day Trip from Marrakech to Ouarzazate and Ait Ben Haddou',
    description:
      'Journey through the High Atlas Mountains to discover the UNESCO-listed Aït Ben Haddou, the cinematic city of Ouarzazate, and breathtaking Moroccan landscapes.',
    image: '/destinations/ouarzazat.jpg',
    href: '/tours/ouarzazate-ait-ben-haddou',
  },
]



export const getTourBySlug = (slug: string) => {
  const tour = tours.find((tour) => tour.href === `/tours/${slug}`)
  return tour || null
}

export const tourBySlug = [
    {
    slug: "ouarzazate-ait-ben-haddou",
    title: "Ouarzazate & Ait Ben Haddou Day Trip",
    image: "/destinations/ouarzazat.jpg",
    caption:
        "Journey through the High Atlas Mountains to discover the UNESCO-listed Ait Ben Haddou, the cinematic city of Ouarzazate, and breathtaking Moroccan landscapes.",

    overview:
        "Embark on an exceptional day trip through the High Atlas Mountains to Ouarzazate, the gateway to the desert and Morocco's film capital. Cross the spectacular Tizi n'Tichka Pass, discover traditional Berber villages, explore the UNESCO World Heritage Site of Ait Ben Haddou, and visit Ouarzazate, famous for its world-renowned film studios and historic kasbahs. A perfect combination of culture, history, and unforgettable scenery.",

    highlights: [
        "Enjoy the breathtaking landscapes of the High Atlas Mountains and the Tizi n'Tichka Pass.",
        "Travel through authentic Berber villages and discover their traditional way of life.",
        "Explore the UNESCO World Heritage Site of Ait Ben Haddou.",
        "Visit the famous Atlas Film Studios, known as the Hollywood of Africa.",
        "Discover the historic Kasbah of Taourirt, the former palace of the Pasha of Marrakech.",
        "Enjoy a traditional Moroccan lunch with panoramic views of the Kasbah.",
        "Capture stunning photos at the most beautiful viewpoints in the High Atlas."
    ],

    included: [
        "Hotel pick-up and drop-off",
        "Professional English or French-speaking driver",
        "Private air-conditioned transportation",
        "Fuel",
        "Local guide in Ait Ben Haddou"
    ],

    excluded: [
        "Entrance fees",
        "Lunch",
        "Drinks"
    ],

    itinerary: [
        {
        title: "08:00 - Hotel Pickup",
        description:
            "Your driver will pick you up from your accommodation in Marrakech before departing toward the High Atlas Mountains."
        },
        {
        title: "Tizi n'Tichka Pass",
        description:
            "Drive through Morocco's highest mountain pass with several scenic stops overlooking valleys, Berber villages, and mountain landscapes."
        },
        {
        title: "Ait Ben Haddou",
        description:
            "Explore the iconic UNESCO-listed fortified village with a local guide and discover the filming locations of Gladiator, Game of Thrones, The Mummy, Lawrence of Arabia, and many other productions."
        },
        {
        title: "Lunch Break",
        description:
            "Enjoy free time for lunch at a traditional Moroccan restaurant overlooking the Kasbah."
        },
        {
        title: "Ouarzazate",
        description:
            "Visit the famous Atlas Film Studios and discover why Ouarzazate is known as the Hollywood of Africa."
        },
        {
        title: "Kasbah of Taourirt",
        description:
            "Explore one of Morocco's most impressive Berber palaces, once home to the powerful Pasha Glaoui."
        },
        {
        title: "Return to Marrakech",
        description:
            "Travel back through the High Atlas Mountains with an expected arrival around 6:30 PM."
        }
    ]
    },
    {
  slug: "marrakech-city-tour",
  title: "Marrakech Guided City Tour",
  image: "/destinations/marrakech.jpg",
  caption:
    "Explore Marrakech's iconic monuments, vibrant souks, and rich cultural heritage on a memorable guided half-day tour.",

  overview:
    "Discover Marrakech in a new light on a half-day guided tour with your professional guide. Explore the city's most iconic landmarks, historical monuments, beautiful gardens, and vibrant souks while immersing yourself in the rich culture and history of Morocco's famous Red City.",

  highlights: [
    "Visit the iconic Koutoubia Mosque, the symbol of Marrakech.",
    "Experience the lively atmosphere of the UNESCO-listed Jemaa El-Fna Square.",
    "Relax in the peaceful Menara Gardens with stunning Atlas Mountain views.",
    "Discover the historic Saadian Tombs dating back to the 16th century.",
    "Explore the famous Majorelle Garden and Berber Museum.",
    "Visit the magnificent Bahia Palace, a masterpiece of Moroccan architecture.",
    "Wander through the colorful souks filled with local crafts, spices, leather goods, and jewelry."
  ],

  included: [
    "Hotel pick-up and drop-off",
    "Professional driver",
    "Experienced local guide",
    "Private air-conditioned transportation",
    "Fuel"
  ],

  excluded: [
    "Entrance fees to monuments",
    "Lunch",
    "Drinks"
  ],

  itinerary: [
    {
      title: "09:00 - Hotel Pickup",
      description:
        "Your professional driver will pick you up from your accommodation in Marrakech."
    },
    {
      title: "Koutoubia Mosque",
      description:
        "Visit Marrakech's most famous landmark and admire its remarkable Almohad architecture."
    },
    {
      title: "Saadian Tombs",
      description:
        "Explore the beautifully preserved royal necropolis dating back to the 16th century."
    },
    {
      title: "Majorelle Garden",
      description:
        "Discover one of Morocco's most beautiful botanical gardens, restored by Yves Saint Laurent."
    },
    {
      title: "Bahia Palace",
      description:
        "Walk through the elegant courtyards and rooms of this magnificent 19th-century palace."
    },
    {
      title: "Souks & Jemaa El-Fna",
      description:
        "Explore the bustling souks before finishing your tour at the vibrant Jemaa El-Fna Square, where storytellers, musicians, artisans, and local culture come to life."
    }
  ]
    },
    {
  slug: "ourika-valley-day-trip",
  title: "Ourika Valley Day Trip",
  image: "/destinations/ourika.jpg",
  caption:
    "Escape to the breathtaking Ourika Valley and discover Berber villages, scenic waterfalls, lush mountain landscapes, and authentic Moroccan culture.",

  overview:
    "Escape for a full-day adventure to the beautiful Ourika Valley, nestled in the heart of the High Atlas Mountains. Discover authentic Berber villages, breathtaking mountain scenery, lush valleys, and the famous Setti Fatma waterfalls. Enjoy a relaxing journey with a professional driver while experiencing the rich traditions and warm hospitality of the local Berber communities.",

  highlights: [
    "Discover the breathtaking landscapes of the Ourika Valley.",
    "Visit a traditional Berber family and experience their authentic way of life.",
    "Enjoy a guided hike to the famous Setti Fatma waterfalls.",
    "Relax with an optional riverside lunch at a traditional Moroccan restaurant.",
    "Explore organic aromatic gardens and discover traditional medicinal plants.",
    "Visit the local weekly market on Mondays or Fridays (depending on the day of your visit).",
    "Spot Barbary monkeys along the scenic route."
  ],

  included: [
    "Hotel pick-up and drop-off",
    "Professional English or French-speaking driver",
    "Private air-conditioned transportation",
    "Fuel"
  ],

  excluded: [
    "Lunch",
    "Drinks",
    "Local hiking guide (optional)"
  ],

  itinerary: [
    {
      title: "09:00 - Hotel Pickup",
      description:
        "Meet your professional driver and depart Marrakech toward the beautiful High Atlas Mountains."
    },
    {
      title: "Scenic Drive",
      description:
        "Travel through picturesque valleys, rivers, and traditional Berber villages while enjoying panoramic mountain views."
    },
    {
      title: "Organic Aromatic Garden",
      description:
        "Visit a local aromatic garden to discover traditional medicinal plants and natural products."
    },
    {
      title: "Berber Family Visit",
      description:
        "Enjoy traditional Moroccan mint tea while learning about Berber culture and daily life inside a local family home."
    },
    {
      title: "Weekly Berber Market",
      description:
        "If visiting on a Monday or Friday, explore the authentic local market where mountain communities have traded for generations."
    },
    {
      title: "Setti Fatma Waterfalls",
      description:
        "Take an optional guided hike to the famous waterfalls and enjoy spectacular views of the surrounding mountains."
    },
    {
      title: "Riverside Lunch",
      description:
        "Relax and enjoy free time for lunch at a traditional restaurant beside the river."
    },
    {
      title: "Return to Marrakech",
      description:
        "Travel back to Marrakech after a memorable day in the Atlas Mountains, arriving around 5:00 PM."
    }
  ]
    },
   {
  slug: "imlil-valley-day-trip",
  title: "Imlil Valley & High Atlas Day Trip",
  image: "/destinations/imlil.jpg",
  caption:
    "Explore the stunning Imlil Valley, hike through Berber villages, and enjoy breathtaking views of the High Atlas Mountains and Mount Toubkal.",

  overview:
    "Escape to the breathtaking High Atlas Mountains and discover the beautiful Imlil Valley, one of Morocco's most spectacular natural destinations. Explore authentic Berber villages, hike scenic mountain trails, experience local traditions, and admire panoramic views of Mount Toubkal, the highest peak in North Africa. A perfect day for nature lovers, hikers, and cultural explorers.",

  highlights: [
    "Explore traditional Berber villages nestled in the High Atlas Mountains.",
    "Experience Berber culture with a professional mountain guide.",
    "Visit the weekly Berber market on Tuesdays or Saturdays (depending on your travel day).",
    "Walk through orchards, rivers, valleys, and breathtaking mountain landscapes.",
    "Visit a women's argan oil cooperative and discover traditional production methods.",
    "Enjoy a guided hike lasting approximately 1.5 to 2 hours with panoramic mountain views.",
    "Optional lunch at a traditional mountain restaurant or the famous Kasbah Toubkal."
  ],

  included: [
    "Hotel pick-up and drop-off",
    "Professional English or French-speaking driver",
    "Private air-conditioned transportation",
    "Fuel"
  ],

  excluded: [
    "Lunch",
    "Drinks",
    "Local hiking guide (optional)"
  ],

  itinerary: [
    {
      title: "09:00 - Hotel Pickup",
      description:
        "Meet your professional driver and depart Marrakech toward the stunning High Atlas Mountains."
    },
    {
      title: "Tahanaout",
      description:
        "Visit the charming Berber village of Tahanaout, famous for its lively weekly market held every Tuesday."
    },
    {
      title: "Asni",
      description:
        "Explore the bustling mountain village of Asni, known for its traditional Saturday market and optional camel or mule rides."
    },
    {
      title: "Argan Oil Cooperative",
      description:
        "Visit a local women's cooperative and learn how Morocco's famous argan oil is traditionally produced."
    },
    {
      title: "Imlil Valley Hike",
      description:
        "Meet your local mountain guide and enjoy a scenic 1.5 to 2-hour hike through Berber villages, rivers, waterfalls, and spectacular mountain landscapes."
    },
    {
      title: "Traditional Lunch",
      description:
        "Enjoy free time for an optional traditional Moroccan lunch with panoramic views of the Atlas Mountains or Kasbah Toubkal."
    },
    {
      title: "Return to Marrakech",
      description:
        "Relax on the scenic drive back to Marrakech after an unforgettable day exploring the High Atlas Mountains."
    }
  ]
}
]
