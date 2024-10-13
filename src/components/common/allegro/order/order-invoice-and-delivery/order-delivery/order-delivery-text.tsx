import * as React from "react"
import { countryList, type CountryCodes } from "@/constants/shared/countries"

import { type Order } from "@/lib/api/allegro/orders/orders-types"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
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
  const bayerFullName = `${delivery?.address?.first_name || ""} ${delivery?.address?.last_name || ""}`

  return (
    <Table>
      <TableBody>
        <TableRow className="border-0">
          <TableCell className="py-0 text-start">Name and surname:</TableCell>
          <TableCell colSpan={2} className="py-0 text-start">
            <ComponentWithEditButton onEditClick={changeEditingFieldName}>
              {bayerFullName}
            </ComponentWithEditButton>
          </TableCell>
        </TableRow>
        <TableRow className="border-0">
          <TableCell className="py-0 text-start">Company:</TableCell>
          <TableCell colSpan={2} className="py-0 text-start">
            <ComponentWithEditButton onEditClick={changeEditingFieldName}>
              {order?.buyer?.company_name}
            </ComponentWithEditButton>
          </TableCell>
        </TableRow>
        <TableRow className="border-0">
          <TableCell className="py-0 text-start">Address:</TableCell>
          <TableCell colSpan={2} className="py-0 text-start">
            <ComponentWithEditButton onEditClick={changeEditingFieldName}>
              {delivery?.address?.street}
            </ComponentWithEditButton>
          </TableCell>
        </TableRow>
        <TableRow className="border-0">
          <TableCell className="py-0 text-start">Postal code:</TableCell>
          <TableCell colSpan={2} className="py-0 text-start">
            <ComponentWithEditButton onEditClick={changeEditingFieldName}>
              {delivery?.address?.zip_code}
            </ComponentWithEditButton>
          </TableCell>
        </TableRow>
        <TableRow className="border-0">
          <TableCell className="py-0 text-start">City:</TableCell>
          <TableCell colSpan={2} className="py-0 text-start">
            <ComponentWithEditButton
              className="truncate"
              onEditClick={changeEditingFieldName}
            >
              {delivery?.address?.city}
            </ComponentWithEditButton>
          </TableCell>
        </TableRow>
        <TableRow className="border-0">
          <TableCell className="py-0 text-start">Country:</TableCell>
          <TableCell colSpan={2} className="py-0 text-start">
            <ComponentWithEditButton onEditClick={changeEditingFieldName}>
              {delivery?.address?.country_code
                ? countryList?.[delivery?.address?.country_code as CountryCodes]
                    ?.label
                : delivery?.address?.country_code}
            </ComponentWithEditButton>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
