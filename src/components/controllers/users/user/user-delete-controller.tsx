"use client"

import { toast } from "sonner"

import { routePaths } from "@/config/routes"
import { getUserApi } from "@/lib/api/user/user-api"
import { type User } from "@/lib/api/user/user-types"
import { showErrorToast } from "@/lib/handle-error"
import { useLazyRouter } from "@/hooks/use-lazy-router"
import { Button } from "@/components/ui/button"
import { Title } from "@/components/ui/title"
import { FormWrapper } from "@/components/shared/FormWrapper"

interface UserDeleteControllerProps {
  user: User
}

export function UserDeleteController({ user }: UserDeleteControllerProps) {
  const { lazyPush, lazyBack, isPending } = useLazyRouter()

  const addUserHandler = async () => {
    try {
      await getUserApi("client").deleteUser(user?.id)
      lazyPush(routePaths.private.user.list)
      toast.info("User has been deleted")
    } catch (e) {
      showErrorToast(e)
    }
  }

  return (
    <FormWrapper wrapperClassName="border border-red-500">
      <div className="space-y-6 text-center">
        <Title>
          Are you sure you want to delete <strong>{user?.username}</strong>?
        </Title>
        <div className="flex gap-6">
          <Button
            onClick={lazyBack}
            disabled={isPending}
            size="lg"
            variant="outline"
            className="w-full"
          >
            Cancel
          </Button>
          <Button
            disabled={isPending}
            onClick={addUserHandler}
            size="lg"
            variant="destructive"
            className="w-full"
          >
            Confirm
          </Button>
        </div>
      </div>
    </FormWrapper>
  )
}
