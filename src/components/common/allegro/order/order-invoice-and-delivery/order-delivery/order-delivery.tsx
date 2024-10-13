"use client"

import dynamic from "next/dynamic"
import { Copy, Pen } from "lucide-react"
import { type SubmitHandler } from "react-hook-form"

import { type Order } from "@/lib/api/allegro/orders/orders-types"
import type { OrderDeliveryFormData } from "@/lib/validations/order/order-delivery"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Title } from "@/components/ui/title"
import { ComponentWithTooltip } from "@/components/shared/component-with-tooltip"

import { OrderDeliveryText } from "./order-delivery-text"

const OrderDeliveryForm = dynamic(
  () => import("./order-delivery-form").then((mod) => mod.OrderDeliveryForm),
  {
    loading: () => <Skeleton className="h-half-screen w-full" />,
  }
)

interface OrderDeliveryProps {
  order: Order
  editingFieldName: string | null
  changeEditingFieldName: (fieldName?: string) => void
  onClickCopyAddress: () => void
  onCancel: () => void
  onSave: SubmitHandler<OrderDeliveryFormData>
}

export function OrderDelivery({
  order,
  editingFieldName,
  onClickCopyAddress,
  changeEditingFieldName,
  onSave,
  onCancel,
}: OrderDeliveryProps) {
  const delivery = order?.delivery
  const buyer = order?.buyer
  const address = delivery?.address

  const handleOpenEditMode = () => {
    changeEditingFieldName("")
  }

  return (
    <Card>
      <CardContent>
        <div className="flex items-center justify-between px-2 pb-3">
          <Title weight="semibold" size="xs">
            Delivery address
          </Title>
          <div className="space-x-2">
            <ComponentWithTooltip
              trigger={
                <Button disabled onClick={onClickCopyAddress} size="xs">
                  <Copy size="15" />
                </Button>
              }
              text="Copy address to the invoice data"
            />
            <ComponentWithTooltip
              trigger={
                <Button onClick={handleOpenEditMode} size="xs">
                  <Pen size="15" />
                </Button>
              }
              text="Edit"
            />
          </div>
        </div>
        {typeof editingFieldName === "string" ? (
          <OrderDeliveryForm
            defaultValues={{
              ...address,
              company_name: buyer?.company_name || "",
              state: "",
            }}
            onCancel={onCancel}
            onSave={onSave}
          />
        ) : (
          <OrderDeliveryText
            changeEditingFieldName={changeEditingFieldName}
            order={order}
          />
        )}
      </CardContent>
    </Card>
  )
}
