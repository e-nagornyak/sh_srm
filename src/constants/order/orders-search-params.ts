import { OrderStatusEnum } from "@/constants/order/order-statuses"
import * as z from "zod"

// Окрема схема для ordering
export const OrderingSchema = z
  .union([
    z.enum(["-bought_at", "bought_at"]),
    z.string().optional().nullable(),
  ])
  .default("-bought_at")

export const OrdersFiltersSchema = z.object({
  status: z.nativeEnum(OrderStatusEnum).optional().nullable(),
  product_name: z.coerce.string().optional().nullable(),
  delivery_address_country_code: z.string().optional().nullable(),
  delivery_method: z.string().optional().nullable(),
  last_update_from: z.string().nullable().optional(),
  last_update_to: z.string().nullable().optional(),
  order_id: z.string().optional().nullable(),
  payment_finished: z.union([
    z.enum(["false", "true"]),
    z.string().optional().nullable(),
  ]),
  invoice_required: z.union([
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

export const OrdersSearchParamsSchema = OrdersFiltersSchema.extend({
  page: z.coerce.number().default(1),
  limit: z.coerce.number().optional().default(10),
  ordering: OrderingSchema,
})

export type OrdersSearchParamsSchemaType = z.infer<
  typeof OrdersSearchParamsSchema
>
export type OrdersFiltersSchemaType = z.infer<typeof OrdersFiltersSchema>
