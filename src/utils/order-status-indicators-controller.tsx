"use client"

import {
  orderStatusIndicatorsMap,
  type OrderStatusIndicator,
} from "@/constants/order/order-status-indicators"
import { countryList } from "@/constants/shared/countries"
import { useOrdersTableStore } from "@/store/order/orders-table-store-provider"
import { toast } from "sonner"

import { getOrderApi } from "@/lib/api/allegro/orders/orders-api"
import { type Order } from "@/lib/api/allegro/orders/orders-types"
import { showErrorToast } from "@/lib/handle-error"
import { OrderStatusIndicatorItem } from "@/components/common/allegro/order/order-status-indicator-item"

interface OrderStatusIndicatorsControllerProps {
  order: Order
}

export function OrderStatusIndicatorsController({
  order,
}: OrderStatusIndicatorsControllerProps) {
  const updateOrder = useOrdersTableStore((store) => store?.updateOrder)

  const onClickShippingLabel = async () => {
    try {
      const res = await getOrderApi("client").sendShippingLabel(order?.order_id)

      updateOrder(order?.id, {
        status: "PROCESSING",
        labels: {
          ...order?.labels,
          label_url: (res?.label_url as string) || order?.labels?.label_url,
          shipment_id: (res?.label_id as string) || order?.labels?.shipment_id,
        },
      })

      toast.success("Label has been sent")
    } catch (e) {
      showErrorToast(e)
    }
  }

  const onClickCreateInvoice = async () => {
    try {
      await getOrderApi("client").createFacture(order?.order_id)
      updateOrder(order?.id, {
        labels: { ...order?.labels, faktura_id: "created" },
      })
      toast.success("Invoice has been created")
    } catch (e) {
      showErrorToast(e)
    }
  }

  const indicators = [
    order?.payment?.finished_at
      ? orderStatusIndicatorsMap.paid()
      : orderStatusIndicatorsMap.notPaid(),

    order?.labels?.shipment_id
      ? orderStatusIndicatorsMap.labelCreated()
      : orderStatusIndicatorsMap.labelNotGenerated({
          onClick: onClickShippingLabel,
          disabled: !!order?.labels?.label_url,
        }),

    !order?.labels?.faktura_id &&
      (order?.invoice?.required ||
        (order?.delivery?.address?.country_code &&
          order?.delivery?.address?.country_code !== countryList?.PL?.code)) &&
      orderStatusIndicatorsMap.invoiceRequested({
        onClick: onClickCreateInvoice,
        disabled: !!(order?.labels?.faktura_id || order?.labels?.faktura_url),
      }),

    order?.payment?.type === "CASH_ON_DELIVERY" &&
      orderStatusIndicatorsMap.cashOnDelivery(),

    order?.labels?.faktura_id && orderStatusIndicatorsMap.invoiceCreated(),

    order?.message_to_seller &&
      orderStatusIndicatorsMap.withComment({
        helperText: order?.message_to_seller,
      }),
  ].filter(Boolean) as OrderStatusIndicator[] // Filter null or undefined values

  if (!indicators.length) return null

  return (
    <div className="float-right flex flex-wrap items-center gap-0.5">
      {indicators?.map((indicator) => (
        <OrderStatusIndicatorItem key={indicator?.key} indicator={indicator} />
      ))}
    </div>
  )
}
