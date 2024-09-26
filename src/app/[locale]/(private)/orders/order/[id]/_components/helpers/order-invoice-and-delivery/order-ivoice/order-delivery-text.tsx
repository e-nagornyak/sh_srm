import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { TableCell, TableRow } from "@/components/ui/table"
import { ComponentWithEditButton } from "@/components/shared/component-with-edit-button"

interface OrderDeliveryTextProps {
  order: Order
  changeEditingFieldName: (fieldName?: string) => void
}

export function OrderDeliveryText({
  order,
  changeEditingFieldName,
}: OrderDeliveryTextProps) {
  const delivery = order?.delivery
  const bayerFullName = `${delivery?.address?.last_name || ""} ${delivery?.address?.last_name || ""}`

  return (
    <>
      <TableRow className="border-0">
        <TableCell className="py-0 text-start">Name and surname:</TableCell>
        <TableCell className="py-0 text-start">
          <ComponentWithEditButton onEditClick={changeEditingFieldName}>
            {bayerFullName}
          </ComponentWithEditButton>
        </TableCell>
      </TableRow>
      <TableRow className="border-0">
        <TableCell className="py-0 text-start">Company:</TableCell>
        <TableCell className="py-0 text-start">
          <ComponentWithEditButton
            onEditClick={changeEditingFieldName}
          ></ComponentWithEditButton>
        </TableCell>
      </TableRow>
      <TableRow className="border-0">
        <TableCell className="py-0 text-start">Address:</TableCell>
        <TableCell className="py-0 text-start">
          <ComponentWithEditButton onEditClick={changeEditingFieldName}>
            {delivery?.address?.street}
          </ComponentWithEditButton>
        </TableCell>
      </TableRow>
      <TableRow className="border-0">
        <TableCell className="py-0 text-start">Postal code and city:</TableCell>
        <TableCell className="py-0 text-start">
          <ComponentWithEditButton onEditClick={changeEditingFieldName}>
            {delivery?.address?.zip_code}
          </ComponentWithEditButton>
        </TableCell>
        <TableCell className="py-0 text-start">
          <ComponentWithEditButton onEditClick={changeEditingFieldName}>
            {delivery?.address?.city}
          </ComponentWithEditButton>
        </TableCell>
      </TableRow>
      <TableRow className="border-0">
        <TableCell className="py-0 text-start">State:</TableCell>
        <TableCell className="py-0 text-start">
          <ComponentWithEditButton
            onEditClick={changeEditingFieldName}
          ></ComponentWithEditButton>
        </TableCell>
      </TableRow>
      <TableRow className="border-0">
        <TableCell className="py-0 text-start">Country:</TableCell>
        <TableCell className="py-0 text-start">
          <ComponentWithEditButton onEditClick={changeEditingFieldName}>
            {delivery?.address?.country_code}
          </ComponentWithEditButton>
        </TableCell>
      </TableRow>
    </>
  )
}
