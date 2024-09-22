"use client"

// Error boundaries must be Client Components
import { useEffect } from "react"

import { routePaths } from "@/config/routes"
import { Link } from "@/components/ui/link"
import { FormWrapper } from "@/components/shared/form-wrapper"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <FormWrapper title="No user found">
      <Link
        href={routePaths.private.user.list}
        className="w-full"
        buttonStyles={{ size: "lg" }}
      >
        Return to all users
      </Link>
    </FormWrapper>
  )
}
