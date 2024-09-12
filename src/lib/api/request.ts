import { env } from "@/env"

import { type HTTPMethod } from "@/lib/api/types"

interface RequestOptions<TBody = unknown> {
  method: HTTPMethod
  endpoint: string
  body?: TBody
  options?: RequestInit
}

type ApiMethod<TResponse, TParams extends unknown[] = []> = (
  ...args: TParams
) => Promise<TResponse>

export type ApiSide = "client" | "server"

class Api {
  private side: ApiSide

  constructor(side: ApiSide) {
    this.side = side
  }

  private async getToken(): Promise<string | undefined> {
    if (this.side === "client") {
      const Cookies = await import("js-cookie")
      return Cookies.default.get("accessToken")
    } else {
      const { cookies } = await import("next/headers")
      return cookies().get("accessToken")?.value
    }
  }

  private async request<TResponse, TBody = unknown>({
    method,
    endpoint,
    body,
    options,
  }: RequestOptions<TBody>): Promise<TResponse> {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
    }

    const token = await this.getToken()

    if (token) {
      headers.Authorization = `Bearer ${token}`
    }

    const response = await fetch(`${env.NEXT_PUBLIC_BACKEND_URL}${endpoint}`, {
      ...options,
      method,
      headers: {
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
    })

    if (!response.ok) {
      throw new Error(`Failed to ${method} ${endpoint}`)
    }

    return (await response.json()) as Promise<TResponse>
  }

  public createMethod<TResponse, TParams extends unknown[] = []>(
    methodCreator: (...args: TParams) => RequestOptions
  ): ApiMethod<TResponse, TParams> {
    return (...args: TParams) => this.request<TResponse>(methodCreator(...args))
  }
}

export const createApi = (side: ApiSide) => new Api(side)
