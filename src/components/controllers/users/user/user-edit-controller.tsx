"use client"

import { toast } from "sonner"

import { routePaths } from "@/config/routes"
import { getUserApi } from "@/lib/api/user/user-api"
import { type User } from "@/lib/api/user/user-types"
import { showErrorToast } from "@/lib/handle-error"
import type { EditUserFormData } from "@/lib/validations/user"
import { useLazyRouter } from "@/hooks/use-lazy-router"
import { EditUserForm } from "@/components/common/users/user/EditUserForm"
import { FormWrapper } from "@/components/shared/FormWrapper"

interface UserEditControllerProps {
  user: User
}

export function UserEditController({ user }: UserEditControllerProps) {
  const { lazyPush, isPending } = useLazyRouter()

  const editUserHandler = async ({
    username,
    password,
    role,
  }: EditUserFormData) => {
    try {
      await getUserApi("client").updateUser(user?.id, {
        role,
        username,
        password: "password",
      })
      lazyPush(routePaths.private.user.list)
      toast.info("User has been updated")
    } catch (e) {
      showErrorToast(e)
    }
  }

  return (
    <FormWrapper title={`Edit the ${user?.username || "user"}`}>
      <EditUserForm
        defaultValues={{
          username: user?.username,
          password: "",
          role: user?.role,
        }}
        isPending={isPending}
        onSubmit={editUserHandler}
      />
    </FormWrapper>
  )
}
