"use client"

import { useState } from "react"
import dynamic from "next/dynamic"

import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { Skeleton } from "@/components/ui/skeleton"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"

import { OrderBaseInfo } from "./order-base-info"
import { OrderPaidRow } from "./order-paid-row"

const OrderViewOrderInfoOrderEdit = dynamic(
  () => import("./order-base-info-form").then((mod) => mod.OrderBaseInfoForm),
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
  () => import("./order-paid-row-edit").then((mod) => mod.OrderPaidRowEdit),
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

interface Props {
  order: Order
}

export function OrderData({ order }: Props) {
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
          <OrderPaidRow changeEditMode={changePaymentMode} order={order} />
        )}
        {typeof editingFieldName === "string" ? (
          <OrderViewOrderInfoOrderEdit
            order={order}
            onCancel={onCancel}
            onSave={onSave}
          />
        ) : (
          <OrderBaseInfo
            order={order}
            changeEditingFieldName={changeEditingFieldName}
          />
        )}
      </TableBody>
    </Table>
  )
}
