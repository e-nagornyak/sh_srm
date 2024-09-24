"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

import { providersMap, type ShipmentProvider } from "./shipments-providers"

interface OrderViewShipmentsProvidersProps {}

export function OrderViewShipmentsProviders(
  props: OrderViewShipmentsProvidersProps
) {
  const [activeProvider, setActiveProvider] = useState<null | ShipmentProvider>(
    null
  )
  const [showAll, setShowAll] = useState<boolean>(false)

  const showCount = 5

  const providers = showAll ? providersMap : providersMap?.slice(0, showCount)

  const handleShowMoreToggle = () => setShowAll(!showAll)

  return (
    <div className="space-y-3">
      <div className={"flex flex-wrap gap-2 pt-2"}>
        {providers?.map((provider) => (
          <Button
            onClick={() => setActiveProvider(provider)}
            className="border-highlight text-highlight hover:bg-highlight/70"
            variant="outline"
            size="sm"
          >
            {provider?.displayName}
          </Button>
        ))}
        {providersMap?.length > 5 && (
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
