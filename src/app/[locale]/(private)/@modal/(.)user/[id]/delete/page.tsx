import { redirect } from "next/navigation"

import { routePaths } from "@/config/routes"
import { getUserApi } from "@/lib/api/user/user-api"
import { type User } from "@/lib/api/user/user-types"
import { UserDeleteController } from "@/components/controllers/users/user/user-delete-controller"
import { InterceptedModal } from "@/components/shared/interceptedModal"

interface PageProps {
  params: {
    id: string
  }
}

export default async function Page({ params: { id } }: PageProps) {
  const user = await getUserApi("server").getUserById(Number(id))

  if (!user) {
    redirect(routePaths?.user.list)
  }

  return (
    <InterceptedModal>
      <UserDeleteController user={user as User} />
    </InterceptedModal>
  )
}
