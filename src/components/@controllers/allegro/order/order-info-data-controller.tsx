"use client"

import { useState } from "react"
import { toast } from "sonner"

import type { Nullable } from "@/types/global"
import { getAllegroOrdersApi } from "@/lib/api/allegro/orders/allegro-orders-api"
import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
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
  console.log(initialOrder)
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
    // additional_field_2,
    // cash_on_delivery,
    // order_source,
    // comments,
    // vies_vat_pl,
    // additional_field_1,
  }: OrderInfoFormData) => {
    try {
      const updatedOrder: Order = {
        ...order,
        buyer: { ...order?.buyer, login, email, phone_number },
        payment: { ...order?.payment, provider },
        delivery: { ...order?.delivery, cost, method },
      }
      await getAllegroOrdersApi("client").updateAllegroOrder(
        order?.id,
        updatedOrder
      )
      onCloseForm()
      setOrder(updatedOrder)
      toast.info("Data has been updated")
    } catch (e) {
      showErrorToast(e)
    }
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
