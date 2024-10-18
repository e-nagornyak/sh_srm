import { type Order } from "@/lib/api/allegro/orders/orders-types"
import { decryptUrl } from "@/lib/crypto-js/decrypt-url"
import { encryptUrl } from "@/lib/crypto-js/encrypt-url"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { OrderBayerController } from "@/components/@controllers/allegro/order/order-bayer-controller"
import { OrderInfoDataController } from "@/components/@controllers/allegro/order/order-info-data-controller"
import { OrderInfoHeaderActionsController } from "@/components/@controllers/allegro/order/order-info-header-actions-controller"
import { OrderPaymentController } from "@/components/@controllers/allegro/order/order-info-payment-controller"
import { OrderInvoiceAndDeliveryController } from "@/components/@controllers/allegro/order/order-invoice-and-delivery-controller"
import { OrderProductsController } from "@/components/@controllers/allegro/order/order-products-controller"
import { OrderStatusController } from "@/components/@controllers/allegro/order/order-status-controller"
import { OrderAdditionalInformation } from "@/components/common/allegro/order/order-additional-information"
import { OrderExchangeOfMessages } from "@/components/common/allegro/order/order-exchange-of-messages"
import { OrderResponso } from "@/components/common/allegro/order/order-responso"
import { OrderShipments } from "@/components/common/allegro/order/order-view-shipments/order-shipments"

interface OrderViewControllerProps {
  order: Order
}

export function OrderViewLayout({ order }: OrderViewControllerProps) {
  return (
    <div className={"flex w-full flex-col gap-3"}>
      <OrderBayerController order={order} />
      <OrderProductsController order={order} />
      <Card>
        <CardHeader className="w-full flex-row items-center justify-between">
          <OrderInfoHeaderActionsController order={order} />
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-x-6 gap-y-14 2xl:grid-cols-2">
          <div>
            <OrderPaymentController initialOrder={order} />
            <OrderInfoDataController initialOrder={order} />
          </div>
          <OrderStatusController initialOrder={order} />
        </CardContent>
      </Card>
      <OrderInvoiceAndDeliveryController initialOrder={order} />
      <OrderShipments order={order} />
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className="space-y-3">
          <OrderResponso />
          <OrderExchangeOfMessages />
        </div>
        <OrderAdditionalInformation />
      </div>
    </div>
  )
}
