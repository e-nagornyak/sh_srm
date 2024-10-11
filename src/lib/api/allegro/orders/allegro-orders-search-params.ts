import * as z from "zod"

export const AllegroOrdersSearchParamsSchema = z.object({
  page: z.coerce.number().default(1),
  limit: z.coerce.number().optional(),
  status: z.coerce.string().optional(),
  product_name: z.coerce.string().optional(),
  payment_finished: z.union([
    z.enum(["false", "true"]),
    z.coerce.string().optional(),
  ]),
})

export type AllegroOrdersSchema = z.infer<
  typeof AllegroOrdersSearchParamsSchema
>
