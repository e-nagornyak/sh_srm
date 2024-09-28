import { Fragment, useState } from "react"
import {
  orderStatuses,
  type OrderStatusItem,
} from "@/constants/order/order-statuses"
import { ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Text } from "@/components/ui/text"

interface OrderStatusSelectorProps {}

export function OrderStatusSelector(props: OrderStatusSelectorProps) {
  const [open, setOpen] = useState(false)

  const [status, setStatus] = useState<OrderStatusItem | null>(null)

  const handleSelectStatus = (status: OrderStatusItem) => () => {
    setStatus(status)
    setOpen(false)
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger
        className="[&[data-state=open]>svg]:rotate-180"
        asChild
      >
        <Button size="sm" className="group w-44 justify-between uppercase">
          <div className="flex max-w-full items-center gap-2 overflow-hidden">
            {status && (
              <div
                className={`size-4 shrink-0 rounded border border-border ${status?.color}`}
              />
            )}
            <Text size="xs" color="reverse" className="truncate">
              {status ? status?.displayName : "NO STATUS YET"}
            </Text>
          </div>
          <ChevronDown className="shrink-0" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom">
        <Command>
          <CommandInput autoFocus />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            {orderStatuses.map((group) => (
              <Fragment key={group?.group}>
                <CommandGroup heading={group?.group}>
                  {group?.items?.map((item) => (
                    <CommandItem
                      onSelect={handleSelectStatus(item)}
                      className="flex cursor-pointer items-center gap-2"
                      key={item?.key}
                    >
                      <div
                        className={`size-4 rounded border border-border ${item?.color}`}
                      />
                      {item?.displayName}
                    </CommandItem>
                  ))}
                </CommandGroup>
                <CommandSeparator />
              </Fragment>
            ))}
          </CommandList>
        </Command>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
