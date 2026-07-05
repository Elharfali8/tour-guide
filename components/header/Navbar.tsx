'use client'

// components/header/Navbar.tsx
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { defaultLocale, localePath, locales, switchLocalePath, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'

interface NavbarProps {
  scrolled: boolean
  onMenuClick: () => void
  locale?: Locale
}

const Navbar = ({ scrolled, onMenuClick, locale = defaultLocale }: NavbarProps) => {
  const pathname = usePathname()
  const dictionary = getDictionary(locale)
  const navLinks = dictionary.nav.links

  return (
    <div className="flex items-center justify-between h-16 md:h-20">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Link href={localePath(locale, '/')} className="flex items-center gap-2 relative w-[70px] h-[70px]">
            <Image
              src='/images/logo-no-bg.png'
              alt='TFM Tours'
              fill
              className=' object-cover'
            />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={localePath(locale, link.href)}
            className={`font-medium transition-colors duration-300 
              text-gray-700 hover:text-gray-900`}
          >
            {link.name}
          </Link>
        ))}
        <div
          className={`flex items-center rounded-full border p-1 text-xs font-semibold transition-colors duration-300 ${
            scrolled
              ? 'border-slate-200 bg-white/70 text-slate-700'
              : 'border-white/30 bg-black/20 text-white'
          }`}
        >
          {locales.map((item) => (
            <Link
              key={item}
              href={switchLocalePath(pathname, item)}
              className={`rounded-full px-3 py-1.5 uppercase transition-all duration-300 ${
                locale === item
                  ? 'bg-primary text-white! shadow-sm'
                  : scrolled
                    ? 'hover:bg-slate-100 hover:text-slate-950'
                    : 'hover:bg-white/15'
              }`}
            >
              {item}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={onMenuClick}
        className="lg:hidden flex items-center justify-center p-2 rounded-md transition-colors duration-300 hover:bg-white/20 focus:outline-none"
        aria-label="Open menu"
      >
        <svg
          className={`h-6 w-6 transition-colors duration-300 
            text-gray-900`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  )
}

export default Navbar
