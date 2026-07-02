// components/header/Header.tsx
'use client';

import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

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
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Navbar scrolled={scrolled} onMenuClick={toggleSidebar} />
        </div>
      </header>

      {/* Sidebar - rendered outside header for full overlay */}
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
    </>
  )
}

export default Header