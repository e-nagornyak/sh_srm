import { request } from "../request"
import {
  type UpdateOrCreateUserRequest,
  type User,
  type UserLogResponse,
} from "./auth-types"

const BASE_URL = "/api/shuser/users"

export const userAPI = {
  async getUsers(): Promise<User[]> {
    return request<User[]>({
      method: "GET",
      endpoint: `${BASE_URL}`,
    })
  },

  async getUserById(id: number): Promise<User> {
    return request<User>({
      method: "GET",
      endpoint: `${BASE_URL}/${id}`,
    })
  },

  async createUser(data: UpdateOrCreateUserRequest): Promise<User> {
    return request<User>({
      method: "POST",
      endpoint: `${BASE_URL}`,
      body: data,
    })
  },

  async updateUser(id: number, data: UpdateOrCreateUserRequest): Promise<User> {
    return request<User>({
      method: "PUT",
      endpoint: `${BASE_URL}/${id}`,
      body: data,
    })
  },

  async deleteUser(id: number): Promise<void> {
    return request<void>({
      method: "DELETE",
      endpoint: `${BASE_URL}/${id}`,
    })
  },

  async changeUserRole(id: number): Promise<User> {
    return request<User>({
      method: "PATCH",
      endpoint: `${BASE_URL}/${id}/change_role`,
    })
  },

  async getUserLogs(id: number): Promise<UserLogResponse> {
    return request<UserLogResponse>({
      method: "GET",
      endpoint: `${BASE_URL}/${id}/logs`,
    })
  },

  async logUserAction(): Promise<string> {
    return request<string>({
      method: "POST",
      endpoint: `${BASE_URL}/log_action`,
    })
  },

  async listUsers() {
    return request({
      method: "GET",
      endpoint: `${BASE_URL}/list_users`,
    })
  },
}
