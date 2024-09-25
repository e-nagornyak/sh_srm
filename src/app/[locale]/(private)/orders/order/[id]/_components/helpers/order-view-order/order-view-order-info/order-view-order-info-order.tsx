import { Phone } from "lucide-react"

import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { TableCell, TableRow } from "@/components/ui/table"
import { ComponentWithEditButton } from "@/components/shared/component-with-edit-button"
import { ComponentWithTooltip } from "@/components/shared/component-with-tooltip"

interface OrderViewOrderInfoOrderProps {
  order: Order
  changeEditingFieldName: (fieldName?: string) => void
}

export function OrderViewOrderInfoOrder({
  order,
  changeEditingFieldName,
}: OrderViewOrderInfoOrderProps) {
  return (
    <>
      <TableRow className="border-0">
        <TableCell className="pb-0 text-start">Client (login):</TableCell>
        <TableCell className="pb-0 text-start">
          <ComponentWithEditButton onEditClick={changeEditingFieldName}>
            {order?.buyer?.login}
          </ComponentWithEditButton>
        </TableCell>
      </TableRow>
      <TableRow className="border-0">
        <TableCell className="py-0 text-start">E-mail:</TableCell>
        <TableCell className="truncate py-0 text-start">
          <ComponentWithEditButton onEditClick={changeEditingFieldName}>
            {order?.buyer?.email}
          </ComponentWithEditButton>
        </TableCell>
      </TableRow>
      <TableRow className="border-0">
        <TableCell className="py-0 text-start">Phone number:</TableCell>
        <TableCell className="py-0 text-start">
          <div className="flex items-center gap-2">
            <ComponentWithEditButton onEditClick={changeEditingFieldName}>
              {order?.buyer?.phone_number}
            </ComponentWithEditButton>
            {order?.buyer?.phone_number && (
              <ComponentWithTooltip
                trigger={
                  <a href={`tel:${order?.buyer?.phone_number}`}>
                    <Phone className="text-highlight" size="15" />
                  </a>
                }
                text="Call"
              />
            )}
          </div>
        </TableCell>
      </TableRow>
      <TableRow className="border-b border-gray-700">
        <TableCell className="pt-0 text-start">Order source:</TableCell>
        <TableCell className="pt-0 text-start">
          <ComponentWithEditButton
            onEditClick={changeEditingFieldName}
          ></ComponentWithEditButton>
        </TableCell>
      </TableRow>
      {/**/}
      <TableRow className="border-0">
        <TableCell className="content-start pb-0 text-start">
          Shipping method:
        </TableCell>
        <TableCell className="pb-0 text-start">
          <ComponentWithEditButton onEditClick={changeEditingFieldName}>
            {order?.delivery?.method}
          </ComponentWithEditButton>
        </TableCell>
      </TableRow>
      <TableRow className="border-0">
        <TableCell className="py-0 text-start">Shipping price:</TableCell>
        <TableCell className="py-0 text-start">
          <ComponentWithEditButton onEditClick={changeEditingFieldName}>
            {order?.delivery?.cost &&
              `${order?.delivery?.cost} ${order?.currency}`}
          </ComponentWithEditButton>
        </TableCell>
      </TableRow>
      <TableRow className="border-b border-gray-700">
        <TableCell className="pt-0 text-start">Payment method:</TableCell>
        <TableCell className="pt-0 text-start">
          <ComponentWithEditButton onEditClick={changeEditingFieldName}>
            {order?.payment?.provider}
          </ComponentWithEditButton>
        </TableCell>
      </TableRow>
      {/**/}
      <TableRow className="border-0">
        <TableCell className="pb-0 text-start">Additional field 1:</TableCell>
        <TableCell className="pb-0 text-start">
          <ComponentWithEditButton
            onEditClick={changeEditingFieldName}
          ></ComponentWithEditButton>
        </TableCell>
      </TableRow>
      <TableRow className="border-0">
        <TableCell className="py-0 text-start">Additional field 2:</TableCell>
        <TableCell className="py-0 text-start">
          <ComponentWithEditButton
            onEditClick={changeEditingFieldName}
          ></ComponentWithEditButton>
        </TableCell>
      </TableRow>
      <TableRow className="border-0">
        <TableCell className="py-0 text-start">VIES/VAT PL:</TableCell>
        <TableCell className="py-0 text-start">
          <ComponentWithEditButton
            onEditClick={changeEditingFieldName}
          ></ComponentWithEditButton>
        </TableCell>
      </TableRow>
      <TableRow className="border-0">
        <TableCell className="py-0 text-start">Comments:</TableCell>
        <TableCell className="py-0 text-start">
          <ComponentWithEditButton
            onEditClick={changeEditingFieldName}
          ></ComponentWithEditButton>
        </TableCell>
      </TableRow>
    </>
  )
}
