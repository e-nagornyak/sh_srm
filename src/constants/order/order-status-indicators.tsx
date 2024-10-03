import { type ReactNode } from "react"
import {
  CircleHelp,
  DollarSign,
  FileCheck2,
  ReceiptText,
  Truck,
} from "lucide-react"

const EnumStatusIndicators = {
  notPaid: "notPaid",
  cashOnDelivery: "cashOnDelivery",
  paid: "paid",
  labelNotGenerated: "labelNotGenerated",
  labelCreated: "labelCreated",
  invoiceRequested: "invoiceRequested",
  noInvoiceRequested: "noInvoiceRequested",
  invoiceCreated: "invoiceCreated",
  receiptCreated: "receiptCreated",
  withComment: "withComment",
} as const

type OrderStatusIndicatorsKeys = keyof typeof EnumStatusIndicators

interface OrderStatusIndicator {
  key: OrderStatusIndicatorsKeys
  colorClassName: string
  icon: () => ReactNode
  description?: string
  onClick?: () => void | Promise<void>
}

const orderStatusIndicatorsMap: Record<
  OrderStatusIndicatorsKeys,
  (args?: {
    helperText?: string
    onClick?: () => void | Promise<void>
  }) => OrderStatusIndicator
> = {
  notPaid: (args) => ({
    key: "notPaid",
    colorClassName: "bg-red-600",
    icon: () => <DollarSign />,
    description: "Order is not paid",
    onClick: args?.onClick,
  }),
  cashOnDelivery: (args) => ({
    key: "cashOnDelivery",
    colorClassName: "bg-yellow-600",
    icon: () => <DollarSign />,
    description: "Cash on delivery",
    onClick: args?.onClick,
  }),
  paid: (args) => ({
    key: "paid",
    colorClassName: "bg-green-600",
    icon: () => <DollarSign />,
    description: "Order is paid",
    onClick: args?.onClick,
  }),
  labelNotGenerated: (args) => ({
    key: "labelNotGenerated",
    colorClassName: "bg-gray-600",
    icon: () => <Truck />,
    description: "Label not generated",
    onClick: args?.onClick,
  }),
  labelCreated: (args) => ({
    key: "labelCreated",
    colorClassName: "bg-yellow-600",
    icon: () => <Truck />,
    description: "Label created",
    onClick: args?.onClick,
  }),
  invoiceRequested: (args) => ({
    key: "invoiceRequested",
    colorClassName: "bg-gray-600",
    icon: () => <FileCheck2 />,
    description: "Invoice requested",
    onClick: args?.onClick,
  }),
  noInvoiceRequested: (args) => ({
    key: "noInvoiceRequested",
    colorClassName: "bg-gray-600",
    icon: () => <ReceiptText />,
    description: "No invoice requested",
    onClick: args?.onClick,
  }),
  invoiceCreated: (args) => ({
    key: "invoiceCreated",
    colorClassName: "bg-blue-600",
    icon: () => <FileCheck2 />,
    description: "Invoice created",
    onClick: args?.onClick,
  }),
  withComment: (args) => ({
    key: "withComment",
    colorClassName: "bg-orange-600",
    icon: () => <CircleHelp />,
    description: args?.helperText,
    onClick: args?.onClick,
  }),
  receiptCreated: (args) => ({
    key: "receiptCreated",
    colorClassName: "bg-blue-600",
    icon: () => <ReceiptText />,
    description: "Receipt created",
    onClick: args?.onClick,
  }),
}

const getOrderStatusIndicators = (statuses: OrderStatusIndicatorsKeys[]) =>
  Object.entries(orderStatusIndicatorsMap)
    .filter(([key]) => statuses.includes(key as OrderStatusIndicatorsKeys))
    .map(([, value]) => value)

export {
  orderStatusIndicatorsMap,
  getOrderStatusIndicators,
  type OrderStatusIndicatorsKeys,
  type OrderStatusIndicator,
}
