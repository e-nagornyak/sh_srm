import React, { type ReactNode } from "react"
import { LibraryBig, PanelsTopLeft, ShoppingCart } from "lucide-react"

import { routePaths } from "@/config/routes"

interface ItemBase {
  icon: ReactNode
  title: string
  disabled?: boolean
}

interface ItemWithHref extends ItemBase {
  href: string
  items?: never // items cannot be if there is href
}

interface ItemWithItems extends ItemBase {
  href?: never // href cannot be if there are items
  activePath: string
  items: Omit<SidebarMainItem, "icon">[]
}

export type SidebarMainItem = ItemWithHref | ItemWithItems

export const sidebarConfig: {
  main: SidebarMainItem[]
} = {
  main: [
    {
      title: "Home page",
      icon: <PanelsTopLeft size="18" />,
      href: routePaths.private.dashboard,
    },
    {
      title: "Orders",
      icon: <ShoppingCart size="18" />,
      activePath: routePaths.private.orders.base,
      items: [
        {
          title: "Order list",
          href: routePaths.private.orders.list,
        },
      ],
    },
    {
      title: "Products",
      icon: <LibraryBig size="18" />,
      activePath: routePaths.private.products.base,
      items: [
        {
          title: "Product list",
          href: "#",
        },
      ],
    },
  ],
}
