"use client"

import * as z from "zod"

import { password, role, username } from "./shared"

type CreateUserFormData = z.infer<typeof createUserFormSchema>

const createUserFormSchema = z.object({
  username,
  password,
  role,
})

type EditUserFormData = z.infer<typeof editUserFormSchema>

const editUserFormSchema = z.object({
  username,
  role,
})

export {
  type CreateUserFormData,
  type EditUserFormData,
  createUserFormSchema,
  editUserFormSchema,
}
