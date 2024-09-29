"use client"

import * as React from "react"

import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { Card, CardContent } from "@/components/ui/card"
import { OrderProductsActions } from "@/components/common/allegro/order/order-products/order-products-actions"
import { OrderProductsTable } from "@/components/common/allegro/order/order-products/order-products-table"

interface OrderProductsControllerProps {
  order: Order
}

export function OrderProductsController({
  order,
}: OrderProductsControllerProps) {
  return (
    <>
      <Card className="grid w-full items-center">
        <CardContent className="w-full overflow-auto">
          <OrderProductsTable order={order} />
        </CardContent>
      </Card>
      <OrderProductsActions onAddProductsToOrder={() => {}} />
    </>
  )
}
