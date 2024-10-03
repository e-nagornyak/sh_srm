"use client"

import * as React from "react"
import { type Table } from "@tanstack/react-table"
import { Printer } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface AllegroOrdersTableToolbarPrintersProps<TData> {
  table: Table<TData>
}

export function AllegroOrdersTableToolbarPrinters<TData>({
  table,
}: AllegroOrdersTableToolbarPrintersProps<TData>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger disabled asChild>
        <Button variant="outline">
          <Printer size="15" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-fit p-4">
        <DropdownMenuItem className="cursor-pointer">
          AfterShip [CSV]
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          BL - ZWROTY [CSV]
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          BL - ZWROTY EWIDENCJA [HTML]
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          BL - ZWROTY TRANSPORT [CSV]
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          CSV - pozycje zamówienia kopia [CSV]
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          CSV - zamówienia [CSV]
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          FV imienne [CSV]
        </DropdownMenuItem>
        <DropdownMenuItem className="flex cursor-pointer items-center justify-between">
          Protokół zwrotu [PDF]
          <Printer className="size-4 text-blue-500" />
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          Wadliwy/uszkodzony [CSV]
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          Zwrócony na stan [CSV]
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
