"use client"

import { DownloadIcon } from "@radix-ui/react-icons"
import { type Table } from "@tanstack/react-table"

import { type Order } from "@/types/table"
import { Button } from "@/components/ui/button"
import { type OrderSchema } from "@/components/controllers/users/validations"

interface TasksTableToolbarActionsProps {
  table: Table<Order>
  searchParams: OrderSchema
  disabled?: boolean
}

export function OrdersTableToolbarActions({
  table,
  searchParams,
  disabled,
}: TasksTableToolbarActionsProps) {
  return (
    <div className="flex w-full items-center gap-2">
      <Button
        disabled={disabled}
        variant="outline"
        size="sm"
        className="max-sm:w-full"
        onClick={async () => {}}
      >
        <DownloadIcon className="mr-2 size-4" aria-hidden="true" />
        Export
      </Button>
      {/**
       * Other actions can be added here.
       * For example, import, view, etc.
       */}
    </div>
  )
}
