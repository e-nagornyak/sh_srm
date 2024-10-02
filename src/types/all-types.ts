import { type User, type UserActionLog } from "@/lib/api/user/user-types"

// Buyer Types
export type BuyerAddress = {
  id: number // integer, readOnly
  street: string // maxLength: 255
  city: string // maxLength: 255
  post_code: string // maxLength: 20
  country_code: string // maxLength: 10
}

export type BuyerAddressRequest = {
  street: string // minLength: 1, maxLength: 255
  city: string // minLength: 1, maxLength: 255
  post_code: string // minLength: 1, maxLength: 20
  country_code: string // minLength: 1, maxLength: 10
}

export type Buyer = {
  id: number // integer, readOnly
  address: BuyerAddress
  buyer_id: string // maxLength: 255
  email: string // maxLength: 254
  login: string // maxLength: 255
  first_name: string // maxLength: 255
  last_name: string // maxLength: 255
  phone_number?: string | null // nullable, maxLength: 50
  company_name?: string | null // nullable, maxLength: 255
}

export type BuyerRequest = {
  address: BuyerAddressRequest
  buyer_id: string // minLength: 1, maxLength: 255
  email: string // minLength: 1, maxLength: 254
  login: string // minLength: 1, maxLength: 255
  first_name: string // minLength: 1, maxLength: 255
  last_name: string // minLength: 1, maxLength: 255
  phone_number?: string | null // nullable, maxLength: 50
  company_name?: string | null // nullable, maxLength: 255
}

// Delivery Types
export type DeliveryAddress = {
  id: number // integer, readOnly
  first_name: string // maxLength: 255
  last_name: string // maxLength: 255
  street: string // maxLength: 255
  city: string // maxLength: 255
  zip_code: string // maxLength: 20
  country_code: string // maxLength: 10
}

export type DeliveryAddressRequest = {
  first_name: string // minLength: 1, maxLength: 255
  last_name: string // minLength: 1, maxLength: 255
  street: string // minLength: 1, maxLength: 255
  city: string // minLength: 1, maxLength: 255
  zip_code: string // minLength: 1, maxLength: 20
  country_code: string // minLength: 1, maxLength: 10
}

export type Delivery = {
  id: number // integer, readOnly
  address: DeliveryAddress
  method: string // maxLength: 255
  cost: string // pattern: ^-?\d{0,8}(?:\.\d{0,2})?$
  order: number // integer
}

export type DeliveryRequest = {
  address: DeliveryAddressRequest
  method: string // minLength: 1, maxLength: 255
  cost: string // $decimal, pattern: ^-?\d{0,8}(?:\.\d{0,2})?$
  order: number // integer
}

// Fulfillment Types
export type Fulfillment = {
  id: number // integer, readOnly
  status: string // maxLength: 255
  line_items_sent: string // maxLength: 255
  order: number // integer
}

export type FulfillmentRequest = {
  status: string // minLength: 1, maxLength: 255
  line_items_sent: string // minLength: 1, maxLength: 255
  order: number // integer
}

// Paginated List Types
export type PaginatedUserActionLogList = {
  count: number // integer
  next?: string | null // $uri, nullable
  previous?: string | null // $uri, nullable
  results: UserActionLog[] // array of UserActionLog
}

export type PaginatedUserList = {
  count: number // integer
  next?: string | null // $uri, nullable
  previous?: string | null // $uri, nullable
  results: User[] // array of User
}

// Payment Types
export type Payment = {
  id: number // integer, readOnly
  payment_id: string // maxLength: 255
  provider: string // maxLength: 255
  paid_amount?: string | null // $decimal, pattern: ^-?\d{0,8}(?:\.\d{0,2})?$, nullable
  currency?: string | null // maxLength: 10, nullable
  finished_at?: string | null // $date-time, nullable
  order: number // integer
}

export type PaymentRequest = {
  payment_id: string // minLength: 1, maxLength: 255
  provider: string // minLength: 1, maxLength: 255
  paid_amount?: string | null // $decimal, pattern: ^-?\d{0,8}(?:\.\d{0,2})?$, nullable
  currency?: string | null // maxLength: 10, nullable
  finished_at?: string | null // $date-time, nullable
  order: number // integer
}

// Token Types
export type TokenObtainPair = {
  access: string // readOnly
  refresh: string // readOnly
}

export type TokenObtainPairRequest = {
  username: string // writeOnly, minLength: 1
  password: string // writeOnly, minLength: 1
}

export type TokenRefresh = {
  access: string // readOnly
  refresh: string // string
}

export type TokenRefreshRequest = {
  refresh: string // minLength: 1
}

// Other
