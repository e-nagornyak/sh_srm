"use client"

import { z } from "zod"

type OrderInfoFormData = z.infer<typeof orderInfoSchema>

const orderInfoSchema = z.object({
  login: z.string().optional().default(""),
  email: z.string().optional().default(""),
  phone_number: z.string().optional().default(""),
  method: z.string().optional().default(""),
  cost: z.string().optional().default(""),
  provider: z.string().optional().default(""),
  additional_field_1: z.string().optional().default(""),
  additional_field_2: z.string().optional().default(""),
  vies_vat_pl: z.string().optional().default(""),
  cash_on_delivery: z.boolean().optional().default(false),
})

export { type OrderInfoFormData, orderInfoSchema }
