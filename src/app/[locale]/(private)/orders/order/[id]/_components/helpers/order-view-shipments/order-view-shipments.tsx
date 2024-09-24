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
import { OrderViewShipmentsProviders } from "@/app/[locale]/(private)/orders/order/[id]/_components/helpers/order-view-shipments/order-view-shipments-providers"
import { OrderViewShipmentsTable } from "@/app/[locale]/(private)/orders/order/[id]/_components/helpers/order-view-shipments/order-view-shipments-table"

interface OrderViewShipmentsProps {
  order: Order
}

export function OrderViewShipments({ order }: OrderViewShipmentsProps) {
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
        <OrderViewShipmentsTable order={order} />
        <OrderViewShipmentsProviders />
      </CardContent>
    </Card>
  )
}
