import * as React from "react"
import { Printer } from "lucide-react"

import { type Order } from "@/lib/api/allegro/orders/orders-types"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Title } from "@/components/ui/title"
import { OrderShipmentsProviders } from "@/components/common/allegro/order/order-view-shipments/order-shipments-providers"
import { OrderShipmentsTable } from "@/components/common/allegro/order/order-view-shipments/order-shipments-table"
import { ComponentWithTooltip } from "@/components/shared/component-with-tooltip"

interface OrderShipmentsProps {
  order: Order
}

export function OrderShipments({ order }: OrderShipmentsProps) {
  return null
  // return (
  //   <Card className="grid w-full items-center">
  //     <CardContent className="w-full overflow-auto">
  //       <div className="mb-3 flex items-center justify-between gap-2">
  //         <div className="mb-3 flex items-center gap-2">
  //           <div className="size-2 rounded-full bg-highlight" />
  //           <Title weight="semibold" size="xs">
  //             Shipments
  //           </Title>
  //         </div>
  //         <div className="flex">
  //           <Button className="rounded-r-none border-r border-border" size="xs">
  //             POST /api/allegro/shipping-label/
  //           </Button>
  //           <ComponentWithTooltip
  //             trigger={
  //               <Button className="rounded-l-none" size="xs">
  //                 <Printer size="12" />
  //               </Button>
  //             }
  //             text="Print - sent directly to the printer"
  //           />
  //         </div>
  //       </div>
  //       {/*<Text>*/}
  //       {/*  No packages have been issued - use the buttons below to generate a*/}
  //       {/*  shipment.*/}
  //       {/*</Text>*/}
  //       {/*<OrderShipmentsTable order={order} />*/}
  //       <OrderShipmentsProviders />
  //     </CardContent>
  //   </Card>
  // )
}
