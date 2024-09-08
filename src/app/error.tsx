"use client"

import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"

//test
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const onRefresh = () => {
    window.location.reload()
  }

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className={"flex flex-col items-center justify-center gap-4"}>
      <h1>Something went wrong!</h1>
      <Button onClick={onRefresh}>Try again</Button>
    </div>
  )
}
