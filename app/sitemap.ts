import type { MetadataRoute } from 'next'
import { locales, type Locale } from '@/i18n/config'
import { tourBySlug } from '@/utils/tours'

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ??
  'https://tour-guide.yascript.com'

const localizedUrl = (locale: Locale, path = '') => {
  return `${siteUrl}/${locale}${path}`
}

const languageAlternates = (path = '') => {
  return Object.fromEntries(
    locales.map((locale) => [locale, localizedUrl(locale, path)])
  )
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: localizedUrl('fr'),
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: languageAlternates(),
      },
    },
    {
      url: localizedUrl('fr', '/tours'),
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: languageAlternates('/tours'),
      },
    },
  ]

  const tourRoutes: MetadataRoute.Sitemap = tourBySlug.map((tour) => ({
    url: localizedUrl('fr', `/tours/${tour.slug}`),
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
    alternates: {
      languages: languageAlternates(`/tours/${tour.slug}`),
    },
  }))

  return [...staticRoutes, ...tourRoutes]
}
