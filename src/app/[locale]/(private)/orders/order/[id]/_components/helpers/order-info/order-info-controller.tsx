import * as React from "react"

import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

import { OrderData } from "./order-data/order-data"
import { OrderHeaderActions } from "./order-header-actions"
import { OrderStatus } from "./order-status/order-status"

interface OrderInfoControllerProps {
  order: Order
}

export function OrderInfoController({ order }: OrderInfoControllerProps) {
  return (
    <Card>
      <CardHeader className="w-full flex-row items-center justify-between">
        <OrderHeaderActions />
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-x-6 gap-y-14 2xl:grid-cols-2">
        <OrderData order={order} />
        <OrderStatus order={order} />
      </CardContent>
    </Card>
  )
}
