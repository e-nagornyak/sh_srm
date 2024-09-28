"use client"

import { z } from "zod"

type OrderPickupFormData = z.infer<typeof orderPickupSchema>

const orderPickupSchema = z.object({
  id: z.string().optional(),
  point_name: z.string().optional(),
  address: z
    .string()
    .max(255, "Address cannot exceed 255 characters")
    .optional(),
  zip_code: z
    .string()
    // .regex(/^[0-9]{5}$/, "Postal code must be 5 digits")
    .optional(),
  city: z.string().optional(),
})

export { type OrderPickupFormData, orderPickupSchema }
