"use client"

import * as z from "zod"

import {
  CurrencyList,
  DeliveryCountryCodeList,
  DeliveryMethodList,
  OrderSourceList,
} from "@/types/enums"

export type DataFormData = z.infer<typeof dataFormSchema>

export const dataFormSchema = z.object({
  start_date: z.date().nullable().optional(),
  end_date: z.date().nullable().optional(),
  product_name: z.string().optional(),
  customer_name: z.string().optional(),
  email: z.string().email().optional().or(z.literal("")),
  phone: z.string().optional(),
  user_login: z.string().optional(),
  currency: z.nativeEnum(CurrencyList).optional(),
  order_source: z.nativeEnum(OrderSourceList).optional(),
  delivery_method: z.nativeEnum(DeliveryMethodList).optional(),
  delivery_country_code: z.nativeEnum(DeliveryCountryCodeList).optional(),
  min_quantity: z.number().int().min(0).optional(),
  min_order_count: z.number().int().min(0).optional(),
})
