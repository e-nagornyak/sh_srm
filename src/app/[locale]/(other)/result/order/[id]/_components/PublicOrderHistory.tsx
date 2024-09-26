import { ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const statusUpdates = [
  { date: "September 26 16:13", status: "Ready for shipment" },
  {
    date: "September 26 16:13",
    status:
      "Parcel erli|Parcel Locker - delivery status change: Registered with courier",
  },
  { date: "September 26 16:13", status: "InPost" },
  { date: "September 26 16:13", status: "New order received" },
]

export default function OrderHistory() {
  return (
    <Card className="mx-auto w-full">
      <CardHeader>
        <CardTitle>Messages and History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {statusUpdates.map((update, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="size-4 rounded-full bg-blue-500"></div>
              <div className="flex-1 rounded border border-border bg-card p-2 text-card-foreground">
                <p className="text-sm font-medium">
                  {update.date} - Status changed to: {update.status}
                </p>
              </div>
            </div>
          ))}

          <Card className="mt-4">
            <CardContent className="p-4">
              <div className="mb-2 flex items-center space-x-2">
                <ShoppingCart className="text-blue-500" />
                <h3 className="font-semibold">Seller</h3>
                <p className="text-sm text-gray-500">
                  September 26 16:13 - Thank you for your purchase
                </p>
              </div>
              <p className="mb-2">Hello K***** K*******,</p>
              <p className="mb-2">
                Thank you for placing an order in our store.
              </p>
              <p className="mb-2">The order includes the following products:</p>
              <p className="mb-4">
                1x: LCD screen for Apple iPhone 11 with replaceable IC
                (33357_11680303101)
              </p>
              <p className="mb-2 text-sm">
                All information related to your order, including progress on its
                fulfillment, can be checked at:
              </p>
              <a
                href="https://orders-e.baselinker.com/69991796/xkcxs5u5Sw/"
                className="text-sm text-blue-500 hover:underline"
              >
                https://orders-e.baselinker.com/69991796/xkcxs5u5Sw/
              </a>
              <p className="mt-4 text-sm">
                This message is generated automatically, please do not reply.
                Preferred contact is through the form available on the order
                page.
              </p>
              <p className="mt-2">Best regards</p>
            </CardContent>
          </Card>
        </div>
        <Button className="mt-4 w-full">Send Message</Button>
      </CardContent>
    </Card>
  )
}
