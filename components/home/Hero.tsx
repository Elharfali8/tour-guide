// components/home/Hero.tsx
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Desktop Background */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="/images/hero-desktop.png"
          alt="Hero desktop background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Mobile Background */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src="/images/hero-mobile.png"
          alt="Hero mobile background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Hero Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
          {/* Badge */}
          <span className="inline-block font-semibold text-[#E8872F] bg-black/40 px-3 py-1 rounded-lg text-xs sm:text-sm">
            PRIVATE TOURS & LOCAL EXPERIENCES
          </span>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mt-4">
            Discover Morocco
            <br />
            Your Way
          </h1>

          {/* Description */}
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-white/80 max-w-md mx-auto lg:mx-0">
            Comfortable travel, breathtaking places and unforgettable
            memories. I'll take you there.
          </p>

          {/* Buttons - Mobile Optimized */}
          <div className="mt-6 sm:mt-8 grid md:grid-cols-2 gap-4 w-full">
            <Link
              href="/tours"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-[#E8872F] px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base font-semibold text-white! shadow-lg shadow-[#E8872F]/30 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-[#D8781F] hover:shadow-2xl hover:shadow-[#E8872F]/40 active:scale-95 w-full sm:w-auto"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative flex items-center justify-center gap-2">
                Explore Tours
                <svg
                  className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1"
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
              href="/contact"
              className="group inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/15 px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base font-semibold text-white! backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-white/60 hover:bg-white hover:text-[#E8872F]! active:scale-95 w-full sm:w-auto"
            >
              <span className="flex items-center justify-center gap-2">
                Contact Us
                <svg
                  className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:rotate-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1118 0z"
                  />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 text-white/70 animate-bounce">
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero