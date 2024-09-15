// Renamed to AuthTokenPair for the token response
interface AuthTokenResponse {
  access: string
  refresh: string
}

// Renamed to AuthTokenRequest for the token request (login)
interface AuthTokenRequest {
  username: string
  password: string
}

// Renamed to RefreshTokenResponse for token refresh response
interface RefreshTokenResponse {
  access: string
  refresh: string
}

export type { AuthTokenResponse, AuthTokenRequest, RefreshTokenResponse }
