import DestinationCard from '../ui/DestinationCard'
import { defaultLocale, localePath, type Locale } from '@/i18n/config'
import { getDictionary, type Dictionary } from '@/i18n/dictionaries'

type DestinationsProps = {
  dictionary?: Dictionary
  locale?: Locale
}

const Destinations = ({
  dictionary = getDictionary(defaultLocale),
  locale = defaultLocale,
}: DestinationsProps) => {
  const t = dictionary.destinations

  return (
    <section
      id="destinations"
      className="relative overflow-hidden bg-[#FEF6EE] py-12 lg:py-18"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D8B35B]/60 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-[#D8B35B]/40 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary shadow-sm backdrop-blur">
              {t.badge}
            </span>
            <h2 className="mt-3 font-serif text-2xl font-semibold leading-tight text-slate-950 md:text-3xl lg:text-4xl">
              {t.title}
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              {t.description}
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          {t.items.map((destination) => (
            <DestinationCard
              key={destination.title}
              title={destination.title}
              description={destination.description}
              imageSrc={destination.imageSrc}
              href={localePath(locale, destination.href)}
              cta={t.planTrip}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Destinations
