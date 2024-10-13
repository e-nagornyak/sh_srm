"use client"

import { type Order } from "@/lib/api/allegro/orders/orders-types"
import { OrderStatus } from "@/components/common/allegro/order/order-info/order-status/order-status"

interface OrderStatusProps {
  order: Order
}

export function OrderStatusController({ order }: OrderStatusProps) {
  return <OrderStatus order={order} />
}
