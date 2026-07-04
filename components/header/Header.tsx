// components/header/Header.tsx
'use client';

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { defaultLocale, isLocale, type Locale } from '@/i18n/config'

const Header = () => {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const firstSegment = pathname.split('/')[1]
  const locale: Locale = isLocale(firstSegment) ? firstSegment : defaultLocale
  const isHomePage = pathname === '/' || pathname === `/${locale}`
  const solidHeader = !isHomePage || scrolled

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  // Close sidebar
  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          solidHeader ? "bg-[#FEF6EE] shadow-md" : "bg-transparent"
        }`}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Navbar scrolled={solidHeader} onMenuClick={toggleSidebar} locale={locale} />
        </div>
      </header>

      {/* Sidebar - rendered outside header for full overlay */}
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} locale={locale} />
    </>
  )
}

export default Header
