import { type RoleEnum } from "@/lib/api/user/user-types"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface User {
    id: number
    username: string
    role: RoleEnum
    access: string
    refresh: string
  }

  interface Session {
    user: User
  }
}
