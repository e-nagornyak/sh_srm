import * as React from "react"
import {
  orderStatuses,
  type OrderStatusEntity,
  type OrderStatusKeys,
} from "@/constants/order/order-statuses"
import { ChevronDown } from "lucide-react"

import { type Order } from "@/lib/api/allegro/orders/orders-types"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Text } from "@/components/ui/text"

interface OrderStatusSelectorProps {
  order: Order
  disabled?: boolean
  onSelect?: (status: OrderStatusKeys) => void
}

export function OrderStatusSelector({
  order,
  onSelect,
  disabled,
}: OrderStatusSelectorProps) {
  const status = order?.status as OrderStatusKeys
  const selectedStatus = status ? orderStatuses?.[status] : null

  const [open, setOpen] = React.useState(false)

  const memoizedStatuses = React.useMemo(() => Object.values(orderStatuses), [])

  const handleSelectStatus = (status: OrderStatusKeys) => () => {
    onSelect && onSelect(status)
    setOpen(false)
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger
        className="[&[data-state=open]>svg]:rotate-180"
        asChild
      >
        <Button
          disabled={disabled}
          size="sm"
          className="group justify-between uppercase sm:w-56"
        >
          <div className="flex max-w-full items-center gap-2 overflow-hidden">
            {selectedStatus && (
              <div
                className={`size-4 shrink-0 rounded border border-border ${selectedStatus?.color}`}
              />
            )}
            <Text size="xs" color="reverse" className="truncate">
              {selectedStatus ? selectedStatus?.label : "NO STATUS YET"}
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
            {memoizedStatuses?.map((status) => (
              <CommandItem
                key={status?.key}
                onSelect={handleSelectStatus(status?.key)}
                className="flex cursor-pointer items-center gap-2"
              >
                <div
                  className={`size-4 rounded border border-border ${status?.color}`}
                />
                {status?.label}
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
