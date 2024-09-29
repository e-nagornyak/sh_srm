import { Check, X } from "lucide-react"

import type { Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TableCell, TableRow } from "@/components/ui/table"
import type { ChangePaymentModeAction } from "@/components/@controllers/allegro/order/order-info-payment-controller"
import { ComponentWithTooltip } from "@/components/shared/component-with-tooltip"

interface OrderPaidRowEditProps {
  paidAmount: string
  order: Order
  setPaidAmount: (value: string) => void
  changePaymentStatus: (actionType: ChangePaymentModeAction) => void
}

export const OrderPaidRowEdit = ({
  paidAmount,
  order,
  changePaymentStatus,
  setPaidAmount,
}: OrderPaidRowEditProps) => {
  return (
    <TableRow className="border-b border-gray-700">
      <TableCell className="w-52">
        <div className="flex items-center justify-between">
          Paid:
          <Input
            min={0}
            max={order?.total_to_pay || undefined}
            value={paidAmount}
            onChange={(e) => setPaidAmount(e?.currentTarget?.value)}
            type="number"
            className="w-28"
            step="0.10"
          />
        </div>
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-3">
          <span>
            of {order?.total_to_pay} {order?.currency}
          </span>
          <div className="flex items-center gap-2">
            <ComponentWithTooltip
              trigger={
                <Button
                  onClick={() => changePaymentStatus("save")}
                  color="blue"
                  variant="outline"
                >
                  <Check size="15" />
                </Button>
              }
              text="Save"
            />
            <ComponentWithTooltip
              trigger={
                <Button
                  onClick={() => changePaymentStatus("paid")}
                  color="green"
                  variant="outline"
                >
                  {order?.total_to_pay}
                </Button>
              }
              text="Set as paid"
            />
            <ComponentWithTooltip
              trigger={
                <Button
                  onClick={() => changePaymentStatus("unpaid")}
                  color="red"
                  variant="outline"
                >
                  0.00
                </Button>
              }
              text="Set as unpaid"
            />
            <ComponentWithTooltip
              trigger={
                <Button
                  onClick={() => changePaymentStatus("cancel")}
                  color="gray"
                  variant="outline"
                >
                  <X size="15" />
                </Button>
              }
              text="Cancel"
            />
          </div>
        </div>
      </TableCell>
    </TableRow>
  )
}
