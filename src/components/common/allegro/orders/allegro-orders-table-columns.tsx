"use client"

import * as React from "react"
import { type ColumnDef } from "@tanstack/react-table"
import { format } from "date-fns"
import { Star } from "lucide-react"

import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { Checkbox } from "@/components/ui/checkbox"
import { Link } from "@/components/ui/link"
import { Text, textVariants } from "@/components/ui/text"
import { DataTableColumnHeader } from "@/components/common/data-table/data-table-column-header"
import { Flags } from "@/components/shared/Flags"

export function getAllegroOrdersColumns(): ColumnDef<Order>[] {
  return [
    {
      id: "select",
      enableSorting: false,
      enableHiding: false,
      size: 20,
      accessorKey: "id",
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
      accessorKey: "id",
      header: ({ column }) => (
        <DataTableColumnHeader
          className="flex flex-col"
          column={column}
          title="Number"
        />
      ),
      cell: ({ row }) => {
        const id = row?.original?.id

        return (
          <div className="flex items-center gap-1">
            <button>
              <Star size="14" />
            </button>
            <Text></Text>
            <Link variant="highlight" href="#">
              {id?.toString()?.padStart(4, "0")}
            </Link>
          </div>
        )
      },
    },
    {
      enableSorting: false,
      enableHiding: false,
      accessorKey: "buyer",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Name Surname" />
      ),
      cell: ({ row }) => {
        const buyer = row?.original?.buyer
        const fullName = `${buyer?.first_name || ""} ${buyer?.last_name || ""}`

        return (
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <Flags.USA className="size-5" />
              <Text className="capitalize" size="xs">
                {fullName}
              </Text>
            </div>
          </div>
        )
      },
    },
    {
      enableSorting: false,
      enableHiding: false,
      accessorKey: "products",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Items" />
      ),
      cell: ({ row }) => {
        const products = row?.original?.products

        return (
          <div>
            <div className="flex items-center gap-2">
              {products?.map(({ id }) => (
                <div key={`${id}-img`} className="h-10 w-14 bg-gray-200" />
              ))}
            </div>
            {products?.map(({ id, offer_id, quantity, name }) => (
              <Text key={`${id}-text`} size="xs">
                {quantity}x {name}{" "}
                <Link
                  variant="highlight"
                  className="flexible-text-[11px]"
                  href="#"
                >
                  ({offer_id})
                </Link>
              </Text>
            ))}
          </div>
        )
      },
    },
    {
      enableSorting: false,
      enableHiding: false,
      accessorKey: "total_to_pay",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Price" />
      ),
      cell: ({ row }) => {
        const totalPrice = row?.original?.total_to_pay
        const currency = row?.original?.currency

        return (
          <div className="flex size-full flex-col items-start justify-start">
            <Text size="xxs">
              {totalPrice}&nbsp;{currency}
            </Text>
          </div>
        )
      },
    },

    {
      enableSorting: false,
      enableHiding: false,
      accessorKey: "total_to_pay",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Additional information" />
      ),
      cell: ({ row }) => {
        const delivery = row?.original?.delivery

        return (
          <div className="">
            <Text
              className="w-fit rounded-md bg-emerald-700 px-1 py-0.5"
              size="xxs"
            >
              Status
            </Text>
            <div className="float-right flex gap-0.5">
              {Array.from({ length: 4 })?.map((_, i) => (
                <div key={i} className="size-4 rounded-sm bg-gray-300" />
              ))}
            </div>
            <Link
              className={textVariants({
                size: "xxs",
                className: "!text-highlight",
              })}
              variant="highlight"
              href="#"
            >
              {delivery?.method}
            </Link>
          </div>
        )
      },
    },
    {
      enableSorting: false,
      enableHiding: false,
      accessorKey: "total_to_pay",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Order Date" />
      ),
      cell: ({ row }) => {
        const date = new Date() // або будь-яка інша дата
        const formattedDate = format(date, "dd.MM.yyyy HH:mm")

        return (
          <div className="">
            <Text size="xxs">{formattedDate}</Text>
            <Text color="highlight" size="xxs">
              {formattedDate}
            </Text>
          </div>
        )
      },
    },
  ]
}
