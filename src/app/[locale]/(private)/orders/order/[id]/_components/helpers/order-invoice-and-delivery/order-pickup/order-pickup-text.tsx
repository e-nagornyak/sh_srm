import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { TableCell, TableRow } from "@/components/ui/table"
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
    <>
      <TableRow className="border-0">
        <TableCell className="py-0 text-start">Name:</TableCell>
        <TableCell className="py-0 text-start">
          <ComponentWithEditButton
            onEditClick={changeEditingFieldName}
          ></ComponentWithEditButton>
        </TableCell>
      </TableRow>
      <TableRow className="border-0">
        <TableCell className="py-0 text-start">ID:</TableCell>
        <TableCell className="py-0 text-start">
          <ComponentWithEditButton
            onEditClick={changeEditingFieldName}
          ></ComponentWithEditButton>
        </TableCell>
      </TableRow>
      <TableRow className="border-0">
        <TableCell className="py-0 text-start">Address:</TableCell>
        <TableCell className="py-0 text-start">
          <ComponentWithEditButton
            onEditClick={changeEditingFieldName}
          ></ComponentWithEditButton>
        </TableCell>
      </TableRow>
      <TableRow className="border-0">
        <TableCell className="py-0 text-start">Postal code and city:</TableCell>
        <TableCell className="py-0 text-start">
          <ComponentWithEditButton
            onEditClick={changeEditingFieldName}
          ></ComponentWithEditButton>
        </TableCell>
        <TableCell className="py-0 text-start">
          <ComponentWithEditButton
            onEditClick={changeEditingFieldName}
          ></ComponentWithEditButton>
        </TableCell>
      </TableRow>
    </>
  )
}
