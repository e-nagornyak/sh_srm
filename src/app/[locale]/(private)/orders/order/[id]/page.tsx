import { redirect } from "next/navigation"

import { RoutePaths } from "@/config/routes"
import { getAllegroOrdersApi } from "@/lib/api/allegro/orders/allegro-orders-api"
import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { OrderViewLayout } from "@/components/layouts/private/order/order-view-layout"

interface PageProps {
  params: { id: string }
}

export default async function Page({ params: { id } }: PageProps) {
  const orderResponse =
    await getAllegroOrdersApi("server").getAllegroOrderById(+id)

  if (!id || !orderResponse?.id) {
    redirect(RoutePaths.private.orders.list)
  }
  console.log(orderResponse)
  return <OrderViewLayout order={orderResponse as Order} />
}
