import {
  type AuthTokenRequest,
  type AuthTokenResponse,
  type RefreshTokenResponse,
} from "@/lib/api/auth/auth-types"
import { requestClient } from "@/lib/api/request-client"
import type { User } from "@/lib/api/user/auth-types"

const BASE_URL = "/api/shuser/auth"

export const authAPI = {
  async login(credentials: AuthTokenRequest): Promise<AuthTokenResponse> {
    return requestClient<AuthTokenResponse>({
      method: "POST",
      endpoint: `${BASE_URL}/token/`,
      body: credentials,
    })
  },

  async refreshToken(refreshToken: string): Promise<RefreshTokenResponse> {
    return requestClient<RefreshTokenResponse>({
      method: "POST",
      endpoint: `${BASE_URL}/token/refresh/`,
      body: { refresh: refreshToken },
    })
  },

  async getTokenForUser(data: User): Promise<string> {
    return requestClient<string>({
      method: "POST",
      endpoint: "/api/shuser/users/get_token/",
      body: data,
    })
  },
}
