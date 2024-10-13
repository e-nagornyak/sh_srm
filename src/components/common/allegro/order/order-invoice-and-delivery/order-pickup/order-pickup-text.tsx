import { type Order } from "@/lib/api/allegro/orders/orders-types"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { ComponentWithEditButton } from "@/components/shared/component-with-edit-button"

interface OrderInvoiceTextProps {
  order: Order
  changeEditingFieldName: (fieldName?: string) => void
}

export function OrderPickupText({
  order,
  changeEditingFieldName,
}: OrderInvoiceTextProps) {
  return (
    <Table>
      <TableBody>
        <TableRow className="border-0">
          <TableCell className="py-0 text-start">Method:</TableCell>
          <TableCell colSpan={2} className="py-0 text-start">
            <ComponentWithEditButton onEditClick={changeEditingFieldName}>
              {order?.delivery?.method}
            </ComponentWithEditButton>
          </TableCell>
        </TableRow>
        <TableRow className="border-0">
          <TableCell className="py-0 text-start">Name:</TableCell>
          <TableCell colSpan={2} className="py-0 text-start">
            <ComponentWithEditButton onEditClick={changeEditingFieldName}>
              {order?.delivery?.pickup_point?.name}
            </ComponentWithEditButton>
          </TableCell>
        </TableRow>
        <TableRow className="border-0">
          <TableCell className="py-0 text-start">ID:</TableCell>
          <TableCell colSpan={2} className="py-0 text-start">
            <ComponentWithEditButton onEditClick={changeEditingFieldName}>
              {order?.delivery?.pickup_point?.pickup_id}
            </ComponentWithEditButton>
          </TableCell>
        </TableRow>
        <TableRow className="border-0">
          <TableCell className="py-0 text-start">Address:</TableCell>
          <TableCell colSpan={2} className="py-0 text-start">
            <ComponentWithEditButton onEditClick={changeEditingFieldName}>
              {order?.delivery?.pickup_point?.street}
            </ComponentWithEditButton>
          </TableCell>
        </TableRow>
        <TableRow className="border-0">
          <TableCell className="py-0 text-start">Postal code:</TableCell>
          <TableCell colSpan={2} className="py-0 text-start">
            <ComponentWithEditButton onEditClick={changeEditingFieldName}>
              {order?.delivery?.pickup_point?.zip_code}
            </ComponentWithEditButton>
          </TableCell>
        </TableRow>
        <TableRow className="border-0">
          <TableCell className="py-0 text-start">City:</TableCell>
          <TableCell className="py-0 text-start">
            <ComponentWithEditButton onEditClick={changeEditingFieldName}>
              {order?.delivery?.pickup_point?.city}
            </ComponentWithEditButton>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
