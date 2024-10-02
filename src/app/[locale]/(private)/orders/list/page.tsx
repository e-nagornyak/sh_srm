"use memo"

import React from "react"

import { type SearchParams } from "@/types/table"
import { getAllegroOrders } from "@/lib/api/allegro/orders/allegro-orders-query"
import { AllegroOrdersSearchParamsSchema } from "@/lib/api/allegro/orders/allegro-orders-search-params"
import { AllegroOrdersTableController } from "@/components/@controllers/allegro/orders-table/allegro-orders-table-controller"
import { AllegroOrdersTableProvider } from "@/components/common/allegro/orders/allegro-orders-table-provider"
import { AllegroOrdersTableSkeleton } from "@/components/common/allegro/orders/allegro-orders-table-skeleton"

interface ListPageProps {
  searchParams: SearchParams
}

export default async function ListPage({ searchParams }: ListPageProps) {
  const search = AllegroOrdersSearchParamsSchema.parse(searchParams)

  const allegroOrdersPromise = getAllegroOrders(search)

  return (
    <section className="grid w-full items-center">
      <AllegroOrdersTableProvider>
        <React.Suspense fallback={<AllegroOrdersTableSkeleton shrinkZero />}>
          <AllegroOrdersTableController
            allegroOrdersPromise={allegroOrdersPromise}
          />
        </React.Suspense>
      </AllegroOrdersTableProvider>
    </section>
  )
}
