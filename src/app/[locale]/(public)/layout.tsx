import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"

import { routePaths } from "@/config/routes"
import { authOptions } from "@/lib/next-auth"
import { DefaultPublicFooter } from "@/components/layouts/public/default-public-footer"
import { DefaultPublicHeader } from "@/components/layouts/public/default-public-header"

interface RootLayoutProps extends React.PropsWithChildren {
  params: { locale?: string }
}

export default async function PublicRootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <DefaultPublicHeader />
      <main className="flex min-h-screen flex-1 flex-col">{children}</main>
      <DefaultPublicFooter />
    </>
  )
}
