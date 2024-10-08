import * as React from "react"
import { type PropsWithChildren } from "react"

import { AllegroOrdersGroupsController } from "@/components/@controllers/allegro/orders-groups/allegro-orders-groups-controller"

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col gap-2 px-2 py-4 xl:flex-row">
      <AllegroOrdersGroupsController />
      {children}
    </div>
  )
}
