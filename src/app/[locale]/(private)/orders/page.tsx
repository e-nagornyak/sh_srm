"use memo"

import React from "react"

import { type SearchParams } from "@/types/table"
import { getAllegroOrders } from "@/lib/api/allegro/orders/allegro-orders-query"
import { AllegroOrdersSearchParamsSchema } from "@/lib/api/allegro/orders/allegro-orders-search-params"
import { AllegroOrdersTableProvider } from "@/components/common/allegro/orders/allegro-orders-table-provider"
import { DataTableSkeleton } from "@/components/common/data-table/data-table-skeleton"
import { AllegroOrdersTableController } from "@/components/controllers/allegro/allegro-orders-table/allegro-orders-table-controller"

interface ListPageProps {
  searchParams: SearchParams
}

export default async function ListPage({ searchParams }: ListPageProps) {
  const search = AllegroOrdersSearchParamsSchema.parse(searchParams)

  const allegroOrdersPromise = getAllegroOrders(search)

  return (
    <section className="grid items-center px-2 py-4">
      <AllegroOrdersTableProvider>
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
          <AllegroOrdersTableController
            searchParams={search}
            allegroOrdersPromise={allegroOrdersPromise}
          />
        </React.Suspense>
      </AllegroOrdersTableProvider>
    </section>
  )
}
