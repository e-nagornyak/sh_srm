import * as React from "react"
import { format } from "date-fns"
import {
  Camera,
  LayoutList,
  MoreVertical,
  Pen,
  Plus,
  Trash,
  Wrench,
} from "lucide-react"

import { routePaths } from "@/config/routes"
import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link } from "@/components/ui/link"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface OrderViewProductsTableProps {
  order: Order
}

export function OrderViewProductsTable({ order }: OrderViewProductsTableProps) {
  const products = order?.products

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-16">
            <Camera className="mx-auto" />
          </TableHead>
          <TableHead>PROD. ID</TableHead>
          <TableHead>PRODUCT NAME</TableHead>
          <TableHead>QUANTITY</TableHead>
          <TableHead>PRICE</TableHead>
          <TableHead>TAX</TableHead>
          <TableHead>WEIGHT</TableHead>
          <TableHead>DATE</TableHead>
          <TableHead>ACTIONS</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product?.id} className="border-b border-gray-700">
            <TableCell className="w-16">
              <div className="mx-auto size-[40px] rounded bg-gray-300"></div>
            </TableCell>
            <TableCell className="font-medium">
              <Link
                href={routePaths.private.products.product(product?.id).view}
              >
                {product?.id}
              </Link>
            </TableCell>
            <TableCell>
              {product?.name} <Link href="#">{product?.offer_id}</Link>
            </TableCell>
            <TableCell>{product?.quantity}</TableCell>
            <TableCell>
              {product?.price} {order?.currency}
            </TableCell>
            <TableCell>{product?.tax_rate}%</TableCell>
            <TableCell>{/*{product.weight.toFixed(3)}*/}</TableCell>
            <TableCell>{format(new Date(), "dd.MM.yyyy HH:mm")}</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    className="mx-auto w-full"
                    variant="ghost"
                    size="icon"
                  >
                    <MoreVertical className="size-4" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Button className="gap-2" variant="ghost">
                      <Pen size="15" />
                      Edit
                    </Button>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Button className="gap-2" variant="ghost">
                      <Trash size="15" />
                      Delete
                    </Button>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Button className="gap-2" variant="ghost">
                      <LayoutList size="15" />
                      Stock levels history
                    </Button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
