"use client"

import * as React from "react"
import { useCallback, useMemo, useState } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { orderFilterStatuses } from "@/constants/order/order-statuses-new"
import {
  AllegroOrdersSearchParamsSchema,
  type AllegroOrdersSchema,
} from "@/constants/order/orders-search-params"
import { type Table } from "@tanstack/react-table"
import {
  AlignJustify,
  Camera,
  Check,
  ChevronDown,
  CreditCard,
  Divide,
  DollarSign,
  Loader,
  Plus,
  RefreshCcw,
  Search,
  Trash,
  X,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { useDebounce } from "@/hooks/use-debounce"
import useEffectAfterMount from "@/hooks/use-effect-after-mount"
import { useLazyRouter } from "@/hooks/use-lazy-router"
import { useQueryString } from "@/hooks/use-query-string"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"

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

interface AllegroOrdersTableToolbarSortByStatusProps<TData> {
  table: Table<TData>
}

export function AllegroOrdersTableToolbarSortByStatusController<TData>({
  table,
}: AllegroOrdersTableToolbarSortByStatusProps<TData>) {
  const { isPending, lazyPush } = useLazyRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const search = useMemo(
    () =>
      AllegroOrdersSearchParamsSchema.parse(Object.fromEntries(searchParams)),
    [searchParams]
  )

  const { createQueryString } = useQueryString(searchParams)

  const [open, setOpen] = useState(false)

  const [filters, setFilters] = useState<AllegroOrdersSchema>(search)
  const [productName, setProductName] = useState<string | null>(
    search?.product_name || null
  )
  const debouncedProductName = useDebounce(productName, 500)

  const handleFilter = useCallback(
    (filter: AllegroOrdersSchema) => {
      const queryString = createQueryString(filter)
      setFilters(filter)
      const url = `${pathname}?${queryString}`
      lazyPush(url)
    },
    [createQueryString, lazyPush, pathname]
  )

  const checkIfFilterExist = useCallback(
    (filter: Partial<AllegroOrdersSchema>) => {
      const key = Object.keys(filter)[0] as keyof AllegroOrdersSchema
      const value = Object.values(filter)[0]

      const isExist = Boolean(key && filters?.[key] === value)

      const newFilters = isExist
        ? { ...filters, [key]: null }
        : { ...filters, ...filter }
      handleFilter(newFilters)
    },
    [filters, handleFilter]
  )

  const handleResetFilter = useCallback(() => {
    const resetFilters = Object.keys(filters).reduce((acc, key) => {
      if (key === "limit" || key === "page") {
        acc[key] = filters[key]
      } else {
        // @ts-ignore
        acc[key] = null
      }
      return acc
    }, {} as Partial<AllegroOrdersSchema>)
    handleFilter(resetFilters as AllegroOrdersSchema)
    setProductName(null)
  }, [filters, handleFilter])

  useEffectAfterMount(() => {
    handleFilter({
      ...filters,
      product_name: debouncedProductName,
    })
  }, [debouncedProductName])

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger className="group" asChild>
        <Button variant="outline" className="gap-2">
          {isPending ? (
            <Loader size="17" className="animate-spin" />
          ) : (
            <AlignJustify size="17" />
          )}
          <ChevronDown
            size="13"
            className="group-data-[state=open]:rotate-180"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="relative max-h-96 w-fit space-y-2 overflow-y-auto p-4 sm:min-w-96 md:max-h-[50vh]"
      >
        <Button
          onClick={handleResetFilter}
          className="fixed right-3 top-2 z-10"
          variant="ghost"
          size="sm"
        >
          Reset <RefreshCcw size="15" />
        </Button>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Product Name</DropdownMenuLabel>
          <div className="flex items-center gap-2">
            <Input
              value={productName || ""}
              onKeyDown={(e) => {
                if (e?.key === "Enter") {
                  setOpen(false)
                }
              }}
              onChange={(e) => setProductName(e?.currentTarget?.value)}
            />
            <Button
              disabled={!productName}
              onClick={() => setProductName(null)}
              variant="outline"
            >
              <X className="size-4" />
            </Button>
          </div>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Status</DropdownMenuLabel>
          {orderFilterStatuses?.map((option, index) => (
            <DropdownMenuItem
              textValue={""}
              key={index}
              className={cn(
                "flex cursor-pointer items-center gap-2 [&_svg]:size-4",
                { "bg-accent": filters?.status === option?.key }
              )}
              onClick={() => checkIfFilterExist({ status: option?.key })}
            >
              {option?.icon}
              {option.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Payment</DropdownMenuLabel>
          <DropdownMenuItem
            textValue={""}
            className={cn(
              "flex cursor-pointer items-center gap-2 [&_svg]:size-4",
              { "bg-accent": filters?.payment_finished?.toString() === "false" }
            )}
            onClick={() => checkIfFilterExist({ payment_finished: false })}
          >
            <X className="size-4 text-red-600" />
            Unpaid
          </DropdownMenuItem>
          <DropdownMenuItem
            textValue={""}
            className={cn(
              "flex cursor-pointer items-center gap-2 [&_svg]:size-4",
              { "bg-accent": filters?.payment_finished?.toString() === "true" }
            )}
            onClick={() => checkIfFilterExist({ payment_finished: true })}
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
