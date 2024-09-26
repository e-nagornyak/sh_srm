"use client"

import { Suspense, useState, type Dispatch, type SetStateAction } from "react"

import { type Nullable } from "@/types/global"
import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { OrderDelivery } from "@/app/[locale]/(private)/orders/order/[id]/_components/helpers/order-invoice-and-delivery/order-delivery/order-delivery"
import { OrderInvoice } from "@/app/[locale]/(private)/orders/order/[id]/_components/helpers/order-invoice-and-delivery/order-ivoice/order-invoice"
import { OrderPickup } from "@/app/[locale]/(private)/orders/order/[id]/_components/helpers/order-invoice-and-delivery/order-pickup/order-pickup"

interface InvoiceAndDeliveryControllerProps {
  order: Order
}

export type InvoiceAndDeliveryFieldType = "delivery" | "invoice" | "pickup"

export function InvoiceAndDeliveryController({
  order,
}: InvoiceAndDeliveryControllerProps) {
  const [deliveryEditingFieldName, setDeliveryFieldName] =
    useState<Nullable<string>>(null)
  const [invoiceEditingFieldName, setInvoiceEditingFieldName] =
    useState<Nullable<string>>(null)
  const [pickupEditingFieldName, setPickupEditingFieldName] =
    useState<Nullable<string>>(null)

  const changeDeliveryEditingFieldName = (fieldName?: string) => {
    setDeliveryFieldName(fieldName || "")
  }

  const changeInvoiceEditingFieldName = (fieldName?: string) => {
    setInvoiceEditingFieldName(fieldName || "")
  }

  const changePickupEditingFieldName = (fieldName?: string) => {
    setPickupEditingFieldName(fieldName || "")
  }

  const onClickCopyAddress = () => {}
  const onClickCopyInvoice = () => {}

  const onCancel = (formName: InvoiceAndDeliveryFieldType) => {
    const variants: {
      [key in InvoiceAndDeliveryFieldType]: Dispatch<
        SetStateAction<Nullable<string>>
      >
    } = {
      delivery: setDeliveryFieldName,
      invoice: setInvoiceEditingFieldName,
      pickup: setPickupEditingFieldName,
    }
    variants?.[formName]?.(null)
  }

  const onSave = () => {
    setDeliveryFieldName(null)
  }

  return (
    <section className="grid grid-cols-3 gap-3">
      <OrderDelivery
        order={order}
        onClickCopyAddress={onClickCopyAddress}
        editingFieldName={deliveryEditingFieldName}
        onCancel={() => onCancel("delivery")}
        onSave={onSave}
        changeEditingFieldName={changeDeliveryEditingFieldName}
      />
      <OrderInvoice
        order={order}
        onClickCopyInvoice={onClickCopyInvoice}
        editingFieldName={invoiceEditingFieldName}
        onCancel={() => onCancel("invoice")}
        onSave={onSave}
        changeEditingFieldName={changeInvoiceEditingFieldName}
      />
      <OrderPickup
        order={order}
        editingFieldName={pickupEditingFieldName}
        onCancel={() => onCancel("pickup")}
        onSave={onSave}
        changeEditingFieldName={changePickupEditingFieldName}
      />
    </section>
  )
}
