"use memo"

import React from "react"
import { OrdersSearchParamsSchema } from "@/constants/order/orders-search-params"
import { OrdersTableStoreProvider } from "@/store/order/orders-table-store-provider"

import { type SearchParams } from "@/types/table"
import { getAllegroOrders } from "@/lib/api/allegro/orders/orders-query"
import { AllegroOrdersTableController } from "@/components/@controllers/allegro/orders-table/allegro-orders-table-controller"
import { AllegroOrdersTableSkeleton } from "@/components/common/allegro/orders/allegro-orders-table-skeleton"

interface ListPageProps {
  searchParams: SearchParams
}

export default async function ListPage({ searchParams }: ListPageProps) {
  const search = OrdersSearchParamsSchema.parse(searchParams)

  const ordersQueryResponse = await getAllegroOrders(search)
  console.log("list response", ordersQueryResponse?.results)

  return (
    <OrdersTableStoreProvider initialData={ordersQueryResponse?.results}>
      <section className="grid w-full items-center">
        <AllegroOrdersTableController
          ordersQueryResponse={ordersQueryResponse}
        />
      </section>
    </OrdersTableStoreProvider>
  )
}
