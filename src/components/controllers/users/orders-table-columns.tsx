"use client"

import * as React from "react"
import { type ColumnDef } from "@tanstack/react-table"

import { type Order } from "@/types/table"
import { Checkbox } from "@/components/ui/checkbox"
import { DataTableColumnHeader } from "@/components/common/data-table/data-table-column-header"

export function getColumns(): ColumnDef<Order>[] {
  return [
    {
      id: "select",
      enableSorting: false,
      enableHiding: false,
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="translate-y-0.5"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="translate-y-0.5"
        />
      ),
    },
    {
      enableSorting: false,
      enableHiding: false,
      accessorKey: "delivery_fullname",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Delivery Fullname" />
      ),
      cell: ({ row }) => (
        <div className="w-44 truncate">{row.getValue("delivery_fullname")}</div>
      ),
    },
    {
      enableSorting: false,
      accessorKey: "email",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Email" />
      ),
      cell: ({ row }) => {
        const email = row.original.email

        if (!email) return null

        return (
          <div className="flex space-x-2">
            <a
              href={`mailto:${email}`}
              className="max-w-32 truncate font-medium text-blue-600 hover:underline"
            >
              {email}
            </a>
          </div>
        )
      },
    },
    {
      enableSorting: false,
      accessorKey: "phone",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Phone" />
      ),
      cell: ({ row }) => {
        const phone = row.original.phone

        if (!phone) return null

        return (
          <div className="flex space-x-2">
            <a
              href={`tel:${phone}`}
              className="max-w-32 truncate font-medium text-blue-600 hover:underline"
            >
              {phone}
            </a>
          </div>
        )
      },
    },

    {
      enableSorting: false,
      accessorKey: "order_count",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Order Count" />
      ),
      cell: ({ row }) => {
        return (
          <div className="flex space-x-2">
            <span className="w-fit font-medium">
              {row.getValue("order_count")}
            </span>
          </div>
        )
      },
      filterFn: (row, id, value) => {
        return Array.isArray(value) && value.includes(row.getValue(id))
      },
    },
    {
      enableSorting: false,
      accessorKey: "total_order_value",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Total Order Value" />
      ),
      cell: ({ row }) => {
        return (
          <div className="flex space-x-2">
            <span className="w-fit font-medium">
              {row.getValue("total_order_value")}
            </span>
          </div>
        )
      },
      filterFn: (row, id, value) => {
        return Array.isArray(value) && value.includes(row.getValue(id))
      },
    },
    {
      enableSorting: false,
      accessorKey: "total_delivery_price",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Total Delivery Price" />
      ),
      cell: ({ row }) => {
        return (
          <div className="flex space-x-2">
            <span className="w-fit font-medium">
              {row.getValue("total_delivery_price")}
            </span>
          </div>
        )
      },
      filterFn: (row, id, value) => {
        return Array.isArray(value) && value.includes(row.getValue(id))
      },
    },
    // {
    //   id: "actions",
    //   cell: function Cell() {
    //     return (
    //       <>
    //         <DropdownMenu>
    //           <DropdownMenuTrigger asChild>
    //             <Button
    //               aria-label="Open menu"
    //               variant="ghost"
    //               className="flex size-8 p-0 data-[state=open]:bg-muted"
    //             >
    //               <DotsHorizontalIcon className="size-4" aria-hidden="true" />
    //             </Button>
    //           </DropdownMenuTrigger>
    //           <DropdownMenuContent align="end" className="w-40">
    //             <DropdownMenuItem>Some action 1</DropdownMenuItem>
    //             <DropdownMenuItem>Some action 2</DropdownMenuItem>
    //             <DropdownMenuItem>Some action 3</DropdownMenuItem>
    //             <DropdownMenuSeparator />
    //           </DropdownMenuContent>
    //         </DropdownMenu>
    //       </>
    //     )
    //   },
    //   size: 40,
    // },
  ]
}
