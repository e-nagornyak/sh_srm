"use client"

import * as React from "react"
import { useTransition } from "react"
import type { Table } from "@tanstack/react-table"
import { ChevronLeft, ChevronRight, Loader } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Text } from "@/components/ui/text"

interface AllegroOrdersTableToolbarPagination1Props<TData> {
  table: Table<TData>
  pageSizeOptions?: number[]
}

export function AllegroOrdersTableToolbarPagination<TData>({
  table,
  pageSizeOptions = [3, 5, 10, 20, 30],
}: AllegroOrdersTableToolbarPagination1Props<TData>) {
  const [isPrevPending, startPrevTransition] = useTransition()
  const [isNextPending, startNextTransition] = useTransition()

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center space-x-2">
        {/*<p className="whitespace-nowrap text-sm font-medium">Rows per page</p>*/}
        <Select
          value={`${table.getState().pagination.pageSize}`}
          onValueChange={(value) => {
            table.setPageSize(Number(value))
          }}
        >
          <SelectTrigger className="min-w-14">
            <SelectValue placeholder={table.getState().pagination.pageSize} />
          </SelectTrigger>
          <SelectContent side="top">
            {pageSizeOptions.map((pageSize) => (
              <SelectItem key={pageSize} value={`${pageSize}`}>
                {pageSize}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex">
        <Text className="underline">
          {table.getState().pagination.pageIndex + 1}
        </Text>
        <Text className="text-foreground">
          &nbsp;of {table.getPageCount()} pages
        </Text>
      </div>
      <div>
        <Button
          size="icon"
          variant="outline"
          onClick={() => startPrevTransition(table.previousPage)}
          disabled={!table.getCanPreviousPage() || isPrevPending}
          className="rounded-l-full rounded-r-none"
        >
          {isPrevPending ? (
            <Loader size="20" className="animate-spin" />
          ) : (
            <ChevronLeft size="20" />
          )}
        </Button>
        <Button
          size="icon"
          variant="outline"
          onClick={() => startNextTransition(table.nextPage)}
          disabled={!table.getCanNextPage() || isNextPending}
          className="rounded-l-none rounded-r-full"
        >
          {isNextPending ? (
            <Loader size="20" className="animate-spin" />
          ) : (
            <ChevronRight size="20" />
          )}
        </Button>
      </div>
    </div>
  )
}
