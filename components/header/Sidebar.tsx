'use client'

// components/header/Sidebar.tsx
import React, { useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { defaultLocale, localePath, locales, switchLocalePath, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import Image from 'next/image'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
  locale?: Locale
}

const Sidebar = ({ isOpen, onClose, locale = defaultLocale }: SidebarProps) => {
  const pathname = usePathname()
  const router = useRouter()
  const dictionary = getDictionary(locale)
  const navLinks = dictionary.nav.links

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const scrollToSection = (hash: string) => {
    const element = document.querySelector(hash)

    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    originalHref: string
  ) => {
    if (!originalHref.startsWith('/#')) {
      onClose()
      return
    }

    e.preventDefault()

    const hash = originalHref.replace('/', '')
    const localeHomePath = localePath(locale, '/')
    const isLocaleHome = pathname === localeHomePath || pathname === `${localeHomePath}/`

    onClose()

    if (isLocaleHome) {
      window.history.replaceState(null, '', `${localeHomePath}${hash}`)
      window.setTimeout(() => scrollToSection(hash), 0)
      return
    }

    router.push(`${localeHomePath}${hash}`)
  }

  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Sidebar Panel - Sliding from LEFT */}
      <div
        className={`absolute top-0 left-0 h-full w-64 max-w-[75%] shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ backgroundColor: '#EDE8D0' }}
      >
        <div className="flex flex-col h-full p-6">
          <div className='flex items-center justify-between'>
            

          {/* Logo in Sidebar */}
          <div className="">
        <Link href={localePath(locale, '/')} className="flex items-center gap-2 relative w-[70px] h-[70px]">
            <Image
              src='/images/logo-no-bg.png'
              alt='TFM Tours'
              fill
              className=' object-cover'
            />
        </Link>
            </div>
            {/* Close Button */}
            <div className='grid place-items-center'>
              <button
            onClick={onClose}
            className="self-end p-2 rounded-full hover:bg-black/10 transition cursor-pointer"
            aria-label="Close menu"
          >
            <svg
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          </div>
          </div>
          
          <div className='h-px w-full bg-[#D4C9B0] my-6' />

          {/* Navigation Links */}
          <nav className="space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={localePath(locale, link.href)}
                className="block text-lg font-medium text-gray-800 hover:text-[#E8872F] transition-colors duration-300 hover:translate-x-1 transform"
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="mt-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
              Language
            </p>
            <div className="flex w-fit items-center rounded-full border border-[#D4C9B0] bg-white/60 p-1 text-xs font-semibold text-gray-700">
              {locales.map((item) => (
                <Link
                  key={item}
                  href={switchLocalePath(pathname, item)}
                  onClick={onClose}
                  className={`rounded-full px-4 py-2 uppercase transition-all duration-300 ${
                    locale === item
                      ? 'bg-primary text-white! shadow-sm'
                      : 'hover:bg-black/5'
                  }`}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-auto pt-6 border-t border-[#D4C9B0]">
            <p className="text-sm text-gray-600">&copy; 2026 TFM Tours</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
