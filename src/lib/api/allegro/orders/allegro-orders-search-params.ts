import * as z from "zod"

export const AllegroOrdersSearchParamsSchema = z.object({
  page: z.union([z.string(), z.null()]).optional(),
  limit: z.union([z.string(), z.null()]).optional(),
})

export type AllegroOrdersSchema = z.infer<
  typeof AllegroOrdersSearchParamsSchema
>
