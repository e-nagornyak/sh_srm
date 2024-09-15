import { RoleEnum } from "@/lib/api/user/user-types"

const RoleArray: RoleEnum[] = Object.values(RoleEnum)?.map((role) => role)

export { RoleArray }
