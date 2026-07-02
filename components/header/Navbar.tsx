// components/header/Navbar.tsx
import React from 'react'
import Link from 'next/link'

interface NavbarProps {
  scrolled: boolean
  onMenuClick: () => void
}

const Navbar = ({ scrolled, onMenuClick }: NavbarProps) => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Why Choose Us', href: '/#why-choose-us' },
    { name: 'Activities', href: '/#activities' },
    { name: 'About', href: '/#about' },
    { name: 'Destinations', href: '/#destinations' },
    { name: 'Contact', href: '/#contact' },
  ]

  return (
    <div className="flex items-center justify-between h-16 md:h-20">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Link href="/" className="flex items-center gap-2">
          <span className={`text-2xl font-bold transition-colors duration-300 ${
            scrolled ? "text-gray-900" : "text-white! drop-shadow-md"
          }`}>
            LOGO
          </span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`font-medium transition-colors duration-300 ${
              scrolled ? "text-gray-700 hover:text-gray-900" : "text-white! hover:text-gray-300!"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={onMenuClick}
        className="md:hidden flex items-center justify-center p-2 rounded-md transition-colors duration-300 hover:bg-white/20 focus:outline-none"
        aria-label="Open menu"
      >
        <svg
          className={`h-6 w-6 transition-colors duration-300 ${
            scrolled ? "text-gray-900" : "text-white"
          }`}
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