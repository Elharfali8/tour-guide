import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Car,
  Clock,
  Compass,
  Map,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { defaultLocale, localePath, type Locale } from '@/i18n/config'
import { getDictionary, type Dictionary } from '@/i18n/dictionaries'

const icons = [Car, ShieldCheck, Compass, Clock, Map, Sparkles]

type WhyChooseUsProps = {
  dictionary?: Dictionary
  locale?: Locale
}

const WhyChooseUs = ({
  dictionary = getDictionary(defaultLocale),
  locale = defaultLocale,
}: WhyChooseUsProps) => {
  const t = dictionary.whyChooseUs

  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-[#FEF6EE] py-12 lg:py-18"
    >
    
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D8B35B]/60 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div>
            <span className="inline-flex items-center rounded-full border border-[#D8B35B]/40 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary shadow-sm backdrop-blur">
              {t.badge}
            </span>

            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-slate-950 md:text-4xl lg:text-5xl">
              {t.title}
            </h2>

            <p className="mt-4 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
              {t.description}
            </p>


            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={localePath(locale, '/tours')}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white! shadow-lg shadow-emerald-950/10 transition-all duration-300 hover:-translate-y-1 hover:bg-primary-hover hover:shadow-xl"
              >
                {t.primaryCta}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href={localePath(locale, '/#contact')}
                className="inline-flex items-center justify-center rounded-full border border-emerald-900/15 bg-white px-6 py-3 text-sm font-semibold text-emerald-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D8B35B]/70 hover:text-[#9D7A2F]"
              >
                {t.secondaryCta}
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative min-h-[420px] overflow-hidden rounded-[28px] bg-slate-950 shadow-[0_28px_80px_rgba(15,23,42,0.18)] sm:min-h-[520px]">
              <Image
                src="/images/hero-mobile.png"
                alt="Private Morocco tour vehicle in the Atlas Mountains"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/15 p-5 text-white shadow-xl backdrop-blur-md">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D8B35B]">
                  {t.imageLabel}
                </p>
                <p className="mt-2 text-sm leading-6 text-white/85">
                  {t.imageText}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {t.features.map((feature, index) => {
            const Icon = icons[index] ?? Sparkles

            return (
              <article
                key={feature.title}
                className="group relative overflow-hidden rounded-[24px] border border-white/80 bg-white/75 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#D8B35B]/50 hover:bg-white hover:shadow-[0_28px_70px_rgba(15,23,42,0.14)]"
              >
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-[#D8B35B]/10 blur-2xl transition-transform duration-500 group-hover:scale-150" />
                <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-orange-600 to-orange-400 text-white shadow-lg shadow-emerald-950/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </div>

                <h3 className="relative mt-5 text-lg font-semibold text-slate-950">
                  {feature.title}
                </h3>
                <p className="relative mt-3 text-sm leading-7 text-slate-600">
                  {feature.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
