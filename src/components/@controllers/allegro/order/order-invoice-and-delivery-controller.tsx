"use client"

import { useState, type Dispatch, type SetStateAction } from "react"
import { toast } from "sonner"

import { type Nullable } from "@/types/global"
import { getOrderApi } from "@/lib/api/allegro/orders/orders-api"
import { type Order } from "@/lib/api/allegro/orders/orders-types"
import { showErrorToast } from "@/lib/handle-error"
import type { OrderDeliveryFormData } from "@/lib/validations/order/order-delivery"
import { type OrderInvoiceFormData } from "@/lib/validations/order/order-invoice"
import { type OrderPickupFormData } from "@/lib/validations/order/order-pickup"
import useEffectAfterMount from "@/hooks/use-effect-after-mount"
import { OrderDelivery } from "@/components/common/allegro/order/order-invoice-and-delivery/order-delivery/order-delivery"
import { OrderInvoice } from "@/components/common/allegro/order/order-invoice-and-delivery/order-ivoice/order-invoice"
import { OrderPickup } from "@/components/common/allegro/order/order-invoice-and-delivery/order-pickup/order-pickup"

interface InvoiceAndDeliveryControllerProps {
  initialOrder: Order
}

export type InvoiceAndDeliveryFieldType = "delivery" | "invoice" | "pickup"

export function OrderInvoiceAndDeliveryController({
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
      await getOrderApi("client").updateAllegroOrder(order?.id, updatedOrder)
      onCloseForm("delivery")
      setOrder(updatedOrder)
      toast.info("Delivery data has been updated")
    } catch (e) {
      showErrorToast(e)
    }
  }

  const onSaveInvoiceData = async ({
    wants_invoice,
    country_code,
    zip_code,
    company_name,
    // address,
    // city,
    // tax_id,
  }: OrderInvoiceFormData) => {
    try {
      const updatedOrder: Order = {
        ...order,
        invoice: {
          ...order?.invoice,
          name: company_name,
          required: !!wants_invoice,
          zip_code,
          country_code,
        },
      }

      await getOrderApi("client").updateAllegroOrder(order?.id, updatedOrder)
      onCloseForm("invoice")
      setOrder(updatedOrder)
      toast.info("Invoice data has been updated")
    } catch (e) {
      showErrorToast(e)
    }
  }

  const onSavePickupData = async ({
    address,
    zip_code,
    id,
    city,
    point_name,
  }: OrderPickupFormData) => {
    try {
      const updatedOrder: Order = {
        ...order,
        delivery: {
          ...order?.delivery,
          pickup_point: {
            ...order?.delivery?.pickup_point,
            city,
            zip_code,
            pickup_id: id,
            street: address,
            name: point_name,
          },
        },
      }

      await getOrderApi("client").updateAllegroOrder(order?.id, updatedOrder)
      onCloseForm("pickup")
      setOrder(updatedOrder)
      toast.info("Pickup and point data has been updated")
    } catch (e) {
      showErrorToast(e)
    }
  }

  useEffectAfterMount(() => {
    setOrder(initialOrder)
  }, [initialOrder])

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
