import React, { type PropsWithChildren, type ReactNode } from "react"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"

import { routePaths } from "@/config/routes"

interface LayoutProps extends PropsWithChildren {
  modal: ReactNode
}

export default async function Layout({ modal, children }: LayoutProps) {
  const session = await getServerSession()
  console.log("session", session)
  if (!session?.user) {
    redirect(routePaths.auth.login)
  }

  return (
    <>
      {modal}
      {children}
    </>
  )
}
