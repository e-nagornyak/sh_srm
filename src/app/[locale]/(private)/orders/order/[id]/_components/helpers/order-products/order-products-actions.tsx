import * as React from "react"
import { ChevronDown, Plus, Wrench } from "lucide-react"

import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ButtonWithDropdown } from "@/components/shared/button-with-dropdown"
import { OrderProductsTable } from "@/app/[locale]/(private)/orders/order/[id]/_components/helpers/order-view-products/order-products-table"

interface Props {
  order: Order
}

export function OrderProductsActions({ order }: Props) {
  return (
    <div className="flex w-full items-center justify-between">
      <ButtonWithDropdown
        buttonContent={
          <>
            <Plus size="15" />
            Add products to order...
          </>
        }
        dropdownContent={
          <>
            <DropdownMenuItem asChild>
              <Button size="sm" className="justify-start gap-2" variant="ghost">
                Add products from the storage...
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Button size="sm" className="justify-start gap-2" variant="ghost">
                Add product manually...
              </Button>
            </DropdownMenuItem>
          </>
        }
      />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="sm" className="gap-2 rounded-2xl">
            <Wrench size="15" />
            Operations on products
            <ChevronDown size="15" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex flex-col items-stretch">
          <DropdownMenuItem asChild>
            <Button size="sm" className="justify-start gap-2" variant="ghost">
              Edit
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Button size="sm" className="justify-start gap-2" variant="ghost">
              Delete
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Button size="sm" className="justify-start gap-2" variant="ghost">
              Stock levels history
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
