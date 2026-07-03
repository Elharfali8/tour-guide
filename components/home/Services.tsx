import Link from 'next/link'
import {
  ArrowRight,
  Car,
  Compass,
  Crown,
  Map,
  Mountain,
  PlaneLanding,
} from 'lucide-react'

const services = [
  {
    title: 'Private Driver',
    description:
      'Enjoy a professional private driver for business trips, sightseeing, or daily transportation with complete flexibility.',
    icon: Car,
    tone: 'from-emerald-700 to-emerald-500',
  },
  {
    title: 'Airport Transfers',
    description:
      'Reliable pickups and drop-offs from all major Moroccan airports with punctual service and comfortable vehicles.',
    icon: PlaneLanding,
    tone: 'from-[#C99A45] to-[#E8C37A]',
  },
  {
    title: 'Day Trips',
    description:
      "Discover Morocco's most beautiful destinations including Ouzoud, Ourika Valley, Essaouira, Agafay, and more.",
    icon: Mountain,
    tone: 'from-[#A9693B] to-[#D99B61]',
  },
  {
    title: 'Multi-Day Tours',
    description:
      'Explore the Sahara Desert, imperial cities, mountains, and coastal towns through customized multi-day adventures.',
    icon: Map,
    tone: 'from-slate-800 to-slate-600',
  },
  {
    title: 'Custom Tours',
    description:
      'Build your own itinerary and travel at your own pace with a fully personalized private experience.',
    icon: Compass,
    tone: 'from-teal-700 to-emerald-500',
  },
  {
    title: 'VIP Transport',
    description:
      'Luxury transportation for business travelers, weddings, special events, and premium experiences.',
    icon: Crown,
    tone: 'from-[#9D7A2F] to-[#D8B35B]',
  },
]

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#FCFBF8] py-12 lg:py-18"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(13,94,72,0.10),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(201,154,69,0.14),transparent_32%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D8B35B]/60 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 ">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-[#D8B35B]/40 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800 shadow-sm backdrop-blur">
            Our Services
          </span>
          <h2 className="mt-3 font-serif text-2xl font-semibold leading-tight text-slate-950 md:text-3xl lg:text-4xl">
            Travel Morocco Your Way
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            From airport transfers to unforgettable private tours, we provide
            comfortable, safe, and personalized transportation experiences
            across Morocco.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-[24px] border border-white/80 bg-white/75 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#D8B35B]/50 hover:bg-white hover:shadow-[0_28px_70px_rgba(15,23,42,0.14)]"
              >
                <div className="absolute right-0 top-0 h-28 w-28 translate-x-10 -translate-y-10 rounded-full bg-[#D8B35B]/10 blur-2xl transition-transform duration-500 group-hover:scale-150" />
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#D8B35B]/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div
                  className={`relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${service.tone} text-white shadow-lg shadow-emerald-950/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
                >
                  <Icon className="h-7 w-7" strokeWidth={1.8} />
                </div>

                <div className="relative mt-7">
                  <h3 className="text-xl font-semibold text-slate-950">
                    {service.title}
                  </h3>
                  <p className="mt-3 min-h-[84px] text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>
                </div>

                <Link
                  href="/#contact"
                  className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 transition-colors duration-300 hover:text-[#9D7A2F]"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
