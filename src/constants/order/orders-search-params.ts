import { OrderStatusEnum } from "@/constants/order/order-statuses-new"
import * as z from "zod"

export const AllegroOrdersSearchParamsSchema = z.object({
  page: z.coerce.number().default(1),
  limit: z.coerce.number().optional(),
  status: z.nativeEnum(OrderStatusEnum).optional(),
  product_name: z.coerce.string().optional().nullable(),
  delivery_address_country_code: z.string().optional(),
  delivery_method: z.string().optional(),
  labels_factura: z.boolean().optional(),
  labels_shipment: z.boolean().optional(),
  last_update_from: z.string().nullable().optional(),
  last_update_to: z.string().nullable().optional(),
  order_id: z.string().optional(),
  ordering: z.string().optional(),
  payment_finished: z
    .string()
    .transform((val) => val === "true")
    .optional(),
})

export type AllegroOrdersSchema = z.infer<
  typeof AllegroOrdersSearchParamsSchema
>
