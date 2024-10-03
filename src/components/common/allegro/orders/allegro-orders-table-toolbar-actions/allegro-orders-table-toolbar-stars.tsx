"use client"

import * as React from "react"
import { type Table } from "@tanstack/react-table"
import { ChevronDown, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const starsMenuItems = [
  { key: "white", color: "" },
  { key: "pink", color: "text-pink-600 fill-pink-600" },
  { key: "yellow", color: "text-yellow-600 fill-yellow-600" },
  { key: "red", color: "text-red-600 fill-red-600" },
  { key: "green", color: "text-green-600 fill-green-600" },
  { key: "blue", color: "text-blue-600 fill-blue-600" },
]

interface AllegroOrdersTableToolbarStarsProps<TData> {
  table: Table<TData>
}

export function AllegroOrdersTableToolbarStars<TData>({
  table,
}: AllegroOrdersTableToolbarStarsProps<TData>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger disabled className="group" asChild>
        <Button variant="outline" className="gap-2">
          <Star size="15" />
          <ChevronDown
            size="13"
            className="group-data-[state=open]:rotate-180"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-fit p-4">
        <DropdownMenuLabel>Mark with star</DropdownMenuLabel>
        <div className="grid grid-cols-3 gap-2 p-2">
          {starsMenuItems?.map((el) => (
            <Button key={el?.key} size="icon" variant="outline">
              <Star size="20" className={el?.color} />
            </Button>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
