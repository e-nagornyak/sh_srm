import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { OrderAdditionalInformation } from "@/app/[locale]/(private)/orders/order/[id]/_components/helpers/order-additional-information"
import { OrderBayerController } from "@/app/[locale]/(private)/orders/order/[id]/_components/helpers/order-bayer-controller"
import { OrderDeliveryController } from "@/app/[locale]/(private)/orders/order/[id]/_components/helpers/order-delivery/order-delivery-controller"
import { OrderExchangeOfMessages } from "@/app/[locale]/(private)/orders/order/[id]/_components/helpers/order-exchange-of-messages"
import { OrderInfoController } from "@/app/[locale]/(private)/orders/order/[id]/_components/helpers/order-info/order-info-controller"
import { OrderInvoice } from "@/app/[locale]/(private)/orders/order/[id]/_components/helpers/order-invoice"
import { OrderPickup } from "@/app/[locale]/(private)/orders/order/[id]/_components/helpers/order-pickup"
import { OrderProductsController } from "@/app/[locale]/(private)/orders/order/[id]/_components/helpers/order-products/order-products-controller"
import { OrderResponso } from "@/app/[locale]/(private)/orders/order/[id]/_components/helpers/order-responso"
import { OrderShipments } from "@/app/[locale]/(private)/orders/order/[id]/_components/helpers/order-view-shipments/order-shipments"

interface OrderViewControllerProps {
  order: Order
}

export function OrderViewLayout({ order }: OrderViewControllerProps) {
  return (
    <div className={"flex w-full flex-col gap-3"}>
      <OrderBayerController order={order} />
      <OrderProductsController order={order} />
      <OrderInfoController order={order} />
      <div className="grid grid-cols-3 gap-3">
        <OrderDeliveryController order={order} />
        <OrderInvoice order={order} />
        <OrderPickup order={order} />
      </div>
      <OrderShipments order={order} />
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-3">
          <OrderResponso />
          <OrderExchangeOfMessages />
        </div>
        <OrderAdditionalInformation />
      </div>
    </div>
  )
}
