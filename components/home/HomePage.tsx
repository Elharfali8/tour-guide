import Activities from '@/components/home/Activities'
import Contact from '@/components/home/Contact'
import Destinations from '@/components/home/Destinations'
import Hero from '@/components/home/Hero'
import PopularTours from '@/components/home/PopularTours'
import Reservation from '@/components/home/Reservation'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import { defaultLocale, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'

type HomePageProps = {
  locale?: Locale
}

const HomePage = ({ locale = defaultLocale }: HomePageProps) => {
  const dictionary = getDictionary(locale)

  return (
    <main className="min-h-screen">
      <Hero dictionary={dictionary} locale={locale} />
      <Reservation dictionary={dictionary} />
      <WhyChooseUs dictionary={dictionary} locale={locale} />
      <PopularTours dictionary={dictionary} locale={locale} />
      <Destinations dictionary={dictionary} locale={locale} />
      <Activities dictionary={dictionary} locale={locale} />
      <Contact dictionary={dictionary} locale={locale} />
    </main>
  )
}

export default HomePage
