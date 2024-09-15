"use client"
"use memo"

import * as React from "react"

import { useDataTable } from "@/hooks/use-data-table"
import { DataTableAdvancedToolbar } from "@/components/common/data-table/advanced/data-table-advanced-toolbar"
import { DataTable } from "@/components/common/data-table/data-table"
import { DataTableToolbar } from "@/components/common/data-table/data-table-toolbar"
import { AllUsersTableToolbarActions } from "@/components/common/users/all-users-table/all-users-table-toolbar-actions"

import { getColumns } from "../../../common/users/all-users-table/all-users-table-columns"
import { useTasksTable } from "../../../common/users/all-users-table/all-users-table-provider"
import { filterFields } from "./helpers/all-users-table-filtersFields"
import { type getUsers } from "./helpers/all-users-table-queries"
import { type AllUsersSearchParamsSchema } from "./helpers/all-users-table-search-params"

interface TasksTableProps {
  usersPromise: ReturnType<typeof getUsers>
  searchParams: AllUsersSearchParamsSchema
}

export function AllUsersTableController({
  usersPromise,
  searchParams,
}: TasksTableProps) {
  const { featureFlags } = useTasksTable()

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
      {featureFlags.includes("advancedFilter") ? (
        <DataTableAdvancedToolbar table={table} filterFields={filterFields}>
          <AllUsersTableToolbarActions
            disabled={!results?.length}
            table={table}
          />
        </DataTableAdvancedToolbar>
      ) : (
        <DataTableToolbar table={table} filterFields={filterFields}>
          <AllUsersTableToolbarActions
            disabled={!results?.length}
            table={table}
          />
        </DataTableToolbar>
      )}
    </DataTable>
  )
}
