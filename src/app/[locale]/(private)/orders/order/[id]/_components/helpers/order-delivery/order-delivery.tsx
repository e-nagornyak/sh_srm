import * as React from "react"
import { Copy, Pen } from "lucide-react"

import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { Title } from "@/components/ui/title"
import { ComponentWithEditButton } from "@/components/shared/component-with-edit-button"
import { ComponentWithTooltip } from "@/components/shared/component-with-tooltip"

interface Props {
  order: Order
  changeEditingFieldName: (fieldName?: string) => void
}

export function OrderDelivery({ order, changeEditingFieldName }: Props) {
  const delivery = order?.delivery
  const bayerFullName = `${delivery?.address?.last_name || ""} ${delivery?.address?.last_name || ""}`

  return (
    <Card>
      <CardContent>
        <div className="flex items-center justify-between px-2 pb-3">
          <Title weight="semibold" size="xs">
            Delivery address
          </Title>
          <div className="space-x-2">
            <ComponentWithTooltip
              trigger={
                <Button size="xs">
                  <Copy size="15" />
                </Button>
              }
              text="Copy address to the invoice data"
            />
            <ComponentWithTooltip
              trigger={
                <Button size="xs">
                  <Pen size="15" />
                </Button>
              }
              text="Edit"
            />
          </div>
        </div>
        <Table>
          <TableBody>
            <TableRow className="border-0">
              <TableCell className="py-0 text-start">
                Name and surname:
              </TableCell>
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
              <TableCell className="py-0 text-start">
                Postal code and city:
              </TableCell>
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
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
