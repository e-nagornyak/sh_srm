"use client"

import * as React from "react"
import { PlusIcon } from "@radix-ui/react-icons"
import { type Table } from "@tanstack/react-table"

import { RoutePaths } from "@/config/routes"
import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { Link } from "@/components/ui/link"

interface TasksTableToolbarActionsProps {
  table: Table<Order>
  disabled?: boolean
}

export function AllegroOrdersTableToolbarActions({
  table,
  disabled,
}: TasksTableToolbarActionsProps) {
  return (
    <div className="flex w-full items-center gap-2">
      {/*<Button*/}
      {/*  disabled={disabled}*/}
      {/*  variant="outline"*/}
      {/*  size="sm"*/}
      {/*  className="max-sm:w-full"*/}
      {/*  onClick={async () => {}}*/}
      {/*>*/}
      {/*  <DownloadIcon className="mr-2 size-4" aria-hidden="true" />*/}
      {/*  Export*/}
      {/*</Button>*/}
      {/**
       * Other actions can be added here.
       * For example, import, view, etc.
       */}
    </div>
  )
}
