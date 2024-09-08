"use client"

import * as z from "zod"

const email = z.string().trim().email()
const recaptcha = z.string().min(1)

const password = z.string().trim().min(3).max(32)
const username = z.string().trim().min(3)

type loginFormData = z.infer<typeof loginFormSchema>

const loginFormSchema = z.object({
  username,
  password,
})

type registerFormData = z.infer<typeof registerFormSchema>

const registerFormSchema = z.object({
  username,
  password,
})

export {
  type registerFormData,
  type loginFormData,
  loginFormSchema,
  registerFormSchema,
}
