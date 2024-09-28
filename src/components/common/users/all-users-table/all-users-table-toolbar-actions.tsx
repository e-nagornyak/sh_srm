import * as React from "react"
import { PlusIcon } from "@radix-ui/react-icons"

import { RoutePaths } from "@/config/routes"
import { Link } from "@/components/ui/link"

export function AllUsersTableToolbarActions() {
  return (
    <div className="flex w-full items-center justify-end gap-2">
      <Link
        variant="ghost"
        aria-label="Toggle columns"
        buttonStyles={{}}
        href={RoutePaths.private.user.add}
      >
        <PlusIcon className="mr-2 size-4" />
        Add user
      </Link>
    </div>
  )
}
