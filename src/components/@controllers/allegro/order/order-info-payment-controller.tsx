"use client"

import { useState } from "react"
import { toast } from "sonner"

import { getAllegroOrdersApi } from "@/lib/api/allegro/orders/orders-api"
import { type Order } from "@/lib/api/allegro/orders/orders-types"
import { showErrorToast } from "@/lib/handle-error"
import { OrderPayment } from "@/components/common/allegro/order/order-info/order-data/order-payment"

interface OrderPaymentControllerProps {
  initialOrder: Order
}

export type ChangePaymentModeAction = "cancel" | "save" | "unpaid" | "paid"

export function OrderPaymentController({
  initialOrder,
}: OrderPaymentControllerProps) {
  const [order, setOrder] = useState<Order>(initialOrder)

  const initialPaidAmount = order?.payment?.paid_amount || ""
  const totalToPay = order?.total_to_pay || ""

  const [paidAmount, setPaidAmount] = useState<string>(initialPaidAmount)
  const [isEditPaymentMode, setIsEditPaymentMode] = useState(false)

  const changePaymentStatus = async (actionType: ChangePaymentModeAction) => {
    try {
      if (+paidAmount > +totalToPay) {
        throw new Error("The set price cannot be greater than the total to pay")
      }

      const updatedOrder: Order = { ...order }

      switch (actionType) {
        case "cancel":
          setIsEditPaymentMode(false)
          return
        case "save": {
          if (initialPaidAmount === paidAmount) {
            setIsEditPaymentMode(false)
            return
          }
          updatedOrder.payment.paid_amount = paidAmount
          break
        }
        case "unpaid":
          updatedOrder.payment.paid_amount = "0"
          break
        case "paid":
          updatedOrder.payment.paid_amount = totalToPay
          break
      }

      await getAllegroOrdersApi("client").updateAllegroOrder(
        order?.id,
        updatedOrder
      )
      setOrder(updatedOrder)
      setPaidAmount(updatedOrder?.payment?.paid_amount)
      setIsEditPaymentMode(false)
      toast.info("Payment data has been updated")
    } catch (e) {
      showErrorToast(e)
    }
  }

  const changeEditMode = () => {
    setIsEditPaymentMode(!isEditPaymentMode)
  }

  return (
    <OrderPayment
      order={order}
      paidAmount={paidAmount}
      setPaidAmount={setPaidAmount}
      isEditPaymentMode={isEditPaymentMode}
      changePaymentStatus={changePaymentStatus}
      changeEditMode={changeEditMode}
    />
  )
}
