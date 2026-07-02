// components/header/Sidebar.tsx
import React from 'react'
import Link from 'next/link'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
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

      {/* Sidebar Panel */}
      <div
        className={`absolute top-0 right-0 h-full w-64 max-w-[75%] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="self-end p-2 rounded-full hover:bg-gray-100 transition"
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

          {/* Navigation Links */}
          <nav className="mt-8 space-y-4">
            <Link
              href="/"
              className="block text-lg font-medium text-gray-800 hover:text-blue-600 transition"
              onClick={onClose}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-lg font-medium text-gray-800 hover:text-blue-600 transition"
              onClick={onClose}
            >
              About
            </Link>
            <Link
              href="/services"
              className="block text-lg font-medium text-gray-800 hover:text-blue-600 transition"
              onClick={onClose}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="block text-lg font-medium text-gray-800 hover:text-blue-600 transition"
              onClick={onClose}
            >
              Contact
            </Link>
          </nav>

          {/* Footer */}
          <div className="mt-auto pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">© 2026 Brand</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar