import * as React from "react"
import { MoreVertical, Printer, Save, SquareCheck, X } from "lucide-react"

import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link } from "@/components/ui/link"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Title } from "@/components/ui/title"
import { ComponentWithTooltip } from "@/components/shared/component-with-tooltip"

interface OrderViewShipmentsProps {
  order: Order
}

export function OrderViewShipments(props: OrderViewShipmentsProps) {
  return (
    <Card>
      <CardContent>
        <div className="mb-3 flex items-center gap-2">
          <div className="size-2 rounded-full bg-highlight" />
          <Title weight="semibold" size="xs">
            Shipments
          </Title>
        </div>
        {/*<Text>*/}
        {/*  No packages have been issued - use the buttons below to generate a*/}
        {/*  shipment.*/}
        {/*</Text>*/}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-36">Shipment date</TableHead>
              <TableHead className="w-44">Courier</TableHead>
              <TableHead className="w-44">Package number</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-20"></TableHead>
              <TableHead className="w-10"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="border-b border-gray-700">
              <TableCell>
                <div className="flex items-center justify-between">
                  24.09 17:50
                  <SquareCheck className="text-green-500" size="15" />
                </div>
              </TableCell>
              <TableCell>
                <Link href="#">InPost Paczkomaty</Link>
              </TableCell>
              <TableCell>
                <Link href="#">615349237498335111601014</Link>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-4">
                  <div className="h-8 w-20">
                    <div className="h-full w-1 bg-highlight" />
                  </div>
                  Courier label created
                </div>
              </TableCell>
              <TableCell>
                <div className="flex">
                  <Button
                    className="rounded-r-none border-r border-border"
                    size="xs"
                  >
                    Label
                  </Button>
                  <ComponentWithTooltip
                    trigger={
                      <Button className="rounded-l-none" size="xs">
                        <Printer size="12" />
                      </Button>
                    }
                    text="Print - sent directly to the printer"
                  />
                </div>
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      className="mx-auto w-full"
                      variant="ghost"
                      size="icon"
                    >
                      <MoreVertical className="size-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <ComponentWithTooltip
                        trigger={
                          <Button className="gap-2" variant="ghost">
                            <Save size="15" />
                            Download the manifest
                          </Button>
                        }
                        text="To generate a bulk protocol for multiple packages, select the appropriate orders in the order list and click the blue button with the truck."
                      />
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Button className="gap-2" variant="ghost">
                        <X size="15" />
                        Cancel parcel
                      </Button>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
