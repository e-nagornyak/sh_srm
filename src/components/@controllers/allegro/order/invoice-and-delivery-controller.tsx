"use client"

import { useState, type Dispatch, type SetStateAction } from "react"
import { toast } from "sonner"

import { type Nullable } from "@/types/global"
import { getAllegroOrdersApi } from "@/lib/api/allegro/orders/allegro-orders-api"
import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { showErrorToast } from "@/lib/handle-error"
import type { OrderDeliveryFormData } from "@/lib/validations/order/order-delivery"
import { type OrderInvoiceFormData } from "@/lib/validations/order/order-invoice"
import { type OrderPickupFormData } from "@/lib/validations/order/order-pickup"
import { OrderDelivery } from "@/components/common/allegro/order/order-invoice-and-delivery/order-delivery/order-delivery"
import { OrderInvoice } from "@/components/common/allegro/order/order-invoice-and-delivery/order-ivoice/order-invoice"
import { OrderPickup } from "@/components/common/allegro/order/order-invoice-and-delivery/order-pickup/order-pickup"

interface InvoiceAndDeliveryControllerProps {
  initialOrder: Order
}

export type InvoiceAndDeliveryFieldType = "delivery" | "invoice" | "pickup"

export function InvoiceAndDeliveryController({
  initialOrder,
}: InvoiceAndDeliveryControllerProps) {
  const [order, setOrder] = useState<Order>(initialOrder)

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

  const onSaveDeliveryData = async ({
    first_name,
    last_name,
    company_name,
    zip_code,
    country_code,
    street,
    city,
    // state,
  }: OrderDeliveryFormData) => {
    try {
      const updatedOrder: Order = {
        ...order,
        buyer: {
          ...order?.buyer,
          company_name,
        },
        delivery: {
          ...order?.delivery,
          address: {
            ...order?.delivery?.address,
            zip_code,
            country_code,
            street,
            city,
            first_name,
            last_name,
          },
        },
      }
      await getAllegroOrdersApi("client").updateAllegroOrder(
        order?.id,
        updatedOrder
      )
      onCloseForm("delivery")
      setOrder(updatedOrder)
      toast.info("Data has been updated")
    } catch (e) {
      showErrorToast(e)
    }
  }

  const onSaveInvoiceData = async (data: OrderInvoiceFormData) => {
    try {
      // const updatedOrder: Order = {
      //   ...order,
      //   buyer: {
      //     ...order?.buyer,
      //     company_name,
      //   },
      //   delivery: {
      //     ...order?.delivery,
      //     address: {
      //       ...order?.delivery?.address,
      //       zip_code,
      //       country_code,
      //       street,
      //       city,
      //       first_name,
      //       last_name,
      //     },
      //   },
      // }
      // await getAllegroOrdersApi("client").updateAllegroOrder(
      //   order?.id,
      //   updatedOrder
      // )
      onCloseForm("invoice")
      // setOrderState(updatedOrder)
      toast.info("Data has been updated")
    } catch (e) {
      showErrorToast(e)
    }
  }

  const onSavePickupData = async (data: OrderPickupFormData) => {
    try {
      console.log(data)
      onCloseForm("pickup")
      toast.info("Data has been updated")
    } catch (e) {
      showErrorToast(e)
    }
  }

  return (
    <section className="grid grid-cols-1 gap-3 lg:grid-cols-3">
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
        onSave={onSavePickupData}
        changeEditingFieldName={changePickupEditingFieldName}
      />
    </section>
  )
}
