"use client"
"use memo"

import * as React from "react"

import { type getAllUsers } from "@/lib/api/user/all-users-query"
import { type UsersSearchParamsSchema } from "@/lib/api/user/all-users-search-params"
import { useDataTable } from "@/hooks/use-data-table"
import { DataTable } from "@/components/common/data-table/data-table"

import { getColumns } from "../../../common/users/all-users-table/all-users-table-columns"
import { useTasksTable } from "../../../common/users/all-users-table/all-users-table-provider"

interface TableProps {
  usersPromise: ReturnType<typeof getAllUsers>
  searchParams: UsersSearchParamsSchema
}

export function UsersTableController({
  usersPromise,
  searchParams,
}: TableProps) {
  const { results, current_page, total_pages } = React.use(usersPromise)

  // Memoize the columns so they don't re-render on every render
  const columns = React.useMemo(() => getColumns(), [])

  const { table } = useDataTable({
    data: results,
    columns,
    pageCount: total_pages,
    /* optional props */
    // filterFields,
    // enableAdvancedFilter: featureFlags.includes("advancedFilter"),
    initialState: {
      // sorting: [{ id: "createdAt", desc: true }],
      columnPinning: { right: ["actions"], left: ["select"] },
    },
    // For remembering the previous row selection on page change
    // getRowId: (originalRow, index) => `${originalRow.id}-${index}`,
    /* */
  })

  return (
    <DataTable table={table}>
      {/*{featureFlags.includes("advancedFilter") ? (*/}
      {/*  <AllUsersTableAdvancedToolbar table={table} filterFields={filterFields}>*/}
      {/*    <AllUsersTableToolbarActions*/}
      {/*      disabled={!results?.length}*/}
      {/*      table={table}*/}
      {/*    />*/}
      {/*  </AllUsersTableAdvancedToolbar>*/}
      {/*) : (*/}
      {/*  <DataTableToolbar table={table} filterFields={filterFields}>*/}
      {/*    <AllUsersTableToolbarActions*/}
      {/*      disabled={!results?.length}*/}
      {/*      table={table}*/}
      {/*    />*/}
      {/*  </DataTableToolbar>*/}
      {/*)}*/}
    </DataTable>
  )
}
