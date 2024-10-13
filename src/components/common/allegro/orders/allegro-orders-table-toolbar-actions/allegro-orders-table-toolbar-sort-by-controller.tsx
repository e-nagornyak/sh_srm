"use client"

import * as React from "react"
import { useState } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import {
  AllegroOrdersSearchParamsSchema,
  type AllegroOrdersSchema,
} from "@/constants/order/orders-search-params"
import { type Table } from "@tanstack/react-table"
import {
  ArrowDownAZ,
  ArrowDownWideNarrow,
  ArrowUpAZ,
  ArrowUpNarrowWide,
  ArrowUpWideNarrow,
  Loader,
} from "lucide-react"
import { useMemo } from "types-react"

import { cn } from "@/lib/utils"
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
import { Text } from "@/components/ui/text"

const sortOptions = [
  "Bought At",
  // "Order ID",
  // "Shop ID",
  // "Order date",
  // "Date in status",
  // "Total price",
  // "Shipping price",
  // "Shipping method",
  // "Status",
  // "Allegro transactions",
  // "Payments",
  // "Name and surname",
  // "Allegro Login",
  // "Package number",
  // "Pole dodatkowe 1",
  // "Pole dodatkowe 2",
]

const sortDirections = [
  { label: "Descending", icon: <ArrowDownAZ className="size-4" /> },
  { label: "Ascending", icon: <ArrowUpAZ className="size-4" /> },
]

interface AllegroOrdersTableToolbarSortByProps<TData> {
  table: Table<TData>
}

export function AllegroOrdersTableToolbarSortByController<TData>({
  table,
}: AllegroOrdersTableToolbarSortByProps<TData>) {
  const { isPending, lazyPush } = useLazyRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const search = React.useMemo(
    () =>
      AllegroOrdersSearchParamsSchema.parse(Object.fromEntries(searchParams)),
    [searchParams]
  )

  const [boughtAt, setBoughtAt] = useState(search?.ordering || "-bought_at")

  const { createQueryString } = useQueryString(searchParams)

  useEffectAfterMount(() => {
    const queryString = createQueryString({ ordering: boughtAt })
    const url = `${pathname}?${queryString}`
    lazyPush(url)
  }, [boughtAt])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="group" asChild>
        <Button variant="outline">
          {isPending ? (
            <Loader className="animate-spin" size="17" />
          ) : boughtAt === "-bought_at" ? (
            <ArrowDownWideNarrow size="17" />
          ) : (
            <ArrowUpWideNarrow size="17" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-fit p-4">
        <DropdownMenuItem
          onClick={() => setBoughtAt("-bought_at")}
          className={cn("cursor-pointer gap-3", {
            "border bg-accent": boughtAt === "-bought_at",
          })}
        >
          <Text size="xs">Bought At</Text>
          <ArrowDownWideNarrow size="18" />
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setBoughtAt("bought_at")}
          className={cn("cursor-pointer gap-3", {
            "border bg-accent": boughtAt === "bought_at",
          })}
        >
          <Text size="xs">Bought At</Text>
          <ArrowUpNarrowWide size="18" />
        </DropdownMenuItem>
        {/*<DropdownMenuGroup>*/}
        {/*  <DropdownMenuLabel>SORT BY</DropdownMenuLabel>*/}
        {/*  {sortOptions.map((option, index) => (*/}
        {/*    <DropdownMenuItem key={index} className="cursor-pointer">*/}
        {/*      <Text size="xs">{option}</Text>*/}
        {/*    </DropdownMenuItem>*/}
        {/*  ))}*/}
        {/*</DropdownMenuGroup>*/}

        {/*<DropdownMenuGroup>*/}
        {/*  <DropdownMenuLabel>SORTING AND VIEWING</DropdownMenuLabel>*/}
        {/*  {sortDirections.map((direction, index) => (*/}
        {/*    <DropdownMenuItem*/}
        {/*      className="flex cursor-pointer items-center gap-2"*/}
        {/*      key={index}*/}
        {/*    >*/}
        {/*      {direction.icon}*/}
        {/*      <Text size="xs">{direction.label}</Text>*/}
        {/*    </DropdownMenuItem>*/}
        {/*  ))}*/}
        {/*</DropdownMenuGroup>*/}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
