"use client"

import { z } from "zod"

type OrderDeliveryFormData = z.infer<typeof orderDeliverySchema>

const orderDeliverySchema = z.object({
  first_name: z.string().optional().default(""),
  last_name: z.string().optional().default(""),
  company_name: z.string().optional().default(""),
  street: z.string().optional().default(""),
  zip_code: z
    .string()
    // .regex(/^[0-9]{5}$/, "Postal code must be 5 digits")
    .optional()
    .default(""),
  city: z.string().optional().default(""),
  country_code: z.string().optional().default(""),
})

export { type OrderDeliveryFormData, orderDeliverySchema }
