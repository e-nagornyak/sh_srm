"use memo"

import React from "react"

import { type SearchParams } from "@/types/table"
import { Skeleton } from "@/components/ui/skeleton"
import { DataTableSkeleton } from "@/components/common/data-table/data-table-skeleton"
import { OrdersTable } from "@/components/controllers/users/orders-table"
import { OrdersTableProvider } from "@/components/controllers/users/orders-table-provider"
import { getOrders } from "@/components/controllers/users/queries"
import { searchParamsSchema } from "@/components/controllers/users/validations"
import { DateRangePickerWithQuery } from "@/components/shared/date-range-picker-with-query"
import { Shell } from "@/components/shared/shell"

interface ListPageProps {
  searchParams: SearchParams
}

export default async function ListPage({ searchParams }: ListPageProps) {
  const search = searchParamsSchema.parse(searchParams)

  // if (!new URLSearchParams(search as string).toString()) {
  //   redirect(routePaths.home)
  // }

  const ordersPromise = getOrders(search)

  return (
    <Shell className="gap-2">
      <OrdersTableProvider>
        <React.Suspense fallback={<Skeleton className="h-7 w-52" />}>
          <DateRangePickerWithQuery
            triggerSize="sm"
            triggerClassName="ml-auto w-56 sm:w-60"
            align="end"
          />
        </React.Suspense>
        <React.Suspense
          fallback={
            <DataTableSkeleton
              columnCount={5}
              searchableColumnCount={1}
              filterableColumnCount={2}
              cellWidths={["10rem", "40rem", "12rem", "12rem", "8rem"]}
              shrinkZero
            />
          }
        >
          <OrdersTable searchParams={search} ordersPromise={ordersPromise} />
        </React.Suspense>
      </OrdersTableProvider>
    </Shell>
  )
}
