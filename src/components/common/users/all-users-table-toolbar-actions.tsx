"use client"

import { type Table } from "@tanstack/react-table"

import { type User } from "@/lib/api/user/auth-types"
import { type AllUsersSearchParamsSchema } from "@/components/controllers/users/all-users-table/helpers/all-users-table-search-params"

interface TasksTableToolbarActionsProps {
  table: Table<User>
  searchParams: AllUsersSearchParamsSchema
  disabled?: boolean
}

export function AllUsersTableToolbarActions({
  table,
  searchParams,
  disabled,
}: TasksTableToolbarActionsProps) {
  return (
    <div className="flex w-full items-center gap-2">
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
