import { countryList, type CountryCodes } from "@/constants/shared/countries"

import { type Order } from "@/lib/api/allegro/orders/orders-types"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { ComponentWithEditButton } from "@/components/shared/component-with-edit-button"

interface OrderInvoiceTextProps {
  order: Order
  changeEditingFieldName: (fieldName?: string) => void
}

export function OrderInvoiceText({
  order,
  changeEditingFieldName,
}: OrderInvoiceTextProps) {
  const invoice = order?.invoice

  return (
    <Table>
      <TableBody>
        <TableRow className="border-0">
          <TableCell className="py-0 text-start">Company:</TableCell>
          <TableCell colSpan={2} className="py-0 text-start">
            <ComponentWithEditButton onEditClick={changeEditingFieldName}>
              {invoice?.name}
            </ComponentWithEditButton>
          </TableCell>
        </TableRow>
        <TableRow className="border-0">
          <TableCell className="py-0 text-start">Address:</TableCell>
          <TableCell colSpan={2} className="py-0 text-start">
            <ComponentWithEditButton onEditClick={changeEditingFieldName}>
              ...
            </ComponentWithEditButton>
          </TableCell>
        </TableRow>
        <TableRow className="border-0">
          <TableCell className="py-0 text-start">Postal code:</TableCell>
          <TableCell colSpan={2} className="py-0 text-start">
            <ComponentWithEditButton onEditClick={changeEditingFieldName}>
              {invoice?.zip_code}
            </ComponentWithEditButton>
          </TableCell>
        </TableRow>
        <TableRow className="border-0">
          <TableCell className="py-0 text-start">City:</TableCell>
          <TableCell colSpan={2} className="py-0 text-start">
            <ComponentWithEditButton onEditClick={changeEditingFieldName}>
              ...
            </ComponentWithEditButton>
          </TableCell>
        </TableRow>
        <TableRow className="border-0">
          <TableCell className="py-0 text-start">Country:</TableCell>
          <TableCell colSpan={2} className="py-0 text-start">
            <ComponentWithEditButton onEditClick={changeEditingFieldName}>
              {invoice?.country_code
                ? countryList?.[invoice?.country_code as CountryCodes]?.label
                : ""}
            </ComponentWithEditButton>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
