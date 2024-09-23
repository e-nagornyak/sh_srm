import * as React from "react"
import { Pen, Phone, RefreshCcw } from "lucide-react"

import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"

interface OrderViewOrderBasicInformationProps {
  order: Order
}

export function OrderViewOrderInfo({
  order,
}: OrderViewOrderBasicInformationProps) {
  return (
    <Table>
      <TableBody>
        <TableRow className="border-b border-gray-700">
          <TableCell className="w-52">
            <div className="flex items-center justify-between">
              Paid:
              <span className="rounded-md bg-green-600 p-0.5">
                {order?.payment?.paid_amount} {order?.payment?.currency}
              </span>
            </div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-1">
              <span>
                of {order?.total_to_pay} {order?.currency}
              </span>
              <Button size="icon" variant="ghost">
                <RefreshCcw size="15" />
              </Button>
            </div>
          </TableCell>
          <TableCell className="w-28">
            <Button size="xs">
              <Pen size="15" /> Edit payment
            </Button>
          </TableCell>
        </TableRow>
        {/**/}
        <TableRow className="border-0">
          <TableCell className="pb-0 text-start">Client (login):</TableCell>
          <TableCell className="pb-0 text-start">
            {order?.buyer?.login}
          </TableCell>
        </TableRow>
        <TableRow className="border-0">
          <TableCell className="py-0 text-start">E-mail:</TableCell>
          <TableCell className="truncate py-0 text-start">
            {order?.buyer?.email || "..."}
          </TableCell>
        </TableRow>
        <TableRow className="border-0">
          <TableCell className="py-0 text-start">Phone number:</TableCell>
          <TableCell className="py-0 text-start">
            <div className="flex items-center gap-3">
              {order?.buyer?.phone_number || "..."}
              {order?.buyer?.phone_number && (
                <a
                  href={`tel:${order?.buyer?.phone_number}`}
                  className="cursor-pointer text-highlight"
                >
                  <Phone size="15" />
                </a>
              )}
            </div>
          </TableCell>
        </TableRow>
        <TableRow className="border-b border-gray-700">
          <TableCell className="pt-0 text-start">Order source:</TableCell>
          <TableCell className="pt-0 text-start">?</TableCell>
        </TableRow>
        {/**/}
        <TableRow className="border-0">
          <TableCell className="content-start pb-0 text-start">
            Shipping method:
          </TableCell>
          <TableCell className="pb-0 text-start">
            {order?.delivery?.method}
          </TableCell>
        </TableRow>
        <TableRow className="border-0">
          <TableCell className="py-0 text-start">Shipping price:</TableCell>
          <TableCell className="py-0 text-start">
            {order?.delivery?.cost
              ? `${order?.delivery?.cost} ${order?.currency}`
              : "..."}
          </TableCell>
        </TableRow>
        <TableRow className="border-b border-gray-700">
          <TableCell className="pt-0 text-start">Payment method:</TableCell>
          <TableCell className="pt-0 text-start">
            {order?.payment?.provider}
          </TableCell>
        </TableRow>
        {/**/}
        <TableRow className="border-0">
          <TableCell className="pb-0 text-start">Additional field 1:</TableCell>
          <TableCell className="pb-0 text-start">...</TableCell>
        </TableRow>
        <TableRow className="border-0">
          <TableCell className="py-0 text-start">Additional field 2:</TableCell>
          <TableCell className="py-0 text-start">...</TableCell>
        </TableRow>
        <TableRow className="border-0">
          <TableCell className="py-0 text-start">VIES/VAT PL:</TableCell>
          <TableCell className="py-0 text-start">...</TableCell>
        </TableRow>
        <TableRow className="border-0">
          <TableCell className="py-0 text-start">Comments:</TableCell>
          <TableCell className="py-0 text-start">...</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
