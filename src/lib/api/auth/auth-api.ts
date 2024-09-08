import {
  type AuthTokenRequest,
  type AuthTokenResponse,
  type RefreshTokenResponse,
} from "@/lib/api/auth/auth-types"
import { request } from "@/lib/api/request"
import type { User } from "@/lib/api/user/auth-types"

const BASE_URL = "/api/shuser/auth"

export const authAPI = {
  async login(credentials: AuthTokenRequest): Promise<AuthTokenResponse> {
    return request<AuthTokenResponse>({
      method: "POST",
      endpoint: `${BASE_URL}/token`,
      body: credentials,
    })
  },

  async refreshToken(refreshToken: string): Promise<RefreshTokenResponse> {
    return request<RefreshTokenResponse>({
      method: "POST",
      endpoint: `${BASE_URL}/token/refresh`,
      body: { refresh: refreshToken },
    })
  },

  async getTokenForUser(data: User): Promise<string> {
    return request<string>({
      method: "POST",
      endpoint: "/api/shuser/users/get_token",
      body: data,
    })
  },
}
