import "server-only"

import { unstable_noStore as noStore } from "next/cache"

import { type BaseQueryResponse } from "@/lib/api/@request/types"
import { type UsersSearchParamsSchema } from "@/lib/api/user/all-users-search-params"
import { getUserApi } from "@/lib/api/user/user-api"
import { type User } from "@/lib/api/user/user-types"

interface QueryResponse extends BaseQueryResponse<User[]> {}

export async function getAllUsers(
  input: UsersSearchParamsSchema
): Promise<QueryResponse> {
  noStore()

  try {
    const queryParams = new URLSearchParams(input as string).toString()

    const response = await getUserApi("server").getUsers(queryParams)

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
