import createMiddleware from 'next-intl/middleware'

const middleware = createMiddleware({
  locales: ['en', 'th'],
  defaultLocale: 'en',
})

export default middleware

export const config = {
  matcher: ['/', '/(en|th)/:page*'],
}
