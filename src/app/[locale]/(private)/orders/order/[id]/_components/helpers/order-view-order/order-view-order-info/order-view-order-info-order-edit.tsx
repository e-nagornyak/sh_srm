import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { TableCell, TableRow } from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"

interface OrderViewOrderInfoOrderEdit {
  order: Order
  onCancel: () => void
  onSave: () => void
}

export function OrderViewOrderInfoOrderEdit({
  order,
  onCancel,
  onSave,
}: OrderViewOrderInfoOrderEdit) {
  return (
    <>
      <TableRow className="border-0">
        <TableCell>Client (login):</TableCell>
        <TableCell colSpan={2}>
          <Input defaultValue={order?.buyer?.login} size="xs" />
        </TableCell>
      </TableRow>
      <TableRow className="border-0">
        <TableCell>E-mail:</TableCell>
        <TableCell colSpan={2}>
          <Input defaultValue={order?.buyer?.email} size="xs" />
        </TableCell>
      </TableRow>
      <TableRow className="border-0">
        <TableCell>Phone number:</TableCell>
        <TableCell colSpan={2}>
          <Input
            defaultValue={order?.buyer?.phone_number?.toString()}
            size="xs"
          />
        </TableCell>
      </TableRow>
      <TableRow className="border-b border-gray-700">
        <TableCell>Order source:</TableCell>
        <TableCell colSpan={2}>
          <Select defaultValue="sheibar">
            <SelectTrigger size="xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Allegro</SelectLabel>
                <SelectItem value="sheibar">sheibar</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </TableCell>
      </TableRow>
      {/**/}
      <TableRow className="border-0">
        <TableCell className="content-start pb-0 text-start">
          Shipping method:
        </TableCell>
        <TableCell colSpan={2}>
          <div className="flex gap-3">
            <Input defaultValue={order?.delivery?.method} size="xs" />
            <div className="flex items-center space-x-2">
              <Checkbox id="cash_on_delivery" />
              <Label htmlFor="cash_on_delivery">Cash on delivery</Label>
            </div>
          </div>
        </TableCell>
      </TableRow>
      <TableRow className="border-0">
        <TableCell>Shipping price:</TableCell>
        <TableCell colSpan={2}>
          <Input defaultValue={order?.delivery?.cost} size="xs" />
        </TableCell>
      </TableRow>
      <TableRow className="border-b border-gray-700">
        <TableCell>Payment method:</TableCell>
        <TableCell colSpan={2}>
          <Input defaultValue={order?.payment?.provider} size="xs" />
        </TableCell>
      </TableRow>
      {/**/}
      <TableRow className="border-0">
        <TableCell>Additional field 1:</TableCell>
        <TableCell colSpan={2}>
          <Input size="xs" />
        </TableCell>
      </TableRow>
      <TableRow className="border-0">
        <TableCell>Additional field 2:</TableCell>
        <TableCell colSpan={2}>
          <Input size="xs" />
        </TableCell>
      </TableRow>
      <TableRow className="border-0">
        <TableCell>VIES/VAT PL:</TableCell>
        <TableCell colSpan={2}>
          <Input size="xs" />
        </TableCell>
      </TableRow>
      <TableRow className="border-0">
        <TableCell className="content-start">Comments:</TableCell>
        <TableCell colSpan={2}>
          <Textarea className="resize-y" rows={5} />
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
