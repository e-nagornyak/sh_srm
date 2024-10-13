import * as React from "react"
import dynamic from "next/dynamic"
import { Copy, Pen } from "lucide-react"
import { type SubmitHandler } from "react-hook-form"

import { type Order } from "@/lib/api/allegro/orders/orders-types"
import { type OrderInvoiceFormData } from "@/lib/validations/order/order-invoice"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Title } from "@/components/ui/title"
import { ComponentWithTooltip } from "@/components/shared/component-with-tooltip"

import { OrderInvoiceText } from "./order-invoice-text"

const OrderInvoiceForm = dynamic(
  () => import("./order-invoice-form").then((mod) => mod.OrderInvoiceForm),
  {
    loading: () => <Skeleton className="h-half-screen w-full" />,
  }
)

interface OrderViewInvoiceProps {
  order: Order
  editingFieldName: string | null
  changeEditingFieldName: (fieldName?: string) => void
  onClickCopyInvoice: () => void
  onCancel: () => void
  onSave: SubmitHandler<OrderInvoiceFormData>
}

export function OrderInvoice({
  order,
  editingFieldName,
  onClickCopyInvoice,
  changeEditingFieldName,
  onSave,
  onCancel,
}: OrderViewInvoiceProps) {
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
            Invoice data
          </Title>
          <div className="space-x-2">
            <ComponentWithTooltip
              trigger={
                <Button disabled onClick={onClickCopyInvoice} size="xs">
                  <Copy size="15" />
                </Button>
              }
              text="Copy address to the delivery address"
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
          <OrderInvoiceForm
            defaultValues={{
              firstAndLastName: `${address?.last_name || ""} ${address?.last_name || ""}`,
              company_name: buyer?.company_name || "",
              address: address?.street,
              zip_code: address?.zip_code,
              city: address?.city,
              state: "",
              country_code: address?.country_code,
              tax_id: "",
            }}
            onCancel={onCancel}
            onSave={onSave}
          />
        ) : (
          <OrderInvoiceText
            changeEditingFieldName={changeEditingFieldName}
            order={order}
          />
        )}
      </CardContent>
    </Card>
  )
}
