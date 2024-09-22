import * as React from "react"
import {
  Backpack,
  BoxSelect,
  ChevronDown,
  CornerDownLeft,
  Files,
  Printer,
  Scan,
  Trash,
  User,
} from "lucide-react"

import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Title } from "@/components/ui/title"
import { ButtonWithDropdown } from "@/components/shared/button-with-dropdown"

interface OrderViewOrderProps {
  order: Order
}

export function OrderViewOrder({ order }: OrderViewOrderProps) {
  return (
    <Card>
      <CardContent className="flex w-full items-center justify-between">
        <Title size="xs">Order information</Title>
        <div className="flex space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger className="group" asChild>
              <Button className="gap-1" size="xs">
                <Printer size="12" />
                Printouts and exports
                <ChevronDown
                  size="12"
                  className="group-data-[state=open]:rotate-180"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem className="cursor-pointer">
                Return protocol [PDF].
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <ButtonWithDropdown
            buttonProps={{ size: "xs" }}
            buttonContent={
              <>
                <Backpack size="12" />
                Park
              </>
            }
            triggerProps={{ size: "xs" }}
            dropdownContent={
              <>
                <DropdownMenuItem asChild>
                  <Button
                    size="sm"
                    className="justify-start gap-2"
                    variant="ghost"
                  >
                    Add products from the storage...
                  </Button>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Button
                    size="sm"
                    className="justify-start gap-2"
                    variant="ghost"
                  >
                    Add product manually...
                  </Button>
                </DropdownMenuItem>
              </>
            }
          />
          <DropdownMenu>
            <DropdownMenuTrigger className="group" asChild>
              <Button className="gap-1" size="xs">
                Actions
                <ChevronDown
                  size="12"
                  className="group-data-[state=open]:rotate-180"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Button className="gap-2" size="sm" variant="ghost">
                  <Trash size="20" />
                  Delete order
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button className="gap-2" size="sm" variant="ghost">
                  <User size="20" />
                  Create a new order for this customer
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button className="gap-2" size="sm" variant="ghost">
                  <Files size="20" />
                  Create a copy of the order
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button className="gap-2" size="sm" variant="ghost">
                  <Scan size="20" />
                  Divide order
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button className="gap-2" size="sm" variant="ghost">
                  <CornerDownLeft size="20" />
                  Create return
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardContent>
    </Card>
  )
}
