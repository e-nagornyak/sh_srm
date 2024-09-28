import { UserAddController } from "@/components/@controllers/users/user/user-add-controller"
import { InterceptedModal } from "@/components/shared/interceptedModal"

interface PageProps {}

export default function Page(props: PageProps) {
  return (
    <InterceptedModal>
      <UserAddController />
    </InterceptedModal>
  )
}
