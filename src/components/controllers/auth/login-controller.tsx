"use client"

import { LoginForm } from "@/components/common/auth/LoginForm"

export function LoginController() {
  const onSubmit = (data: any) => {}

  return (
    <div className="">
      LoginController
      <LoginForm onSubmit={onSubmit} />
    </div>
  )
}
