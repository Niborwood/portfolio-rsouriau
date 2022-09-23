const nextTranslate = require('next-translate')
console.log("🚀 ~ file: next.config.js ~ line 2 ~ nextTranslate", nextTranslate)

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
