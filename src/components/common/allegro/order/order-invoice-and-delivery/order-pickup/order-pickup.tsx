import * as React from "react"
import dynamic from "next/dynamic"
import { Pen } from "lucide-react"
import type { SubmitHandler } from "react-hook-form"

import { type Order } from "@/lib/api/allegro/orders/orders-types"
import { type OrderPickupFormData } from "@/lib/validations/order/order-pickup"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Title } from "@/components/ui/title"
import { ComponentWithTooltip } from "@/components/shared/component-with-tooltip"

import { OrderPickupText } from "./order-pickup-text"

const OrderPickupForm = dynamic(
  () => import("./order-pickup-form").then((mod) => mod.OrderPickupForm),
  {
    loading: () => <Skeleton className="h-72 w-full" />,
  }
)

interface OrderViewInvoiceProps {
  order: Order
  editingFieldName: string | null
  changeEditingFieldName: (fieldName?: string) => void
  onCancel: () => void
  onSave: SubmitHandler<OrderPickupFormData>
}

export function OrderPickup({
  order,
  editingFieldName,
  changeEditingFieldName,
  onSave,
  onCancel,
}: OrderViewInvoiceProps) {
  const handleOpenEditMode = () => {
    changeEditingFieldName("")
  }

  return (
    <Card>
      <CardContent>
        <div className="flex items-center justify-between px-2 pb-3">
          <Title weight="semibold" size="xs">
            Pickup at point
          </Title>

          <ComponentWithTooltip
            trigger={
              <Button onClick={handleOpenEditMode} size="xs">
                <Pen size="15" />
              </Button>
            }
            text="Edit"
          />
        </div>

        {typeof editingFieldName === "string" ? (
          <OrderPickupForm
            defaultValues={{
              id: order?.delivery?.pickup_point?.pickup_id || "",
              point_name: order?.delivery?.pickup_point?.name || "",
              address: order?.delivery?.pickup_point?.street || "",
              zip_code: order?.delivery?.pickup_point?.zip_code || "",
              city: order?.delivery?.pickup_point?.city || "",
            }}
            onCancel={onCancel}
            onSave={onSave}
          />
        ) : (
          <OrderPickupText
            changeEditingFieldName={changeEditingFieldName}
            order={order}
          />
        )}
      </CardContent>
    </Card>
  )
}
