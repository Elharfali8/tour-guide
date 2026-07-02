// components/ui/SectionTitle.tsx
import React from 'react'

interface SectionTitleProps {
  badge?: string
  title: string
  subtitle?: string
  description?: string
  linkText?: string
  linkHref?: string
  centered?: boolean
  className?: string
}

const SectionTitle = ({
  badge,
  title,
  subtitle,
  description,
  linkText,
  linkHref = '#',
  centered = false,
  className = '',
}: SectionTitleProps) => {
  return (
    <div className={`${centered ? 'text-center' : 'text-left'} ${className}`}>
      {/* Badge */}
      {badge && (
        <span className="inline-block text-sm font-semibold text-[#E8872F] uppercase tracking-wider mb-2">
          {badge}
        </span>
      )}

      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="mt-2 text-lg sm:text-xl text-gray-700 font-medium">
          {subtitle}
        </p>
      )}

      {/* Description */}
      {description && (
        <p className={`mt-3 text-sm sm:text-base text-gray-600 max-w-2xl ${centered ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}

      
    </div>
  )
}

export default SectionTitle