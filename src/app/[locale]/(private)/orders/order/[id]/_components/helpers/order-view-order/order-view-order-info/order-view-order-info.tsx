"use client"

import { useState } from "react"
import dynamic from "next/dynamic"

import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { Skeleton } from "@/components/ui/skeleton"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { OrderViewOrderInfoOrder } from "@/app/[locale]/(private)/orders/order/[id]/_components/helpers/order-view-order/order-view-order-info/order-view-order-info-order"
import { OrderViewOrderInfoPaidRow } from "@/app/[locale]/(private)/orders/order/[id]/_components/helpers/order-view-order/order-view-order-info/order-view-order-info-paid-row"

const OrderViewOrderInfoOrderEdit = dynamic(
  () =>
    import("./order-view-order-info-order-edit").then(
      (mod) => mod.OrderViewOrderInfoOrderEdit
    ),
  {
    loading: () => (
      <TableRow>
        <TableCell colSpan={3}>
          <Skeleton className="h-half-screen w-full" />,
        </TableCell>
      </TableRow>
    ),
  }
)
const OrderViewOrderInfoPaidRowEdit = dynamic(
  () =>
    import("./order-view-order-info-paid-row-edit").then(
      (mod) => mod.OrderViewOrderInfoPaidRowEdit
    ),
  {
    loading: () => (
      <TableRow>
        <TableCell colSpan={3}>
          <Skeleton className="h-9 w-full" />
        </TableCell>
      </TableRow>
    ),
  }
)

interface OrderViewOrderBasicInformationProps {
  order: Order
}

export function OrderViewOrderInfo({
  order,
}: OrderViewOrderBasicInformationProps) {
  const [isEditPaymentMode, setIsEditPaymentMode] = useState(false)
  const [editingFieldName, setEditingFieldName] = useState<string | null>(null)

  const changePaymentMode = () => {
    setIsEditPaymentMode(!isEditPaymentMode)
  }

  const changeEditingFieldName = (fieldName?: string) => {
    setEditingFieldName(fieldName || "")
  }

  const onCancel = () => {
    setEditingFieldName(null)
  }

  const onSave = () => {
    setEditingFieldName(null)
  }

  return (
    <Table>
      <TableBody>
        {isEditPaymentMode ? (
          <OrderViewOrderInfoPaidRowEdit
            order={order}
            changeEditMode={changePaymentMode}
          />
        ) : (
          <OrderViewOrderInfoPaidRow
            changeEditMode={changePaymentMode}
            order={order}
          />
        )}
        {typeof editingFieldName === "string" ? (
          <OrderViewOrderInfoOrderEdit
            order={order}
            onCancel={onCancel}
            onSave={onSave}
          />
        ) : (
          <OrderViewOrderInfoOrder
            order={order}
            changeEditingFieldName={changeEditingFieldName}
          />
        )}
      </TableBody>
    </Table>
  )
}
