"use client"
"use memo"

import * as React from "react"

import { type getAllegroOrders } from "@/lib/api/allegro/orders/allegro-orders-query"
import { type AllegroOrdersSchema } from "@/lib/api/allegro/orders/allegro-orders-search-params"
import { useDataTable } from "@/hooks/use-data-table"
import { AllegroOrdersTableAdvancedToolbar } from "@/components/common/allegro/orders/all-users-table-advanced-toolbar"
import { getAllegroOrdersColumns } from "@/components/common/allegro/orders/allegro-orders-table-columns"
import { useAllegroOrdersTable } from "@/components/common/allegro/orders/allegro-orders-table-provider"
import { AllegroOrdersTableToolbarActions } from "@/components/common/allegro/orders/allegro-orders-table-toolbar-actions"
import { DataTableAdvancedToolbar } from "@/components/common/data-table/advanced/data-table-advanced-toolbar"
import { DataTable } from "@/components/common/data-table/data-table"
import { DataTableToolbar } from "@/components/common/data-table/data-table-toolbar"

import { filterFields } from "./helpers/allegro-orders-table-filtersFields"

interface TableProps {
  allegroOrdersPromise: ReturnType<typeof getAllegroOrders>
  searchParams: AllegroOrdersSchema
}

export function AllegroOrdersTableController({
  allegroOrdersPromise,
  searchParams,
}: TableProps) {
  const { featureFlags } = useAllegroOrdersTable()

  const { results, current_page, total_pages } = React.use(allegroOrdersPromise)

  // Memoize the columns so they don't re-render on every render
  const columns = React.useMemo(() => getAllegroOrdersColumns(), [])

  const { table } = useDataTable({
    data: results,
    columns,
    pageCount: total_pages,
    /* optional props */
    // filterFields,
    // enableAdvancedFilter: featureFlags.includes("advancedFilter"),
    initialState: {
      // sorting: [{ id: "createdAt", desc: true }],
      columnPinning: { right: ["actions", "updated_at"], left: ["select"] },
    },
    // For remembering the previous row selection on page change
    // getRowId: (originalRow, index) => `${originalRow.id}-${index}`,
    /* */
  })

  return (
    <DataTable table={table}>
      {featureFlags?.includes("advancedFilter") ? (
        <AllegroOrdersTableAdvancedToolbar
          table={table}
          filterFields={filterFields}
        >
          <AllegroOrdersTableToolbarActions
            disabled={!results?.length}
            table={table}
          />
        </AllegroOrdersTableAdvancedToolbar>
      ) : (
        <DataTableToolbar table={table} filterFields={filterFields}>
          <AllegroOrdersTableToolbarActions
            disabled={!results?.length}
            table={table}
          />
        </DataTableToolbar>
      )}
    </DataTable>
  )
}
