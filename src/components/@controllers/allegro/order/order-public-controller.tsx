import { type Order } from "@/lib/api/allegro/orders/orders-types"
import { OrderPublic } from "@/components/common/allegro/order/order-public/order-public"

interface OrderPublicControllerProps {
  order: Order
  initialLocale: string
}

export function OrderPublicController({
  order,
  initialLocale,
}: OrderPublicControllerProps) {
  return <OrderPublic locale={initialLocale} order={order} />
}
