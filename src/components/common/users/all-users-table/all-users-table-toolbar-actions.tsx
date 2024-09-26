"use client"

import * as React from "react"
import { PlusIcon } from "@radix-ui/react-icons"
import { type Table } from "@tanstack/react-table"

import { RoutePaths } from "@/config/routes"
import { type User } from "@/lib/api/user/user-types"
import { Link } from "@/components/ui/link"

interface TasksTableToolbarActionsProps {
  table: Table<User>
  disabled?: boolean
}

export function AllUsersTableToolbarActions({
  table,
  disabled,
}: TasksTableToolbarActionsProps) {
  return (
    <div className="flex w-full items-center gap-2">
      <Link
        variant="ghost"
        aria-label="Toggle columns"
        buttonStyles={{}}
        href={RoutePaths.private.user.add}
      >
        <PlusIcon className="mr-2 size-4" />
        Add user
      </Link>
      {/**
       * Other actions can be added here.
       * For example, import, view, etc.
       */}
    </div>
  )
}
