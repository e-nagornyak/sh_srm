"use client"
"use memo"

import * as React from "react"

import { useDataTable } from "@/hooks/use-data-table"
import { DataTableAdvancedToolbar } from "@/components/common/data-table/advanced/data-table-advanced-toolbar"
import { DataTable } from "@/components/common/data-table/data-table"
import { DataTableToolbar } from "@/components/common/data-table/data-table-toolbar"
import { filterFields } from "@/components/controllers/users/orders-table-filtersFields"
import { type getOrders } from "@/components/controllers/users/queries"
import { type OrderSchema } from "@/components/controllers/users/validations"

import { getColumns } from "./orders-table-columns"
import { useTasksTable } from "./orders-table-provider"
import { OrdersTableToolbarActions } from "./orders-table-toolbar-actions"

interface TasksTableProps {
  ordersPromise: ReturnType<typeof getOrders>
  searchParams: OrderSchema
}

export function OrdersTable({ ordersPromise, searchParams }: TasksTableProps) {
  const { featureFlags } = useTasksTable()

  const { results, current_page, total_pages } = React.use(ordersPromise)

  // Memoize the columns so they don't re-render on every render
  const columns = React.useMemo(() => getColumns(), [])

  const { table } = useDataTable({
    data: results,
    columns,
    pageCount: total_pages,
    /* optional props */
    filterFields,
    enableAdvancedFilter: featureFlags.includes("advancedFilter"),
    initialState: {
      // sorting: [{ id: "createdAt", desc: true }],
      columnPinning: { right: ["actions"] },
    },
    // For remembering the previous row selection on page change
    // getRowId: (originalRow, index) => `${originalRow.id}-${index}`,
    /* */
  })

  return (
    <DataTable table={table}>
      {featureFlags.includes("advancedFilter") ? (
        <DataTableAdvancedToolbar table={table} filterFields={filterFields}>
          <OrdersTableToolbarActions
            disabled={!results?.length}
            searchParams={searchParams}
            table={table}
          />
        </DataTableAdvancedToolbar>
      ) : (
        <DataTableToolbar table={table} filterFields={filterFields}>
          <OrdersTableToolbarActions
            disabled={!results?.length}
            searchParams={searchParams}
            table={table}
          />
        </DataTableToolbar>
      )}
    </DataTable>
  )
}
