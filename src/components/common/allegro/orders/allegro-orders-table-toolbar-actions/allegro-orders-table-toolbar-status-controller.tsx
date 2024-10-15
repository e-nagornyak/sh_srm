"use client"

import * as React from "react"
import {
  orderStatuses,
  type OrderStatusEntity,
} from "@/constants/order/order-statuses"
import { type Row, type Table } from "@tanstack/react-table"
import { AlignJustify } from "lucide-react"
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

//
// const basicOptions = [
//   { label: "Set payment", icon: <DollarSign className="size-4" /> },
//   { label: "Delete orders", icon: <Trash className="size-4" /> },
//   { label: "Merge orders", icon: <Plus className="size-4" /> },
//   { label: "Divide order", icon: <Divide className="size-4" /> },
//   { label: "Find similar orders", icon: <Search className="size-4" /> },
// ]
//
// const allegroOptions = [
//   {
//     label: "Refund of Allegro commission",
//     icon: <Camera className="size-4" />,
//   },
//   { label: "Allegro payment refund", icon: <CreditCard className="size-4" /> },
// ]

interface AllegroOrdersTableToolbarStatusControllerProps<TData> {
  table: Table<TData>
}

export function AllegroOrdersTableToolbarStatusController<TData>({
  table,
}: AllegroOrdersTableToolbarStatusControllerProps<TData>) {
  const selectedRows = table?.getSelectedRowModel()?.rows || []
  const totalSelectedRows = selectedRows.length
  const [remainingCount, setRemainingCount] = React.useState(totalSelectedRows)

  const memoizedStatuses = React.useMemo(
    (): OrderStatusEntity[] => Object.values(orderStatuses),
    []
  )

  const changeStatus = async (row: Row<TData>, status: OrderStatusEntity) => {
    try {
      const order = row?.original as Order

      if (order?.status === status?.key) {
        toast.warning(
          `This status ${status?.key} is already set for the order ${order.id}`
        )
        return
      }
      await getAllegroOrdersApi("client").updateAllegroOrder(order?.id, {
        ...order,
        status: status?.key,
      })
      toast.info(
        `Status ${status?.key} has been set for the order ${order?.id}`
      )
    } catch (e) {
      showErrorToast(e)
    }
  }

  const handleChangeStatuses = async (status: OrderStatusEntity) => {
    if (!totalSelectedRows) return

    try {
      // Update the count at startup
      setRemainingCount(totalSelectedRows)

      for (const [index, row] of selectedRows.entries()) {
        await changeStatus(row, status)
        // Update the balance on completion of creation for each row
        setRemainingCount((prevCount) => prevCount - 1)
      }

      table.toggleAllRowsSelected(false)
    } catch (e) {
      showErrorToast(e)
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger disabled asChild>
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
            <AlignJustify size="17" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="relative max-h-96 w-fit space-y-2 overflow-y-auto p-4 sm:min-w-96 md:max-h-[50vh]"
      >
        {memoizedStatuses?.map((status) => (
          <DropdownMenuItem
            key={status?.key}
            className="cursor-pointer gap-2"
            onClick={() => handleChangeStatuses(status)}
          >
            <div
              className={`size-4 rounded border border-border ${status?.color}`}
            />
            {status?.label}{" "}
            <span className="text-highlight">({totalSelectedRows})</span>
          </DropdownMenuItem>
        ))}
        {/*/!* Група з варіантами доставки *!/*/}
        {/*<DropdownMenuGroup>*/}
        {/*  {deliveryOptions.map((option, index) => (*/}
        {/*    <DropdownMenuItem*/}
        {/*      key={index}*/}
        {/*      className="flex cursor-pointer items-center gap-2"*/}
        {/*    >*/}
        {/*      <Truck className={`size-4 ${option.color}`} />*/}
        {/*      {option.label}*/}
        {/*    </DropdownMenuItem>*/}
        {/*  ))}*/}
        {/*</DropdownMenuGroup>*/}
        {/*/!* Базові дії *!/*/}
        {/*<DropdownMenuGroup>*/}
        {/*  <DropdownMenuLabel>BASIC</DropdownMenuLabel>*/}
        {/*  {basicOptions.map((option, index) => (*/}
        {/*    <DropdownMenuItem*/}
        {/*      key={index}*/}
        {/*      className="flex cursor-pointer items-center gap-2"*/}
        {/*    >*/}
        {/*      {option.icon}*/}
        {/*      {option.label}*/}
        {/*    </DropdownMenuItem>*/}
        {/*  ))}*/}
        {/*</DropdownMenuGroup>*/}
        {/*/!* Дії Allegro *!/*/}
        {/*<DropdownMenuGroup>*/}
        {/*  <DropdownMenuLabel>ALLEGRO</DropdownMenuLabel>*/}
        {/*  {allegroOptions.map((option, index) => (*/}
        {/*    <DropdownMenuItem*/}
        {/*      key={index}*/}
        {/*      className="flex cursor-pointer items-center gap-2"*/}
        {/*    >*/}
        {/*      {option.icon}*/}
        {/*      {option.label}*/}
        {/*    </DropdownMenuItem>*/}
        {/*  ))}*/}
        {/*</DropdownMenuGroup>*/}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
