"use client"

import { signIn } from "next-auth/react"

import { showErrorToast } from "@/lib/handle-error"
import type { loginFormData } from "@/lib/validations/auth"
import { Title } from "@/components/ui/Title"
import { LoginForm } from "@/components/common/auth/LoginForm"

export function LoginController() {
  const onSubmit = async (data: loginFormData) => {
    try {
      console.log(data)
      await signIn("credentials", { ...data })
    } catch (e) {
      console.log(e)
      showErrorToast(e)
    }
  }

  return (
    <div className="space-y-8">
      <Title size="md">Sign in to the seller's panel</Title>
      <LoginForm onSubmit={onSubmit} />
    </div>
  )
}
