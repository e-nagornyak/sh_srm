"use client"

import * as React from "react"
import { useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { type Table } from "@tanstack/react-table"
import {
  AlignJustify,
  Camera,
  Check,
  CheckCircle,
  ChevronDown,
  ClipboardCheck,
  CreditCard,
  Divide,
  DollarSign,
  Loader,
  Package,
  Plus,
  Search,
  ShoppingCart,
  Trash,
  X,
  XCircle,
} from "lucide-react"
import { z } from "zod"

import { AllegroOrdersSearchParamsSchema } from "@/lib/api/allegro/orders/allegro-orders-search-params"
import { cn } from "@/lib/utils"
import { useQueryString } from "@/hooks/use-query-string"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"

// Масиви для пунктів меню
const deliveryOptions = [
  { label: "InPost A", color: "fill-blue-800 text-blue-800" },
  { label: "InPost B", color: "fill-blue-700 text-blue-700" },
  { label: "InPost C", color: "fill-blue-600 text-blue-600" },
  { label: "Polecona", color: "fill-purple-600 text-purple-600" },
  { label: "Mini", color: "fill-pink-600 text-pink-600" },
  { label: "Orlen", color: "fill-green-500 text-green-500" },
  { label: "Allegro", color: "fill-gray-700 text-gray-700" },
  { label: "InPost", color: "fill-blue-500 text-blue-500" },
  { label: "DPD", color: "fill-gray-800 text-gray-800" },
  { label: "Allegro 2KG", color: "fill-blue-500 text-blue-500" },
  { label: "Allegro 3KG", color: "fill-red-500 text-red-500" },
  { label: "DPD 2KG", color: "fill-red-400 text-red-400" },
  { label: "DPD 3KG", color: "fill-red-600 text-red-600" },
  { label: "E-commerce", color: "fill-red-700 text-red-700" },
  { label: "ERLI", color: "fill-blue-700 text-blue-700" },
  { label: "ERLI Kurier", color: "fill-blue-600 text-blue-600" },
  { label: "ERLI Punkty", color: "fill-blue-800 text-blue-800" },
  { label: "BL UPS", color: "fill-purple-700 text-purple-700" },
]

const basicOptions = [
  { label: "Set payment", icon: <DollarSign className="size-4" /> },
  { label: "Delete orders", icon: <Trash className="size-4" /> },
  { label: "Merge orders", icon: <Plus className="size-4" /> },
  { label: "Divide order", icon: <Divide className="size-4" /> },
  { label: "Find similar orders", icon: <Search className="size-4" /> },
]

const allegroOptions = [
  {
    label: "Refund of Allegro commission",
    icon: <Camera className="size-4" />,
  },
  { label: "Allegro payment refund", icon: <CreditCard className="size-4" /> },
]

const statuses = [
  {
    key: "BOUGHT",
    color: "bg-gray-500", // Сірий фон
    label: "Order Created",
    icon: <ShoppingCart />, // Іконка для статусу BOUGHT
  },
  {
    key: "FILLED_IN",
    color: "bg-yellow-500", // Жовтий фон
    label: "Order Filled In",
    icon: <ClipboardCheck />, // Іконка для статусу FILLED_IN
  },
  {
    key: "READY_FOR_PROCESSING",
    color: "bg-green-500", // Зелений фон
    label: "Ready for Processing",
    icon: <CheckCircle />, // Іконка для статусу READY_FOR_PROCESSING
  },
  {
    key: "PROCESSING",
    color: "bg-blue-500", // Синій фон
    label: "Processing",
    icon: <Loader />, // Іконка для статусу PROCESSING
  },
  {
    key: "COMPLETED",
    color: "bg-purple-500", // Фіолетовий фон
    label: "Completed",
    icon: <Package />, // Іконка для статусу COMPLETED
  },
  {
    key: "CANCELLED",
    color: "bg-red-500", // Червоний фон
    label: "Cancelled",
    icon: <XCircle />, // Іконка для статусу CANCELLED
  },
]

interface AllegroOrdersTableToolbarSortByStatusProps<TData> {
  table: Table<TData>
}

export function AllegroOrdersTableToolbarSortByStatusController<TData>({
  table,
}: AllegroOrdersTableToolbarSortByStatusProps<TData>) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const search = AllegroOrdersSearchParamsSchema.parse(
    Object.fromEntries(searchParams)
  )

  const { createQueryString } = useQueryString(searchParams)

  const [status, setStatus] = useState<string | null>(search?.status || null)
  const [unpaid, setUnpaid] = useState<string | null>(
    search?.payment_finished || null
  )

  const handleSetStatus = (selectedStatus: string) => {
    const newStatus = selectedStatus === status ? null : selectedStatus
    setStatus(newStatus)
    const url = `${pathname}?${createQueryString({ page: 1, status: newStatus })}`
    router.push(url)
  }

  const handleSetUnpaidFilter = (checked: string) => {
    const payment_finished = checked === unpaid ? null : checked
    setUnpaid(payment_finished)
    const url = `${pathname}?${createQueryString({ page: 1, payment_finished })}`
    router.push(url)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="group" asChild>
        <Button variant="outline" className="gap-2">
          <AlignJustify size="15" />
          <ChevronDown
            size="13"
            className="group-data-[state=open]:rotate-180"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="max-h-96 w-fit overflow-y-auto p-4"
      >
        <DropdownMenuGroup>
          <DropdownMenuLabel>Status</DropdownMenuLabel>
          {statuses?.map((option, index) => (
            <DropdownMenuItem
              key={index}
              className={cn(
                "flex cursor-pointer items-center gap-2 [&_svg]:size-4",
                { "bg-accent": status === option?.key }
              )}
              onClick={() => handleSetStatus(option?.key)}
            >
              {option?.icon}
              {option.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Payment</DropdownMenuLabel>
          <DropdownMenuItem
            className={cn(
              "flex cursor-pointer items-center gap-2 [&_svg]:size-4",
              { "bg-accent": unpaid === "false" }
            )}
            onClick={() => handleSetUnpaidFilter("false")}
          >
            <X className="size-4 text-red-600" />
            Unpaid
          </DropdownMenuItem>
          <DropdownMenuItem
            className={cn(
              "flex cursor-pointer items-center gap-2 [&_svg]:size-4",
              { "bg-accent": unpaid === "true" }
            )}
            onClick={() => handleSetUnpaidFilter("true")}
          >
            <Check className="size-4 text-green-600" />
            Paid
          </DropdownMenuItem>
        </DropdownMenuGroup>
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
