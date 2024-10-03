"use client"

import * as React from "react"
import { type Table } from "@tanstack/react-table"
import { Truck } from "lucide-react"

import { Button } from "@/components/ui/button"

interface TasksTableToolbarActionsDeliveryProps<TData> {
  table: Table<TData>
}

export function AllegroOrdersTableToolbarDelivery<TData>({
  table,
}: TasksTableToolbarActionsDeliveryProps<TData>) {
  return (
    <Button disabled variant="outline">
      <Truck size="15" />
    </Button>
  )
}
