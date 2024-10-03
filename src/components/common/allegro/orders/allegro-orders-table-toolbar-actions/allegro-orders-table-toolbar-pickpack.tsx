"use client"

import * as React from "react"
import { type Table } from "@tanstack/react-table"
import {
  BaggageClaim,
  Box,
  ChevronDown,
  ClipboardList,
  PackageCheck,
  ScanBarcode,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface AllegroOrdersTableToolbarPickpackProps<TData> {
  table: Table<TData>
}

export function AllegroOrdersTableToolbarPickpack<TData>({
  table,
}: AllegroOrdersTableToolbarPickpackProps<TData>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger disabled className="group" asChild>
        <Button variant="outline" className="gap-2">
          <BaggageClaim size="15" />
          <ChevronDown
            size="13"
            className="group-data-[state=open]:rotate-180"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-fit p-4">
        <DropdownMenuGroup>
          <DropdownMenuLabel>PICKPACK ASSISTANT</DropdownMenuLabel>
          <DropdownMenuItem className="flex cursor-pointer items-center gap-2">
            <ClipboardList size="15" />
            Pick products
          </DropdownMenuItem>
          <DropdownMenuItem className="flex cursor-pointer items-center gap-2">
            <Box size="15" />
            Pack
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuGroup>
          <DropdownMenuLabel>MATCH AND SELECT ORDERS</DropdownMenuLabel>
          <DropdownMenuItem className="flex cursor-pointer items-center gap-2">
            <ClipboardList size="15" />
            For collecting
          </DropdownMenuItem>
          <DropdownMenuItem className="flex cursor-pointer items-center gap-2">
            <PackageCheck className="size-4" />
            For packing
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuGroup>
          <DropdownMenuLabel>BARCODE SCANNER</DropdownMenuLabel>
          <DropdownMenuItem className="flex cursor-pointer items-center gap-2">
            <ScanBarcode size="15" />
            Scanner settings
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
