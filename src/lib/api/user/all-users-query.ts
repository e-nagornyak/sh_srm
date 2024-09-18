import "server-only"

import { unstable_noStore as noStore } from "next/cache"

import { type UsersSearchParamsSchema } from "@/lib/api/user/all-users-search-params"
import { getUserApi } from "@/lib/api/user/user-api"
import { type User } from "@/lib/api/user/user-types"

interface QueryResponse {
  total_pages: number
  current_page: number
  results: User[]
}

export async function getAllUsers(
  input: UsersSearchParamsSchema
): Promise<QueryResponse> {
  noStore()

  try {
    const queryParams = new URLSearchParams(input as string).toString()

    const users = await getUserApi("server").getUsers()

    // @ts-ignore
    const results = Array.isArray(users?.results) ? users?.results : []
    return {
      current_page: 1,
      results: results,
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
