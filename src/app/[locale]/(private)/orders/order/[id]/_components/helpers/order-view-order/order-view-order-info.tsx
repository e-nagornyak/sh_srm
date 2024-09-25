"use client"

import { useState } from "react"
import { Phone } from "lucide-react"

import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { OrderViewOrderPaidRow } from "@/app/[locale]/(private)/orders/order/[id]/_components/helpers/order-view-order/order-view-order-paid-row"
import { OrderViewOrderPaidRowEdit } from "@/app/[locale]/(private)/orders/order/[id]/_components/helpers/order-view-order/order-view-order-paid-row-edit"

interface OrderViewOrderBasicInformationProps {
  order: Order
}

export function OrderViewOrderInfo({
  order,
}: OrderViewOrderBasicInformationProps) {
  const [isEditPaymentMode, setIsEditPaymentMode] = useState(false)

  const changePaymentMode = () => setIsEditPaymentMode(!isEditPaymentMode)

  return (
    <Table>
      <TableBody>
        {isEditPaymentMode ? (
          <OrderViewOrderPaidRowEdit
            order={order}
            changePaymentMode={changePaymentMode}
          />
        ) : (
          <OrderViewOrderPaidRow
            changePaymentMode={changePaymentMode}
            order={order}
          />
        )}
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
