export const OrderStatusEnum = {
  BOUGHT: "BOUGHT",
  FILLED_IN: "FILLED_IN",
  READY_FOR_PROCESSING: "READY_FOR_PROCESSING",
  PROCESSING: "PROCESSING",
  COMPLETED: "COMPLETED",
  CANCELLED: "CANCELLED",
} as const

export type OrderStatusKeys = keyof typeof OrderStatusEnum
export const OrderStatusMap = Object.keys(OrderStatusEnum)
