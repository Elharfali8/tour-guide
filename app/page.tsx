import { redirect } from 'next/navigation'
import { defaultLocale, localePath } from '@/i18n/config'

const Page = () => {
  redirect(localePath(defaultLocale, '/'))
}

export default Page
