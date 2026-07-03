import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import TourCard from '@/components/ui/TourCard'
import { tours } from '@/utils/tours'



const PopularTours = () => {

  const popularTours = tours.slice(0, 3) // Get the first 3 tours as popular tours

  return (
    <section
      id="popular-tours"
      className="relative overflow-hidden bg-white py-12 lg:py-18"
    >
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#FCFBF8] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-[#D8B35B]/40 bg-[#FCFBF8] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800 shadow-sm">
              Popular Tours
            </span>
            <h2 className="mt-3 font-serif text-2xl font-semibold leading-tight text-slate-950 md:text-3xl lg:text-4xl">
              Guest Favorite Morocco Experiences
            </h2>
            <p className="mt-3 text-base leading-8 text-slate-600 md:text-lg">
              Handpicked private tours designed for comfort, beautiful routes,
              and unforgettable moments with a trusted local driver.
            </p>
          </div>

          
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {popularTours.map((tour) => (
            <TourCard
              key={tour.title}
              title={tour.title}
              description={tour.description}
              image={tour.image}
              href={tour.href}
            />
          ))}
          
        </div>
          <div className="w-full grid place-items-center mt-4 lg:mt-6">
            <Link
            href="/tours"
            className="flex items-center gap-2 rounded-full bg-primary text-white! px-10 lg:px-18 py-3 font-semibold transition ease-in-out duration-150 hover:bg-primary-hover"
          >
            See More Tours
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          </div>
      </div>
    </section>
  )
}

export default PopularTours
