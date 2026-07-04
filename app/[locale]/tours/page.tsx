import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import TourCard from '@/components/ui/TourCard'
import { isLocale, localePath, locales } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'

type ToursPageProps = {
  params: Promise<{
    locale: string
  }>
}

export const generateStaticParams = () => {
  return locales.map((locale) => ({ locale }))
}

const ToursPage = async ({ params }: ToursPageProps) => {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  const dictionary = getDictionary(locale)
  const t = dictionary.toursPage

  return (
    <main className="min-h-screen bg-[#FEF6EE] pt-12">
      <section className="relative overflow-hidden py-12 lg:py-18">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(13,94,72,0.10),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(201,154,69,0.14),transparent_32%)]" />

        <div className="relative mx-auto max-w-7xl px-4">
          <Link
            href={localePath(locale, '/')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors duration-300 hover:text-[#9D7A2F]"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.backHome}
          </Link>

          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full border border-[#D8B35B]/40 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary shadow-sm backdrop-blur">
                {t.badge}
              </span>
              <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-slate-950 md:text-5xl lg:text-6xl">
                {t.title}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                {t.description}
              </p>
            </div>

            <Link
              href={localePath(locale, '/#contact')}
              className="group inline-flex w-fit items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white! shadow-lg shadow-emerald-950/10 transition-all duration-300 hover:-translate-y-1 hover:bg-primary-hover hover:shadow-xl"
            >
              {t.planCustom}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {dictionary.tours.map((tour) => (
              <TourCard
                key={tour.slug}
                title={tour.title}
                description={tour.description}
                image={tour.image}
                href={localePath(locale, `/tours/${tour.slug}`)}
                ctaLabel={dictionary.popularTours.cardCta}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default ToursPage
