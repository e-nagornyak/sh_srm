import { cookies } from "next/headers"
import { env } from "@/env"

import { type RequestOptions } from "./types"

export async function requestServer<T>({
  method,
  endpoint,
  body,
  options,
}: RequestOptions): Promise<T> {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  }

  const token = cookies().get("accessToken")?.value

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

  if (!response.ok) {
    throw new Error(`Failed to ${method} ${endpoint}`)
  }

  return response.json()
}
