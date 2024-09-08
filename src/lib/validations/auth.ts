"use client"

import * as z from "zod"

export type DataFormData = z.infer<typeof dataFormSchema>

export const dataFormSchema = z.object({
  start_date: z.date().nullable().optional(),
  end_date: z.date().nullable().optional(),
  product_name: z.string().optional(),
  customer_name: z.string().optional(),
  email: z.string().email().optional().or(z.literal("")),
  phone: z.string().optional(),
  user_login: z.string().optional(),
  min_quantity: z.number().int().min(0).optional(),
  min_order_count: z.number().int().min(0).optional(),
})
