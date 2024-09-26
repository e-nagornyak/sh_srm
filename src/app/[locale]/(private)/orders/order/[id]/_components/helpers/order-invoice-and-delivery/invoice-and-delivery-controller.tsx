"use client"

import { Suspense, useState } from "react"

import { type Nullable } from "@/types/global"
import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { OrderDelivery } from "@/app/[locale]/(private)/orders/order/[id]/_components/helpers/order-invoice-and-delivery/order-delivery/order-delivery"
import { OrderInvoice } from "@/app/[locale]/(private)/orders/order/[id]/_components/helpers/order-invoice-and-delivery/order-ivoice/order-invoice"
import { OrderPickup } from "@/app/[locale]/(private)/orders/order/[id]/_components/helpers/order-invoice-and-delivery/order-pickup/order-pickup"

interface InvoiceAndDeliveryControllerProps {
  order: Order
}

export function InvoiceAndDeliveryController({
  order,
}: InvoiceAndDeliveryControllerProps) {
  const [deliveryEditingFieldName, setEditingFieldName] =
    useState<Nullable<string>>(null)
  const [invoiceEditingFieldName, setInvoiceEditingFieldName] =
    useState<Nullable<string>>(null)
  const [pickupEditingFieldName, setPickupEditingFieldName] =
    useState<Nullable<string>>(null)

  const changeDeliveryEditingFieldName = (fieldName?: string) => {
    setEditingFieldName(fieldName || "")
  }

  const changeInvoiceEditingFieldName = (fieldName?: string) => {
    setInvoiceEditingFieldName(fieldName || "")
  }

  const changePickupEditingFieldName = (fieldName?: string) => {
    setPickupEditingFieldName(fieldName || "")
  }

  const onClickCopyAddress = () => {}
  const onClickCopyInvoice = () => {}

  const onCancel = () => {
    const isActiveForm = (name: Nullable<string>) => typeof name === "string"

    if (isActiveForm(deliveryEditingFieldName)) {
      setEditingFieldName(null)
      return
    }

    if (isActiveForm(invoiceEditingFieldName)) {
      setInvoiceEditingFieldName(null)
      return
    }

    if (isActiveForm(pickupEditingFieldName)) {
      setPickupEditingFieldName(null)
      return
    }
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
      <OrderInvoice
        order={order}
        onClickCopyInvoice={onClickCopyInvoice}
        editingFieldName={invoiceEditingFieldName}
        onCancel={onCancel}
        onSave={onSave}
        changeEditingFieldName={changeInvoiceEditingFieldName}
      />
      <OrderPickup
        order={order}
        editingFieldName={pickupEditingFieldName}
        onCancel={onCancel}
        onSave={onSave}
        changeEditingFieldName={changePickupEditingFieldName}
      />
    </section>
  )
}
