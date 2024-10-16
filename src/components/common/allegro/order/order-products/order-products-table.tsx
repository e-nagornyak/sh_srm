import * as React from "react"
import { Camera, LayoutList, MoreVertical, Pen, Trash } from "lucide-react"

import { RoutePaths } from "@/config/routes"
import { type Order } from "@/lib/api/allegro/orders/orders-types"
import { decryptUrl } from "@/lib/crypto-js/decrypt-url"
import { encryptUrl } from "@/lib/crypto-js/encrypt-url"
import { Button } from "@/components/ui/button"
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { HoverImage } from "@/components/shared/hover-image"

interface OrderProductsTableProps {
  order: Order
}

export function OrderProductsTable({ order }: OrderProductsTableProps) {
  const products = order?.products

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-16">
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger className="w-full">
                  <Camera className="mx-auto" />
                </TooltipTrigger>
                <TooltipContent>
                  You can turn off product thumbnails
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </TableHead>
          <TableHead>ID</TableHead>
          <TableHead>NAME</TableHead>
          <TableHead>QUANTITY</TableHead>
          <TableHead>PRICE</TableHead>
          <TableHead>TAX</TableHead>
          <TableHead>WEIGHT</TableHead>
          <TableHead>DATE</TableHead>
          <TableHead>ACTIONS</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products?.map((product) => (
          <TableRow key={product?.id} className="border-b border-gray-700">
            <TableCell>
              <HoverImage
                src={product?.images || "/images/default/default_image.svg"}
              />
            </TableCell>
            <TableCell className="font-medium">
              <Link
                href={RoutePaths.private.products.product(product?.id).view}
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
            <TableCell>-</TableCell>
            <TableCell>-</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger disabled asChild>
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
