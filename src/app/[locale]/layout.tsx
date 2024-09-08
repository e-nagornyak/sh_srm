import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { DefaultHeader } from "@/components/layouts/default-header"
import { ThemeProvider } from "@/components/shared/providers"
import { TailwindIndicator } from "@/components/shared/tailwind-indicator"

import "@/styles/globals.css"

import type { Metadata, Viewport } from "next"
import { notFound } from "next/navigation"
import { NextIntlClientProvider } from "next-intl"

import { fontMono, fontSans } from "@/lib/fonts"
import { Toaster } from "@/components/ui/toaster"

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
    return (await import(`../../locales/${locale}.json`)).default
  } catch (error) {
    notFound()
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
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative flex min-h-screen flex-col">
              <DefaultHeader />
              <main className="flex-1">{children}</main>
            </div>
            <TailwindIndicator />
          </ThemeProvider>
        </NextIntlClientProvider>
        <Toaster />
      </body>
    </html>
  )
}
