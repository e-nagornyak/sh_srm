import { Check, X } from "lucide-react"

import type { Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TableCell, TableRow } from "@/components/ui/table"
import { ComponentWithTooltip } from "@/components/shared/component-with-tooltip"

interface Props {
  order: Order
  changeEditMode: () => void
}

export const OrderPaidRowEdit = ({ order, changeEditMode }: Props) => {
  return (
    <TableRow className="border-b border-gray-700">
      <TableCell className="w-52">
        <div className="flex items-center justify-between">
          Paid:
          <Input
            value={order?.total_to_pay || 0}
            type="number"
            className="w-20"
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
                <Button onClick={changeEditMode} color="blue" variant="outline">
                  <Check size="15" />
                </Button>
              }
              text="Save"
            />
            <ComponentWithTooltip
              trigger={
                <Button
                  onClick={changeEditMode}
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
                <Button onClick={changeEditMode} color="red" variant="outline">
                  0.00
                </Button>
              }
              text="Set as unpaid"
            />
            <ComponentWithTooltip
              trigger={
                <Button onClick={changeEditMode} color="gray" variant="outline">
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
