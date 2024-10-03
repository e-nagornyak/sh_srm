import {
  orderStatusIndicatorsMap,
  type OrderStatusIndicator,
} from "@/constants/order/order-status-indicators"
import { countryList } from "@/constants/shared/countries"

import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"

export function getOrderStatusIndicators(order: Order): OrderStatusIndicator[] {
  const result = []

  // paid or no
  if (order?.payment?.finished_at) {
    result.push(orderStatusIndicatorsMap.paid())
  } else {
    result.push(orderStatusIndicatorsMap.notPaid())
  } //

  if (order?.labels?.shipment_id) {
    result.push(orderStatusIndicatorsMap.labelCreated())
  } else {
    // if click => should print shippiment label
    result.push(orderStatusIndicatorsMap.labelNotGenerated())
  }

  if (order?.invoice?.required) {
    result.push(orderStatusIndicatorsMap.invoiceRequested())
    // if click => should make invoice
  }

  if (order?.payment?.type === "CASH_ON_DELIVERY") {
    result.push(orderStatusIndicatorsMap.cashOnDelivery())
  }

  if (order?.labels?.faktura_id) {
    result.push(orderStatusIndicatorsMap.invoiceCreated())
  }

  if (order?.note) {
    result.push(orderStatusIndicatorsMap.withComment(order?.note))
  }

  return result
}
