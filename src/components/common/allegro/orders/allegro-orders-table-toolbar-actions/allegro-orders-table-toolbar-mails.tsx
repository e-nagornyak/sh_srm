"use client"

import * as React from "react"
import { type Table } from "@tanstack/react-table"
import { Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface AllegroOrdersTableToolbarMailProps<TData> {
  table: Table<TData>
}

export function AllegroOrdersTableToolbarMail<TData>({
  table,
}: AllegroOrdersTableToolbarMailProps<TData>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger disabled asChild>
        <Button variant="outline">
          <Mail size="17" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-fit p-4">
        <DropdownMenuItem className="cursor-pointer">#tag1</DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">#tag2</DropdownMenuItem>
        <DropdownMenuGroup>
          <DropdownMenuLabel>SMS TEMPLATES</DropdownMenuLabel>
          <DropdownMenuItem className="cursor-pointer">
            Thank you for your purchase
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
