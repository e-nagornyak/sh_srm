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
  const [order, setOrder] = useState(initialOrder)
  const [isDirty, setIsDirty] = useState(false)

  const handleSelectStatus = (status: OrderStatusKeys) => {
    setOrder({ ...order, status })
    !isDirty && setIsDirty(true)
  }

  const handleChangeStatus = async () => {
    try {
      await getAllegroOrdersApi("client").updateAllegroOrder(order?.id, order)
      toast.info("Status has been updated")
      setIsDirty(false)
    } catch (e) {
      showErrorToast(e)
    }
  }

  return (
    <OrderStatus
      isDirty={isDirty}
      onChangeStatusClick={handleChangeStatus}
      onSelectStatus={handleSelectStatus}
      order={order}
    />
  )
}
