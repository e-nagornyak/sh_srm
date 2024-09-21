import { format } from "date-fns"
import { Camera, MoreVertical } from "lucide-react"

import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface OrderViewProductsProps {
  order: Order
}

export function OrderViewProducts({ order }: OrderViewProductsProps) {
  const products = order?.products
  return (
    <Card>
      <CardContent className="overflow-auto">
        <Table className="min-w-[800px]">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
                <Camera className="mx-auto" />
              </TableHead>
              <TableHead className="w-[100px]">PROD. ID</TableHead>
              <TableHead className="w-[300px]">PRODUCT NAME</TableHead>
              <TableHead className="text-right">QUANTITY</TableHead>
              <TableHead className="text-right">PRICE</TableHead>
              <TableHead className="text-right">TAX</TableHead>
              <TableHead className="text-right">WEIGHT</TableHead>
              <TableHead className="text-right">DATE</TableHead>
              <TableHead className="w-[100px] text-right">ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id} className="border-b border-gray-700">
                <TableCell>
                  <div className="size-[40px] rounded bg-gray-300"></div>
                </TableCell>
                <TableCell className="font-medium">{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell className="text-right">{product.quantity}</TableCell>
                <TableCell className="text-right">
                  {product?.price} {order?.currency}
                </TableCell>
                <TableCell className="text-right">
                  {product.tax_rate}%
                </TableCell>
                <TableCell className="text-right">
                  {/*{product.weight.toFixed(3)}*/}
                </TableCell>
                <TableCell className="text-right">
                  {format(new Date(), "dd.MM.yyyy HH:mm")}
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="size-4" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
