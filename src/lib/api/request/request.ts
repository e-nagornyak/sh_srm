import { env } from "@/env"

import { type FieldErrors, type HTTPMethod } from "./types"

interface RequestOptions<TBody = unknown> {
  method: HTTPMethod
  endpoint: string
  body?: TBody
  options?: RequestInit
}

type ApiMethod<TResponse, TError = unknown, TParams extends unknown[] = []> = (
  ...args: TParams
) => Promise<TResponse | TError>

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

  private async request<TResponse, TError = FieldErrors, TBody = unknown>({
    method,
    endpoint,
    body,
    options,
  }: RequestOptions<TBody>): Promise<TResponse | TError> {
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
      const errors = await response.json()

      if (errors) {
        throw errors as TError
      }

      throw new Error(`Failed to ${method} ${endpoint}`)
    }

    return (await response.json()) as TResponse
  }

  public createMethod<
    TResponse,
    TParams extends unknown[] = [],
    TError = FieldErrors,
  >(
    methodCreator: (...args: TParams) => RequestOptions
  ): ApiMethod<TResponse, TError, TParams> {
    return (...args: TParams) =>
      this.request<TResponse, TError>(methodCreator(...args))
  }
}

export const createApi = (side: ApiSide) => new Api(side)
