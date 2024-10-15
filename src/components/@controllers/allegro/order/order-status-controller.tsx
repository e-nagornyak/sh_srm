"use client"

import { useState } from "react"
import { type OrderStatusKeys } from "@/constants/order/order-statuses"
import { toast } from "sonner"

import { getAllegroOrdersApi } from "@/lib/api/allegro/orders/orders-api"
import { type Order } from "@/lib/api/allegro/orders/orders-types"
import { showErrorToast } from "@/lib/handle-error"
import { OrderStatus } from "@/components/common/allegro/order/order-info/order-status/order-status"

interface OrderStatusProps {
  initialOrder: Order
}

export function OrderStatusController({ initialOrder }: OrderStatusProps) {
  const [loading, setLoading] = useState(false)
  const [order, setOrder] = useState(initialOrder)

  const handleSelectStatus = async (status: OrderStatusKeys) => {
    try {
      setLoading(true)
      await getAllegroOrdersApi("client").updateAllegroOrder(order?.id, order)
      setOrder({ ...order, status })
      toast.info("Status has been updated")
    } catch (e) {
      showErrorToast(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <OrderStatus
      loading={loading}
      onSelectStatus={handleSelectStatus}
      order={order}
    />
  )
}
