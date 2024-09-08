"use client"

import { RegisterForm } from "@/components/common/auth/RegisterForm"

export function RegisterController() {
  const onSubmit = (data: any) => {}

  return (
    <div className="">
      RegisterController
      <RegisterForm onSubmit={onSubmit} />
    </div>
  )
}
