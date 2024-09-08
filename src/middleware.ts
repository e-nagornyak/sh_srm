import createMiddleware from "next-intl/middleware"

import { locales } from "./locales/config"

export default createMiddleware({
  // A list of all locales that are supported
  locales,
  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: "en",
  // domains: [
  //   {
  //     domain: 'us.example.com',
  //     defaultLocale: 'en',
  //     // Optionally restrict the locales managed by this domain. If this
  //     // domain receives requests for another locale (e.g. us.example.com/fr),
  //     // then the middleware will redirect to a domain that supports it.
  //     locales: ['en']
  //   },
  //   {
  //     domain: 'ca.example.com',
  //     defaultLocale: 'en'
  //     // If there are no `locales` specified on a domain,
  //     // all global locales will be supported here.
  //   }
  // ],
  localeDetection: true,
  localePrefix: "never",
})

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
}
//
