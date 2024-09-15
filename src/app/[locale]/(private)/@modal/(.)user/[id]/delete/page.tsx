import { UserDeleteController } from "@/components/controllers/users/user/user-delete-controller"
import { InterceptedModal } from "@/components/shared/interceptedModal"

interface PageProps {}

export default function Page(props: PageProps) {
  return (
    <InterceptedModal>
      <UserDeleteController />
    </InterceptedModal>
  )
}
