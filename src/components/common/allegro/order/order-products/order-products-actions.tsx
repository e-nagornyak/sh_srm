import * as React from "react"
import { ChevronDown, Plus, Wrench } from "lucide-react"

import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ButtonWithDropdown } from "@/components/shared/button-with-dropdown"

interface OrderProductsActionsProps {
  onAddProductsToOrder: () => void
}

export function OrderProductsActions({
  onAddProductsToOrder,
}: OrderProductsActionsProps) {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-2 sm:flex-row">
      <ButtonWithDropdown
        wrapperClassName="w-full"
        buttonProps={{
          disabled: true,
          className: "max-sm:w-full",
          onClick: onAddProductsToOrder,
        }}
        buttonContent={
          <>
            <Plus size="15" />
            Add products to order...
          </>
        }
        triggerProps={{
          disabled: true,
        }}
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
          <Button disabled size="sm" className="gap-2 max-sm:w-full">
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
