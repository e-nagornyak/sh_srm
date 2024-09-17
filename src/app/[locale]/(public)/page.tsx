"use memo"

import * as React from "react"

import { Skeleton } from "@/components/ui/skeleton"
import { HomePage } from "@/components/common/home/home-page"
import { Shell } from "@/components/shared/shell"

interface PageProps {
  params: { locale: string }
}

export default async function Page({ params: { locale } }: PageProps) {
  return (
    <div className="bg-gradient-to-b from-background via-gray-200 via-40% to-transparent dark:via-gray-700">
      <Shell className="gap-2">
        <React.Suspense fallback={<Skeleton className="h-7 w-52" />}>
          <HomePage />
        </React.Suspense>
      </Shell>
    </div>
  )
}
