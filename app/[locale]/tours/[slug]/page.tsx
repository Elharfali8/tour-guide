import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, CalendarDays, Check, MapPin, X } from 'lucide-react'
import Contact from '@/components/home/Contact'
import { isLocale, localePath, locales } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { tourBySlug } from '@/utils/tours'

type TourDetailPageProps = {
  params: Promise<{
    locale: string
    slug: string
  }>
}

export const generateStaticParams = () => {
  return locales.flatMap((locale) =>
    tourBySlug.map((tour) => ({
      locale,
      slug: tour.slug,
    }))
  )
}

const TourDetailPage = async ({ params }: TourDetailPageProps) => {
  const { locale, slug } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  const dictionary = getDictionary(locale)
  const localizedTour = dictionary.tours.find((tour) => tour.slug === slug)
  const tour = tourBySlug.find((item) => item.slug === slug)

  if (!tour || !localizedTour) {
    notFound()
  }

  const tourContent = 'overview' in localizedTour ? localizedTour : tour

  return (
    <main className="min-h-screen bg-[#FEF6EE] pt-12">
      <section className="relative overflow-hidden py-12 lg:py-18">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(13,94,72,0.10),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(201,154,69,0.14),transparent_32%)]" />

        <div className="relative mx-auto max-w-7xl px-4">
          <Link
            href={localePath(locale, '/tours')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors duration-300 hover:text-[#9D7A2F]"
          >
            <ArrowLeft className="h-4 w-4" />
            {locale === 'fr' ? 'Retour aux circuits' : 'Back to Tours'}
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="relative min-h-[420px] overflow-hidden rounded-[28px] bg-slate-950 shadow-[0_28px_80px_rgba(15,23,42,0.18)] sm:min-h-[560px]">
                <Image
                  src={tour.image}
                  alt={localizedTour.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-black/10" />
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/15 p-5 text-white shadow-xl backdrop-blur-md">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D8B35B]">
                    {locale === 'fr' ? 'Circuit prive au Maroc' : 'Private Morocco Tour'}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/85">
                    {tourContent.caption}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <span className="inline-flex items-center rounded-full border border-[#D8B35B]/40 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary shadow-sm backdrop-blur">
                {locale === 'fr' ? 'Details du circuit' : 'Tour Details'}
              </span>

              <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-slate-950 md:text-5xl">
                {localizedTour.title}
              </h1>

              <div className="mt-5 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                  <MapPin className="h-4 w-4 text-[#9D7A2F]" />
                  {locale === 'fr' ? 'Depart de Marrakech' : 'Marrakech departure'}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                  <CalendarDays className="h-4 w-4 text-[#9D7A2F]" />
                  {locale === 'fr' ? 'Experience privee' : 'Private experience'}
                </span>
              </div>

              <div className="mt-8 rounded-[24px] border border-white/80 bg-white/80 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur">
                <h2 className="font-serif text-2xl font-semibold text-slate-950">
                  {locale === 'fr' ? 'Apercu' : 'Overview'}
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  {tourContent.overview}
                </p>
              </div>

              <div className="mt-6 rounded-[24px] border border-white/80 bg-white/80 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur">
                <h2 className="font-serif text-2xl font-semibold text-slate-950">
                  {locale === 'fr' ? 'Points forts' : 'Highlights'}
                </h2>
                <ul className="mt-5 grid gap-3">
                  {tourContent.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm leading-7 text-slate-600">
                      <span className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-emerald-800 text-white">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-[24px] border border-white/80 bg-white/80 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur">
                  <h2 className="font-serif text-2xl font-semibold text-slate-950">
                    {locale === 'fr' ? 'Inclus' : 'Included'}
                  </h2>
                  <ul className="mt-5 space-y-3">
                    {tourContent.included.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-slate-600">
                        <Check className="h-5 w-5 flex-none text-emerald-700" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[24px] border border-white/80 bg-white/80 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur">
                  <h2 className="font-serif text-2xl font-semibold text-slate-950">
                    {locale === 'fr' ? 'Non inclus' : 'Not Included'}
                  </h2>
                  <ul className="mt-5 space-y-3">
                    {tourContent.excluded.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-slate-600">
                        <X className="h-5 w-5 flex-none text-[#9D7A2F]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 rounded-[24px] border border-white/80 bg-white/80 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur">
                <h2 className="font-serif text-2xl font-semibold text-slate-950">
                  {locale === 'fr' ? 'Itineraire' : 'Itinerary'}
                </h2>
                <div className="mt-6 space-y-6">
                  {tourContent.itinerary.map((stop, index) => (
                    <div key={stop.title} className="relative flex gap-4">
                      <div className="flex flex-col items-center">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-900 text-sm font-semibold text-white">
                          {index + 1}
                        </span>
                        {index < tourContent.itinerary.length - 1 && (
                          <span className="mt-3 h-full w-px bg-[#D8B35B]/40" />
                        )}
                      </div>
                      <div className="pb-2">
                        <h3 className="font-semibold text-slate-950">
                          {stop.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-slate-600">
                          {stop.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact
        dictionary={dictionary}
        locale={locale}
        initialTourSlug={localizedTour.slug}
      />
    </main>
  )
}

export default TourDetailPage
