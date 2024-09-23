"use client"

import { toast } from "sonner"

import { routePaths } from "@/config/routes"
import { getUserApi } from "@/lib/api/user/user-api"
import { showErrorToast } from "@/lib/handle-error"
import type { CreateUserFormData } from "@/lib/validations/user"
import { useLazyRouter } from "@/hooks/use-lazy-router"
import { CreateUserForm } from "@/components/common/users/user/CreateUserForm"
import { FormWrapper } from "@/components/shared/form-wrapper"

export function UserAddController() {
  const { lazyPush, isPending } = useLazyRouter()

  const addUserHandler = async (data: CreateUserFormData) => {
    try {
      await getUserApi("client").createUser(data)
      lazyPush(routePaths.private.user.list)
      toast.info("User has been added")
    } catch (e) {
      showErrorToast(e)
    }
  }

  return (
    <FormWrapper title="Add the new user">
      <CreateUserForm isPending={isPending} onSubmit={addUserHandler} />
    </FormWrapper>
  )
}
