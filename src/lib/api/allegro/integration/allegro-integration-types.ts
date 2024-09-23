// Allegro Integration Types
interface AllegroIntegration {
  id: number // integer, readOnly
  client_id: string // maxLength: 255
  client_secret: string // maxLength: 255
}

interface AllegroIntegrationRequest {
  client_id: string // minLength: 1, maxLength: 255
  client_secret: string // minLength: 1, maxLength: 255
}

export { type AllegroIntegration, type AllegroIntegrationRequest }
