import {
  orderStatusIndicatorsMap,
  type OrderStatusIndicator,
} from "@/constants/order/order-status-indicators"

import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"

export function getOrderStatusIndicators(order: Order): OrderStatusIndicator[] {
  const result = []

  // Машинку рисуй, когда есть shipment id и shipment URL в labels
  if (order?.labels?.shipment_id) {
    result.push(orderStatusIndicatorsMap.deliveryDownloaded())
  }

  if (order?.payment?.finished_at) {
    result.push(orderStatusIndicatorsMap.paymentSuccess())
  } else {
    result.push(orderStatusIndicatorsMap.notPaid())
  }

  return result
}
