import { type ReactNode } from "react"
import {
  CircleHelp,
  DollarSign,
  FileCheck2,
  ReceiptText,
  Truck,
} from "lucide-react"

// Значення статусу
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

// Опис індикатора статусу
interface OrderStatusIndicator {
  key: OrderStatusIndicatorsKeys
  colorClassName: string
  icon: () => ReactNode
  description?: string
}

// Карта статусів з відповідними кольорами та іконками
const orderStatusIndicatorsMap: Record<
  OrderStatusIndicatorsKeys,
  (helperText?: string) => OrderStatusIndicator
> = {
  notPaid: () => ({
    key: "notPaid",
    colorClassName: "bg-red-600", // Сірий значок
    icon: () => <DollarSign />,
    description: "Order is not paid",
  }),
  cashOnDelivery: () => ({
    key: "cashOnDelivery",
    colorClassName: "bg-yellow-600", // Оранжевий значок
    icon: () => <DollarSign />,
    description: "Cash on delivery",
  }),
  paid: () => ({
    key: "paid",
    colorClassName: "bg-green-600", // Зелений значок
    icon: () => <DollarSign />,
    description: "Order is paid",
  }),
  labelNotGenerated: () => ({
    key: "labelNotGenerated",
    colorClassName: "bg-gray-600", // Сіра машинка
    icon: () => <Truck />,
    description: "Label not generated",
  }),
  labelCreated: () => ({
    key: "labelCreated",
    colorClassName: "bg-yellow-600", // Жовта машинка
    icon: () => <Truck />,
    description: "Label created",
  }),
  invoiceRequested: () => ({
    key: "invoiceRequested",
    colorClassName: "bg-gray-600", // Сірий значок фактури
    icon: () => <FileCheck2 />,
    description: "Invoice requested",
  }),
  noInvoiceRequested: () => ({
    key: "noInvoiceRequested",
    colorClassName: "bg-gray-600", // Сірий значок чека
    icon: () => <ReceiptText />,
    description: "No invoice requested",
  }),
  invoiceCreated: () => ({
    key: "invoiceCreated",
    colorClassName: "bg-blue-600", // Синій значок фактури
    icon: () => <FileCheck2 />,
    description: "Invoice created",
  }),
  withComment: () => ({
    key: "withComment",
    colorClassName: "bg-orange-600", // Синій значок фактури
    icon: () => <CircleHelp />,
    description: "Invoice created",
  }),
  receiptCreated: () => ({
    key: "receiptCreated",
    colorClassName: "bg-blue-600", // Синій значок чека
    icon: () => <ReceiptText />,
    description: "Receipt created",
  }),
}

// Функція для отримання індикаторів замовлення за статусами
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
