'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight, ArrowUpDown, CalendarDays, Clock3, MapPin, ShieldCheck } from 'lucide-react'
import { defaultLocale } from '@/i18n/config'
import { getDictionary, type Dictionary } from '@/i18n/dictionaries'

type ReservationProps = {
  dictionary?: Dictionary
}

const Reservation = ({ dictionary = getDictionary(defaultLocale) }: ReservationProps) => {
  const t = dictionary.reservation
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')

  const swapLocations = () => {
    setFrom(to)
    setTo(from)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const message = [
      `*${t.messageTitle}*`,
      '',
      `${t.from}: ${form.get('from')}`,
      `${t.to}: ${form.get('to')}`,
      `${t.date}: ${form.get('date')}`,
      `${t.time}: ${form.get('time')}`,
    ].join('\n')

    window.open(`https://wa.me/212669897876?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  }

  const inputClass = 'w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-4 focus:ring-primary/10'

  return (
    <section id="reservation" className="relative z-20 bg-[#FEF6EE] px-4 pb-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl -translate-y-6 rounded-[28px] border border-white/80 bg-white/95 p-5 shadow-[0_24px_70px_rgba(15,23,42,0.16)] backdrop-blur-xl sm:-translate-y-10 sm:p-7 lg:p-8">
        <div>
          <div className="lg:flex lg:items-end lg:justify-between lg:gap-10">
            <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
              <ShieldCheck className="h-4 w-4" />
              {t.eyebrow}
            </span>
            <h2 className="mt-2 font-serif text-2xl font-semibold text-slate-950 sm:text-3xl">{t.title}</h2>
            <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">{t.description}</p>
            </div>
            <p className="mt-3 max-w-md text-xs leading-5 text-slate-400 lg:mt-0 lg:text-right">{t.note}</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-3">
              <label htmlFor="transfer-from" className="mb-2 flex items-center gap-2 text-xs font-semibold text-slate-600">
                <MapPin className="h-4 w-4 text-primary" /> {t.from}
              </label>
              <input id="transfer-from" name="from" value={from} onChange={(event) => setFrom(event.target.value)} required autoComplete="street-address" placeholder={t.fromPlaceholder} className={inputClass} />
            </div>

            <div className="relative lg:col-span-3">
              <button type="button" onClick={swapLocations} aria-label={`${t.from} / ${t.to}`} className="absolute -top-1 right-2 flex h-8 w-8 -translate-y-full items-center justify-center rounded-full border border-slate-200 bg-white text-primary shadow-sm transition hover:rotate-180 hover:border-primary/40 md:-left-6 md:top-[43px] md:right-auto md:z-10 md:translate-y-0">
                <ArrowUpDown className="h-4 w-4 md:rotate-90" />
              </button>
              <label htmlFor="transfer-to" className="mb-2 flex items-center gap-2 text-xs font-semibold text-slate-600">
                <MapPin className="h-4 w-4 text-primary" /> {t.to}
              </label>
              <input id="transfer-to" name="to" value={to} onChange={(event) => setTo(event.target.value)} required placeholder={t.toPlaceholder} className={inputClass} />
            </div>

            <div className="lg:col-span-2">
              <label htmlFor="transfer-date" className="mb-2 flex items-center gap-2 text-xs font-semibold text-slate-600">
                <CalendarDays className="h-4 w-4 text-primary" /> {t.date}
              </label>
              <input id="transfer-date" name="date" type="date" required className={`${inputClass} min-h-[50px]`} />
            </div>

            <div className="lg:col-span-2">
              <label htmlFor="transfer-time" className="mb-2 flex items-center gap-2 text-xs font-semibold text-slate-600">
                <Clock3 className="h-4 w-4 text-primary" /> {t.time}
              </label>
              <input id="transfer-time" name="time" type="time" required className={`${inputClass} min-h-[50px]`} />
            </div>

            <button type="submit" className="group flex min-h-[50px] items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-3 text-sm font-bold text-white shadow-lg shadow-primary/25 transition hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-xl lg:col-span-2">
              {t.submit}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}

export default Reservation
