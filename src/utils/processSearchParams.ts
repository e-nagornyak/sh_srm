import { format } from "date-fns"

import { type OrderSchema } from "@/components/controllers/users/validations"

export const processSearchParams = (input: OrderSchema) => {
  const { start_date, end_date, ...rest } = input

  return {
    ...rest,
    ...(start_date && {
      start_date: format(new Date(start_date), "dd.MM.yyyy"),
    }),
    ...(end_date && { end_date: format(new Date(end_date), "dd.MM.yyyy") }),
  }
}
