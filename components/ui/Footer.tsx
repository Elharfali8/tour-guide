'use client'

// components/home/Footer.tsx
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { defaultLocale, isLocale, localePath, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'

const Footer = () => {
  const pathname = usePathname()
  const firstSegment = pathname.split('/')[1]
  const locale: Locale = isLocale(firstSegment) ? firstSegment : defaultLocale
  const dictionary = getDictionary(locale)
  const currentYear = new Date().getFullYear()

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

  return (
    <footer className="bg-[#FEF6EE] border-t-2 shadow border-gray-300 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 relative">
          {/* Logo */}
          <Link href={localePath(locale, '/')} className="flex items-center gap-2">
            <Image
              src='/images/logo-no-bg.png'
              alt='TFM Tours'
              width={90}
              height={90}
              className=' object-cover'
            />
          </Link>

          {/* Copyright */}
          <p className="text-sm text-gray-500 order-3 sm:order-2">
            &copy; {currentYear} {dictionary.footer.rights}
            <span className="font-medium text-slate-700"> Youssef Qostassi</span>
          </p>

          {/* Social Media Icons */}
          <div className="flex items-center gap-3 order-2 sm:order-3">
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
    </footer>
  )
}

export default Footer
