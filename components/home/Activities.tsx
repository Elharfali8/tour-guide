// components/home/Activities.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SectionTitle from '@/components/ui/SectionTitle'

const Activities = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(4)
  const carouselRef = useRef<HTMLDivElement>(null)

  const activities = [
    {
      title: 'Hot Air Balloon',
      description: 'Float above the Atlas Mountains at sunrise with breathtaking panoramic views.',
      image: '/activities/hot-air-balloon.jpg',
      duration: '1-2 Hours',
    },
    {
      title: 'Quad Biking',
      description: 'Adrenaline-pumping rides through the dunes and rocky terrain of the desert.',
      image: '/activities/quad.jpg',
      duration: '2-4 Hours',
    },
    {
      title: 'Camel Trekking',
      description: 'Experience the timeless tradition of crossing the Sahara on a gentle camel.',
      image: '/activities/camel-riding.jpg',
      duration: '1-3 Days',
    },
    {
      title: 'Surfing',
      description: 'Ride the Atlantic waves at Taghazout or Essaouira, perfect for all levels.',
      image: '/activities/surf.jpg',
      duration: '2-3 Hours',
    },
    {
      title: 'Hiking',
      description: 'Explore the High Atlas trails, Berber villages, and hidden valleys.',
      image: '/activities/hiking.jpg',
      duration: '2-6 Hours',
    },
    {
      title: 'Buggy Tours',
      description: 'Discover off-road adventures in the desert or through scenic mountain paths.',
      image: '/activities/buggy.jpg',
      duration: '2-4 Hours',
    },
    {
      title: 'Sunset Dinner',
      description: 'Enjoy a magical dinner under the stars in the heart of the desert.',
      image: '/activities/sunset-dinner.jpg',
      duration: '3-4 Hours',
    },
  ]

  // Update cards per view based on screen size
  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth
      if (width >= 1280) {
        setCardsPerView(4) // Large screens (xl): 4 cards
      } else if (width >= 768) {
        setCardsPerView(3) // Medium screens (md): 3 cards
      } else {
        setCardsPerView(2) // Small screens (sm): 2 cards
      }
    }

    updateCardsPerView()
    window.addEventListener('resize', updateCardsPerView)
    return () => window.removeEventListener('resize', updateCardsPerView)
  }, [])

  const totalSlides = activities.length
  const maxIndex = Math.max(0, totalSlides - cardsPerView)

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging && maxIndex > 0) {
        setCurrentIndex((prev) => (prev + 1) % (maxIndex + 1))
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [isDragging, maxIndex])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (maxIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (maxIndex + 1)) % (maxIndex + 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Drag to scroll
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0))
    setScrollLeft(carouselRef.current?.scrollLeft || 0)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 1.5
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Calculate card width based on cards per view
  const getCardWidth = () => {
    const gap = 24 // 6 * 4 = 24px gap
    return `calc(${100 / cardsPerView}% - ${(cardsPerView - 1) * 6 / cardsPerView}px)`
  }

  return (
    <section id='activities' className="py-12 lg:py-18 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <SectionTitle
          badge="EXCITING ACTIVITIES"
          title="Adventures Across Morocco"
          subtitle="From the sky to the sea, experience the thrill of Morocco's diverse landscapes"
          centered
          className="mb-10 sm:mb-12 lg:mb-16"
        />

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          {maxIndex > 0 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 -ml-4 lg:-ml-6 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center text-gray-800 hover:text-[#E8872F] border border-gray-200"
                aria-label="Previous slide"
              >
                <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 -mr-4 lg:-mr-6 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center text-gray-800 hover:text-[#E8872F] border border-gray-200"
                aria-label="Next slide"
              >
                <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Carousel Track */}
          <div
            ref={carouselRef}
            className="overflow-hidden"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div
  className="flex gap-4 sm:gap-6 transition-transform duration-500 ease-in-out"
  style={{
    transform: `translateX(calc(-${currentIndex * 100 / cardsPerView}% - ${currentIndex * 24}px))`,
  }}
>
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
                  style={{ 
                    flex: `0 0 ${getCardWidth()}`,
                    maxWidth: getCardWidth()
                  }}
                >
                  <div className="group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-[320px] sm:h-[380px] lg:h-[420px]">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <Image
                        src={activity.image}
                        alt={activity.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-end p-5 sm:p-6 lg:p-8">

                      {/* Duration Badge */}
                      <span className="inline-block bg-[#E8872F]/20 backdrop-blur-sm text-[#E8872F] text-xs font-semibold px-3 py-1 rounded-full mb-2 sm:mb-3 self-start border border-[#E8872F]/20">
                        {activity.duration}
                      </span>

                      {/* Title */}
                      <h3 className="text-base sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2 group-hover:text-[#E8872F] transition-colors duration-300">
                        {activity.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-white/80 line-clamp-2">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        {maxIndex > 0 && (
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'w-8 bg-[#E8872F]'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        
      </div>
    </section>
  )
}

export default Activities