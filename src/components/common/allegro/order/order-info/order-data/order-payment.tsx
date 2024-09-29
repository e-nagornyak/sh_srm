import dynamic from "next/dynamic"

import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { Skeleton } from "@/components/ui/skeleton"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { type ChangePaymentModeAction } from "@/components/@controllers/allegro/order/order-info-payment-controller"
import { OrderPaidRow } from "@/components/common/allegro/order/order-info/order-data/order-paid-row"

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

interface OrderPaymentProps {
  order: Order
  paidAmount: string
  isEditPaymentMode: boolean
  setPaidAmount: (value: string) => void
  changePaymentStatus: (actionType: ChangePaymentModeAction) => void
  changeEditMode: () => void
}

export function OrderPayment({
  order,
  paidAmount,
  setPaidAmount,
  changePaymentStatus,
  changeEditMode,
  isEditPaymentMode,
}: OrderPaymentProps) {
  return (
    <Table>
      <TableBody>
        {isEditPaymentMode ? (
          <OrderViewOrderInfoPaidRowEdit
            order={order}
            paidAmount={paidAmount}
            changePaymentStatus={changePaymentStatus}
            setPaidAmount={setPaidAmount}
          />
        ) : (
          <OrderPaidRow changeEditMode={changeEditMode} order={order} />
        )}
      </TableBody>
    </Table>
  )
}
