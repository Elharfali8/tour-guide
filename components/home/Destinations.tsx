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
      imageSrc: '/destinations/ourika.jpg',
      href: '/destinations/ourika-valley',
    },
    {
      title: 'Marrakech',
      duration: '2 - 3 Days Trip',
      description: 'Experience the magic of the Sahara. Camel ride, camps & stars.',
      imageSrc: '/destinations/marrakech.jpg',
      href: '/destinations/marrakech',
    },
    {
      title: 'Essaouira',
      duration: '1 Day Trip',
      description: 'Relax by the ocean and discover the charming Medina.',
      imageSrc: '/destinations/essouira.jpg',
      href: '/destinations/essouira',
    },
    {
      title: 'Ouzoud Waterfalls',
      duration: '1 Day Trip',
      description: 'One of the highest waterfalls in North Africa.',
      imageSrc: '/destinations/ouzoud.jpg',
      href: '/destinations/ouzoud-waterfalls',
    },
    {
      title: 'Ouarzazat',
      duration: '1 Day Trip',
      description: 'One of the highest waterfalls in North Africa.',
      imageSrc: '/destinations/ouarzazat.jpg',
      href: '/destinations/ouarzazat',
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4">
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
      </div>
    </section>
  )
}

export default Destinations