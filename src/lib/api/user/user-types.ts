// Enum for user roles
enum RoleEnum {
  Admin = "admin",
  Manager = "manager",
  Worker = "worker",
}

// User type for user details
interface User {
  id: number // integer, readOnly
  username: string // maxLength: 255
  role: RoleEnum // Enum: [admin, manager, worker]
}

// Renamed to UpdateUserRequest for updating user details
interface UpdateOrCreateUserRequest {
  username: string // minLength: 1, maxLength: 255
  password: string // writeOnly: true, minLength: 1
  role: RoleEnum // Enum: [admin, manager, worker]
}

interface PatchedUserRequest {
  username?: string // minLength: 1, maxLength: 255
  password?: string // writeOnly: true, minLength: 1
  role?: RoleEnum // Enum: [admin, manager, worker]
}

// Action Log Types
interface UserActionLog {
  user: number // integer
  action_date: string // $date-time, readOnly
  action_text: string // string
}

// Renamed to UserLog for the logs related to user actions
interface UserLogResponse {
  user: User
  action_date: string // assuming ISO string format for date
  action_text: string
}

export {
  RoleEnum,
  type UpdateOrCreateUserRequest,
  type User,
  type UserLogResponse,
  type PatchedUserRequest,
  type UserActionLog,
}
