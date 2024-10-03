"use client"

import * as React from "react"
import { type Row, type Table } from "@tanstack/react-table"
import { StickyNote } from "lucide-react"
import { toast } from "sonner"

import { getAllegroOrdersApi } from "@/lib/api/allegro/orders/allegro-orders-api"
import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { showErrorToast } from "@/lib/handle-error"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface AllegroOrdersTableToolbarInvoicesProps<TData> {
  table: Table<TData>
}

export function AllegroOrdersTableToolbarInvoicesController<TData>({
  table,
}: AllegroOrdersTableToolbarInvoicesProps<TData>) {
  const selectedRows = table?.getSelectedRowModel()?.rows || []
  const totalSelectedRows = selectedRows.length
  const [remainingCount, setRemainingCount] = React.useState(totalSelectedRows)

  const createInvoice = async (row: Row<TData>) => {
    try {
      const order = row?.original as Order
      await getAllegroOrdersApi("client").createFacture(order?.order_id)
      toast.info(`Invoice created for order ${order?.id}`)
    } catch (e) {
      showErrorToast(e)
    }
  }

  const handleCreateInvoices = async () => {
    if (!totalSelectedRows) return

    try {
      // Update the count at startup
      setRemainingCount(totalSelectedRows)

      for (const [index, row] of selectedRows.entries()) {
        await createInvoice(row)
        // Update the balance on completion of creation for each row
        setRemainingCount((prevCount) => prevCount - 1)
      }

      toast.success("All invoices created")
      table.toggleAllRowsSelected(false)
    } catch (e) {
      showErrorToast(e)
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger disabled={!totalSelectedRows} asChild>
        <Button className="relative min-w-[3.1rem]" variant="outline">
          {remainingCount ? (
            <>
              <span className="absolute right-1 top-1 flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-highlight/70 opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-highlight"></span>
              </span>
              {remainingCount}
            </>
          ) : (
            <StickyNote size="15" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-fit p-4">
        <DropdownMenuItem
          onClick={handleCreateInvoices}
          className="cursor-pointer"
        >
          Create invoice {totalSelectedRows ? `(${totalSelectedRows})` : null}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
