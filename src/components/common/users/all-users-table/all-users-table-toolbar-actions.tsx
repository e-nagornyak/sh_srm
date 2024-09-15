"use client"

import * as React from "react"
import { PlusIcon } from "@radix-ui/react-icons"
import { type Table } from "@tanstack/react-table"

import { routePaths } from "@/config/routes"
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
        aria-label="Toggle columns"
        buttonStyles={{ size: "sm", variant: "outline" }}
        className="ml-auto hidden h-8 lg:flex"
        href={routePaths.user.add}
      >
        <PlusIcon className="mr-2 size-4" />
        Add user
      </Link>
      {/*<Button*/}
      {/*  disabled={disabled}*/}
      {/*  variant="outline"*/}
      {/*  size="sm"*/}
      {/*  className="max-sm:w-full"*/}
      {/*  onClick={async () => {}}*/}
      {/*>*/}
      {/*  <DownloadIcon className="mr-2 size-4" aria-hidden="true" />*/}
      {/*  Export*/}
      {/*</Button>*/}
      {/**
       * Other actions can be added here.
       * For example, import, view, etc.
       */}
    </div>
  )
}
