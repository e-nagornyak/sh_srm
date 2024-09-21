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
      enableResizing: true,
      accessorKey: "id",
      size: 20,
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
      enableHiding: true,
      enableResizing: true,
      accessorKey: "buyer",
      size: 100,
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Name Surname" />
      ),
      cell: ({ row }) => {
        const buyer = row?.original?.buyer
        const fullName = `${buyer?.first_name || ""} ${buyer?.last_name || ""}`
        const login = row?.original?.buyer?.login
        const marketplace = row?.original?.marketplace?.slice(0, 2)

        return (
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <Flags.USA className="size-5" />
              <Text className="capitalize" size="xs">
                {fullName}
              </Text>
            </div>
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="23"
                viewBox="0 0 145 50"
                fill="#ff5a00"
              >
                <path d="M141.72 16.69a13.1 13.1 0 0 0-20.7 0 13.59 13.59 0 0 0-2.46 8 13.59 13.59 0 0 0 2.46 8 13.1 13.1 0 0 0 20.7 0 13.6 13.6 0 0 0 2.46-8 13.6 13.6 0 0 0-2.46-8zm-4.1 11c-.94 2.81-3.17 5-6.26 5.07s-5.32-2.26-6.25-5.07a9.27 9.27 0 0 1 0-6c.94-2.81 3.17-5 6.25-5.07s5.32 2.26 6.26 5.07a9.28 9.28 0 0 1 0 5.99zm-94.25 9.4a.74.74 0 0 1-.74.74h-4.3a.74.74 0 0 1-.74-.74V1.74a.74.74 0 0 1 .74-.74h4.3a.74.74 0 0 1 .74.74v35.35zm-10.1 0a.74.74 0 0 1-.74.74h-4.3a.74.74 0 0 1-.74-.74V1.74a.74.74 0 0 1 .73-.74h4.3a.74.74 0 0 1 .74.74v35.35zm84.32-24v3a.78.78 0 0 1-1 .85c-4.86-1-7.85 1.16-7.85 5.65v14.5a.74.74 0 0 1-.74.74h-4.3a.74.74 0 0 1-.74-.74V22.28a10 10 0 0 1 3.17-7.49 11.16 11.16 0 0 1 7.87-3.18 16.69 16.69 0 0 1 3 .28c.51.17.59.47.59 1.24zM99.18 24.68a13.41 13.41 0 0 0-2.46-8 13.1 13.1 0 0 0-20.7 0 14.07 14.07 0 0 0 0 16 12.73 12.73 0 0 0 10.35 5.07 13.2 13.2 0 0 0 7.37-2.22v3.16c0 4.29-3.75 5.07-6.15 5.22a28.26 28.26 0 0 1-4.94-.27c-.66-.1-1.12 0-1.12.71v3.8a.65.65 0 0 0 .68.62c5.57.48 9.32.38 12.14-1.23a9.18 9.18 0 0 0 4.11-5.23 17.49 17.49 0 0 0 .71-5.22V24.68zm-12.81 8.06c-3.09 0-5.32-2.26-6.26-5.07a9.27 9.27 0 0 1 0-6c.94-2.81 3.17-5.07 6.26-5.07 6.91 0 7.14 7.05 7.14 8.07s-.23 8.07-7.14 8.07zM23.55 22.09c0-3.41-.76-6-2.4-7.79s-4.94-2.68-8-2.68a17.34 17.34 0 0 0-8.75 2.33.55.55 0 0 0-.27.48l.23 3.76a.67.67 0 0 0 1.1.39C9.21 16.27 13.71 15.84 16 17a4 4 0 0 1 2 3.61v.55h-6.25c-2.69 0-10.93 1-10.93 8.57v.08a7.34 7.34 0 0 0 2.67 6.08 10.56 10.56 0 0 0 6.68 1.91h12.65a.74.74 0 0 0 .74-.74v-15zM18 33.18h-7.47a4.62 4.62 0 0 1-2.65-.93 2.94 2.94 0 0 1-1.25-2.46c0-1.35.91-4.05 5.46-4.05H18v7.44zm41.2-21.56c-7.65 0-11 5.13-12.07 9.47a14.58 14.58 0 0 0-.44 3.58 13.6 13.6 0 0 0 2.46 8 13.13 13.13 0 0 0 10.35 5.07c4.13.15 6.89-.55 9-1.75a1.17 1.17 0 0 0 .5-1.27v-3.33c0-.68-.41-1-1-.59a13.05 13.05 0 0 1-8.32 2A6.81 6.81 0 0 1 53 26.73h17a.7.7 0 0 0 .7-.69c.3-4.65-1.05-14.42-11.5-14.42zm-6.11 10.51a5.78 5.78 0 0 1 6.12-5.51 5.14 5.14 0 0 1 5.44 5.51H53.09z" />
              </svg>
              <Text color="highlight">({login})</Text>
            </div>
          </div>
        )
      },
    },
    {
      enableSorting: false,
      enableHiding: false,
      enableResizing: true,
      accessorKey: "products",
      size: 600,
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Items" />
      ),
      cell: ({ row }) => {
        const products = row?.original?.products

        return (
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              {products?.map(({ id }) => (
                <div key={`${id}-img`} className="h-8 w-12 bg-gray-200" />
              ))}
            </div>
            <div>
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
          </div>
        )
      },
    },
    {
      enableSorting: false,
      enableHiding: true,
      enableResizing: true,
      accessorKey: "total_to_pay",
      size: 40,
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
      accessorKey: "delivery",
      size: 100,
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Additional information" />
      ),
      cell: ({ row }) => {
        const delivery = row?.original?.delivery

        return (
          <div className="flex flex-col gap-2">
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
      enableHiding: true,
      accessorKey: "updated_at",
      size: 50,
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
