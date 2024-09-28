"use client"
"use memo"

import * as React from "react"

import { type getAllegroOrders } from "@/lib/api/allegro/orders/allegro-orders-query"
import { useDataTable } from "@/hooks/use-data-table"
import { getAllegroOrdersColumns } from "@/components/common/allegro/orders/allegro-orders-table-columns"
import { AllegroOrdersTableToolbarActions } from "@/components/common/allegro/orders/allegro-orders-table-toolbar-actions"
import { DataTable } from "@/components/common/data-table/data-table"

interface TableProps {
  allegroOrdersPromise: ReturnType<typeof getAllegroOrders>
}

export function AllegroOrdersTableController({
  allegroOrdersPromise,
}: TableProps) {
  const { results, total_pages } = React.use(allegroOrdersPromise)

  // Memoize the columns so they don't re-render on every render
  const columns = React.useMemo(() => getAllegroOrdersColumns(), [])

  const { table } = useDataTable({
    data: results,
    columns,
    pageCount: total_pages,
    /* optional props */
    // filterFields,
    initialState: {
      columnSizing: {},
      // columnPinning: { right: ["actions", "updated_at"], left: ["select"] },
    },
    // For remembering the previous row selection on page change
    // getRowId: (originalRow, index) => `${originalRow.id}-${index}`,
    /* */
  })

  return (
    <DataTable
      hiddenPagination
      footer={<AllegroOrdersTableToolbarActions />}
      table={table}
    >
      <AllegroOrdersTableToolbarActions />
    </DataTable>
  )
}
