"use memo"

import * as React from "react"

import { Skeleton } from "@/components/ui/skeleton"
import { Shell } from "@/components/shared/shell"
import { Component } from "@/app/[locale]/auth/Component"

interface PageProps {
  params: { locale: string }
}

export default async function HomePage({ params: { locale } }: PageProps) {
  return (
    <Shell className="gap-2">
      <React.Suspense fallback={<Skeleton className="h-7 w-52" />}>
        <Component />
      </React.Suspense>
    </Shell>
  )
}
