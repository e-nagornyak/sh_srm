export type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH"

export interface RequestData {
  method: string
  endpoint: string
  body?: object
}

export interface RequestOptions extends RequestData {
  options?: RequestInit
}

export interface FieldErrors {
  [key: string]: string[]
}

export interface BaseQueryResponse<T> {
  count: number
  total_pages: number
  current_page: number
  limit: number
  results: T
}
