"use client"

import { useState } from "react"
import {
  AlignJustify,
  Calculator,
  Calendar,
  Check,
  ChevronDown,
  CircleHelp,
  CreditCard,
  Flag,
  Printer,
  Settings,
  Smile,
  User,
} from "lucide-react"

import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
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
import { ButtonWithDropdown } from "@/components/shared/button-with-dropdown"
import { ComponentWithTooltip } from "@/components/shared/component-with-tooltip"
import { OrderViewOrderStatusSelector } from "@/app/[locale]/(private)/orders/order/[id]/_components/helpers/order-view-order/order-view-order-status/order-view-order-status-selector"

interface OrderViewOrderStatusProps {
  order: Order
}

export function OrderViewOrderStatus({ order }: OrderViewOrderStatusProps) {
  const [isEditMode, setIsEditMode] = useState(false)

  const changeEditMode = () => setIsEditMode(!isEditMode)

  return (
    <Table>
      <TableBody>
        <TableRow className="border-0">
          <TableCell className="w-52">
            <div className="flex items-center gap-0.5">
              <Flag size="15" />
              Status:
            </div>
          </TableCell>
          <TableCell>
            <div className="flex gap-2">
              <OrderViewOrderStatusSelector />
              <ButtonWithDropdown
                buttonContent={"Change"}
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
          <TableCell className="pb-0 text-start">
            <Button size="sm">Create receipt</Button>
          </TableCell>
        </TableRow>
        <TableRow className="border-b border-gray-700">
          <TableCell className="text-start">Invoice:</TableCell>
          <TableCell className="text-start">
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="sm">
                    Issue an invoice
                    <ChevronDown size="15" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>1</DropdownMenuItem>
                  <DropdownMenuItem>2</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button size="sm">Pro forma</Button>
              <ComponentWithTooltip
                trigger={
                  <Button size="sm">
                    <Printer size="15" />
                  </Button>
                }
                text="Print - send directly to the printer"
              />
            </div>
          </TableCell>
        </TableRow>
        <TableRow className="border-0">
          <TableCell className="pb-0 text-start">Order date:</TableCell>
          <TableCell className="pb-0 text-start">
            {new Date()?.toDateString()}
          </TableCell>
        </TableRow>
        <TableRow className="border-0">
          <TableCell className="py-0 text-start">Date in status:</TableCell>
          <TableCell className="py-0 text-start">
            {new Date()?.toDateString()}
          </TableCell>
        </TableRow>
        <TableRow className="border-b border-gray-700">
          <TableCell className="pt-0 text-start">Stock levels:</TableCell>
          <TableCell className="pt-0 text-start">
            <button className="flex items-center gap-1">
              <Check size="20" className="text-green-600" />
              Completed (deducted)
            </button>
          </TableCell>
        </TableRow>
        <TableRow className="border-b border-gray-700">
          <TableCell className="text-start">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="gap-2 pl-1">
                  <AlignJustify
                    size="30"
                    className="rounded-full bg-highlight p-1 text-white"
                  />
                  Personal events
                  <ChevronDown size="15" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>1</DropdownMenuItem>
                <DropdownMenuItem>2</DropdownMenuItem>
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
            <Link href="#">
              https://orders-e.baselinker.com/69555940/adskqpi8fw/
            </Link>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
