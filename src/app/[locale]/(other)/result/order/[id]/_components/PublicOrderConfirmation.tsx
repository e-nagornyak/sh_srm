"use client"

import { CreditCardIcon, Download, TruckIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function OrderConfirmation() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">MCP Siarhei Sheibak</h1>
        <Button onClick={handlePrint} className="flex items-center">
          <Download className="mr-2" size={18} />
          Download Invoice
        </Button>
      </div>

      <Card className="">
        <CardHeader>
          <CardTitle>Order Summary #69991796</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">#</TableHead>
                <TableHead>Product/Service Name</TableHead>
                <TableHead className="text-right">Quantity</TableHead>
                <TableHead className="text-right">Price per unit</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>
                  LCD screen for Apple iPhone 11 with replaced IC
                </TableCell>
                <TableCell className="text-right">1</TableCell>
                <TableCell className="text-right">66.70 PLN</TableCell>
              </TableRow>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>ERL I-Post Locker 24/7 - 25 kg</TableCell>
                <TableCell className="text-right">1</TableCell>
                <TableCell className="text-right">9.99 PLN</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="mt-4 text-right font-bold">
            Total Order Price: 76.69 PLN
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center">
                <TruckIcon className="mr-2" size={18} />
                <span>Status: Ready for Shipment</span>
              </div>
              <div>Order Number: 69991796</div>
              <div>Sale Date: 26 September 16:12</div>
              <div>
                <CreditCardIcon className="mr-2 inline" size={18} />
                Payment Method: PayU
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Delivery Address</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div>WWO71M - InPost Locker 24/7</div>
              <div>Powstańców Śląskich St. 18C</div>
              <div>01-381 Warsaw</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
