import * as React from "react"
import dynamic from "next/dynamic"
import { Copy, Pen } from "lucide-react"

import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { Title } from "@/components/ui/title"
import { ComponentWithTooltip } from "@/components/shared/component-with-tooltip"

import { OrderInvoiceText } from "./order-invoice-text"

const OrderInvoiceForm = dynamic(
  () => import("./order-invoice-form").then((mod) => mod.OrderInvoiceForm),
  {
    loading: () => (
      <TableRow>
        <TableCell colSpan={3}>
          <Skeleton className="h-half-screen w-full" />
        </TableCell>
      </TableRow>
    ),
  }
)

interface OrderViewInvoiceProps {
  order: Order
  editingFieldName: string | null
  changeEditingFieldName: (fieldName?: string) => void
  onClickCopyInvoice: () => void
  onCancel: () => void
  onSave: () => void
}

export function OrderInvoice({
  order,
  editingFieldName,
  onClickCopyInvoice,
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
            Invoice data
          </Title>
          <div className="space-x-2">
            <ComponentWithTooltip
              trigger={
                <Button onClick={onClickCopyInvoice} size="xs">
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
        <Table>
          <TableBody>
            {typeof editingFieldName === "string" ? (
              <OrderInvoiceForm
                order={order}
                onCancel={onCancel}
                onSave={onSave}
              />
            ) : (
              <OrderInvoiceText
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
