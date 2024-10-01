"use client"

import * as React from "react"
import { toast } from "sonner"

import { getAllegroOrdersApi } from "@/lib/api/allegro/orders/allegro-orders-api"
import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { showErrorToast } from "@/lib/handle-error"
import { OrderInfoHeaderActions } from "@/components/common/allegro/order/order-info/order-info-header-actions"

interface OrderInfoHeaderActionsControllerProps {
  order: Order
}

export function OrderInfoHeaderActionsController({
  order,
}: OrderInfoHeaderActionsControllerProps) {
  const onClickShippingLabel = async () => {
    try {
      await getAllegroOrdersApi("client").sendShippingLabel(order?.order_id)
      toast.info("Label has been sent")
    } catch (e) {
      showErrorToast(e)
    }
  }

  const onClickCreateInvoice = async () => {
    try {
      await new Promise(() => {})
      // await getAllegroOrdersApi("client").createFacture(order?.order_id)
      toast.info("Data has been updated")
    } catch (e) {
      showErrorToast(e)
    }
  }

  return (
    <OrderInfoHeaderActions
      onClickShippingLabel={onClickShippingLabel}
      onClickCreateInvoice={onClickCreateInvoice}
    />
  )
}
