import * as React from "react"

import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { OrderViewOrderHeaderActions } from "@/app/[locale]/(private)/orders/order/[id]/_components/helpers/order-view-order/order-view-order-header-actions"
import { OrderViewOrderInfo } from "@/app/[locale]/(private)/orders/order/[id]/_components/helpers/order-view-order/order-view-order-info"
import { OrderViewOrderStatus } from "@/app/[locale]/(private)/orders/order/[id]/_components/helpers/order-view-order/order-view-order-status"

interface OrderViewOrderProps {
  order: Order
}

export function OrderViewOrderController({ order }: OrderViewOrderProps) {
  return (
    <Card>
      <CardHeader className="w-full flex-row items-center justify-between">
        <OrderViewOrderHeaderActions />
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-x-6 gap-y-14 2xl:grid-cols-2">
        <OrderViewOrderInfo order={order} />
        <OrderViewOrderStatus order={order} />
      </CardContent>
    </Card>
  )
}
