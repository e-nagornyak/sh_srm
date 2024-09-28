"use client"

import { useState } from "react"
import {
  orderShipmentProvidersMap,
  type OrderShipmentProvider,
} from "@/constants/order/order-shipments-providers"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

interface OrderShipmentsProvidersProps {}

export function OrderShipmentsProviders(props: OrderShipmentsProvidersProps) {
  const [activeProvider, setActiveProvider] =
    useState<null | OrderShipmentProvider>(null)
  const [showAll, setShowAll] = useState<boolean>(false)

  const showCount = 5

  const providers = showAll
    ? orderShipmentProvidersMap
    : orderShipmentProvidersMap?.slice(0, showCount)

  const handleShowMoreToggle = () => setShowAll(!showAll)

  return (
    <div className="space-y-3">
      <div className={"flex flex-wrap gap-2 pt-2"}>
        {providers?.map((provider) => (
          <Button
            key={provider?.key}
            onClick={() => setActiveProvider(provider)}
            className={cn(
              "border-highlight text-highlight hover:bg-highlight/70",
              {
                "bg-highlight text-white dark:text-black":
                  activeProvider?.key === provider?.key,
              }
            )}
            variant="outline"
            size="sm"
          >
            {provider?.displayName}
          </Button>
        ))}
        {orderShipmentProvidersMap?.length > 5 && (
          <Button
            onClick={handleShowMoreToggle}
            className={"gap-2 border"}
            variant={showAll ? "default" : "outline"}
            size="sm"
          >
            {showAll ? "hide" : "show"} others
            <ChevronDown className={showAll ? "rotate-180" : ""} size="15" />
          </Button>
        )}
      </div>
      <Separator />
      {activeProvider?.controller({})}
    </div>
  )
}
