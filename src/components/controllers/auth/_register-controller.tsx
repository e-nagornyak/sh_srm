"use client"

import { userAPI } from "@/lib/api/user/user-api"
import { showErrorToast } from "@/lib/handle-error"
import { type registerFormData } from "@/lib/validations/auth"
import { Title } from "@/components/ui/Title"
import { _RegisterForm } from "@/components/common/auth/_RegisterForm"

export function _registerController() {
  const onSubmit = async (data: registerFormData) => {
    try {
      const response = userAPI.createUser(data)
      console.log(response)
      // await signIn("credentials", { ...data })
    } catch (e) {
      console.log(e)
      showErrorToast(e)
    }
  }

  return (
    <div className="space-y-8">
      <Title size="md">Sign up to the seller's panel</Title>
      <_RegisterForm onSubmit={onSubmit} />
    </div>
  )
}
