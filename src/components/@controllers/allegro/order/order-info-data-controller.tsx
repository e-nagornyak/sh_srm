"use client"

import { useState } from "react"
import { toast } from "sonner"

import type { Nullable } from "@/types/global"
import { getOrderApi } from "@/lib/api/allegro/orders/orders-api"
import { type Order } from "@/lib/api/allegro/orders/orders-types"
import { showErrorToast } from "@/lib/handle-error"
import { type OrderInfoFormData } from "@/lib/validations/order/order-info"
import { OrderData } from "@/components/common/allegro/order/order-info/order-data/order-data"

interface OrderInfoDataControllerProps {
  initialOrder: Order
}

export function OrderInfoDataController({
  initialOrder,
}: OrderInfoDataControllerProps) {
  const [order, setOrder] = useState<Order>(initialOrder)

  const [editingFieldName, setEditingFieldName] =
    useState<Nullable<string>>(null)

  const changeEditingFieldName = (fieldName?: string) => {
    setEditingFieldName(fieldName || "")
  }

  const onCloseForm = () => {
    setEditingFieldName(null)
  }

  const onSaveInfoData = async ({
    login,
    email,
    phone_number,
    provider,
    cost,
    method,
    cash_on_delivery,
    // additional_field_2,
    // comments,
    // vies_vat_pl,
    // additional_field_1,
  }: OrderInfoFormData) => {
    try {
      const updatedOrder: Order = {
        ...order,
        buyer: { ...order?.buyer, login, email, phone_number },
        payment: {
          ...order?.payment,
          provider,
          type: cash_on_delivery ? "CASH_ON_DELIVERY" : "",
        },
        delivery: { ...order?.delivery, cost, method },
      }
      await getOrderApi("client").updateAllegroOrder(order?.id, updatedOrder)
      onCloseForm()
      setOrder(updatedOrder)
      toast.info("Data has been updated")
    } catch (e) {
      showErrorToast(e)
    }
  }

  if (order?.payment?.provider === "unknown") {
    setOrder({
      ...initialOrder,
      payment: {
        ...initialOrder?.payment,
        provider: order?.payment?.type || "",
      },
    })
  }

  return (
    <OrderData
      order={order}
      editingFieldName={editingFieldName}
      changeEditingFieldName={changeEditingFieldName}
      onCancel={onCloseForm}
      onSave={onSaveInfoData}
    />
  )
}
