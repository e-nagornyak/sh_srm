import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TableCell, TableRow } from "@/components/ui/table"

interface OrderDeliveryFormProps {
  order: Order
  onCancel: () => void
  onSave: () => void
}

export function OrderPickupForm({
  order,
  onCancel,
  onSave,
}: OrderDeliveryFormProps) {
  return (
    <>
      <TableRow className="border-0">
        <TableCell>Point name:</TableCell>
        <TableCell colSpan={2}>
          <Input size="xs" />
        </TableCell>
      </TableRow>
      <TableRow className="border-0">
        <TableCell>ID:</TableCell>
        <TableCell colSpan={2}>
          <Input size="xs" />
        </TableCell>
      </TableRow>
      <TableRow className="border-0">
        <TableCell>Address:</TableCell>
        <TableCell colSpan={2}>
          <Input size="xs" />
        </TableCell>
      </TableRow>
      <TableRow className="border-0">
        <TableCell>Postal code:</TableCell>
        <TableCell colSpan={2}>
          <Input size="xs" />
        </TableCell>
      </TableRow>
      <TableRow className="border-0">
        <TableCell>City:</TableCell>
        <TableCell colSpan={2}>
          <Input size="xs" />
        </TableCell>
      </TableRow>
      <TableRow className="border-0">
        <TableCell colSpan={3}>
          <div className="flex items-center gap-3">
            <Button onClick={onSave} variant="outline" color="green">
              Save
            </Button>
            <Button onClick={onCancel} variant="outline" color="gray">
              Cancel
            </Button>
          </div>
        </TableCell>
      </TableRow>
    </>
  )
}
