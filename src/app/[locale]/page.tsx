"use memo"

import * as React from "react"

import { Skeleton } from "@/components/ui/skeleton"
import { Shell } from "@/components/shared/shell"

import { HomePage } from "../../components/common/home/home-page"

interface PageProps {
  params: { locale: string }
}

export default async function Page({ params: { locale } }: PageProps) {
  return (
    <div className="bg-gradient-to-b from-background via-blue-100 via-30% to-transparent">
      <Shell className="gap-2">
        <React.Suspense fallback={<Skeleton className="h-7 w-52" />}>
          <HomePage />
        </React.Suspense>
      </Shell>
    </div>
  )
}
