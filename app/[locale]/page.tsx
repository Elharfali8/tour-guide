import { notFound } from 'next/navigation'
import HomePage from '@/components/home/HomePage'
import { isLocale, locales, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'

type LocalePageProps = {
  params: Promise<{
    locale: string
  }>
}

export const generateStaticParams = () => {
  return locales.map((locale) => ({ locale }))
}

export const generateMetadata = async ({ params }: LocalePageProps) => {
  const { locale } = await params

  if (!isLocale(locale)) {
    return {}
  }

  return getDictionary(locale).metadata
}

const LocalePage = async ({ params }: LocalePageProps) => {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  return <HomePage locale={locale as Locale} />
}

export default LocalePage
