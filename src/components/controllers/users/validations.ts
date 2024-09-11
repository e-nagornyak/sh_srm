import * as z from "zod"

import {
  CurrencyList,
  DeliveryCountryCodeList,
  DeliveryMethodList,
  OrderSourceList,
} from "@/types/enums"

export const searchParamsSchema = z.object({
  start_date: z.union([z.string(), z.null()]).optional(),
  page: z.union([z.string(), z.null()]).optional(),
  limit: z.union([z.string(), z.null()]).optional(),
  end_date: z.union([z.string(), z.null()]).optional(),
  product_name: z.union([z.string(), z.null()]).optional(),
  customer_name: z.union([z.string(), z.null()]).optional(),
  email: z.union([z.string(), z.null()]).optional(),
  phone: z.union([z.string(), z.null()]).optional(),
  user_login: z.union([z.string(), z.null()]).optional(),
  currency: z.nativeEnum(CurrencyList).optional(),
  order_source: z.nativeEnum(OrderSourceList).optional(),
  delivery_method: z.nativeEnum(DeliveryMethodList).optional(),
  delivery_country_code: z.nativeEnum(DeliveryCountryCodeList).optional(),
  min_quantity: z.union([z.string(), z.null()]).optional(),
  min_order_count: z.union([z.string(), z.null()]).optional(),
})

export type OrderSchema = z.infer<typeof searchParamsSchema>
