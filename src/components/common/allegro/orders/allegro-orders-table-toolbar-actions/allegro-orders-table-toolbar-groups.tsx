"use client"

import * as React from "react"
import { orderStatuses } from "@/constants/order/order-statuses"
import { type Table } from "@tanstack/react-table"
import {
  ArrowDownAZ,
  ArrowUpAZ,
  Camera,
  CreditCard,
  Divide,
  DollarSign,
  Flag,
  Plus,
  Search,
  Trash,
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

interface AllegroOrdersTableToolbarGroupsProps<TData> {
  table: Table<TData>
}

export function AllegroOrdersTableToolbarGroups<TData>({
  table,
}: AllegroOrdersTableToolbarGroupsProps<TData>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger disabled asChild>
        <Button variant="outline">
          <Flag size="15" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="max-h-96 w-fit overflow-y-auto p-4"
      >
        {orderStatuses.map((group) => (
          <DropdownMenuGroup key={group?.group}>
            <DropdownMenuLabel>{group?.group}</DropdownMenuLabel>
            {group?.items?.map((item) => (
              <DropdownMenuItem
                className="flex cursor-pointer items-center gap-2"
                key={item?.key}
              >
                <div
                  className={`size-4 rounded border border-border ${item?.color}`}
                />
                {item?.displayName}
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
