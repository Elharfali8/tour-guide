import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import TourCard from '@/components/ui/TourCard'
import { tours } from '@/utils/tours'

const ToursPage = () => {
  return (
    <main className="min-h-screen bg-[#FCFBF8] pt-24">
      <section className="relative overflow-hidden py-12 lg:py-18">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(13,94,72,0.10),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(201,154,69,0.14),transparent_32%)]" />

        <div className="relative mx-auto max-w-7xl px-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 transition-colors duration-300 hover:text-[#9D7A2F]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back Home
          </Link>

          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full border border-[#D8B35B]/40 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800 shadow-sm backdrop-blur">
                Morocco Tours
              </span>
              <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-slate-950 md:text-5xl lg:text-6xl">
                Choose Your Private Morocco Experience
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                Explore our most requested private tours, from Marrakech city
                discoveries to mountain valleys and scenic day trips with a
                comfortable private driver.
              </p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {tours.map((tour) => (
              <TourCard
                key={tour.title}
                title={tour.title}
                description={tour.description}
                image={tour.image}
                href={tour.href}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default ToursPage
