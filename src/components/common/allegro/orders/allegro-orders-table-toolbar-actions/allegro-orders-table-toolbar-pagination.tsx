"use client"

import * as React from "react"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons"
import type { Table } from "@tanstack/react-table"
import { Loader, RotateCcw } from "lucide-react"
import { toast } from "sonner"

import { useLazyRouter } from "@/hooks/use-lazy-router"
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
  const { isPending, lazyRefresh } = useLazyRouter()
  // const [isPrevPending, startPrevTransition] = useTransition()
  // const [isNextPending, startNextTransition] = useTransition()

  const onRefreshClick = () => {
    lazyRefresh()
    toast.info(
      <span>
        The data started to update <span className="text-2xl">👻</span>
      </span>
    )
  }

  return (
    <>
      {isPending && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/50">
          <div className="rounded-lg bg-accent p-4">
            <Loader size="50" className="animate-spin" />
          </div>
        </div>
      )}
      <div className="flex items-center gap-2">
        <div className="flex items-center space-x-2">
          <Button onClick={onRefreshClick} variant="outline">
            {isPending ? (
              <Loader size="17" className="animate-spin" />
            ) : (
              <RotateCcw size="17" />
            )}
          </Button>
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
        <div className="flex items-center space-x-2">
          <Button
            aria-label="Go to first page"
            variant="outline"
            size="icon"
            className="hidden lg:flex"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <DoubleArrowLeftIcon className="size-4" aria-hidden="true" />
          </Button>
          <Button
            aria-label="Go to previous page"
            variant="outline"
            size="icon"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeftIcon className="size-4" aria-hidden="true" />
          </Button>
          <Button
            aria-label="Go to next page"
            variant="outline"
            size="icon"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronRightIcon className="size-4" aria-hidden="true" />
          </Button>
          <Button
            aria-label="Go to last page"
            variant="outline"
            size="icon"
            className="hidden lg:flex"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <DoubleArrowRightIcon className="size-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </>
  )
}
