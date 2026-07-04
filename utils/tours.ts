

export const tours = [
  {
    title: 'Marrakech',
    description:
      'Discover the vibrant soul of Marrakech through its iconic landmarks, colorful souks, historic palaces, and beautiful gardens on a guided half-day tour.',
    image: '/destinations/marrakech.jpg',
    href: '/tours/marrakech-city-tour',
  },
  {
    title: 'Full Day Trip to the Ourika Valley From Marrakech',
    description:
      'Set off for a full day of exploration in the magnificent Ourika Valley, located in the heart of the High Atlas Mountains.',
    image: '/destinations/ourika.jpg',
    href: '/tours/ourika-valley-day-trip',
  },
  {
  href: "/tours/agafay-desert-day-trip",
  title: "Agafay Desert Quad Adventure",
  image: "/activities/quad.jpg",
  description:
    "Take a break from the bustle of Marrakech and discover the magnificent Agafay Desert.",
  },
  {
    title: 'Day Trip from Marrakech to the Imlil Valley',
    description:
      'Set off for an adventure in the High Atlas Mountains and discover the Imlil Valley.',
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
  {
    href: "/tours/marrakech-palmeraie-camel-ride",
    title: "Marrakech Camel Ride Experience",
    image: "/activities/camel-riding.jpg",
    description:
    "Enjoy a peaceful camel ride through Marrakech's Palm Grove, discover Berber villages, and experience authentic Moroccan hospitality.",
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
    "Discover Marrakech differently on a guided half-day tour with your professional guide.",

  overview:
    "Discover Marrakech differently on a guided half-day tour with your professional guide. At 9:00 AM, your driver picks you up from your accommodation to immerse you in the second largest imperial city of Morocco. This complete visit allows you to discover the must-see monuments, historical places, and most emblematic cultural sites of Marrakech: the Koutoubia Mosque, the Saadian Tombs, the Majorelle Garden, the Bahia Palace, and the famous souks of the medina.",

  highlights: [
    "Koutoubia Mosque: the symbol of Marrakech, built by the Almohads in the 12th century, known for its refined architecture and minaret that inspired the Giralda of Seville and the Hassan Tower in Rabat.",
    "Jemaa El-Fna Square: the living heart of the city, listed as UNESCO Intangible Cultural Heritage, with snake charmers, storytellers, musicians, artisans, and a unique atmosphere to experience at least once.",
    "Menara Gardens: a peaceful space with a splendid view of the Atlas Mountains, perfect for enjoying a quiet moment in the middle of the lively city.",
    "Saadian Tombs: a 16th-century royal necropolis and one of Marrakech's historical treasures, discovered in 1917 and known for Italian marble columns and carved wooden ceilings.",
    "Majorelle Garden: created by Jacques Majorelle and restored by Yves Saint Laurent, this botanical garden is an artistic haven with exotic plants, colorful basins, and the Berber Museum.",
    "Bahia Palace: an architectural masterpiece blending Moroccan and Andalusian styles, built in the 19th century and reflecting the elegance and refinement of old Moroccan palaces.",
    "Marrakech Souks: get lost in the colorful maze of the medina, including the tanners' souk, potters' souk, dyers' souk, leather souk, jewelry, spices, and local crafts."
  ],

  included: [
    "Professional driver",
    "Experienced local guide",
    "Private air-conditioned transportation",
    "Fuel included"
  ],

  excluded: [
    "Lunch",
    "Entrance fees to monuments",
    "Drinks"
  ],

  itinerary: [
    {
      title: "9:00 AM - Pickup at your accommodation",
      description:
        "Your driver picks you up from your accommodation."
    },
    {
      title: "Marrakech iconic monuments",
      description:
        "Discover the iconic monuments of Marrakech."
    },
    {
      title: "Historic gardens",
      description:
        "Walk through the historic gardens."
    },
    {
      title: "Souks",
      description:
        "Enjoy a guided visit of the souks."
    },
    {
      title: "Local culture and traditions",
      description:
        "Immerse yourself in local culture and traditions."
    },
    {
      title: "Jemaa El-Fna Square",
      description:
        "End the visit at Jemaa El-Fna Square."
    },
    {
      title: "A half-day of history, culture, and emotion",
      description:
        "Ideal for those who wish to understand the true soul of Marrakech."
    }
  ]
  },
     {
  slug: "agafay-desert-day-trip",
  title: "Agafay Desert Quad Adventure",
  image: "/activities/quad.jpg",
  caption:
    "Take a break from the bustle of Marrakech and discover the magnificent Agafay Desert.",

  overview:
    "Take a break from the bustle of Marrakech and discover the magnificent Agafay Desert. This rocky desert, located at the gates of the city, offers surprising landscapes, a peaceful atmosphere, and unforgettable activities such as camel rides, quad biking, and a delicious traditional lunch. It is the ideal excursion for a relaxing and exotic day without long hours on the road to the Sahara.",

  highlights: [
    "Visit the Agafay Desert, former nomadic territory in the 18th century.",
    "Enjoy a nature escape only a few kilometers from Marrakech.",
    "Take a camel ride or experience a quad adventure (optional).",
    "Share a traditional lunch with a local family and discover their way of life.",
    "Cross authentic Berber villages with views of the majestic Atlas Mountains.",
    "Experience a peaceful day combining adventure, culture, and magnificent panoramas."
  ],

  included: [
    "Pick-up and drop-off at your accommodation",
    "Professional driver / guide",
    "Private air-conditioned transportation",
    "Fuel included"
  ],

  excluded: [
    "Lunch and drinks (unless option selected)",
    "Optional activities (quad, camel, etc.)"
  ],

  itinerary: [
    {
      title: "Around 9:00 AM - Pickup in Marrakech",
      description:
        "Your day begins around 9:00 AM with pick-up at your hotel or riad in Marrakech."
    },
    {
      title: "Departure to the Agafay Desert",
      description:
        "You gradually leave the city to reach the rocky landscapes of the Agafay Desert, often called the desert of Marrakech."
    },
    {
      title: "Camel ride or quad excursion",
      description:
        "On site, you can take a peaceful camel ride or go on a quad excursion to explore the desert tracks and hills."
    },
    {
      title: "Open desert setting",
      description:
        "The setting is calm and open, with spectacular views, perfect for taking photos and recharging."
    },
    {
      title: "Traditional lunch with a local family",
      description:
        "After your activities, you will be welcomed by a local family to share a traditional lunch if you choose this option, and discover their hospitality, customs, and daily life."
    },
    {
      title: "Atlas surroundings",
      description:
        "In the afternoon, your excursion continues toward the Atlas surroundings, where you can admire rolling landscapes and enjoy superb panoramas of the mountains."
    },
    {
      title: "Return to Marrakech",
      description:
        "At the end of the day, you return to Marrakech; arrival is generally around 5:00 PM."
    }
  ]
},
    {
  slug: "ourika-valley-day-trip",
  title: "Full Day Trip to the Ourika Valley From Marrakech",
  image: "/destinations/ourika.jpg",
  caption:
    "Set off for a full day of exploration in the magnificent Ourika Valley from Marrakech.",

  overview:
    "Set off for a full day of exploration in the magnificent Ourika Valley, located in the heart of the High Atlas Mountains. If you love nature, calm, and want to discover the authentic life of the Berbers, this private excursion is the ideal choice. Your professional and certified driver will accompany you throughout the journey, allowing you to experience it at your own pace: green landscapes, traditional villages, waterfalls, and a warm local atmosphere. A unique immersion close to the inhabitants that will give your day an unforgettable character.",

  highlights: [
    "Discover the breathtaking landscapes of the Ourika Valley.",
    "Visit a Berber family and immerse yourself in their traditional way of life.",
    "Enjoy a guided hike to the famous Setti Fatma waterfalls.",
    "Have lunch in a local restaurant facing the river (optional)."
  ],

  included: [
    "Hotel pick-up and drop-off",
    "Professional driver (French-speaking or English-speaking)",
    "Private air-conditioned transportation",
    "Fuel included"
  ],

  excluded: [
    "Lunch and drinks not included",
    "Local hiking guide (paid option)"
  ],

  itinerary: [
    {
      title: "Departure from Marrakech",
      description:
        "After your departure from Marrakech, you will cross the plains before reaching the first Berber villages nestled at the foot of the Atlas Mountains."
    },
    {
      title: "Organic aromatic gardens",
      description:
        "Discover traditional medicinal plants."
    },
    {
      title: "Berber house",
      description:
        "Taste mint tea and learn more about Berber culture and daily life."
    },
    {
      title: "Weekly market",
      description:
        "If your visit is on a Monday or Friday, discover an authentic moment where locals have sold and bought their products for generations."
    },
    {
      title: "Setti Fatma waterfalls",
      description:
        "Reach the waterfalls after a short hike accompanied by a local guide."
    },
    {
      title: "Barbary monkeys",
      description:
        "Often visible during the journey."
    },
    {
      title: "Riverside restaurant",
      description:
        "Enjoy a relaxing moment in a restaurant by the river, a perfect setting to unwind before returning to Marrakech."
    },
    {
      title: "Return to Marrakech",
      description:
        "Return to Marrakech around 5:00 PM."
    }
  ]
    },
   {
  slug: "imlil-valley-day-trip",
  title: "Day Trip from Marrakech to the Imlil Valley",
  image: "/destinations/imlil.jpg",
  caption:
    "Set off for a magnificent adventure in the heart of the High Atlas Mountains and discover the Imlil Valley.",

  overview:
    "Set off for a magnificent adventure in the heart of the High Atlas Mountains and discover the Imlil Valley, a must-see place for lovers of nature and authentic landscapes. Your driver guide will take you through traditional Berber villages, where you can explore local life, breathe the pure mountain air, and admire the iconic panoramas of the Toubkal massif. Enjoy a guided hike, a visit to the Berber market depending on the day, a traditional lunch as an option, and unique moments in nature. An immersive experience rich in encounters and human discoveries.",

  highlights: [
    "Explore traditional Berber villages and the natural beauty of the Atlas Mountains.",
    "Discover local culture and Berber traditions with a professional mountain guide.",
    "Visit the weekly Berber market depending on the day: Tuesday or Saturday.",
    "Cross orchards, rivers, and valleys while enjoying breathtaking scenery.",
    "Visit a women's argan oil cooperative.",
    "Enjoy a 1.5 to 2 hour hike with panoramic views.",
    "Have lunch in a traditional restaurant facing the mountain or at Kasbah Toubkal (option)."
  ],

  included: [
    "Hotel pick-up and drop-off",
    "Professional driver (French-speaking or English-speaking)",
    "Private air-conditioned transportation",
    "Fuel"
  ],

  excluded: [
    "Lunch and drinks",
    "Local hiking guide (paid option)"
  ],

  itinerary: [
    {
      title: "9:00 AM - Hotel pickup",
      description:
        "Your day begins at 9:00 AM with pick-up at your hotel. You will take the road toward the magnificent green landscapes of the High Atlas."
    },
    {
      title: "First stop: Tahanaout",
      description:
        "Discover a charming village known for its lively Berber market every Tuesday, an ideal opportunity to observe local life, fresh products, and traditional crafts."
    },
    {
      title: "Second stop: Asni",
      description:
        "Famous for its Saturday market, Asni is a lively crossroads where mountain inhabitants come to sell their products. Possibility of taking a mule or camel ride (optional)."
    },
    {
      title: "Imlil",
      description:
        "Continue toward Imlil, an iconic mountain village located at the foot of Mount Toubkal, the highest peak in North Africa."
    },
    {
      title: "Guided hike",
      description:
        "Meet a local mountain guide who will take you on a guided hike around the village, waterfalls, and surrounding valleys."
    },
    {
      title: "Traditional lunch",
      description:
        "After the hike, enjoy a traditional lunch in a local restaurant or at Kasbah Toubkal (optional), offering a spectacular view of the mountains."
    },
    {
      title: "Return to Marrakech",
      description:
        "At the end of the afternoon, return to Marrakech with unforgettable memories of your day."
    }
  ]
  },
   {
  slug: "marrakech-palmeraie-camel-ride",
  title: "Marrakech Camel Ride Experience",
  image: "/activities/camel-riding.jpg",
  caption:
    "Enjoy a peaceful camel ride through Marrakech's Palm Grove, discover Berber villages, and experience authentic Moroccan hospitality.",

  overview:
    "Escape the hustle and bustle of Marrakech with a relaxing camel ride through the beautiful Palm Grove. Ride across scenic palm-lined trails, discover traditional Berber villages, wear authentic Tuareg clothing, and enjoy Moroccan mint tea with a local family. A perfect experience for couples, families, and anyone looking to discover Morocco's authentic charm.",

  highlights: [
    "Enjoy a peaceful camel ride through the beautiful Marrakech Palm Grove.",
    "Travel in a traditional camel caravan surrounded by palm trees and desert landscapes.",
    "Visit authentic Berber villages and experience local culture.",
    "Wear traditional Tuareg clothing for unforgettable photos.",
    "Share Moroccan mint tea with a Berber family and learn about their traditions."
  ],

  included: [
    "Hotel pick-up and drop-off",
    "Professional driver and guide",
    "Private air-conditioned transportation",
    "Camel ride experience",
    "Traditional Tuareg outfit",
    "Moroccan mint tea",
    "Fuel"
  ],

  excluded: [
    "Entrance fees (if applicable)",
    "Lunch",
    "Drinks"
  ],

  itinerary: [
    {
      title: "Hotel Pickup",
      description:
        "Meet your professional driver and travel from your accommodation to the Marrakech Palm Grove."
    },
    {
      title: "Arrival at the Palm Grove",
      description:
        "Meet your camel guide and receive traditional Tuareg clothing, including a cheche and gandoura, before beginning your adventure."
    },
    {
      title: "Camel Ride",
      description:
        "Enjoy a relaxing camel ride through palm groves, rocky desert paths, and peaceful landscapes while taking memorable photos along the way."
    },
    {
      title: "Berber Family Visit",
      description:
        "Stop at a traditional Berber home to enjoy freshly prepared Moroccan mint tea and discover local customs and hospitality."
    },
    {
      title: "Return Ride",
      description:
        "Continue your camel ride through the Palm Grove before returning to your driver."
    },
    {
      title: "Return to Marrakech",
      description:
        "Relax during your comfortable drive back to your accommodation after an authentic Moroccan experience."
    }
  ]
}
]
