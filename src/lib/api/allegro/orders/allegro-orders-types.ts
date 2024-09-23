import {
  type Buyer,
  type BuyerRequest,
  type Delivery,
  type DeliveryRequest,
  type Fulfillment,
  type FulfillmentRequest,
  type Payment,
} from "@/types/all-types"

interface OrderProduct {
  id: number // integer, readOnly
  offer_id: string // maxLength: 255
  name: string // maxLength: 255
  quantity: number // integer, $int64
  price: string // $decimal, pattern: ^-?\d{0,8}(?:\.\d{0,2})?$
  tax_rate: string // $decimal, pattern: ^-?\d{0,3}(?:\.\d{0,2})?$
  order: number // integer
  images: string // string, readOnly
  stock_quantity: string // string, readOnly
}

interface OrderProductRequest {
  offer_id: string // minLength: 1, maxLength: 255
  name: string // minLength: 1, maxLength: 255
  quantity: number // integer, $int64
  price: string // $decimal, pattern: ^-?\d{0,8}(?:\.\d{0,2})?$
  tax_rate: string // $decimal, pattern: ^-?\d{0,3}(?:\.\d{0,2})?$
  order: number // integer
}

interface Order {
  id: number // integer
  buyer: Buyer
  delivery: Delivery
  payment: Payment
  fulfillment: Fulfillment
  products: Array<OrderProduct>
  order_id: string // maxLength: 255
  status?: string | null // maxLength: 255, nullable
  marketplace?: string | null // maxLength: 255, nullable
  message_to_seller?: string | null // nullable
  note?: string | null // nullable
  total_to_pay?: string | null // $decimal, pattern: ^-?\d{0,8}(?:\.\d{0,2})?$, nullable
  currency?: string | null // maxLength: 10, nullable
  updated_at?: string | null // $date-time, nullable
  revision?: string | null // maxLength: 255, nullable
}

interface OrderRequest {
  buyer: BuyerRequest
  delivery: DeliveryRequest
  payment: PaymentRequest
  fulfillment: FulfillmentRequest
  products: Array<OrderProductRequest>
  order_id: string // minLength: 1, maxLength: 255
  status?: string | null // maxLength: 255, nullable
  marketplace?: string | null // maxLength: 255, nullable
  message_to_seller?: string | null // nullable
  note?: string | null // nullable
  total_to_pay?: string | null // $decimal, pattern: ^-?\d{0,8}(?:\.\d{0,2})?$, nullable
  currency?: string | null // maxLength: 10, nullable
  updated_at?: string | null // $date-time, nullable
  revision?: string | null // maxLength: 255, nullable
}

export {
  type OrderProduct,
  type OrderProductRequest,
  type Order,
  type OrderRequest,
}
