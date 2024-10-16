import { redirect } from "next/navigation"

import { RoutePaths } from "@/config/routes"
import { getAllegroOrdersApi } from "@/lib/api/allegro/orders/orders-api"
import { type Order } from "@/lib/api/allegro/orders/orders-types"
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

  return <OrderViewLayout order={orderResponse as Order} />
}
