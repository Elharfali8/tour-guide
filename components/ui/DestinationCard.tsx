// components/home/DestinationCard.tsx
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface DestinationCardProps {
  title: string
  duration: string
  description: string
  imageSrc: string
  href: string
}

const DestinationCard = ({ title, duration, description, imageSrc, href }: DestinationCardProps) => {
  return (
    <button  className="group block h-full">
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
        {/* Image - Fixed height */}
        <div className="relative h-40 flex-shrink-0 overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Duration Badge */}
          <span className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full">
            {duration}
          </span>
        </div>

        {/* Content - Flex grow to fill remaining space */}
        <div className="p-5 sm:p-6 flex flex-col flex-grow">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 group-hover:text-[#E8872F] transition-colors">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-gray-600 flex-grow">
            {description}
          </p>
        </div>
      </div>
    </button>
  )
}

export default DestinationCard