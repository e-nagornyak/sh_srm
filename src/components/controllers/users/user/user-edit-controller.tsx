"use client"

import { toast } from "sonner"

import { routePaths } from "@/config/routes"
import { getUserApi } from "@/lib/api/user/user-api"
import { type User } from "@/lib/api/user/user-types"
import { showErrorToast } from "@/lib/handle-error"
import type { EditUserFormData } from "@/lib/validations/user"
import { useLazyRouter } from "@/hooks/use-lazy-router"
import { UserForm } from "@/components/common/users/user/UserForm"
import { FormWrapper } from "@/components/shared/FormWrapper"

interface UserEditControllerProps {
  user: User
}

export function UserEditController({ user }: UserEditControllerProps) {
  const { lazyPush, isPending } = useLazyRouter()

  const addUserHandler = async (data: EditUserFormData) => {
    try {
      await getUserApi("client").createUser(data)
      lazyPush(routePaths.user.list)
      toast.info("User has been added")
    } catch (e) {
      showErrorToast(e)
    }
  }

  return (
    <FormWrapper title={`Edit the ${user?.username || "user"}`}>
      <UserForm
        defaultValues={{
          username: user?.username,
          password: "",
          role: user?.role,
        }}
        isPending={isPending}
        onSubmit={addUserHandler}
      />
    </FormWrapper>
  )
}
