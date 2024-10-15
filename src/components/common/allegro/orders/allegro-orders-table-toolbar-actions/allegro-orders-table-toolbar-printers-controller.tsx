"use client"

import * as React from "react"
import { useState } from "react"
import { useOrdersTableStore } from "@/store/order/orders-table-store-provider"
import { type Row, type Table } from "@tanstack/react-table"
import { Printer } from "lucide-react"
import { toast } from "sonner"

import { getAllegroOrdersApi } from "@/lib/api/allegro/orders/orders-api"
import type { Order } from "@/lib/api/allegro/orders/orders-types"
import { showErrorToast } from "@/lib/handle-error"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Text } from "@/components/ui/text"

interface AllegroOrdersTableToolbarPrintersProps<TData> {
  table: Table<TData>
}

export function AllegroOrdersTableToolbarPrintersController<TData>({
  table,
}: AllegroOrdersTableToolbarPrintersProps<TData>) {
  const updateOrder = useOrdersTableStore((store) => store?.updateOrder)

  const selectedRows = table?.getSelectedRowModel()?.rows || []
  const totalSelectedRows = selectedRows.length

  const [remainingCount, setRemainingCount] = React.useState(totalSelectedRows)

  const createShippingLabel = async (row: Row<TData>) => {
    try {
      const order = row?.original as Order

      if (order?.labels?.label_url) {
        toast.warning(`Label already exists for order ${order?.id}`)
        return
      }

      await getAllegroOrdersApi("client").sendShippingLabel(order?.order_id)
      updateOrder(order?.id, { status: "PROCESSING" })

      toast.info(`Label was sent to print for order ${order?.id}`, {
        icon: <Printer size="17" />,
      })
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
        await createShippingLabel(row)
        // Update the balance on completion of creation for each row
        setRemainingCount((prevCount) => prevCount - 1)
      }

      toast.success("All labels were sent for printing")
      table.toggleAllRowsSelected(false)
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
            <Printer size="17" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-fit p-4">
        <DropdownMenuItem
          onClick={handleCreateInvoices}
          className="cursor-pointer"
        >
          Shipping Label&nbsp;
          <span className="text-highlight">({totalSelectedRows})</span>
        </DropdownMenuItem>
        {/*<DropdownMenuItem className="cursor-pointer">*/}
        {/*  AfterShip [CSV]*/}
        {/*</DropdownMenuItem>*/}
        {/*<DropdownMenuItem className="cursor-pointer">*/}
        {/*  BL - ZWROTY [CSV]*/}
        {/*</DropdownMenuItem>*/}
        {/*<DropdownMenuItem className="cursor-pointer">*/}
        {/*  BL - ZWROTY EWIDENCJA [HTML]*/}
        {/*</DropdownMenuItem>*/}
        {/*<DropdownMenuItem className="cursor-pointer">*/}
        {/*  BL - ZWROTY TRANSPORT [CSV]*/}
        {/*</DropdownMenuItem>*/}
        {/*<DropdownMenuItem className="cursor-pointer">*/}
        {/*  CSV - pozycje zamówienia kopia [CSV]*/}
        {/*</DropdownMenuItem>*/}
        {/*<DropdownMenuItem className="cursor-pointer">*/}
        {/*  CSV - zamówienia [CSV]*/}
        {/*</DropdownMenuItem>*/}
        {/*<DropdownMenuItem className="cursor-pointer">*/}
        {/*  FV imienne [CSV]*/}
        {/*</DropdownMenuItem>*/}
        {/*<DropdownMenuItem className="flex cursor-pointer items-center justify-between">*/}
        {/*  Protokół zwrotu [PDF]*/}
        {/*  <Printer className="size-4 text-blue-500" />*/}
        {/*</DropdownMenuItem>*/}
        {/*<DropdownMenuItem className="cursor-pointer">*/}
        {/*  Wadliwy/uszkodzony [CSV]*/}
        {/*</DropdownMenuItem>*/}
        {/*<DropdownMenuItem className="cursor-pointer">*/}
        {/*  Zwrócony na stan [CSV]*/}
        {/*</DropdownMenuItem>*/}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
