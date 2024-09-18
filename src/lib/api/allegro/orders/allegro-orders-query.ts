import "server-only"

import { unstable_noStore as noStore } from "next/cache"

import { getAllegroOrdersApi } from "@/lib/api/allegro/orders/allegro-orders-api"
import { type AllegroOrdersSchema } from "@/lib/api/allegro/orders/allegro-orders-search-params"
import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"

interface QueryResponse {
  count: number
  total_pages: number
  current_page: number
  limit: number
  results: Order[]
}

export async function getAllegroOrders(
  input: AllegroOrdersSchema
): Promise<QueryResponse> {
  noStore()

  try {
    const queryParams = new URLSearchParams(input as string).toString()

    const res = await getAllegroOrdersApi("server").listAllegroOrders()
    console.log(res)

    return res as any
  } catch (err) {
    console.error("Error fetching users:", err)
    return {
      count: 1,
      total_pages: 1,
      current_page: 1,
      limit: 1,
      results: [],
    }
  }
}
