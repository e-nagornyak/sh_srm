import { notFound } from "next/navigation"

import { getOrderApi } from "@/lib/api/allegro/orders/orders-api"
import { decryptData } from "@/lib/crypto-js/static-encryption"
import { OrderConfirmation } from "@/app/[locale]/(other)/result/order/[id]/_components/PublicOrderConfirmation"

interface PageProps {
  params: { id: string }
}

export default async function Page({ params: { id } }: PageProps) {
  const decodeOrderId = decryptData(decodeURIComponent(id))

  if (!decodeOrderId) {
    notFound()
  }

  const order = await getOrderApi("server").getAllegroOrderById(+decodeOrderId)

  if (!order) {
    notFound()
  }

  return (
    <div className="mx-auto max-w-5xl space-y-6 px-4 pt-6">
      <OrderConfirmation />
    </div>
  )
}
