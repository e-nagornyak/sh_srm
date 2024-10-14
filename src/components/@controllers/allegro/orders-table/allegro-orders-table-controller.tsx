"use client"

import * as React from "react"
import { useEffect, useState } from "react"
import { type SortingState } from "@tanstack/table-core"

import { type getAllegroOrders } from "@/lib/api/allegro/orders/orders-query"
import { useDataTable } from "@/hooks/use-data-table"
import { AllegroOrdersTableHeaderController } from "@/components/@controllers/allegro/orders-table/allegro-orders-table-header-controller"
import { getAllegroOrdersColumns } from "@/components/common/allegro/orders/allegro-orders-table-columns"
import {
  ActionFiltersTopBarId,
  AllegroOrdersTableToolbarActionsFooter,
} from "@/components/common/allegro/orders/allegro-orders-table-toolbar-actions/allegro-orders-table-toolbar-actions-footer"
import { AllegroOrdersTableToolbarActionsLayout } from "@/components/common/allegro/orders/allegro-orders-table-toolbar-actions/allegro-orders-table-toolbar-actions-layout"
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
    initialState: {
      columnSizing: {},
      sorting: [{ id: "bought_at", desc: true }],
      // columnPinning: { right: ["actions", "updated_at"], left: ["select"] },
    },
    // For remembering the previous row selection on page change
    // getRowId: (originalRow, index) => `${originalRow.id}-${index}`,
    /* */
  })

  return (
    <DataTable
      hiddenPagination
      footer={<AllegroOrdersTableToolbarActionsFooter table={table} />}
      table={table}
    >
      <AllegroOrdersTableHeaderController />
      <AllegroOrdersTableToolbarActionsLayout
        id={ActionFiltersTopBarId}
        table={table}
      />
    </DataTable>
  )
}
