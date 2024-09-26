import { redirect } from "next/navigation"

import { RoutePaths } from "@/config/routes"
import { getUserApi } from "@/lib/api/user/user-api"
import type { User } from "@/lib/api/user/user-types"
import { UserEditController } from "@/components/controllers/users/user/user-edit-controller"

interface PageProps {
  params: {
    id: string
  }
}

export default async function Page({ params: { id } }: PageProps) {
  const user = await getUserApi("server").getUserById(Number(id))

  if (!user) {
    redirect(RoutePaths?.private.user.list)
  }

  return <UserEditController user={user as User} />
}
