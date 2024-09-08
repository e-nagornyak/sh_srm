"use memo"

import * as React from "react"

import { Skeleton } from "@/components/ui/skeleton"
import { Shell } from "@/components/shared/shell"

export default async function IndexPage() {
  return (
    <Shell className="gap-2">
      <React.Suspense
        fallback={<Skeleton className="h-7 w-52" />}
      ></React.Suspense>
    </Shell>
  )
}
