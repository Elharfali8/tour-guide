export const locales = ['en', 'fr'] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'fr'

export const isLocale = (value: string): value is Locale => {
  return locales.includes(value as Locale)
}

export const localePath = (locale: Locale, path: string) => {
  if (path.startsWith('/#')) {
    return `/${locale}${path.slice(1)}`
  }

  if (path === '/') {
    return `/${locale}`
  }

  return `/${locale}${path}`
}

export const switchLocalePath = (pathname: string, nextLocale: Locale) => {
  const [pathWithoutHash, hash = ''] = pathname.split('#')
  const segments = pathWithoutHash.split('/').filter(Boolean)

  if (segments.length > 0 && isLocale(segments[0])) {
    segments[0] = nextLocale
    return `/${segments.join('/')}${hash ? `#${hash}` : ''}`
  }

  if (segments.length === 0) {
    return `/${nextLocale}${hash ? `#${hash}` : ''}`
  }

  return `/${nextLocale}/${segments.join('/')}${hash ? `#${hash}` : ''}`
}
