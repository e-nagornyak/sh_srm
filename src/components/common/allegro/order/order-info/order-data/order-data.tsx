import dynamic from "next/dynamic"
import { type SubmitHandler } from "react-hook-form"

import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { type OrderInfoFormData } from "@/lib/validations/order/order-info"
import { Skeleton } from "@/components/ui/skeleton"

import { OrderInfoDataText } from "./order-info-data-text"

const OrderInfoDataForm = dynamic(
  () => import("./order-info-data-form").then((mod) => mod.OrderInfoDataForm),
  {
    loading: () => <Skeleton className="h-half-screen w-full" />,
  }
)

interface OrderDataProps {
  order: Order
  onCancel: () => void
  editingFieldName: string | null
  onSave: SubmitHandler<OrderInfoFormData>
  changeEditingFieldName: (fieldName?: string) => void
}

export function OrderData({
  order,
  editingFieldName,
  onCancel,
  onSave,
  changeEditingFieldName,
}: OrderDataProps) {
  const delivery = order?.delivery
  const payment = order?.payment

  return typeof editingFieldName === "string" ? (
    <OrderInfoDataForm
      defaultValues={{
        ...order?.buyer,
        phone_number: order?.buyer?.phone_number || "",
        order_source: "",
        method: delivery?.method,
        cost: delivery?.cost,
        provider: payment?.provider,
        additional_field_1: "",
        additional_field_2: "",
        vies_vat_pl: "",
        comments: "",
        cash_on_delivery: false,
      }}
      onCancel={onCancel}
      onSave={onSave}
    />
  ) : (
    <OrderInfoDataText
      order={order}
      changeEditingFieldName={changeEditingFieldName}
    />
  )
}
