import { type ReactNode } from "react"
import { ClipboardList, DollarSign, Receipt, Truck } from "lucide-react"

const EnumStatusIndicators = {
  deliveryDownloaded: "deliveryDownloaded",
  paymentSuccess: "paymentSuccess",
  labelNotGenerated: "labelNotGenerated",
  noDeliveryForm: "noDeliveryForm",
  notPaid: "notPaid",
  deliveryDownloadedAgain: "deliveryDownloadedAgain",
  paymentSuccessAgain: "paymentSuccessAgain",
  deliveryInPost: "deliveryInPost",
  receiptGenerated: "receiptGenerated",
  deliveryDownloadedThirdTime: "deliveryDownloadedThirdTime",
  paymentSuccessThirdTime: "paymentSuccessThirdTime",
  deliveryInPostSecond: "deliveryInPostSecond",
  invoiceRequested: "invoiceRequested",
} as const

type OrderStatusIndicatorsKeys = keyof typeof EnumStatusIndicators

interface OrderStatusIndicator {
  key: OrderStatusIndicatorsKeys
  colorClassName: string
  icon: () => ReactNode
  description?: string
}

interface OrderStatusIndicator {
  key: OrderStatusIndicatorsKeys
  colorClassName: string
  icon: () => ReactNode
  description?: string
}

const orderStatusIndicatorsMap: Record<
  OrderStatusIndicatorsKeys,
  (helperText?: string) => OrderStatusIndicator
> = {
  deliveryDownloaded: () => ({
    key: "deliveryDownloaded",
    colorClassName: "bg-green-600",
    icon: () => <span>T</span>,
    description: "The delivery option form has been downloaded (Allegro/eBay)",
  }),
  paymentSuccess: () => ({
    key: "paymentSuccess",
    colorClassName: "bg-green-600",
    icon: () => <DollarSign />,
    description: "Payment has been successfully made",
  }),
  labelNotGenerated: () => ({
    key: "labelNotGenerated",
    colorClassName: "bg-gray-600",
    icon: () => <Truck />,
    description: "The shipping label was not generated",
  }),
  noDeliveryForm: () => ({
    key: "noDeliveryForm",
    colorClassName: "bg-gray-600",
    icon: () => <span>N</span>,
    description: "No Allegro/eBay delivery form available",
  }),
  notPaid: () => ({
    key: "notPaid",
    colorClassName: "bg-red-600",
    icon: () => <DollarSign />,
    description: "The order has not been paid yet",
  }),
  deliveryDownloadedAgain: () => ({
    key: "deliveryDownloadedAgain",
    colorClassName: "label-success",
    icon: () => <span>T</span>,
    description: "The delivery option form has been downloaded (Allegro/eBay)",
  }),
  paymentSuccessAgain: () => ({
    key: "paymentSuccessAgain",
    colorClassName: "label-success",
    icon: () => <DollarSign />,
    description: "Payment has been successfully made",
  }),
  deliveryInPost: () => ({
    key: "deliveryInPost",
    colorClassName: "label-primary",
    icon: () => <Truck />,
    description: "Delivery via InPost",
  }),
  receiptGenerated: () => ({
    key: "receiptGenerated",
    colorClassName: "label-primary",
    icon: () => <Receipt />,
    description: "Receipt has been generated",
  }),
  deliveryDownloadedThirdTime: () => ({
    key: "deliveryDownloadedThirdTime",
    colorClassName: "label-success",
    icon: () => <span>T</span>,
    description: "The delivery option form has been downloaded (Allegro/eBay)",
  }),
  paymentSuccessThirdTime: () => ({
    key: "paymentSuccessThirdTime",
    colorClassName: "label-success",
    icon: () => <DollarSign />,
    description: "Payment has been successfully made",
  }),
  deliveryInPostSecond: () => ({
    key: "deliveryInPostSecond",
    colorClassName: "label-primary",
    icon: () => <Truck />,
    description: `Delivery via InPost`,
  }),
  invoiceRequested: () => ({
    key: "invoiceRequested",
    colorClassName: "label-warning",
    icon: () => <ClipboardList />,
    description: "Customer wants an invoice, but it has not been created yet",
  }),
}

const getOrderStatusIndicators = (statuses: OrderStatusIndicatorsKeys[]) =>
  Object.entries(orderStatusIndicatorsMap)
    .filter(([key]) => {
      console.log("key", key)
      return statuses.includes(key as OrderStatusIndicatorsKeys)
    })
    .map(([, value]) => value)

export {
  orderStatusIndicatorsMap,
  getOrderStatusIndicators,
  type OrderStatusIndicatorsKeys,
  type OrderStatusIndicator,
}
