"use client"
"use memo"

import * as React from "react"

import { type getAllUsers } from "@/lib/api/user/all-users-query"
import { type UsersSearchParamsSchema } from "@/lib/api/user/all-users-search-params"
import { useDataTable } from "@/hooks/use-data-table"
import { DataTable } from "@/components/common/data-table/data-table"
import { AllUsersTableToolbarActions } from "@/components/common/users/all-users-table/all-users-table-toolbar-actions"

import { getColumns } from "../../../common/users/all-users-table/all-users-table-columns"

interface TableProps {
  usersPromise: ReturnType<typeof getAllUsers>
}

export function UsersTableController({ usersPromise }: TableProps) {
  const { results, total_pages } = React.use(usersPromise)

  // Memoize the columns so they don't re-render on every render
  const columns = React.useMemo(() => getColumns(), [])

  const { table } = useDataTable({
    data: results,
    columns,
    pageCount: total_pages,
    /* optional props */
    initialState: {
      columnPinning: { right: ["actions"], left: ["select"] },
    },
    // For remembering the previous row selection on page change
    // getRowId: (originalRow, index) => `${originalRow.id}-${index}`,
    /* */
  })

  return (
    <DataTable table={table}>
      <AllUsersTableToolbarActions />
    </DataTable>
  )
}
