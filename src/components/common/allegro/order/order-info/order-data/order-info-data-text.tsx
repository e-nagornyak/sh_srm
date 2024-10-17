import { Phone } from "lucide-react"

import { type Order } from "@/lib/api/allegro/orders/orders-types"
import { CopyButton } from "@/components/ui/copy-button"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { Text } from "@/components/ui/text"
import { ComponentWithEditButton } from "@/components/shared/component-with-edit-button"
import { ComponentWithTooltip } from "@/components/shared/component-with-tooltip"

interface OrderBaseInfoProps {
  order: Order
  changeEditingFieldName: (fieldName?: string) => void
}

export function OrderInfoDataText({
  order,
  changeEditingFieldName,
}: OrderBaseInfoProps) {
  return (
    <Table>
      <TableBody>
        <TableRow className="border-b-0 border-t border-gray-700">
          <TableCell className="pb-0 text-start">Client (login):</TableCell>
          <TableCell colSpan={2} className="pb-0 text-start">
            <ComponentWithEditButton onEditClick={changeEditingFieldName}>
              {order?.buyer?.login}
            </ComponentWithEditButton>
          </TableCell>
        </TableRow>

        <TableRow className="border-0">
          <TableCell className="py-0 text-start">Order id:</TableCell>
          <TableCell colSpan={2} className="py-0 text-start">
            <CopyButton copyText={order?.order_id}>
              <Text color="highlight">{order?.order_id}</Text>
            </CopyButton>
          </TableCell>
        </TableRow>
        <TableRow className="border-0">
          <TableCell className="py-0 text-start">E-mail:</TableCell>
          <TableCell colSpan={2} className="py-0 text-start">
            <ComponentWithEditButton onEditClick={changeEditingFieldName}>
              {order?.buyer?.email}
            </ComponentWithEditButton>
          </TableCell>
        </TableRow>
        <TableRow className="border-0">
          <TableCell className="py-0 text-start">Phone number:</TableCell>
          <TableCell colSpan={2} className="py-0 text-start">
            <div className="flex items-center gap-1.5">
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
          <TableCell colSpan={2} className="pt-0 text-start">
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
          <TableCell colSpan={2} className="pb-0 text-start">
            <ComponentWithEditButton
              className="text-start"
              onEditClick={changeEditingFieldName}
            >
              {order?.delivery?.method}
            </ComponentWithEditButton>
          </TableCell>
        </TableRow>
        <TableRow className="border-0">
          <TableCell className="py-0 text-start">Shipping price:</TableCell>
          <TableCell colSpan={2} className="py-0 text-start">
            <ComponentWithEditButton onEditClick={changeEditingFieldName}>
              {order?.delivery?.cost &&
                `${order?.delivery?.cost} ${order?.currency}`}
            </ComponentWithEditButton>
          </TableCell>
        </TableRow>
        <TableRow className="border-b border-gray-700">
          <TableCell className="pt-0 text-start">Payment method:</TableCell>
          <TableCell colSpan={2} className="pt-0 text-start">
            <ComponentWithEditButton onEditClick={changeEditingFieldName}>
              {order?.payment?.provider}
            </ComponentWithEditButton>
          </TableCell>
        </TableRow>
        {/**/}
        <TableRow className="border-0">
          <TableCell className="pb-0 text-start">Additional field 1:</TableCell>
          <TableCell colSpan={2} className="pb-0 text-start">
            <ComponentWithEditButton
              onEditClick={changeEditingFieldName}
            ></ComponentWithEditButton>
          </TableCell>
        </TableRow>
        <TableRow className="border-0">
          <TableCell className="py-0 text-start">Additional field 2:</TableCell>
          <TableCell colSpan={2} className="py-0 text-start">
            <ComponentWithEditButton
              onEditClick={changeEditingFieldName}
            ></ComponentWithEditButton>
          </TableCell>
        </TableRow>
        <TableRow className="border-0">
          <TableCell className="py-0 text-start">VIES/VAT PL:</TableCell>
          <TableCell colSpan={2} className="py-0 text-start">
            <ComponentWithEditButton onEditClick={changeEditingFieldName}>
              {order?.invoice?.tax_id}
            </ComponentWithEditButton>
          </TableCell>
        </TableRow>
        <TableRow className="border-0">
          <TableCell className="py-0 text-start">Comments:</TableCell>
          <TableCell colSpan={2} className="py-0 text-start">
            <ComponentWithEditButton onEditClick={changeEditingFieldName}>
              {order?.message_to_seller}
            </ComponentWithEditButton>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
