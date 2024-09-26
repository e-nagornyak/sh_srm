"use client"

import { Suspense, useState, type Dispatch, type SetStateAction } from "react"
import { toast } from "sonner"

import { type Nullable } from "@/types/global"
import { RoutePaths } from "@/config/routes"
import { getAllegroOrdersApi } from "@/lib/api/allegro/orders/allegro-orders-api"
import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { getUserApi } from "@/lib/api/user/user-api"
import { showErrorToast } from "@/lib/handle-error"
import type { OrderDeliveryFormData } from "@/lib/validations/order/order-delivery"
import { type OrderInvoiceFormData } from "@/lib/validations/order/order-invoice"
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

  const onCloseForm = (formName: InvoiceAndDeliveryFieldType) => {
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

  const onSaveDeliveryData = async (data: OrderDeliveryFormData) => {
    try {
      console.log(data)
      // await getAllegroOrdersApi("client").updateAllegroOrder(
      //   order?.id,
      //   updatedOrder
      // )

      onCloseForm("delivery")
      toast.info("Data has been updated")
    } catch (e) {
      showErrorToast(e)
    }
  }

  const onSaveInvoiceData = async (data: OrderInvoiceFormData) => {
    try {
      console.log(data)
      onCloseForm("invoice")
      toast.info("Data has been updated")
    } catch (e) {
      showErrorToast(e)
    }
  }

  return (
    <section className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
      <OrderDelivery
        order={order}
        onClickCopyAddress={onClickCopyAddress}
        editingFieldName={deliveryEditingFieldName}
        onCancel={() => onCloseForm("delivery")}
        onSave={onSaveDeliveryData}
        changeEditingFieldName={changeDeliveryEditingFieldName}
      />
      <OrderInvoice
        order={order}
        onClickCopyInvoice={onClickCopyInvoice}
        editingFieldName={invoiceEditingFieldName}
        onCancel={() => onCloseForm("invoice")}
        onSave={onSaveInvoiceData}
        changeEditingFieldName={changeInvoiceEditingFieldName}
      />
      <OrderPickup
        order={order}
        editingFieldName={pickupEditingFieldName}
        onCancel={() => onCloseForm("pickup")}
        onSave={onSave}
        changeEditingFieldName={changePickupEditingFieldName}
      />
    </section>
  )
}
