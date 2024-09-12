import { createApi, type ApiSide } from "@/lib/api/request"
import {
  type UpdateOrCreateUserRequest,
  type User,
  type UserLogResponse,
} from "@/lib/api/user/auth-types"

import { createEndpoint } from "../helpers"

const apiPaths = {
  users: {
    base: "/api/shuser/users/",
    list: "/api/shuser/users/list_users/",
    logAction: "/api/shuser/users/log_action/",
    byId: (id: number) => ({
      get: `/api/shuser/users/${id}/`,
      update: `/api/shuser/users/${id}/`,
      delete: `/api/shuser/users/${id}/`,
      changeRole: `/api/shuser/users/${id}/change_role/`,
      getLogs: `/api/shuser/users/${id}/logs/`,
    }),
  },
}

export const getUserApi = (side: ApiSide) => {
  const api = createApi(side)

  return {
    // List operations
    getUsers: api.createMethod<User[]>(() =>
      createEndpoint(apiPaths.users.base, "GET")
    ),

    listUsers: api.createMethod<User[]>(() =>
      createEndpoint(apiPaths.users.list, "GET")
    ),

    // Single user operations
    getUserById: api.createMethod<User, [number]>((id) =>
      createEndpoint(apiPaths.users.byId(id).get, "GET")
    ),

    createUser: api.createMethod<User, [UpdateOrCreateUserRequest]>((data) =>
      createEndpoint(apiPaths.users.base, "POST", data)
    ),

    updateUser: api.createMethod<User, [number, UpdateOrCreateUserRequest]>(
      (id, data) => createEndpoint(apiPaths.users.byId(id).update, "PUT", data)
    ),

    deleteUser: api.createMethod<void, [number]>((id) =>
      createEndpoint(apiPaths.users.byId(id).delete, "DELETE")
    ),

    // User role and logs
    changeUserRole: api.createMethod<User, [number]>((id) =>
      createEndpoint(apiPaths.users.byId(id).changeRole, "PATCH")
    ),

    getUserLogs: api.createMethod<UserLogResponse, [number]>((id) =>
      createEndpoint(apiPaths.users.byId(id).getLogs, "GET")
    ),

    // Action logging
    logUserAction: api.createMethod<string>(() =>
      createEndpoint(apiPaths.users.logAction, "POST")
    ),
  }
}
