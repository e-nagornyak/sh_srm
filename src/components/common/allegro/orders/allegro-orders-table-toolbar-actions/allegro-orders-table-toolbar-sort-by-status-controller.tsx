"use client"

import * as React from "react"
import { type Table } from "@tanstack/react-table"
import { AlignJustify, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

//
// const basicOptions = [
//   { label: "Set payment", icon: <DollarSign className="size-4" /> },
//   { label: "Delete orders", icon: <Trash className="size-4" /> },
//   { label: "Merge orders", icon: <Plus className="size-4" /> },
//   { label: "Divide order", icon: <Divide className="size-4" /> },
//   { label: "Find similar orders", icon: <Search className="size-4" /> },
// ]
//
// const allegroOptions = [
//   {
//     label: "Refund of Allegro commission",
//     icon: <Camera className="size-4" />,
//   },
//   { label: "Allegro payment refund", icon: <CreditCard className="size-4" /> },
// ]

interface AllegroOrdersTableToolbarSortByStatusProps<TData> {
  table: Table<TData>
}

export function AllegroOrdersTableToolbarSortByStatusController<TData>({
  table,
}: AllegroOrdersTableToolbarSortByStatusProps<TData>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="group" asChild>
        <Button variant="outline" className="gap-2">
          <AlignJustify size="17" />
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
