import React, { type PropsWithChildren } from "react"
import { ChevronLeft } from "lucide-react"

import { routePaths } from "@/config/routes"
import { Link } from "@/components/ui/link"

export default async function Layout({ children }: PropsWithChildren) {
  return (
    <section className="flex flex-1 justify-center p-14">
      <Link buttonStyles={{ variant: "link" }} href={routePaths.user.list}>
        <ChevronLeft />
        Back
      </Link>
      <div className="flex flex-1 justify-center">{children}</div>
    </section>
  )
}
