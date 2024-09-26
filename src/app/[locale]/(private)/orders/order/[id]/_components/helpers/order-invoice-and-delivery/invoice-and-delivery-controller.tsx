"use client"

import { useState } from "react"

import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { OrderDelivery } from "@/app/[locale]/(private)/orders/order/[id]/_components/helpers/order-invoice-and-delivery/order-delivery/order-delivery"
import { OrderInvoice } from "@/app/[locale]/(private)/orders/order/[id]/_components/helpers/order-invoice-and-delivery/order-ivoice/order-invoice"
import { OrderPickup } from "@/app/[locale]/(private)/orders/order/[id]/_components/helpers/order-pickup"

interface InvoiceAndDeliveryControllerProps {
  order: Order
}

export function InvoiceAndDeliveryController({
  order,
}: InvoiceAndDeliveryControllerProps) {
  const [deliveryEditingFieldName, setEditingFieldName] = useState<
    string | null
  >(null)

  const changeDeliveryEditingFieldName = (fieldName?: string) => {
    setEditingFieldName(fieldName || "")
  }

  const onClickCopyAddress = () => {}

  const onCancel = () => {
    setEditingFieldName(null)
  }

  const onSave = () => {
    setEditingFieldName(null)
  }

  return (
    <section className="grid grid-cols-3 gap-3">
      <OrderDelivery
        order={order}
        onClickCopyAddress={onClickCopyAddress}
        editingFieldName={deliveryEditingFieldName}
        onCancel={onCancel}
        onSave={onSave}
        changeEditingFieldName={changeDeliveryEditingFieldName}
      />
      <OrderInvoice order={order} />
      <OrderPickup order={order} />
    </section>
  )
}
