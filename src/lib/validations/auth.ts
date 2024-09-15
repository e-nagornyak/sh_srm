"use client"

import * as z from "zod"

import { password, username } from "./shared"

type loginFormData = z.infer<typeof loginFormSchema>

const loginFormSchema = z.object({
  username,
  password,
})

export { type loginFormData, loginFormSchema }
