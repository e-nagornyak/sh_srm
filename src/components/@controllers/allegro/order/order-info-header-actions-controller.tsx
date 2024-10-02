"use client"

import * as React from "react"
import { useState } from "react"
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
  // TEMPORARY SOLUTION
  const [loadingFields, setLoadingFields] = useState<string[]>([])

  const onClickShippingLabel = async () => {
    try {
      setLoadingFields((prevState) => [...prevState, "shipping"])
      await getAllegroOrdersApi("client").sendShippingLabel(order?.order_id)
      toast.info("Label has been sent")
    } catch (e) {
      showErrorToast(e)
    } finally {
      setLoadingFields((prevState) =>
        prevState?.filter((el) => el !== "shipping")
      )
    }
  }

  const onClickCreateInvoice = async () => {
    try {
      setLoadingFields((prevState) => [...prevState, "invoice"])
      await getAllegroOrdersApi("client").createFacture(order?.order_id)
      toast.info("Data has been updated")
    } catch (e) {
      showErrorToast(e)
    } finally {
      setLoadingFields((prevState) =>
        prevState?.filter((el) => el !== "invoice")
      )
    }
  }

  return (
    <OrderInfoHeaderActions
      loadingFields={loadingFields}
      onClickShippingLabel={onClickShippingLabel}
      onClickCreateInvoice={onClickCreateInvoice}
    />
  )
}
