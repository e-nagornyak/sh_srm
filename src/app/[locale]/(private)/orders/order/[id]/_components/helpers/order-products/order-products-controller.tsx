import * as React from "react"

import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { Card, CardContent } from "@/components/ui/card"
import { OrderProductsActions } from "@/app/[locale]/(private)/orders/order/[id]/_components/helpers/order-products/order-products-actions"
import { OrderProductsTable } from "@/app/[locale]/(private)/orders/order/[id]/_components/helpers/order-products/order-products-table"

interface Props {
  order: Order
}

export function OrderProductsController({ order }: Props) {
  return (
    <>
      <Card>
        <CardContent className="overflow-auto">
          <OrderProductsTable order={order} />
        </CardContent>
      </Card>
      <OrderProductsActions order={order} />
    </>
  )
}
