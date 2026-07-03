// components/home/WhyChooseUs.tsx
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const WhyChooseUs = () => {
  const features = [
    {
      icon: '🚗',
      title: 'Private Transportation',
      description:
        'Comfortable, modern air-conditioned vehicles for individuals, couples, families, and groups.',
      image: '/why-us/transport.png',
    },
    {
      icon: '✈️',
      title: 'Airport Transfers',
      description:
        'Reliable pickup and drop-off services between airports, hotels, and destinations across Morocco.',
      image: '/why-us/airport.png',
    },
    {
      icon: '📋',
      title: 'Custom Tours',
      description:
        'Personalized itineraries designed around your schedule and interests.',
      image: '/why-us/custom-tours.png',
    },
    {
      icon: '🏘️',
      title: 'Local Experiences',
      description:
        'Explore Berber villages, hidden valleys, traditional markets, and authentic Moroccan culture.',
      image: '/why-us/locale.png',
    },
    {
      icon: '🏄',
      title: 'Adventure Activities',
      description:
        'Quad biking, camel rides, hot air balloon flights, buggy tours, hiking, surfing, and more.',
      image: '/why-us/adventure.png',
    },
    {
      icon: '🗺️',
      title: 'Travel Across Morocco',
      description:
        'Day trips and multi-day journeys to the Atlas Mountains, Sahara Desert, Essaouira, Chefchaouen, Ouarzazate, Aït Ben Haddou, Ouzoud Waterfalls, and other iconic destinations.',
      image: '/why-us/travel-accross-morocco.png',
    },
  ]

  return (
    <section id='why-choose-us' className="py-12 lg:py-18" style={{ backgroundColor: '#FCFBF8' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block text-sm font-semibold text-[#E8872F] uppercase tracking-wider">
            WHY CHOOSE US
          </span>
        </div>

        {/* Top Row: Content Left + Image Right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12 lg:mb-16">
          {/* Left Column - Content */}
          <div>
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Your Trusted Travel Partner
              <br />
              <span className="text-[#E8872F]">Across Morocco</span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl">
              Discover Morocco with comfort, flexibility, and authentic local
              experiences. From airport transfers and private day trips to
              Sahara adventures and exciting outdoor activities, we create
              journeys tailored to your travel style.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/tours"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-[#E8872F] px-8 py-4 text-sm sm:text-base font-semibold text-white! shadow-lg shadow-[#E8872F]/30 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-[#D8781F] hover:shadow-2xl hover:shadow-[#E8872F]/40 active:scale-95"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative flex items-center gap-2">
                  Explore Tours
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h14m-6-6 6 6-6 6"
                    />
                  </svg>
                </span>
              </Link>

              <Link
                href="/#contact"
                className="group inline-flex items-center justify-center rounded-xl border-2 border-[#E8872F] bg-white px-8 py-4 text-sm sm:text-base font-semibold text-[#E8872F] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-[#E8872F] hover:text-white hover:shadow-lg hover:shadow-[#E8872F]/20 active:scale-95"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl">
              <div className="relative h-[350px] sm:h-[400px] lg:h-[480px]">
                <Image
                  src="/images/hero-mobile.png"
                  alt="Luxury Mercedes V-Class on Tizi n'Tichka Pass overlooking Atlas Mountains"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

              {/* Floating Glass Card */}
              <div className="absolute bottom-6 left-6 right-6 sm:left-8 sm:right-8 lg:left-10 lg:right-10">
                <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl px-6 py-5 sm:px-8 sm:py-6 shadow-xl">
                  <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                    <span className="flex items-center gap-2 text-white font-medium text-sm sm:text-base">
                      <span className="w-2 h-2 bg-[#E8872F] rounded-full"></span>
                      Private Tours
                    </span>
                    <span className="flex items-center gap-2 text-white font-medium text-sm sm:text-base">
                      <span className="w-2 h-2 bg-[#E8872F] rounded-full"></span>
                      Airport Transfers
                    </span>
                    <span className="flex items-center gap-2 text-white font-medium text-sm sm:text-base">
                      <span className="w-2 h-2 bg-[#E8872F] rounded-full"></span>
                      Custom Itineraries
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: Features Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group h-48 sm:h-52"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/40"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-5 h-full flex flex-col justify-end">
                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-[#E8872F]/20 backdrop-blur-sm flex items-center justify-center mb-2 border border-white/10">
                  <span className="text-xl">{feature.icon}</span>
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-white mb-1">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-white/80 leading-relaxed line-clamp-2">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs