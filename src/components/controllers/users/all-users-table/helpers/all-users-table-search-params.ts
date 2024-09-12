import * as z from "zod"

export const allUsersSearchParamsSchema = z.object({
  page: z.union([z.string(), z.null()]).optional(),
  limit: z.union([z.string(), z.null()]).optional(),
})

export type AllUsersSearchParamsSchema = z.infer<
  typeof allUsersSearchParamsSchema
>
