"use client"

import * as React from "react"
import { type Table } from "@tanstack/react-table"
import { ChevronDown, SquareCheck } from "lucide-react"

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

interface MenuGroup {
  group: string
  items: {
    key: string
    displayName: string
    onClick?: () => void
  }[]
}

function getSelectMenuItems<TData>(table: Table<TData>): MenuGroup[] {
  return [
    {
      group: "",
      items: [
        {
          key: "select_all",
          displayName: "Select all",
          onClick: () => table?.toggleAllRowsSelected(true),
        },
        // { key: "select_starred_orders", displayName: "Select starred orders" },
        {
          key: "unselect_all",
          displayName: "Unselect all",
          onClick: () => table?.toggleAllRowsSelected(false),
        },
        // { key: "select_starred", displayName: "Select starred" },
      ],
    },
    // {
    //   group: "On all pages",
    //   items: [
    //     { key: "select_all_2", displayName: "Select all" },
    //     { key: "select_starred_orders_2", displayName: "Select starred orders" },
    //     { key: "unselect_all_2", displayName: "Unselect all" },
    //     { key: "unselect_starred", displayName: "Unselect starred" },
    //   ],
    // },
  ]
}

interface AllegroOrdersTableToolbarSelectProps<TData> {
  table: Table<TData>
}

export function AllegroOrdersTableToolbarSelect<TData>({
  table,
}: AllegroOrdersTableToolbarSelectProps<TData>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="group" asChild>
        <Button variant="outline" className="gap-2">
          <SquareCheck size="17" />
          <ChevronDown
            size="13"
            className="group-data-[state=open]:rotate-180"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="min-w-fit">
        {getSelectMenuItems(table).map((group) => (
          <DropdownMenuGroup key={`group-${group?.group}`}>
            <DropdownMenuLabel>{group?.group}</DropdownMenuLabel>
            {group?.items?.map((item) => (
              <DropdownMenuItem
                key={item?.key}
                className={"w-fit cursor-pointer"}
                onClick={item?.onClick}
              >
                <Text size="xs">{item?.displayName}</Text>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
