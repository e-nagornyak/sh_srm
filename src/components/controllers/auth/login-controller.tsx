"use client"

import { useTransition } from "react"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"

import { routePaths } from "@/config/routes"
import { showErrorToast } from "@/lib/handle-error"
import type { loginFormData } from "@/lib/validations/auth"
import { LoginForm } from "@/components/common/auth/LoginForm"
import { FormWrapper } from "@/components/shared/FormWrapper"

export function LoginController() {
  const [isPending, startTransition] = useTransition()
  const { push } = useRouter()

  const onSubmit = async (data: loginFormData) => {
    startTransition(async () => {
      try {
        const res = await signIn("credentials", { ...data, redirect: false })
        if (res?.error) {
          throw new Error(res?.error)
        }
        push(routePaths.public.home)
      } catch (e) {
        console.log(e)
        showErrorToast(e)
      }
    })
  }

  return (
    <FormWrapper withAnimationIn title="Sign in to the seller's panel">
      <LoginForm isPending={isPending} onSubmit={onSubmit} />
    </FormWrapper>
  )
}
