import * as z from "zod"

import { RoleEnum } from "@/lib/api/user/user-types"

const email = z.string().trim().email()
const password = z.string().trim().min(3).max(32)
const recaptcha = z.string().min(1)
const username = z.string().trim().min(3)
const role = z.nativeEnum(RoleEnum)

export { email, recaptcha, role, username, password }
