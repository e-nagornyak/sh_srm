"use client"

import { useRouter } from "next/navigation"
import { format } from "date-fns"

import { routePaths } from "@/config/routes"
import type { OrderSchema } from "@/lib/validations"
import { OrderFilterForm } from "@/components/main/data-form/data-form"
import type { DataFormData } from "@/components/main/data-form/data-form.schema"

interface DataFormControllerProps {
  search: OrderSchema
}

export function DataFormController({ search }: DataFormControllerProps) {
  const { push } = useRouter()
  const queryParams = new URLSearchParams(search as string)
  const paramsObject: OrderSchema = Object.fromEntries(queryParams)

  const onSubmit = (data: DataFormData) => {
    const params = new URLSearchParams()
    Object.entries(data).forEach(([key, value]) => {
      if (value !== null && value !== undefined && value !== "") {
        if (value instanceof Date) {
          // @ts-ignore
          params.append(key, format(value, "yyyy-MM-dd"))
        } else if (typeof value === "number") {
          params.append(key, value.toString())
        } else {
          params.append(key, value)
        }
      }
    })
    push(routePaths.list(params.toString()))
  }

  return (
    <div className="container max-w-4xl space-y-6">
      <h2 className="text-center text-4xl font-bold text-gray-900 dark:text-gray-100">
        Order Filter
      </h2>
      <div className="rounded-md border border-white/30 p-6 shadow-lg md:p-16">
        <OrderFilterForm
          defaultValues={paramsObject as DataFormData}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  )
}
