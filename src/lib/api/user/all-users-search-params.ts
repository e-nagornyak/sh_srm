import * as z from "zod"

export const allUsersSearchParamsSchema = z.object({
  page: z.union([z.string(), z.null()]).optional(),
  limit: z.union([z.string(), z.null()]).optional(),
})

export type UsersSearchParamsSchema = z.infer<typeof allUsersSearchParamsSchema>
