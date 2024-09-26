import * as React from "react"

import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { Card, CardContent } from "@/components/ui/card"
import { Title } from "@/components/ui/title"
import { OrderShipmentsProviders } from "@/app/[locale]/(private)/orders/order/[id]/_components/helpers/order-view-shipments/order-shipments-providers"
import { OrderShipmentsTable } from "@/app/[locale]/(private)/orders/order/[id]/_components/helpers/order-view-shipments/order-shipments-table"

interface Props {
  order: Order
}

export function OrderShipments({ order }: Props) {
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
        <OrderShipmentsTable order={order} />
        <OrderShipmentsProviders />
      </CardContent>
    </Card>
  )
}
