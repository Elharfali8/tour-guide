// components/header/Sidebar.tsx
import React, { useEffect } from 'react'
import Link from 'next/link'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'Why Choose Us', href: '/#why-choose-us' },
    { name: 'Activities', href: '/#activities' },
    { name: 'About', href: '/#about' },
    { name: 'Destinations', href: '/#destinations' },
    { name: 'Contact', href: '/#contact' },
  ]

  // Lock scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }

    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
  }, [isOpen])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    onClose()
    
    // Get the section ID from the href
    const sectionId = href.replace('/', '')
    const element = document.querySelector(sectionId)
    
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

  return (
    <div
      className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
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
          {/* Close Button */}
          <button
            onClick={onClose}
            className="self-end p-2 rounded-full hover:bg-black/10 transition"
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

          {/* Logo in Sidebar */}
          <div className="mt-4 mb-8">
            <Link
              href="/"
              className="text-2xl font-bold text-gray-900"
              onClick={onClose}
            >
              LOGO
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-lg font-medium text-gray-800 hover:text-[#E8872F] transition-colors duration-300 hover:translate-x-1 transform"
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Footer */}
          <div className="mt-auto pt-6 border-t border-[#D4C9B0]">
            <p className="text-sm text-gray-600">© 2026 Brand</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar