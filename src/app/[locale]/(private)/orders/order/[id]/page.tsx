import { redirect } from "next/navigation"

import { routePaths } from "@/config/routes"
import { getAllegroOrdersApi } from "@/lib/api/allegro/orders/allegro-orders-api"
import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { OrderViewLayout } from "@/app/[locale]/(private)/orders/order/[id]/_components/order-view-layout"

interface PageProps {
  params: { id: string }
}

export default async function Page({ params: { id } }: PageProps) {
  const orderResponse =
    await getAllegroOrdersApi("server").getAllegroOrderById(+id)

  if (!id || !orderResponse?.id) {
    redirect(routePaths.private.orders.list)
  }

  return <OrderViewLayout order={orderResponse as Order} />
}
