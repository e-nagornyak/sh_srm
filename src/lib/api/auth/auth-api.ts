import {
  type AuthTokenRequest,
  type AuthTokenResponse,
  type RefreshTokenResponse,
} from "@/lib/api/auth/auth-types"
import { createEndpoint } from "@/lib/api/helpers"
import { createApi, type ApiSide } from "@/lib/api/request"
import { type User } from "@/lib/api/user/auth-types"

const apiPaths = {
  auth: {
    base: "/api/shuser/auth",
    token: "/api/shuser/auth/token/",
    refreshToken: "/api/shuser/auth/token/refresh/",
    getUserToken: "/api/shuser/auth/users/get_token/",
  },
}

export const getAuthApi = (side: ApiSide) => {
  const api = createApi(side)
  return {
    // List operations
    login: api.createMethod<AuthTokenResponse, [AuthTokenRequest]>(
      (credentials) => createEndpoint(apiPaths.auth.token, "POST", credentials)
    ),

    refreshToken: api.createMethod<RefreshTokenResponse, [string]>(
      (refreshToken) =>
        createEndpoint(apiPaths.auth.refreshToken, "POST", {
          refresh: refreshToken,
        })
    ),

    getTokenForUser: api.createMethod<string, [User]>((data) =>
      createEndpoint(apiPaths.auth.getUserToken, "POST", data)
    ),
  }
}
