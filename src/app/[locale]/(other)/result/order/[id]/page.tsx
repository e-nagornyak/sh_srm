import { OrderConfirmation } from "@/app/[locale]/(other)/result/order/[id]/_components/PublicOrderConfirmation"

interface PageProps {}

export default function Page(props: PageProps) {
  return (
    <div className="mx-auto max-w-5xl space-y-6 pt-6">
      <OrderConfirmation />
    </div>
  )
}
