import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { DefaultHeader } from "@/components/layouts/default-header"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { TailwindIndicator } from "@/components/shared/tailwind-indicator"

import "@/styles/globals.css"

import type { Metadata, Viewport } from "next"
import { notFound } from "next/navigation"
import { getServerSession } from "next-auth"
import { NextIntlClientProvider } from "next-intl"

import { fontMono, fontSans } from "@/lib/fonts"
import { authOptions } from "@/lib/next-auth"
import { Toaster } from "@/components/ui/toaster"
import { DefaultFooter } from "@/components/layouts/default-footer"
import { AuthProvider } from "@/components/providers/auth-provider"

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
  const session = await getServerSession(authOptions)

  return (
    <html lang={locale} suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-gradient-to-b from-blue-300 to-transparent font-sans antialiased dark:from-black",
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
              <DefaultHeader />
              <main className="flex min-h-screen flex-1 flex-col">
                {children}
              </main>
              <DefaultFooter />
              <TailwindIndicator />
            </ThemeProvider>
          </NextIntlClientProvider>
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  )
}
