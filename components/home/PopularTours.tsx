'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import TourCard from '@/components/ui/TourCard'
import { defaultLocale, localePath, type Locale } from '@/i18n/config'
import { getDictionary, type Dictionary } from '@/i18n/dictionaries'

type PopularToursProps = {
  dictionary?: Dictionary
  locale?: Locale
}

const PopularTours = ({
  dictionary = getDictionary(defaultLocale),
  locale = defaultLocale,
}: PopularToursProps) => {
  const t = dictionary.popularTours
  const tours = dictionary.tours
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(3)
  const [gapPx, setGapPx] = useState(24)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [dragDelta, setDragDelta] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth

      if (width >= 1024) {
        setCardsPerView(3)
        setGapPx(32)
      } else if (width >= 768) {
        setCardsPerView(3)
        setGapPx(24)
      } else {
        setCardsPerView(2)
        setGapPx(16)
      }
    }

    updateLayout()
    window.addEventListener('resize', updateLayout)
    return () => window.removeEventListener('resize', updateLayout)
  }, [])

  const maxIndex = Math.max(0, tours.length - cardsPerView)

  useEffect(() => {
    setCurrentIndex((index) => Math.min(index, maxIndex))
  }, [maxIndex])

  // useEffect(() => {
  //   const interval = window.setInterval(() => {
  //     if (!isDragging && maxIndex > 0) {
  //       setCurrentIndex((index) => (index + 1) % (maxIndex + 1))
  //     }
  //   }, 5500)

  //   return () => window.clearInterval(interval)
  // }, [isDragging, maxIndex])

  const nextSlide = () => {
    setCurrentIndex((index) => (index + 1) % (maxIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((index) => (index - 1 + (maxIndex + 1)) % (maxIndex + 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const getCardWidth = () => {
    const totalGap = gapPx * (cardsPerView - 1)
    return `calc((100% - ${totalGap}px) / ${cardsPerView})`
  }

  const startDrag = (clientX: number) => {
    setIsDragging(true)
    setStartX(clientX)
    setDragDelta(0)
  }

  const moveDrag = (clientX: number) => {
    if (!isDragging) return
    setDragDelta(clientX - startX)
  }

  const endDrag = () => {
    if (!isDragging) return

    const swipeThreshold = 60

    if (dragDelta < -swipeThreshold && currentIndex < maxIndex) {
      nextSlide()
    }

    if (dragDelta > swipeThreshold && currentIndex > 0) {
      prevSlide()
    }

    setIsDragging(false)
    setDragDelta(0)
  }

  const translatePercent = currentIndex * (100 / cardsPerView)
  const translateGap = (currentIndex * gapPx) / cardsPerView

  return (
    <section
      id="popular-tours"
      className="relative overflow-hidden bg-[#FEF6EE] py-12 lg:py-18"
    >
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#FCFBF8] to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(13,94,72,0.08),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(216,179,91,0.14),transparent_34%)]" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-[#D8B35B]/40 bg-[#FCFBF8] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary shadow-sm">
              {t.badge}
            </span>
            <h2 className="mt-3 font-serif text-2xl font-semibold leading-tight text-slate-950 md:text-3xl lg:text-4xl">
              {t.title}
            </h2>
            <p className="mt-3 text-base leading-8 text-slate-600 md:text-lg">
              {t.description}
            </p>
          </div>

          
        </div>

        <div className="relative mt-10">
          {maxIndex > 0 && (
            <>
              <button
                type="button"
                onClick={prevSlide}
                className="absolute left-0 top-1/2 z-20 -ml-3 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-white text-slate-900 shadow-lg transition-all duration-300 hover:scale-110 hover:text-[#9D7A2F] hover:shadow-xl lg:-ml-6 lg:h-12 lg:w-12"
                aria-label="Previous popular tour"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                className="absolute right-0 top-1/2 z-20 -mr-3 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-white text-slate-900 shadow-lg transition-all duration-300 hover:scale-110 hover:text-[#9D7A2F] hover:shadow-xl lg:-mr-6 lg:h-12 lg:w-12"
                aria-label="Next popular tour"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          <div
            ref={carouselRef}
            className="cursor-grab overflow-hidden active:cursor-grabbing"
            onMouseDown={(event) => startDrag(event.clientX)}
            onMouseMove={(event) => moveDrag(event.clientX)}
            onMouseUp={endDrag}
            onMouseLeave={endDrag}
            onTouchStart={(event) => startDrag(event.touches[0].clientX)}
            onTouchMove={(event) => moveDrag(event.touches[0].clientX)}
            onTouchEnd={endDrag}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                gap: `${gapPx}px`,
                transform: `translateX(calc(-${translatePercent}% - ${translateGap}px + ${dragDelta}px))`,
              }}
            >
              {tours.map((tour) => (
                <div
                  key={tour.title}
                  className="flex-shrink-0"
                  style={{
                    flex: `0 0 ${getCardWidth()}`,
                    maxWidth: getCardWidth(),
                  }}
                >
                  <TourCard
                    title={tour.title}
                    description={tour.description}
                    image={tour.image}
                    href={localePath(locale, `/tours/${tour.slug}`)}
                    ctaLabel={t.cardCta}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {maxIndex > 0 && (
          <div className="mt-7 flex justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'w-8 bg-[#E8872F]'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to popular tours slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        <div className="mt-7 grid place-items-center md:hidden">
          <Link
            href={localePath(locale, '/tours')}
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white! shadow-lg shadow-[#E8872F]/20 transition-all duration-300 hover:bg-primary-hover"
          >
            {t.seeMore}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
        <div className='grid place-items-center mt-4'>
<Link
            href={localePath(locale, '/tours')}
            className="group hidden items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white! shadow-lg shadow-[#E8872F]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-primary-hover hover:shadow-xl md:inline-flex"
          >
            {t.seeMore}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
      </div>
        
      </div>
      
    </section>
  )
}

export default PopularTours
