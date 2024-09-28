"use client"
"use memo"

import * as React from "react"

import { type getAllegroOrders } from "@/lib/api/allegro/orders/allegro-orders-query"
import { type AllegroOrdersSchema } from "@/lib/api/allegro/orders/allegro-orders-search-params"
import { useDataTable } from "@/hooks/use-data-table"
import { Card, CardContent } from "@/components/ui/card"
import { getAllegroOrdersColumns } from "@/components/common/allegro/orders/allegro-orders-table-columns"
import { DataTable } from "@/components/common/data-table/data-table"

interface TableProps {
  allegroOrdersPromise: ReturnType<typeof getAllegroOrders>
  searchParams: AllegroOrdersSchema
}

export function AllegroOrdersTableController({
  allegroOrdersPromise,
  searchParams,
}: TableProps) {
  // const { featureFlags } = useAllegroOrdersTable()

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
    <DataTable
      hiddenPagination
      footer={
        <Card className="w-full">
          <CardContent>bla</CardContent>
        </Card>
      }
      table={table}
    >
      <Card className="w-full">
        <CardContent>bla</CardContent>
      </Card>
    </DataTable>
  )
}
