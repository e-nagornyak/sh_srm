"use client"

import { z } from "zod"

type OrderInvoiceFormData = z.infer<typeof orderInvoiceSchema>

const orderInvoiceSchema = z.object({
  company_name: z.string().optional(),
  address: z
    .string()
    .max(255, "Address cannot exceed 255 characters")
    .optional(),
  zip_code: z
    .string()
    // .regex(/^[0-9]{5}$/, "Postal code must be 5 digits")
    .optional(),
  city: z.string().optional(),
  country_code: z.string().optional(),
  tax_id: z.string().optional(),
  wants_invoice: z.boolean().optional(),
})

export { type OrderInvoiceFormData, orderInvoiceSchema }
