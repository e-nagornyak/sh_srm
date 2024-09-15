"use client"

import * as z from "zod"

import { password, role, username } from "./shared"

type UserFormData = z.infer<typeof userFormSchema>

const userFormSchema = z.object({
  username,
  password,
  // email,
  role,
})

export { type UserFormData, userFormSchema }
