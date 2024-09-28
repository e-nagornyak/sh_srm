import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { OrderAdditionalInformation } from "@/components/common/allegro/order/order-additional-information"
import { OrderExchangeOfMessages } from "@/components/common/allegro/order/order-exchange-of-messages"
import { InvoiceAndDeliveryController } from "@/components/common/allegro/order/order-invoice-and-delivery/invoice-and-delivery-controller"
import { OrderResponso } from "@/components/common/allegro/order/order-responso"
import { OrderShipments } from "@/components/common/allegro/order/order-view-shipments/order-shipments"
import { OrderBayerController } from "@/components/controllers/allegro/order/order-bayer-controller"
import { OrderInfoController } from "@/components/controllers/allegro/order/order-info-controller"
import { OrderProductsController } from "@/components/controllers/allegro/order/order-products-controller"

interface OrderViewControllerProps {
  order: Order
}

export function OrderViewLayout({ order }: OrderViewControllerProps) {
  return (
    <div className={"flex w-full flex-col gap-3"}>
      <OrderBayerController order={order} />
      <OrderProductsController order={order} />
      <OrderInfoController order={order} />
      <InvoiceAndDeliveryController order={order} />
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
