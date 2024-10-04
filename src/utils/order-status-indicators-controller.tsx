"use client"

import {
  orderStatusIndicatorsMap,
  type OrderStatusIndicator,
} from "@/constants/order/order-status-indicators"
import { countryList } from "@/constants/shared/countries"
import { toast } from "sonner"

import { getAllegroOrdersApi } from "@/lib/api/allegro/orders/allegro-orders-api"
import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { showErrorToast } from "@/lib/handle-error"
import { OrderStatusIndicatorItem } from "@/components/common/allegro/order/order-status-indicator-item"

interface OrderStatusIndicatorsControllerProps {
  order: Order
}

export function OrderStatusIndicatorsController({
  order,
}: OrderStatusIndicatorsControllerProps) {
  const onClickShippingLabel = async () => {
    try {
      await getAllegroOrdersApi("client").sendShippingLabel(order?.order_id)
      toast.success("Label has been sent")
    } catch (e) {
      showErrorToast(e)
    }
  }

  const onClickCreateInvoice = async () => {
    try {
      await getAllegroOrdersApi("client").createFacture(order?.order_id)
      toast.success("Invoice has been created")
    } catch (e) {
      showErrorToast(e)
    }
  }

  const indicators = [
    order?.payment?.finished_at
      ? orderStatusIndicatorsMap.paid({
          onClick: () => console.log("bla"),
        })
      : orderStatusIndicatorsMap.notPaid(),

    order?.labels?.shipment_id
      ? orderStatusIndicatorsMap.labelCreated()
      : orderStatusIndicatorsMap.labelNotGenerated({
          onClick: onClickShippingLabel,
        }),

    (order?.invoice?.required ||
      order?.delivery?.address?.country_code !== countryList?.PL?.code) &&
      orderStatusIndicatorsMap.invoiceRequested({
        onClick: onClickCreateInvoice,
      }),

    order?.payment?.type === "CASH_ON_DELIVERY" &&
      orderStatusIndicatorsMap.cashOnDelivery(),

    order?.labels?.faktura_id && orderStatusIndicatorsMap.invoiceCreated(),

    order?.note &&
      orderStatusIndicatorsMap.withComment({ helperText: order?.note }),
  ].filter(Boolean) as OrderStatusIndicator[] // Filter null or undefined values

  if (!indicators.length) return null

  return (
    <div className="float-right flex flex-wrap items-center gap-0.5">
      {indicators.map((indicator) => (
        <OrderStatusIndicatorItem key={indicator?.key} indicator={indicator} />
      ))}
    </div>
  )
}
