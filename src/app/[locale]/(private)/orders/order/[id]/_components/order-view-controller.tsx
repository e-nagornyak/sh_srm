import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { OrderViewAdditionalInformation } from "@/app/[locale]/(private)/orders/order/[id]/_components/helpers/order-view-additional-information"
import { OrderViewBayer } from "@/app/[locale]/(private)/orders/order/[id]/_components/helpers/order-view-bayer"
import { OrderViewDelivery } from "@/app/[locale]/(private)/orders/order/[id]/_components/helpers/order-view-delivery"
import { OrderViewMessages } from "@/app/[locale]/(private)/orders/order/[id]/_components/helpers/order-view-messages"
import { OrderViewOrder } from "@/app/[locale]/(private)/orders/order/[id]/_components/helpers/order-view-order/order-view-order"
import { OrderViewProducts } from "@/app/[locale]/(private)/orders/order/[id]/_components/helpers/order-view-products/order-view-products"
import { OrderViewShipments } from "@/app/[locale]/(private)/orders/order/[id]/_components/helpers/order-view-shipments"

interface OrderViewControllerProps {
  order: Order
}

export function OrderViewController({ order }: OrderViewControllerProps) {
  return (
    <div className={"flex w-full flex-col gap-3"}>
      <OrderViewBayer order={order} />
      <OrderViewProducts order={order} />
      <OrderViewOrder order={order} />
      <OrderViewDelivery />
      <OrderViewShipments />
      <OrderViewMessages />
      <OrderViewAdditionalInformation />
    </div>
  )
}
