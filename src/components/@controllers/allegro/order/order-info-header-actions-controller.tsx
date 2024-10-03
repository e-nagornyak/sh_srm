"use client"

import * as React from "react"
import { useState } from "react"
import { toast } from "sonner"

import { getAllegroOrdersApi } from "@/lib/api/allegro/orders/allegro-orders-api"
import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { showErrorToast } from "@/lib/handle-error"
import { OrderInfoHeaderActions } from "@/components/common/allegro/order/order-info/order-info-header-actions"

interface OrderInfoHeaderActionsControllerProps {
  order: Order
}

export function OrderInfoHeaderActionsController({
  order,
}: OrderInfoHeaderActionsControllerProps) {
  // TEMPORARY SOLUTION
  const [loadingFields, setLoadingFields] = useState<string[]>([])

  const handleDownloadLink = async (href: string, name: string) => {
    const response = await fetch(href)
    const blob = await response.blob()
    const link = document.createElement("a")
    link.href = URL.createObjectURL(blob)
    link.setAttribute("download", name)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const onClickShippingLabel = async () => {
    try {
      setLoadingFields((prevState) => [...prevState, "shipping"])
      await getAllegroOrdersApi("client").sendShippingLabel(order?.order_id)
      toast.info("Label has been sent")
    } catch (e) {
      showErrorToast(e)
    } finally {
      setLoadingFields((prevState) =>
        prevState?.filter((el) => el !== "shipping")
      )
    }
  }

  const onClickCreateInvoice = async () => {
    try {
      setLoadingFields((prevState) => [...prevState, "invoice"])
      await getAllegroOrdersApi("client").createFacture(order?.order_id)
      toast.success("Invoice has been created")
    } catch (e) {
      showErrorToast(e)
    } finally {
      setLoadingFields((prevState) =>
        prevState?.filter((el) => el !== "invoice")
      )
    }
  }

  const onClickDownloadInvoice = async () => {
    try {
      const href = order?.labels?.faktura_url
      if (!href) return

      await handleDownloadLink(href, `invoice_for_the_order_${order?.id}.pdf`)
      toast.info("Invoice has been uploaded")
    } catch (e) {
      showErrorToast(e)
    }
  }

  const onClickDownloadLabel = async () => {
    try {
      const href = order?.labels?.label_url
      if (!href) return

      await handleDownloadLink(href, `label_for_the_order_${order?.id}.pdf`)
      toast.info("Label has been uploaded")
    } catch (e) {
      showErrorToast(e)
    }
  }

  return (
    <OrderInfoHeaderActions
      order={order}
      loadingFields={loadingFields}
      onClickShippingLabel={onClickShippingLabel}
      onClickCreateInvoice={onClickCreateInvoice}
      onClickDownloadInvoice={onClickDownloadInvoice}
      onClickDownloadLabel={onClickDownloadLabel}
    />
  )
}
