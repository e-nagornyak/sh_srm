import { Pen, RefreshCcw } from "lucide-react"

import type { Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { Button } from "@/components/ui/button"
import { Chip } from "@/components/ui/chip"
import { TableCell, TableRow } from "@/components/ui/table"
import { ComponentWithTooltip } from "@/components/shared/component-with-tooltip"

interface OrderPaidRowProps {
  order: Order
  changeEditMode: () => void
}

export const OrderPaidRow = ({ order, changeEditMode }: OrderPaidRowProps) => {
  return (
    <TableRow className="border-b border-gray-700">
      <TableCell className="w-52">
        <div className="flex items-center justify-between">
          Paid:
          <Chip className="whitespace-nowrap" onClick={changeEditMode}>
            {order?.payment?.paid_amount} {order?.payment?.currency}
          </Chip>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-1">
          <span>
            of {order?.total_to_pay} {order?.currency}
          </span>
          <ComponentWithTooltip
            trigger={
              <Button size="icon" variant="ghost">
                <RefreshCcw size="15" />
              </Button>
            }
            text="Recalculate the total value"
          />
        </div>
      </TableCell>
      <TableCell className="w-28">
        <Button onClick={changeEditMode} size="xs">
          <Pen size="15" /> Edit payment
        </Button>
      </TableCell>
    </TableRow>
  )
}
