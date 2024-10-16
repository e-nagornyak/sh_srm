"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { type Row, type Table } from "@tanstack/react-table"
import { StickyNote } from "lucide-react"
import { toast } from "sonner"

import { getOrderApi } from "@/lib/api/allegro/orders/orders-api"
import { type Order } from "@/lib/api/allegro/orders/orders-types"
import { showErrorToast } from "@/lib/handle-error"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Text } from "@/components/ui/text"

interface AllegroOrdersTableToolbarInvoicesProps<TData> {
  table: Table<TData>
}

export function AllegroOrdersTableToolbarInvoicesController<TData>({
  table,
}: AllegroOrdersTableToolbarInvoicesProps<TData>) {
  const { refresh } = useRouter()

  const selectedRows = table?.getSelectedRowModel()?.rows || []
  const totalSelectedRows = selectedRows.length
  const [remainingCount, setRemainingCount] = React.useState(totalSelectedRows)

  const createInvoice = async (row: Row<TData>) => {
    try {
      const order = row?.original as Order

      if (order?.labels?.faktura_id || order?.labels?.faktura_url) {
        toast.warning(`Invoice already exists for order ${order?.id}`)
        return
      }

      await getOrderApi("client").createFacture(order?.order_id)
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
      refresh()
    } catch (e) {
      showErrorToast(e)
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger disabled={!totalSelectedRows} asChild>
        <Button className="relative min-w-[3.2rem]" variant="outline">
          {remainingCount ? (
            <>
              <span className="absolute right-1 top-1 flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-highlight/70 opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-highlight"></span>
              </span>
              <Text size="base">{remainingCount}</Text>
            </>
          ) : (
            <StickyNote size="17" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-fit p-4">
        <DropdownMenuItem
          onClick={handleCreateInvoices}
          className="cursor-pointer"
        >
          Create invoice &nbsp;
          <span className="text-highlight">({totalSelectedRows})</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
