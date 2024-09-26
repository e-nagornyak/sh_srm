import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { TableCell, TableRow } from "@/components/ui/table"
import { CountrySelect } from "@/components/shared/country-select"

interface Props {
  order: Order
  onCancel: () => void
  onSave: () => void
}

export function OrderDeliveryForm({ order, onCancel, onSave }: Props) {
  return (
    <>
      <TableRow className="border-0">
        <TableCell>Name and surname:</TableCell>
        <TableCell colSpan={2}>
          <Input size="xs" />
        </TableCell>
      </TableRow>
      <TableRow className="border-0">
        <TableCell>Company:</TableCell>
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
        <TableCell>State:</TableCell>
        <TableCell colSpan={2}>
          <Input size="xs" />
        </TableCell>
      </TableRow>
      <TableRow className="border-0">
        <TableCell>Country:</TableCell>
        <TableCell colSpan={2}>
          <CountrySelect />
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
