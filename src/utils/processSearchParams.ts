import { format } from "date-fns"

import { type AllUsersSearchParamsSchema } from "@/components/controllers/users/all-users-table/helpers/all-users-table-search-params"

export const processSearchParams = (input: AllUsersSearchParamsSchema) => {
  const { start_date, end_date, ...rest } = input

  return {
    ...rest,
    ...(start_date && {
      start_date: format(new Date(start_date), "dd.MM.yyyy"),
    }),
    ...(end_date && { end_date: format(new Date(end_date), "dd.MM.yyyy") }),
  }
}
