import {
  type CurrencyKeys,
  type DeliveryCountryCodeKeys,
  type DeliveryMethodKeys,
  type OrderSourceKeys,
} from "@/types/enums"

export interface SearchParams {
  [key: string]: string | string[] | undefined
}

export interface Option {
  label: string
  value: string
  icon?: React.ComponentType<{ className?: string }>
  withCount?: boolean
}

export interface DataTableFilterField<TData> {
  label: string
  value: keyof TData
  placeholder?: string
  options?: Option[]
}

export interface DataTableFilterOption<TData> {
  id: string
  label: string
  value: keyof TData
  options: Option[]
  filterValues?: string[]
  filterOperator?: string
  isMulti?: boolean
}

export interface Order {
  start_date: string | null // Start Date in the format %d.%m.%Y
  end_date: string | null // End Date in the format %d.%m.%Y
  product_name: string | null // Product Name
  customer_name: string | null // Customer Name
  email: string | null // Email
  phone: string | null // Phone
  user_login: string | null // User Login
  currency: CurrencyKeys // Currency selection
  order_source: OrderSourceKeys // Order source selection
  delivery_method: DeliveryMethodKeys // Delivery method selection
  delivery_country_code: DeliveryCountryCodeKeys // Delivery country code selection
  min_quantity: number | null // Minimum quantity of items in the order
  min_order_count: number | null // Minimum number of orders
}
