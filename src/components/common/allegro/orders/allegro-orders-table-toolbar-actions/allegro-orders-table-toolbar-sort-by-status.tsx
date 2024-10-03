"use client"

import * as React from "react"
import { type Table } from "@tanstack/react-table"
import {
  AlignJustify,
  Camera,
  ChevronDown,
  CreditCard,
  Divide,
  DollarSign,
  Plus,
  Search,
  Trash,
  Truck,
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

export function AllegroOrdersTableToolbarSortByStatus<TData>({
  table,
}: AllegroOrdersTableToolbarSortByStatusProps<TData>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger disabled className="group" asChild>
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
        {/* Група з варіантами доставки */}
        <DropdownMenuGroup>
          {deliveryOptions.map((option, index) => (
            <DropdownMenuItem
              key={index}
              className="flex cursor-pointer items-center gap-2"
            >
              <Truck className={`size-4 ${option.color}`} />
              {option.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>

        {/* Базові дії */}
        <DropdownMenuGroup>
          <DropdownMenuLabel>BASIC</DropdownMenuLabel>
          {basicOptions.map((option, index) => (
            <DropdownMenuItem
              key={index}
              className="flex cursor-pointer items-center gap-2"
            >
              {option.icon}
              {option.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>

        {/* Дії Allegro */}
        <DropdownMenuGroup>
          <DropdownMenuLabel>ALLEGRO</DropdownMenuLabel>
          {allegroOptions.map((option, index) => (
            <DropdownMenuItem
              key={index}
              className="flex cursor-pointer items-center gap-2"
            >
              {option.icon}
              {option.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
