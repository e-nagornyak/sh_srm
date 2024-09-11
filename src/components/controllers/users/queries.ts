import "server-only"

import { unstable_noStore as noStore } from "next/cache"
import { processSearchParams } from "@/utils/processSearchParams"

import { type Order } from "@/types/table"

import { type OrderSchema } from "./validations"

interface QueriesResponse {
  total_pages: number
  current_page: number
  results: Order[]
}

export async function getOrders(input: OrderSchema): Promise<QueriesResponse> {
  noStore()

  try {
    const queryParams = new URLSearchParams(
      processSearchParams(input) as string
    ).toString()

    // const response = await fetch(routePaths.search(queryParams), {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    const response = await new Promise((resolve) => resolve(null))
    // if (!response.ok) {
    //   throw new Error(`HTTP error! status: ${response.status}`)
    // }

    // const result = (await response.json()) as QueriesResponse

    return {
      current_page: 1,
      results: [],
      total_pages: 0,
    }
  } catch (err) {
    console.error("Error fetching orders:", err)
    return {
      current_page: 1,
      results: [],
      total_pages: 0,
    }
  }
}
