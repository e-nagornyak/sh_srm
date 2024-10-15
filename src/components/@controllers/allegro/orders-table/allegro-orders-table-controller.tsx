"use client"

import * as React from "react"
import { useOrdersTableStore } from "@/store/order/orders-table-store-provider"

import { type OrdersQueryResponse } from "@/lib/api/allegro/orders/orders-query"
import { useDataTable } from "@/hooks/use-data-table"
import useEffectAfterMount from "@/hooks/use-effect-after-mount"
import { AllegroOrdersTableHeaderController } from "@/components/@controllers/allegro/orders-table/allegro-orders-table-header-controller"
import { getAllegroOrdersColumns } from "@/components/common/allegro/orders/allegro-orders-table-columns"
import { AllegroOrdersTableToolbarActionsLayout } from "@/components/common/allegro/orders/allegro-orders-table-toolbar-actions/allegro-orders-table-toolbar-actions-layout"
import { DataTable } from "@/components/common/data-table/data-table"

interface TableProps {
  ordersQueryResponse: OrdersQueryResponse
}

export function AllegroOrdersTableController({
  ordersQueryResponse,
}: TableProps) {
  const { total_pages, results } = ordersQueryResponse

  const orders = useOrdersTableStore((store) => store?.orders)
  const setOrders = useOrdersTableStore((store) => store?.setOrders)

  // Memoize the columns so they don't re-render on every render
  const columns = React.useMemo(() => getAllegroOrdersColumns(), [])

  const { table } = useDataTable({
    data: orders,
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

  useEffectAfterMount(() => {
    setOrders(results)
  }, [results])

  return (
    <DataTable table={table}>
      <AllegroOrdersTableHeaderController />
      <AllegroOrdersTableToolbarActionsLayout table={table} />
    </DataTable>
  )
}
