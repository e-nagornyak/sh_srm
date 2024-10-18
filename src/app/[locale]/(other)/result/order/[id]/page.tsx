import { headers } from "next/headers"
import { notFound } from "next/navigation"

import { getOrderApi } from "@/lib/api/allegro/orders/orders-api"
import { type Order } from "@/lib/api/allegro/orders/orders-types"
import { decryptData } from "@/lib/crypto-js/static-encryption"
import { OrderPublicController } from "@/components/@controllers/allegro/order/order-public-controller"

interface PageProps {
  params: { id: string }
}

export default async function Page({ params: { id } }: PageProps) {
  console.log("decodeOrderId")
  const decodeOrderId = decryptData(decodeURIComponent(id))
  if (!decodeOrderId) {
    notFound()
  }

  const order = (await getOrderApi("server").getAllegroOrderById(
    +decodeOrderId
  )) as Order

  const acceptLocale =
    headers().get("accept-language")?.split(",")[0] ||
    order?.buyer?.address?.country_code ||
    "en"

  if (!order) {
    notFound()
  }

  return <OrderPublicController initialLocale={acceptLocale} order={order} />
}
