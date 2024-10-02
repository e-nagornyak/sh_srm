import {
  orderStatusIndicatorsMap,
  type OrderStatusIndicator,
} from "@/constants/order/order-status-indicators"

import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"

export function getOrderStatusIndicators(order: Order): OrderStatusIndicator[] {
  const result = []

  // сіра машинка - !shipment_id
  // зелена машинка - shipment_id
  // коли буде можливість трекати статус - ?
  if (order?.labels?.shipment_id) {
    // result.push(orderStatusIndicatorsMap.deliveryDownloaded())
  } else {
  }

  if (order?.payment?.finished_at) {
    result.push(orderStatusIndicatorsMap.paymentSuccess())
  } else {
    result.push(orderStatusIndicatorsMap.notPaid())
  }

  return result
}
