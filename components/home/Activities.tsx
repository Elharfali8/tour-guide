'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { defaultLocale, type Locale } from '@/i18n/config'
import { getDictionary, type Dictionary } from '@/i18n/dictionaries'

type ActivitiesProps = {
  dictionary?: Dictionary
  locale?: Locale
}

const Activities = ({
  dictionary = getDictionary(defaultLocale),
}: ActivitiesProps) => {
  const t = dictionary.activities
  const activities = t.items
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(4)
  const [gapPx, setGapPx] = useState(24)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [dragDelta, setDragDelta] = useState(0)

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth

      if (width >= 1280) {
        setCardsPerView(4)
        setGapPx(24)
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

  const maxIndex = Math.max(0, activities.length - cardsPerView)

  useEffect(() => {
    setCurrentIndex((index) => Math.min(index, maxIndex))
  }, [maxIndex])

  useEffect(() => {
    const interval = window.setInterval(() => {
      if (!isDragging && maxIndex > 0) {
        setCurrentIndex((index) => (index + 1) % (maxIndex + 1))
      }
    }, 5200)

    return () => window.clearInterval(interval)
  }, [isDragging, maxIndex])

  const nextSlide = () => {
    setCurrentIndex((index) => (index + 1) % (maxIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((index) => (index - 1 + (maxIndex + 1)) % (maxIndex + 1))
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

    if (dragDelta < -60 && currentIndex < maxIndex) {
      nextSlide()
    }

    if (dragDelta > 60 && currentIndex > 0) {
      prevSlide()
    }

    setIsDragging(false)
    setDragDelta(0)
  }

  const getCardWidth = () => {
    const totalGap = gapPx * (cardsPerView - 1)
    return `calc((100% - ${totalGap}px) / ${cardsPerView})`
  }

  const translatePercent = currentIndex * (100 / cardsPerView)
  const translateGap = (currentIndex * gapPx) / cardsPerView

  return (
    <section id="activities" className="relative overflow-hidden bg-[#FEF6EE] py-12 lg:py-18">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D8B35B]/60 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-[#D8B35B]/40 bg-[#FCFBF8] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary shadow-sm">
            {t.badge}
          </span>
          <h2 className="mt-3 font-serif text-2xl font-semibold leading-tight text-slate-950 md:text-3xl lg:text-4xl">
            {t.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            {t.description}
          </p>
        </div>

        <div className="relative mt-10">
          {maxIndex > 0 && (
            <>
              <button
                type="button"
                onClick={prevSlide}
                className="absolute left-0 top-1/2 z-20 -ml-3 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-white text-slate-900 shadow-lg transition-all duration-300 hover:scale-110 hover:text-[#9D7A2F] hover:shadow-xl lg:-ml-6 lg:h-12 lg:w-12"
                aria-label="Previous activity"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="absolute right-0 top-1/2 z-20 -mr-3 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-white text-slate-900 shadow-lg transition-all duration-300 hover:scale-110 hover:text-[#9D7A2F] hover:shadow-xl lg:-mr-6 lg:h-12 lg:w-12"
                aria-label="Next activity"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          <div
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
              {activities.map((activity) => (
                <div
                  key={activity.title}
                  className="flex-shrink-0"
                  style={{
                    flex: `0 0 ${getCardWidth()}`,
                    maxWidth: getCardWidth(),
                  }}
                >
                  <article className="group relative h-[280px] overflow-hidden rounded-[24px] bg-slate-950 shadow-[0_18px_50px_rgba(15,23,42,0.14)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(15,23,42,0.2)] sm:h-[340px] lg:h-[420px]">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                    <div className="relative z-10 flex h-full flex-col justify-end p-4 sm:p-5 lg:p-7">
                      <h3 className="font-serif text-lg font-semibold leading-tight text-white sm:text-xl lg:text-2xl">
                        {activity.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-xs leading-5 text-white/75 sm:text-sm sm:leading-6">
                        {activity.description}
                      </p>
                    </div>
                  </article>
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
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'w-8 bg-[#9D7A2F]'
                    : 'w-2 bg-slate-200 hover:bg-[#D8B35B]/70'
                }`}
                aria-label={`Go to activity slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Activities
