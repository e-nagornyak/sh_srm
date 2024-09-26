"use client"

import { useState } from "react"
import { Edit } from "lucide-react"

import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { OrderBaseInfoEdit } from "@/app/[locale]/(private)/orders/order/[id]/_components/helpers/order-delivery/order-delivery-edit"

import { OrderDelivery } from "./order-delivery"

// const OrderViewOrderInfoOrderEdit = dynamic(
//   () =>
//     import("./order-view-order-info-order-edit").then(
//       (mod) => mod.OrderViewOrderInfoOrderEdit
//     ),
//   {
//     loading: () => (
//       <TableRow>
//         <TableCell colSpan={3}>
//           <Skeleton className="h-half-screen w-full" />,
//         </TableCell>
//       </TableRow>
//     ),
//   }
// )

interface Props {
  order: Order
}

export function OrderDeliveryController({ order }: Props) {
  const [editingFieldName, setEditingFieldName] = useState<string | null>(null)

  const changeEditingFieldName = (fieldName?: string) => {
    setEditingFieldName(fieldName || "")
  }

  const onCancel = () => {
    setEditingFieldName(null)
  }

  const onSave = () => {
    setEditingFieldName(null)
  }

  return typeof editingFieldName === "string" ? (
    <OrderDelivery
      changeEditingFieldName={changeEditingFieldName}
      order={order}
    />
  ) : (
    <OrderBaseInfoEdit order={order} onCancel={onCancel} onSave={onSave} />
  )
}
