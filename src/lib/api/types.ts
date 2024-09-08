export interface RequestData {
  method: string
  endpoint: string
  body?: object
}

export interface RequestOptions extends RequestData {
  options?: RequestInit
}
