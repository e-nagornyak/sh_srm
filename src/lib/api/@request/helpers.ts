export const createEndpoint = (path: string, method: string, body?: any) => ({
  method,
  endpoint: path,
  ...(body && { body }),
})
