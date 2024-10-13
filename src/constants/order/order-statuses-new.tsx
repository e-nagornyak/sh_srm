import {
  CheckCircle,
  ClipboardCheck,
  Loader,
  Package,
  ShoppingCart,
  XCircle,
} from "lucide-react"

const OrderStatusEnum = {
  BOUGHT: "BOUGHT",
  FILLED_IN: "FILLED_IN",
  READY_FOR_PROCESSING: "READY_FOR_PROCESSING",
  PROCESSING: "PROCESSING",
  COMPLETED: "COMPLETED",
  CANCELLED: "CANCELLED",
} as const

type OrderStatusKeys = keyof typeof OrderStatusEnum
const OrderStatusMap = Object.keys(OrderStatusEnum)

const orderFilterStatuses: {
  [key in OrderStatusKeys]: {
    key: key
    color: string
    label: string
    icon: React.ReactNode
  }
} = {
  BOUGHT: {
    key: "BOUGHT",
    color: "bg-gray-500",
    label: "Order Created",
    icon: <ShoppingCart />,
  },
  FILLED_IN: {
    key: "FILLED_IN",
    color: "bg-yellow-500",
    label: "Order Filled In",
    icon: <ClipboardCheck />,
  },
  READY_FOR_PROCESSING: {
    key: "READY_FOR_PROCESSING",
    color: "bg-green-500",
    label: "Ready for Processing",
    icon: <CheckCircle />,
  },
  PROCESSING: {
    key: "PROCESSING",
    color: "bg-blue-500",
    label: "Processing",
    icon: <Loader />,
  },
  COMPLETED: {
    key: "COMPLETED",
    color: "bg-purple-500",
    label: "Completed",
    icon: <Package />,
  },
  CANCELLED: {
    key: "CANCELLED",
    color: "bg-red-500",
    label: "Cancelled",
    icon: <XCircle />,
  },
}

export {
  OrderStatusEnum,
  type OrderStatusKeys,
  OrderStatusMap,
  orderFilterStatuses,
}
