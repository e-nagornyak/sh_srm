"use client"

import * as React from "react"
import { type Table } from "@tanstack/react-table"
import { Flag } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
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
          <Flag size="17" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="max-h-96 w-fit overflow-y-auto p-4"
      >
        {/*{memoizedStatuses?.map((status) => (*/}
        {/*  <DropdownMenuItem*/}
        {/*    className="flex cursor-pointer items-center gap-2"*/}
        {/*    key={status?.key}*/}
        {/*  >*/}
        {/*    <div*/}
        {/*      className={`size-4 rounded border border-border ${status?.color}`}*/}
        {/*    />*/}
        {/*    {status?.label}*/}
        {/*  </DropdownMenuItem>*/}
        {/*))}*/}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
