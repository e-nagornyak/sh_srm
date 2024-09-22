import { Backpack, Printer } from "lucide-react"

import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Title } from "@/components/ui/title"

interface OrderViewOrderProps {
  order: Order
}

export function OrderViewOrder({ order }: OrderViewOrderProps) {
  return (
    <Card>
      <CardContent>
        <div className="flex w-full items-center justify-between">
          <Title size="xs">Order information</Title>
          <div className="space-x-2">
            <Button className="gap-1" size="xs">
              <Printer size="12" />
              Printouts and exports
            </Button>
            <Button className="gap-1" size="xs">
              <Backpack size="12" />
              Park
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
