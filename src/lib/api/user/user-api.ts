import { requestClient } from "../request-client"
import {
  type UpdateOrCreateUserRequest,
  type User,
  type UserLogResponse,
} from "./auth-types"

const BASE_URL = "/api/shuser/users"

export const userAPI = {
  async getUsers(): Promise<User[]> {
    return requestClient<User[]>({
      method: "GET",
      endpoint: `${BASE_URL}/`,
    })
  },

  async getUserById(id: number): Promise<User> {
    return requestClient<User>({
      method: "GET",
      endpoint: `${BASE_URL}/${id}/`,
    })
  },

  async createUser(data: UpdateOrCreateUserRequest): Promise<User> {
    return requestClient<User>({
      method: "POST",
      endpoint: `${BASE_URL}/`,
      body: data,
    })
  },

  async updateUser(id: number, data: UpdateOrCreateUserRequest): Promise<User> {
    return requestClient<User>({
      method: "PUT",
      endpoint: `${BASE_URL}/${id}/`,
      body: data,
    })
  },

  async deleteUser(id: number): Promise<void> {
    return requestClient<void>({
      method: "DELETE",
      endpoint: `${BASE_URL}/${id}/`,
    })
  },

  async changeUserRole(id: number): Promise<User> {
    return requestClient<User>({
      method: "PATCH",
      endpoint: `${BASE_URL}/${id}/change_role/`,
    })
  },

  async getUserLogs(id: number): Promise<UserLogResponse> {
    return requestClient<UserLogResponse>({
      method: "GET",
      endpoint: `${BASE_URL}/${id}/logs/`,
    })
  },

  async logUserAction(): Promise<string> {
    return requestClient<string>({
      method: "POST",
      endpoint: `${BASE_URL}/log_action/`,
    })
  },

  async listUsers() {
    return requestClient({
      method: "GET",
      endpoint: `${BASE_URL}/list_users/`,
    })
  },
}
