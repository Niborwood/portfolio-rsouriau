import { useRouter } from 'next/router'
import dictionary from '../i18n/dictionary'

export const useTranslation = () => {
  const { locales = [], defaultLocale, ...nextRouter} = useRouter()
  const locale = locales.includes(nextRouter.locale || '')
    ? nextRouter.locale
    : defaultLocale
  
  return {
    t: (term) => {
      const translation = dictionary[locale][term]

      return Boolean(translation) ? translation : term
    }
  }
}