import * as React from "react"
import {
  Backpack,
  Camera,
  ChevronDown,
  CornerDownLeft,
  Files,
  Printer,
  Scan,
  Trash,
  User,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Title } from "@/components/ui/title"
import { ButtonWithDropdown } from "@/components/shared/button-with-dropdown"

interface Props {}

export function OrderHeaderActions(props: Props) {
  return (
    <>
      <Title weight="semibold" size="xs">
        Order information
      </Title>
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
                  Pick products
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Button
                  size="sm"
                  className="justify-start gap-2"
                  variant="ghost"
                >
                  <Camera size="15" />
                  Take a photo
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
    </>
  )
}
