// Enum for user roles
enum RoleEnum {
  Admin = "Admin",
  Manager = "Manager",
}

// User type for user details
interface User {
  id: number
  username: string
  role: RoleEnum
}

// Renamed to UpdateUserRequest for updating user details
interface UpdateOrCreateUserRequest {
  username?: string
  password?: string
  role?: RoleEnum
}

// Renamed to UserLog for the logs related to user actions
interface UserLogResponse {
  user: User
  action_date: string // assuming ISO string format for date
  action_text: string
}

export type { RoleEnum, UpdateOrCreateUserRequest, User, UserLogResponse }
