import { env } from "@/env"
import Cookies from "js-cookie"

import { type RequestOptions } from "./types"

export async function requestClient<T>({
  method,
  endpoint,
  body,
  options,
}: RequestOptions): Promise<T> {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  }

  const token = Cookies.get("accessToken") || undefined

  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  const response = await fetch(`${env.NEXT_PUBLIC_BACKEND_URL}${endpoint}`, {
    ...options,
    method,
    headers: {
      Timezone: Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone,
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  })

  console.log("response", response)
  if (!response.ok) {
    throw new Error(`Failed to ${method} ${endpoint}`)
  }

  return response.json()
}
