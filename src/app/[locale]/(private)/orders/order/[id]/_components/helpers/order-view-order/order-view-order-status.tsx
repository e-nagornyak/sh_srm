import * as React from "react"
import {
  AlignJustify,
  ChevronDown,
  CircleHelp,
  Flag,
  Printer,
} from "lucide-react"

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

interface OrderViewOrderStatusProps {
  order: Order
}

export function OrderViewOrderStatus({ order }: OrderViewOrderStatusProps) {
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
          <TableCell>TODO ADD SEARCH HERE</TableCell>
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
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="sm">
                      <Printer size="15" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    Print - send directly to the printer
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </TableCell>
        </TableRow>
        <TableRow className="border-0">
          <TableCell className="pb-0 text-start">Order date:</TableCell>
          <TableCell className="pb-0 text-start">1</TableCell>
        </TableRow>
        <TableRow className="border-0">
          <TableCell className="py-0 text-start">Date in status:</TableCell>
          <TableCell className="py-0 text-start">1</TableCell>
        </TableRow>
        <TableRow className="border-b border-gray-700">
          <TableCell className="pt-0 text-start">Stock levels:</TableCell>
          <TableCell className="pt-0 text-start">1</TableCell>
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
