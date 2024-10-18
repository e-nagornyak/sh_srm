import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { TailwindIndicator } from "@/components/shared/tailwind-indicator"

import "@/styles/globals.css"

import type { Metadata, Viewport } from "next"
import { getServerSession } from "next-auth"
import { NextIntlClientProvider } from "next-intl"

import { fontMono, fontSans } from "@/lib/fonts"
import { authOptions } from "@/lib/next-auth"
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from "@/components/providers/auth-provider"
import AppStoreProvider from "@/components/providers/store-provider"

export const metadata: Metadata = {
  // metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    // url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  // manifest: `${siteConfig.url}/site.webmanifest`,
}

async function getMessages(locale: string) {
  try {
    return (await import(`../../locales/${locale}.json`))?.default
  } catch (error) {
    return (await import(`../../locales/en.json`))?.default
  }
}

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

interface RootLayoutProps extends React.PropsWithChildren {
  params: { locale?: string }
}

export default async function RootLayout({
  params,
  children,
}: RootLayoutProps) {
  const locale = params?.locale || "en"
  const messages = await getMessages(locale)
  const session = await getServerSession(authOptions)

  return (
    <html lang={locale} suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontMono.variable
        )}
      >
        <AuthProvider session={session}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <AppStoreProvider>{children}</AppStoreProvider>
              <TailwindIndicator />
            </ThemeProvider>
          </NextIntlClientProvider>
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  )
}
