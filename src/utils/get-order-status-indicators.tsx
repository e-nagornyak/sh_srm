import {
  orderStatusIndicatorsMap,
  type OrderStatusIndicator,
} from "@/constants/order/order-status-indicators"
import { countryList } from "@/constants/shared/countries"

import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"

export function getOrderStatusIndicators(order: Order): OrderStatusIndicator[] {
  const result = []

  if (order?.labels?.shipment_id) {
    result.push(orderStatusIndicatorsMap.labelCreated())
  } else {
    result.push(orderStatusIndicatorsMap.labelNotGenerated())
  }

  if (order?.payment?.finished_at) {
    result.push(orderStatusIndicatorsMap.paid())
  } else {
    result.push(orderStatusIndicatorsMap.notPaid())
  }

  if (order?.invoice?.required) {
    result.push(orderStatusIndicatorsMap.invoiceRequested())
  } else {
    result.push(orderStatusIndicatorsMap.noInvoiceRequested())
  }

  if (order?.payment?.type === "CASH_ON_DELIVERY") {
    result.push(orderStatusIndicatorsMap.cashOnDelivery())
  }

  if (order?.labels?.faktura_id) {
    result.push(orderStatusIndicatorsMap.invoiceCreated())
  }

  if (
    !order?.invoice?.required &&
    order?.delivery?.address?.country_code !== countryList.PL?.code
  ) {
    result.push(orderStatusIndicatorsMap.invoiceRequestedForAbroad())
  }

  if (
    !order?.invoice?.required &&
    order?.delivery?.address?.country_code !== countryList.PL?.code &&
    order?.labels?.faktura_id
  ) {
    result.push(orderStatusIndicatorsMap.invoiceCreatedForAbroad())
  }

  if (
    !order?.invoice?.required &&
    order?.delivery?.address?.country_code === countryList.PL?.code
  ) {
    result.push(orderStatusIndicatorsMap.receiptCreated())
  }

  return result
}
