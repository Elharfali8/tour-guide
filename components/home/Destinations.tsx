// components/home/Destinations.tsx
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SectionTitle from '@/components/ui/SectionTitle'
import DestinationCard from '../ui/DestinationCard'


const Destinations = () => {
  const destinations = [
    {
      title: 'Ourika Valley',
      duration: '1 Day Trip',
      description: 'Mountains, waterfalls and Berber villages. A refreshing escape.',
      imageSrc: '/images/ourika.jpg',
      href: '/destinations/ourika-valley',
    },
    {
      title: 'Sahara Desert',
      duration: '2 - 3 Days Trip',
      description: 'Experience the magic of the Sahara. Camel ride, camps & stars.',
      imageSrc: '/images/sahara.jpg',
      href: '/destinations/sahara-desert',
    },
    {
      title: 'Essaouira',
      duration: '1 Day Trip',
      description: 'Relax by the ocean and discover the charming Medina.',
      imageSrc: '/images/essouira.jpg',
      href: '/destinations/essouira',
    },
    {
      title: 'Ouzoud Waterfalls',
      duration: '1 Day Trip',
      description: 'One of the highest waterfalls in North Africa.',
      imageSrc: '/images/ouzoud.jpg',
      href: '/destinations/ouzoud-waterfalls',
    },
  ]

  return (
    <section id='destinations' className="py-12 lg:py-18 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <SectionTitle
          badge="TOP DESTINATIONS"
          title="Explore the Best of Morocco"
          subtitle="From the mountains to the desert, discover the most beautiful places with a local driver you can trust."
          centered
          className="mb-12 sm:mb-16"
        />

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.title}
              title={destination.title}
              duration={destination.duration}
              description={destination.description}
              imageSrc={destination.imageSrc}
              href={destination.href}
            />
          ))}
        </div>

        {/* Centered Primary Button */}
        <div className="mt-10 sm:mt-12 text-center">
          <Link
            href="/destinations"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-[#E8872F] px-8 py-4 sm:px-10 sm:py-4 text-sm sm:text-base font-semibold text-white! shadow-lg shadow-[#E8872F]/30 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-[#D8781F] hover:shadow-2xl hover:shadow-[#E8872F]/40 active:scale-95"
          >
            {/* Shine Animation */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            
            {/* Button Content */}
            <span className="relative flex items-center gap-2">
              View All Destinations
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
        </div>
      </div>
    </section>
  )
}

export default Destinations