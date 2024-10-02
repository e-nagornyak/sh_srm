"use client"

import { orderPersonalEvents } from "@/constants/order/order-personal-events"
import { format } from "date-fns"
import {
  AlignJustify,
  Check,
  ChevronDown,
  CircleHelp,
  Flag,
  Printer,
  Truck,
} from "lucide-react"

import { RoutePaths } from "@/config/routes"
import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link } from "@/components/ui/link"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { OrderStatusSelector } from "@/components/common/allegro/order/order-info/order-status/order-status-selector"
import { ButtonWithDropdown } from "@/components/shared/button-with-dropdown"
import { ComponentWithTooltip } from "@/components/shared/component-with-tooltip"

interface OrderStatusProps {
  order: Order
}

export function OrderStatus({ order }: OrderStatusProps) {
  return (
    <Table>
      <TableBody>
        <TableRow className="border-0">
          <TableCell className="w-32 sm:w-52">
            <div className="flex items-center gap-0.5">
              <Flag size="15" />
              Status:
            </div>
          </TableCell>
          <TableCell colSpan={2}>
            <div className="flex flex-col gap-2 sm:flex-row">
              <OrderStatusSelector disabled />
              <ButtonWithDropdown
                buttonContent={"Change"}
                buttonProps={{ disabled: true }}
                triggerProps={{ disabled: true }}
                dropdownContent={
                  <ComponentWithTooltip
                    side="left"
                    trigger={
                      <Button variant="ghost" size="sm" className="text-start">
                        Change without triggering
                        <br />
                        automatic actions
                      </Button>
                    }
                    text="Move without running any defined automatic actions (such as sending an e-mail)."
                  />
                }
              />
            </div>
          </TableCell>
        </TableRow>
        {/**/}
        <TableRow className="border-0">
          <TableCell className="pb-0 text-start">Receipt:</TableCell>
          <TableCell colSpan={2} className="pb-0 text-start">
            <Button disabled size="sm">
              Create receipt
            </Button>
          </TableCell>
        </TableRow>
        <TableRow className="border-b border-gray-700">
          <TableCell className="text-start">Invoice:</TableCell>
          <TableCell colSpan={2} className="text-start">
            <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button disabled size="sm">
                    Issue an invoice
                    <ChevronDown size="15" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Button size="xs" variant="ghost">
                      Invoice - default
                    </Button>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Button size="xs" variant="ghost">
                      Invoice - VAT OSS
                    </Button>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Button size="xs" variant="ghost">
                      Invoice - WTD
                    </Button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button disabled size="sm">
                Pro forma
              </Button>
              <ComponentWithTooltip
                trigger={
                  <Button disabled size="sm">
                    <Printer size="15" />
                  </Button>
                }
                text="Print - send directly to the printer"
              />
            </div>
          </TableCell>
        </TableRow>
        <TableRow className="border-0">
          <TableCell className="whitespace-nowrap pb-0 text-start">
            Order date:
          </TableCell>
          <TableCell colSpan={2} className="pb-0 text-start">
            {order?.created_at
              ? format(order?.created_at, "dd.MM.yyyy, HH:mm")
              : "-"}
          </TableCell>
        </TableRow>
        <TableRow className="border-0">
          <TableCell className="whitespace-nowrap py-0 text-start">
            Date in status:
          </TableCell>
          <TableCell colSpan={2} className="py-0 text-start">
            {order?.updated_at
              ? format(order?.updated_at, "dd.MM.yyyy, HH:mm")
              : "-"}
          </TableCell>
        </TableRow>
        <TableRow className="border-b border-gray-700">
          <TableCell className="pt-0 text-start">Stock levels:</TableCell>
          <TableCell colSpan={2} className="pt-0 text-start">
            <button disabled className="flex items-center gap-1">
              <Check size="20" className="text-green-600" />
              Completed (deducted)
            </button>
          </TableCell>
        </TableRow>
        <TableRow className="border-b border-gray-700">
          <TableCell colSpan={3} className="text-start">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button disabled className="gap-2 pl-1">
                  <AlignJustify
                    size="30"
                    className="rounded-full bg-highlight p-1 text-white"
                  />
                  Personal events
                  <ChevronDown size="15" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="max-h-96 overflow-y-auto">
                {orderPersonalEvents?.map((item) => (
                  <DropdownMenuItem key={item?.key}>
                    <Button size="xs" variant="ghost" className="gap-3">
                      <Truck size="18" className={item?.color} />
                      {item?.displayName}
                    </Button>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
        <TableRow className="border-0">
          <TableCell colSpan={3} className="pt-6 text-start">
            <div className="flex items-center">
              Order information page:&nbsp;
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger>
                    <CircleHelp size="18" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-72">
                    The order page is generated automatically for each order in
                    the system. You can send a link to this page to the customer
                    so that he can see the current status of your order. You can
                    add a link to an e-mail using the appropriate tag when
                    creating an e-mail template. You can manage order pages in
                    Order Manager » Settings » Information pages.
                    <br />
                    <br />
                    The following link displays an information page with the
                    default template. If you are using additional pages for your
                    order and want to see the page in another template, open the
                    link sent in the email to the customer.
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Link
              prefetch={false}
              target="_blank"
              href={RoutePaths.getFullPath(
                RoutePaths.public.result.order(order?.id)
              )}
            >
              {RoutePaths.getFullPath(
                RoutePaths.public.result.order(order?.id)
              )}
            </Link>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
