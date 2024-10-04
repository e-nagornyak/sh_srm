"use client"

import * as React from "react"
import { type Table } from "@tanstack/react-table"
import { ArrowDownAZ, ArrowUpAZ, ArrowUpWideNarrow } from "lucide-react"

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
  "Order ID",
  "Shop ID",
  "Order date",
  "Date in status",
  "Total price",
  "Shipping price",
  "Shipping method",
  "Status",
  "Allegro transactions",
  "Payments",
  "Name and surname",
  "Allegro Login",
  "Package number",
  "Pole dodatkowe 1",
  "Pole dodatkowe 2",
]

const sortDirections = [
  { label: "Descending", icon: <ArrowDownAZ className="size-4" /> },
  { label: "Ascending", icon: <ArrowUpAZ className="size-4" /> },
]

interface AllegroOrdersTableToolbarSortByProps<TData> {
  table: Table<TData>
}

export function AllegroOrdersTableToolbarSortBy<TData>({
  table,
}: AllegroOrdersTableToolbarSortByProps<TData>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger disabled className="group" asChild>
        <Button variant="outline">
          <ArrowUpWideNarrow size="15" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-fit p-4">
        <DropdownMenuGroup>
          <DropdownMenuLabel>SORT BY</DropdownMenuLabel>
          {sortOptions.map((option, index) => (
            <DropdownMenuItem key={index} className="cursor-pointer">
              <Text size="xs">{option}</Text>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>

        <DropdownMenuGroup>
          <DropdownMenuLabel>SORTING AND VIEWING</DropdownMenuLabel>
          {sortDirections.map((direction, index) => (
            <DropdownMenuItem
              className="flex cursor-pointer items-center gap-2"
              key={index}
            >
              {direction.icon}
              <Text size="xs">{direction.label}</Text>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
