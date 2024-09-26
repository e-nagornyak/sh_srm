import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TableCell, TableRow } from "@/components/ui/table"
import { CountrySelect } from "@/components/shared/country-select"

interface OrderDeliveryFormProps {
  order: Order
  onCancel: () => void
  onSave: () => void
}

export function OrderInvoiceForm({
  order,
  onCancel,
  onSave,
}: OrderDeliveryFormProps) {
  return (
    <>
      <TableRow className="border-0">
        <TableCell colSpan={3}>
          <div className="flex items-center space-x-2">
            <Checkbox id="customer_wants_invoice" />
            <Label htmlFor="customer_wants_invoice">
              Customer wants an invoice
            </Label>
          </div>
        </TableCell>
      </TableRow>{" "}
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
        <TableCell>Tax ID:</TableCell>
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
