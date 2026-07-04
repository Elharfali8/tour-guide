'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  ChevronDown,
  CheckCircle2,
  Car,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react'
import Image from 'next/image'
import { defaultLocale, type Locale } from '@/i18n/config'
import { getDictionary, type Dictionary } from '@/i18n/dictionaries'

const socialLinks = [
  {
    name: 'WhatsApp',
    href: 'https://wa.me/212669897876',
    src: '/images/whatsapp.png'
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/tfm_tours/',
    src: '/images/instagram.png'
    
  },
]

const contactIcons = [Car, MapPin, Phone, Mail]

type ContactProps = {
  dictionary?: Dictionary
  locale?: Locale
  initialTourSlug?: string
}

const Contact = ({
  dictionary = getDictionary(defaultLocale),
  initialTourSlug = '',
}: ContactProps) => {
  const t = dictionary.contact

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    tour: initialTourSlug,
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isTourSelectOpen, setIsTourSelectOpen] = useState(false)

  const selectedTour = dictionary.tours.find((tour) => tour.slug === formData.tour)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "212669897876"; 

    const message = `${t.fields.tour}: ${selectedTour?.title ?? t.placeholders.tour}

    ${t.whatsappGreeting} ${formData.fullName}.

    ${t.fields.phone}: ${formData.phone}
    ${t.fields.email}: ${formData.email}

    ${t.fields.message}:
    ${formData.message}`;

      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#FEF6EE] py-12 lg:py-18"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D8B35B]/60 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
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

            <div className="mt-8 grid gap-4">
              {t.info.map((info, index) => {
                const Icon = contactIcons[index] ?? Mail

                return (
                  <div
                    key={info.label}
                    className="flex items-center gap-4 rounded-[22px] border border-white/80 bg-white/75 p-4 shadow-[0_14px_40px_rgba(15,23,42,0.07)] backdrop-blur"
                  >
                    <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-gradient-to-br from-orange-600 to-orange-300 text-white shadow-lg shadow-emerald-950/10">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                        {info.label}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-950">
                        {info.value}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-8">
              <p className="text-sm font-semibold text-slate-500">{t.followUs}</p>
              <div className="mt-4 flex gap-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    className={`transition-all ease-in-out duration-150 hover:scale-105`}
                    aria-label={social.name}
                  >
                    <Image 
                      src={social.src}
                      alt={social.name}
                      width={40}
                      height={40}
                      className=''
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className=" rounded-[28px] border border-white/80 bg-white/80 p-5 shadow-[0_24px_70px_rgba(15,23,42,0.12)] backdrop-blur sm:p-8 lg:p-10">
            <h3 className="font-serif text-2xl font-semibold text-slate-950">
              {t.formTitle}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              {t.formDescription}
            </p>

            {isSubmitted ? (
              <div className="mt-8 rounded-[24px] border border-emerald-100 bg-emerald-50 p-8 text-center">
                <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-700" />
                <h4 className="mt-4 text-lg font-semibold text-slate-950">
                  {t.successTitle}
                </h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {t.successDescription}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      {t.fields.fullName}
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-950 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#D8B35B] focus:ring-4 focus:ring-[#D8B35B]/15"
                      placeholder={t.placeholders.fullName}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      {t.fields.phone}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-950 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#D8B35B] focus:ring-4 focus:ring-[#D8B35B]/15"
                      placeholder={t.placeholders.phone}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    {t.fields.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-950 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#D8B35B] focus:ring-4 focus:ring-[#D8B35B]/15"
                    placeholder={t.placeholders.email}
                  />
                </div>

                <div className="relative">
                  <label
                    id="tour-label"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    {t.fields.tour}
                  </label>
                  <button
                    type="button"
                    aria-labelledby="tour-label"
                    aria-expanded={isTourSelectOpen}
                    onClick={() => setIsTourSelectOpen((isOpen) => !isOpen)}
                    className="flex w-full items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2.5 text-left outline-none transition-all duration-300 focus:border-[#D8B35B] focus:ring-4 focus:ring-[#D8B35B]/15"
                  >
                    {selectedTour ? (
                      <span className="flex min-w-0 items-center gap-3">
                        <span className="relative h-12 w-16 flex-none overflow-hidden rounded-xl bg-slate-100">
                          <Image
                            src={selectedTour.image}
                            alt={selectedTour.title}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        </span>
                        <span className="truncate text-sm font-semibold text-slate-950">
                          {selectedTour.title}
                        </span>
                      </span>
                    ) : (
                      <span className="px-1 text-sm text-slate-400">
                        {t.placeholders.tour}
                      </span>
                    )}
                    <ChevronDown
                      className={`h-5 w-5 flex-none text-slate-500 transition-transform duration-300 ${
                        isTourSelectOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isTourSelectOpen && (
                    <div
                      role="listbox"
                      aria-labelledby="tour-label"
                      className="absolute z-30 mt-2 max-h-72 w-full overflow-y-auto rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_20px_50px_rgba(15,23,42,0.16)]"
                    >
                      {dictionary.tours.map((tour) => (
                        <button
                          key={tour.slug}
                          type="button"
                          role="option"
                          aria-selected={formData.tour === tour.slug}
                          onClick={() => {
                            setFormData({
                              ...formData,
                              tour: tour.slug,
                            })
                            setIsTourSelectOpen(false)
                          }}
                          className={`flex w-full items-center gap-3 rounded-xl p-2 text-left transition-colors duration-200 ${
                            formData.tour === tour.slug
                              ? 'bg-[#FEF6EE] text-slate-950'
                              : 'text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <span className="relative h-12 w-16 flex-none overflow-hidden rounded-lg bg-slate-100">
                            <Image
                              src={tour.image}
                              alt={tour.title}
                              fill
                              className="object-cover"
                              sizes="64px"
                            />
                          </span>
                          <span className="min-w-0 flex-1 text-sm font-semibold leading-5">
                            {tour.title}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    {t.fields.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-950 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#D8B35B] focus:ring-4 focus:ring-[#D8B35B]/15"
                    placeholder={t.placeholders.message}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-emerald-950/10 transition-all duration-300 hover:-translate-y-1 hover:bg-primary-hover hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      {t.fields.sending}
                    </>
                  ) : (
                    <>
                      {t.fields.send}
                      <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
