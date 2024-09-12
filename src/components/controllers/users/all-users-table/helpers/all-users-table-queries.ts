import "server-only"

import { unstable_noStore as noStore } from "next/cache"

import { type User } from "@/lib/api/user/auth-types"
import { getUserApi } from "@/lib/api/user/user-api"

import { type AllUsersSearchParamsSchema } from "./all-users-table-search-params"

interface QueriesResponse {
  total_pages: number
  current_page: number
  results: User[]
}

export async function getUsers(
  input: AllUsersSearchParamsSchema
): Promise<QueriesResponse> {
  noStore()

  try {
    const queryParams = new URLSearchParams(input as string).toString()

    const users = await getUserApi("server").getUsers()

    return {
      current_page: 1,
      results: users || [],
      total_pages: 0,
    }
  } catch (err) {
    console.error("Error fetching users:", err)
    return {
      current_page: 1,
      results: [],
      total_pages: 0,
    }
  }
}
