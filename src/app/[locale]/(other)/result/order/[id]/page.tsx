import { OrderConfirmation } from "@/app/[locale]/(other)/result/order/[id]/_components/PublicOrderConfirmation"
import OrderHistory from "@/app/[locale]/(other)/result/order/[id]/_components/PublicOrderHistory"

interface PageProps {}

export default function Page(props: PageProps) {
  return (
    <div className="mx-auto max-w-5xl space-y-6 pt-6">
      <OrderConfirmation />
      <OrderHistory />
    </div>
  )
}
