import React from "react"
import { ArrowDown, ChevronDown, Star } from "lucide-react"

import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { Title } from "@/components/ui/title"

interface OrderViewBayerInformationProps {
  order: Order
}

export function OrderViewBayer({ order }: OrderViewBayerInformationProps) {
  const bayer = order?.buyer
  const bayerFullName = `${bayer?.first_name || ""} ${bayer?.last_name || ""}`

  return (
    <Card>
      <CardContent className="flex h-14 items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="gap-2">
              <Star />
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="min-w-fit">
            {[
              "text-yellow-600 fill-yellow-600",
              "text-red-600 fill-red-600",
              "text-green-600 fill-green-600",
              "text-blue-600 fill-blue-600",
              "text-pink-6000 fill-pink-6000",
            ]?.map((colorClass) => (
              <DropdownMenuItem
                key={colorClass}
                className={"w-fit cursor-pointer"}
              >
                <Star className={colorClass} />
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <Title size="sm">Order {order?.id}</Title>
        <Separator orientation="vertical" />
        <Title size="sm">{bayerFullName}</Title>
        <Button className="ml-auto mr-0">Return to the orders list</Button>
      </CardContent>
    </Card>
  )
}
