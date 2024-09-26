import { Pen } from "lucide-react"

import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { Title } from "@/components/ui/title"
import { ComponentWithTooltip } from "@/components/shared/component-with-tooltip"

interface OrderViewPickupProps {
  order: Order
}

export function OrderPickup({ order }: OrderViewPickupProps) {
  return (
    <Card>
      <CardContent>
        <div className="flex items-center justify-between px-2 pb-3">
          <Title weight="semibold" size="xs">
            Pickup at point
          </Title>
          <div className="space-x-2">
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
              <TableCell className="py-0 text-start">Name:</TableCell>
              <TableCell className="py-0 text-start">...</TableCell>
            </TableRow>
            <TableRow className="border-0">
              <TableCell className="py-0 text-start">ID:</TableCell>
              <TableCell className="py-0 text-start">...</TableCell>
            </TableRow>
            <TableRow className="border-0">
              <TableCell className="py-0 text-start">Address:</TableCell>
              <TableCell className="py-0 text-start">...</TableCell>
            </TableRow>
            <TableRow className="border-0">
              <TableCell className="py-0 text-start">
                Postal code and city:
              </TableCell>
              <TableCell className="py-0 text-start">...</TableCell>
              <TableCell className="py-0 text-start">...</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
