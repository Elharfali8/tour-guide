// components/home/Contact.tsx
'use client';

import React, { useState } from 'react'
import Link from 'next/link'

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        message: '',
      })
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 1500)
  }

  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      href: 'https://wa.me/212XXXXXXXXX',
      bgColor: '#25D366',
    },
    {
      name: 'Instagram',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.067-.06-1.407-.06-4.123v-.08c0-2.643.012-2.987.06-4.043.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.048 1.407-.06 4.123-.06h.08zm0-2c-2.444 0-2.795.013-3.82.06-1.064.049-1.791.218-2.427.465a6.902 6.902 0 00-2.5 1.63 6.902 6.902 0 00-1.63 2.5c-.247.636-.416 1.363-.465 2.427-.048 1.067-.06 1.407-.06 4.123v.08c0 2.643.012 2.987.06 4.043.049 1.064.218 1.791.465 2.427a6.902 6.902 0 001.63 2.5 6.902 6.902 0 002.5 1.63c.636.247 1.363.416 2.427.465 1.067.048 1.407.06 4.123.06h.08c2.643 0 2.987-.012 4.043-.06 1.064-.049 1.791-.218 2.427-.465a6.902 6.902 0 002.5-1.63 6.902 6.902 0 001.63-2.5c.247-.636.416-1.363.465-2.427.048-1.067.06-1.407.06-4.123v-.08c0-2.643-.012-2.987-.06-4.043-.049-1.064-.218-1.791-.465-2.427a6.902 6.902 0 00-1.63-2.5 6.902 6.902 0 00-2.5-1.63c-.636-.247-1.363-.416-2.427-.465-1.067-.048-1.407-.06-4.123-.06h-.08zM12 6.25a5.75 5.75 0 100 11.5 5.75 5.75 0 000-11.5zm0 9.5a3.75 3.75 0 110-7.5 3.75 3.75 0 010 7.5zm5.44-8.75a1.31 1.31 0 100-2.62 1.31 1.31 0 000 2.62z" />
        </svg>
      ),
      href: 'https://instagram.com',
      bgColor: '#E4405F',
    },
    {
      name: 'Facebook',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.99h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      ),
      href: 'https://facebook.com',
      bgColor: '#1877F2',
    },
  ]

  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: 'Location',
      value: 'Marrakech, Morocco',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: 'Phone',
      value: '+212 XXX XX XX XX',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Email',
      value: 'contact@example.com',
    },
  ]

  return (
    <section id='contact' className="py-12 lg:py-18" style={{ backgroundColor: '#FCFBF8' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Contact Info */}
          <div>
            {/* Label */}
            <span className="inline-block text-sm font-semibold text-[#E8872F] uppercase tracking-wider mb-4">
              CONTACT US
            </span>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Let's Plan Your
              <br />
              <span className="text-[#E8872F]">Next Adventure</span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
              Planning a day trip, a Sahara tour, airport transfer, or a custom itinerary? Get in touch and we'll help you create the perfect experience across Morocco.
            </p>

            {/* Contact Information */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#E8872F]/10 flex items-center justify-center text-[#E8872F]">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">{info.label}</p>
                    <p className="text-sm font-medium text-gray-900">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media Icons - Just Icons */}
            <div>
              <p className="text-sm text-gray-500 mb-3">Follow us</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    className="w-11 h-11 rounded-xl text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-95"
                    style={{ backgroundColor: social.bgColor }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <div className="bg-white rounded-[32px] p-8 sm:p-10 shadow-xl border border-gray-100/50">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Send us a message</h3>
              <p className="text-gray-500 text-sm mb-6">We'll get back to you within 24 hours.</p>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Message sent!</h4>
                  <p className="text-gray-600 text-sm">Thank you for reaching out. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#E8872F] focus:ring-2 focus:ring-[#E8872F]/20 outline-none transition-all duration-300 bg-white"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#E8872F] focus:ring-2 focus:ring-[#E8872F]/20 outline-none transition-all duration-300 bg-white"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#E8872F] focus:ring-2 focus:ring-[#E8872F]/20 outline-none transition-all duration-300 bg-white"
                      placeholder="+212 6 00 00 00 00"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#E8872F] focus:ring-2 focus:ring-[#E8872F]/20 outline-none transition-all duration-300 bg-white resize-none"
                      placeholder="Tell us about your dream trip..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full inline-flex items-center justify-center overflow-hidden rounded-xl bg-[#E8872F] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#E8872F]/30 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:bg-[#D8781F] hover:shadow-2xl hover:shadow-[#E8872F]/40 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:scale-100"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                    <span className="relative flex items-center gap-2">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin w-5 h-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-6-6 6 6-6 6" />
                          </svg>
                        </>
                      )}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact