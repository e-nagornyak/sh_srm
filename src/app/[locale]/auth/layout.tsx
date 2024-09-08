import { type PropsWithChildren } from "react"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"

import { routePaths } from "@/config/routes"

export default async function Layout({ children }: PropsWithChildren) {
  const session = await getServerSession()

  if (session?.user) {
    redirect(routePaths.home)
  }

  return (
    <div className={"flex flex-col items-center justify-center pt-14"}>
      {children}
    </div>
  )
}
