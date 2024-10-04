"use client"

import * as React from "react"
import { MarketplaceIcons } from "@/constants/order/marketplaces"
import { OrderStatusIndicatorsController } from "@/utils/order-status-indicators-controller"
import { type ColumnDef } from "@tanstack/react-table"
import { format } from "date-fns"
import { BadgeCent, BadgePlus, Star } from "lucide-react"
import { FlagImage } from "react-international-phone"

import { RoutePaths } from "@/config/routes"
import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { cn } from "@/lib/utils"
import { Checkbox } from "@/components/ui/checkbox"
import { CopyButton } from "@/components/ui/copy-button"
import { Link } from "@/components/ui/link"
import { Text, textVariants } from "@/components/ui/text"
import { DataTableColumnHeader } from "@/components/common/data-table/data-table-column-header"
import { HoverImage } from "@/components/shared/hover-image"

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
            <Link href={RoutePaths.private.orders.order(id).view}>
              {id?.toString()?.padStart(4, "0")}
            </Link>
          </div>
        )
      },
    },
    {
      enableSorting: false,
      enableHiding: false,
      enableResizing: true,
      accessorKey: "buyer",
      size: 70,
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Name Surname" />
      ),
      cell: ({ row }) => {
        const buyer = row?.original?.buyer
        const fullName = `${buyer?.first_name || ""} ${buyer?.last_name || ""}`
        const login = row?.original?.buyer?.login
        const marketplace = row?.original?.marketplace?.slice(0, 2)
        const isAllegro = marketplace?.toLowerCase() === "al"
        const country_codeISO = buyer?.address.country_code?.toLowerCase()

        return (
          <div className="flex flex-col gap-1">
            <div className="flex flex-wrap items-center gap-1">
              <FlagImage
                className="size-5"
                disableLazyLoading={false}
                iso2={country_codeISO}
              />
              <Text className="capitalize" size="xs">
                {fullName}
              </Text>
            </div>
            <div className="flex items-center gap-1 max-xl:flex-wrap">
              {isAllegro ? (
                <MarketplaceIcons.allegro />
              ) : (
                <span className="flex size-4 items-center justify-center rounded-sm bg-gray-500">
                  {marketplace}
                </span>
              )}
              <CopyButton copyText={login}>
                <Text color="highlight">({login})</Text>
              </CopyButton>
            </div>
          </div>
        )
      },
    },
    {
      enableSorting: false,
      enableHiding: false,
      accessorKey: "products",
      size: 600,
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Items" />
      ),
      cell: ({ row }) => {
        const products = row?.original?.products
        const images = products
          ?.map(
            (p) =>
              p?.images?.length && {
                src: p?.images,
                quantity: p?.quantity,
              }
          )
          ?.filter(Boolean) as { src: string; quantity: number }[]

        return (
          <div className="min-w-56 space-y-2">
            <div className="hidden flex-wrap items-center gap-2 lg:flex">
              {images?.map(({ src, quantity }, i) => (
                <HoverImage key={`${src}${i}`} src={src} quantity={quantity} />
              ))}
            </div>
            <div>
              {products?.map(({ id, offer_id, quantity, name }) => (
                <Text key={`${id}-text`} size="xs">
                  {quantity}x {name}{" "}
                  <CopyButton copyText={offer_id}>
                    <Text color="highlight" size="xs">
                      ({offer_id})
                    </Text>
                  </CopyButton>
                </Text>
              ))}
            </div>
          </div>
        )
      },
    },
    {
      enableSorting: false,
      enableHiding: false,

      enableResizing: true,
      accessorKey: "total_to_pay",
      size: 150,
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Price" />
      ),
      cell: ({ row }) => {
        const totalPrice = row?.original?.total_to_pay
        const currency = row?.original?.currency

        return (
          <div className="flex size-full flex-col items-start justify-start">
            <Text size="lg">
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
      size: 200,
      header: ({ column }) => (
        <DataTableColumnHeader
          className="whitespace-nowrap"
          column={column}
          title="Additional information"
        />
      ),
      cell: ({ row }) => {
        const order = row?.original
        const delivery = order?.delivery
        const status = order?.status

        return (
          <div className="flex max-w-56 flex-col gap-2">
            <Text
              weight="semibold"
              className={cn(
                "block w-fit max-w-full truncate rounded-md bg-emerald-800 px-1 py-0.5 text-white",
                { "bg-red-600": status === "CANCELLED" },
                { "bg-green-600": status === "FILLED_IN" }
              )}
              size="xs"
            >
              {status}
            </Text>
            <OrderStatusIndicatorsController order={order} />
            <Link
              href="#"
              className={textVariants({
                size: "xxs",
                className: "!text-highlight",
              })}
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
      enableResizing: false,
      accessorKey: "created_at",
      size: 50,
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title={<BadgePlus size="20" />}
        />
      ),
      cell: ({ row }) => {
        const date = row?.original?.created_at

        const formattedDate = date ? format(date, "dd.MM.yyyy, HH:mm") : "-"

        return (
          <Text weight="semibold" size="xs">
            {formattedDate}
          </Text>
        )
      },
    },
    {
      enableSorting: false,
      enableHiding: false,
      enableResizing: false,
      accessorKey: "payment",
      size: 50,
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title={<BadgeCent size="20" />}
        />
      ),
      cell: ({ row }) => {
        const date = row?.original?.payment?.finished_at

        const formattedDate = date ? format(date, "dd.MM.yyyy, HH:mm") : "-"

        return (
          <Text weight="semibold" size="xs">
            {formattedDate}
          </Text>
        )
      },
    },
  ]
}
