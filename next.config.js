const nextTranslate = require('next-translate')

module.exports = nextTranslate({
  reactStrictMode: true,
  images: {
    domains: ["rcyqnmbscuupwvbfcywc.supabase.in"],
  },
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  },
});
