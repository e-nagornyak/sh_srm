import React, { Suspense, type PropsWithChildren, type ReactNode } from "react"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"

import { RoutePaths } from "@/config/routes"
import { authOptions } from "@/lib/next-auth"
import { DefaultPrivateHeader } from "@/components/layouts/private/default/default-private-header"
import { DefaultPrivateSidebar } from "@/components/layouts/private/default/default-private-sidebar"

interface LayoutProps extends PropsWithChildren {
  modal: ReactNode
}

export default async function Layout({ modal, children }: LayoutProps) {
  const session = await getServerSession(authOptions)

  if (!session?.user) {
    redirect(RoutePaths.auth.login)
  }

  return (
    <div className="flex">
      <DefaultPrivateSidebar />
      <div className="flex min-h-screen flex-1 flex-col">
        <DefaultPrivateHeader session={session} />
        <main className="flex flex-1 flex-col">
          {modal}
          {children}
        </main>
      </div>
    </div>
  )
}
