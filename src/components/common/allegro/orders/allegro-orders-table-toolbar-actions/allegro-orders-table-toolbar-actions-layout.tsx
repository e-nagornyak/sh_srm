import * as React from "react"
import { type Table } from "@tanstack/react-table"

import { Card, CardContent } from "@/components/ui/card"
import { AllegroOrdersTableToolbarDelivery } from "@/components/common/allegro/orders/allegro-orders-table-toolbar-actions/allegro-orders-table-toolbar-delivery"
import { AllegroOrdersTableToolbarInvoicesController } from "@/components/common/allegro/orders/allegro-orders-table-toolbar-actions/allegro-orders-table-toolbar-invoices-controller"
import { AllegroOrdersTableToolbarMail } from "@/components/common/allegro/orders/allegro-orders-table-toolbar-actions/allegro-orders-table-toolbar-mails"
import { AllegroOrdersTableToolbarPagination } from "@/components/common/allegro/orders/allegro-orders-table-toolbar-actions/allegro-orders-table-toolbar-pagination"
import { AllegroOrdersTableToolbarPickpack } from "@/components/common/allegro/orders/allegro-orders-table-toolbar-actions/allegro-orders-table-toolbar-pickpack"
import { AllegroOrdersTableToolbarPrintersController } from "@/components/common/allegro/orders/allegro-orders-table-toolbar-actions/allegro-orders-table-toolbar-printers-controller"
import { AllegroOrdersTableToolbarSelect } from "@/components/common/allegro/orders/allegro-orders-table-toolbar-actions/allegro-orders-table-toolbar-select"
import { AllegroOrdersTableToolbarStars } from "@/components/common/allegro/orders/allegro-orders-table-toolbar-actions/allegro-orders-table-toolbar-stars"
import { AllegroOrdersTableToolbarStatusController } from "@/components/common/allegro/orders/allegro-orders-table-toolbar-actions/allegro-orders-table-toolbar-status-controller"

interface TasksTableToolbarActionsProps<TData> {
  table: Table<TData>
}

export function AllegroOrdersTableToolbarActionsLayout<TData>({
  table,
}: TasksTableToolbarActionsProps<TData>) {
  return (
    <Card className="w-full">
      <CardContent className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex">
            <AllegroOrdersTableToolbarSelect table={table} />
            <AllegroOrdersTableToolbarStars table={table} />
          </div>
          <div className="flex flex-wrap">
            {/*<AllegroOrdersTableToolbarGroups table={table} />*/}
            <AllegroOrdersTableToolbarMail table={table} />
            <AllegroOrdersTableToolbarInvoicesController table={table} />
            <AllegroOrdersTableToolbarPrintersController table={table} />
          </div>
          <AllegroOrdersTableToolbarDelivery table={table} />
          <AllegroOrdersTableToolbarPickpack table={table} />
          <AllegroOrdersTableToolbarStatusController table={table} />
          {/*<AllegroOrdersTableToolbarSortByController table={table} />*/}
        </div>
        <AllegroOrdersTableToolbarPagination table={table} />
      </CardContent>
    </Card>
  )
}
