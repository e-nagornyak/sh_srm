import "server-only"

import { unstable_noStore as noStore } from "next/cache"
import { type AllegroOrdersSchema } from "@/constants/order/orders-search-params"

import { getAllegroOrdersApi } from "@/lib/api/allegro/orders/orders-api"
import { type Order } from "@/lib/api/allegro/orders/orders-types"

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

    const response =
      await getAllegroOrdersApi("server").listAllegroOrders(queryParams)

    return {
      count: response?.count || 1,
      total_pages: response?.total_pages || 1,
      current_page: response?.current_page || 1,
      limit: response?.limit || 1,
      results: response?.results || [],
    } as QueryResponse
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
