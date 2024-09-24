import * as React from "react"
import { Copy, Pen } from "lucide-react"

import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { Title } from "@/components/ui/title"
import { ComponentWithTooltip } from "@/components/shared/component-with-tooltip"

interface OrderViewInvoiceProps {
  order: Order
}

export function OrderViewInvoice({ order }: OrderViewInvoiceProps) {
  const delivery = order?.delivery
  const bayerFullName = `${delivery?.address?.last_name || ""} ${delivery?.address?.last_name || ""}`

  return (
    <Card>
      <CardContent>
        <div className="flex items-center justify-between px-2 pb-3">
          <Title weight="semibold" size="xs">
            Invoice data
          </Title>
          <div className="space-x-2">
            <ComponentWithTooltip
              trigger={
                <Button size="xs">
                  <Copy size="15" />
                </Button>
              }
              text="Copy address to the delivery address"
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
              <TableCell className="py-0 text-start">{bayerFullName}</TableCell>
            </TableRow>
            <TableRow className="border-0">
              <TableCell className="py-0 text-start">Company:</TableCell>
              <TableCell className="py-0 text-start">...</TableCell>
            </TableRow>
            <TableRow className="border-0">
              <TableCell className="py-0 text-start">Address:</TableCell>
              <TableCell className="py-0 text-start">
                {delivery?.address?.street || "..."}
              </TableCell>
            </TableRow>
            <TableRow className="border-0">
              <TableCell className="py-0 text-start">
                Postal code and city:
              </TableCell>
              <TableCell className="py-0 text-start">
                {delivery?.address?.zip_code || "..."}
              </TableCell>
              <TableCell className="py-0 text-start">
                {delivery?.address?.city || "..."}
              </TableCell>
            </TableRow>
            <TableRow className="border-0">
              <TableCell className="py-0 text-start">State:</TableCell>
              <TableCell className="py-0 text-start">...</TableCell>
            </TableRow>
            <TableRow className="border-0">
              <TableCell className="py-0 text-start">Country:</TableCell>
              <TableCell className="py-0 text-start">
                {delivery?.address?.country_code || "..."}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
