"use memo"

import React from "react"
import { OrdersSearchParamsSchema } from "@/constants/order/orders-search-params"

import { type SearchParams } from "@/types/table"
import { getAllegroOrders } from "@/lib/api/allegro/orders/orders-query"
import { AllegroOrdersTableController } from "@/components/@controllers/allegro/orders-table/allegro-orders-table-controller"
import { AllegroOrdersTableSkeleton } from "@/components/common/allegro/orders/allegro-orders-table-skeleton"

interface ListPageProps {
  searchParams: SearchParams
}

export default async function ListPage({ searchParams }: ListPageProps) {
  const search = OrdersSearchParamsSchema.parse(searchParams)

  const allegroOrdersPromise = getAllegroOrders(search)

  return (
    <section className="grid w-full items-center pb-14">
      <React.Suspense fallback={<AllegroOrdersTableSkeleton shrinkZero />}>
        <AllegroOrdersTableController
          allegroOrdersPromise={allegroOrdersPromise}
        />
      </React.Suspense>
    </section>
  )
}
