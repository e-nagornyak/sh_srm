"use client"

import { Copy, Pen } from "lucide-react"

import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody } from "@/components/ui/table"
import { Title } from "@/components/ui/title"
import { ComponentWithTooltip } from "@/components/shared/component-with-tooltip"
import { OrderDeliveryForm } from "@/app/[locale]/(private)/orders/order/[id]/_components/helpers/order-invoice-and-delivery/order-delivery/order-delivery-form"

import { OrderDeliveryText } from "./order-delivery-text"

interface OrderDeliveryProps {
  order: Order
  editingFieldName: string | null
  changeEditingFieldName: (fieldName?: string) => void
  onClickCopyAddress: () => void
  onCancel: () => void
  onSave: () => void
}

export function OrderDelivery({
  order,
  editingFieldName,
  onClickCopyAddress,
  changeEditingFieldName,
  onSave,
  onCancel,
}: OrderDeliveryProps) {
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
                <Button onClick={onClickCopyAddress} size="xs">
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
        <Table>
          <TableBody>
            {typeof editingFieldName === "string" ? (
              <OrderDeliveryForm
                order={order}
                onCancel={onCancel}
                onSave={onSave}
              />
            ) : (
              <OrderDeliveryText
                changeEditingFieldName={changeEditingFieldName}
                order={order}
              />
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
