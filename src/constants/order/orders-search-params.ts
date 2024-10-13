import { OrderStatusEnum } from "@/constants/order/order-statuses-new"
import * as z from "zod"

export const AllegroOrdersSearchParamsSchema = z.object({
  page: z.coerce.number().default(1),
  limit: z.coerce.number().optional().default(10),
  status: z.nativeEnum(OrderStatusEnum).optional().nullable(),
  product_name: z.coerce.string().optional().nullable(),
  delivery_address_country_code: z.string().optional().nullable(),
  delivery_method: z.string().optional().nullable(),
  last_update_from: z.string().nullable().optional(),
  last_update_to: z.string().nullable().optional(),
  order_id: z.string().optional().nullable(),
  ordering: z
    .union([
      z.enum(["-bought_at", "bought_at"]),
      z.string().optional().nullable(),
    ])
    .default("-bought_at"),
  payment_finished: z.union([
    z.enum(["false", "true"]),
    z.string().optional().nullable(),
  ]),
  labels_shipment: z.union([
    z.enum(["false", "true"]),
    z.string().optional().nullable(),
  ]),
  labels_factura: z.union([
    z.enum(["false", "true"]),
    z.string().optional().nullable(),
  ]),
})

export type AllegroOrdersSchema = z.infer<
  typeof AllegroOrdersSearchParamsSchema
>
