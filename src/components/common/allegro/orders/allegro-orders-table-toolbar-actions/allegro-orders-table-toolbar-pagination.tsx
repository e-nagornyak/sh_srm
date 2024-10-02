"use client"

import * as React from "react"
import { useTransition } from "react"
import type { Table } from "@tanstack/react-table"
import { ChevronLeft, ChevronRight, Loader } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Text } from "@/components/ui/text"

interface AllegroOrdersTableToolbarPagination1Props<TData> {
  table: Table<TData>
}

export function AllegroOrdersTableToolbarPagination<TData>({
  table,
}: AllegroOrdersTableToolbarPagination1Props<TData>) {
  const [isPrevPending, startPrevTransition] = useTransition()
  const [isNextPending, startNextTransition] = useTransition()

  return (
    <div className="flex items-center gap-2">
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
