"use client"

import * as React from "react"
import { orderStatuses } from "@/constants/order/order-statuses"
import {
  AlignJustify,
  ArrowDownAZ,
  ArrowUpAZ,
  ArrowUpWideNarrow,
  BaggageClaim,
  Box,
  Camera,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  CreditCard,
  Divide,
  DollarSign,
  Flag,
  Mail,
  PackageCheck,
  Plus,
  Printer,
  ScanBarcode,
  Search,
  SquareCheck,
  Star,
  StickyNote,
  Trash,
  Truck,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Text } from "@/components/ui/text"

interface TasksTableToolbarActionsProps {}

const starsMenuItems = [
  { key: "white", color: "" },
  { key: "pink", color: "text-pink-600 fill-pink-600" },
  { key: "yellow", color: "text-yellow-600 fill-yellow-600" },
  { key: "red", color: "text-red-600 fill-red-600" },
  { key: "green", color: "text-green-600 fill-green-600" },
  { key: "blue", color: "text-blue-600 fill-blue-600" },
]

const selectMenuItems = [
  {
    group: "",
    items: [
      { key: "select_all", displayName: "Select all" },
      { key: "select_starred_orders", displayName: "Select starred orders" },
      { key: "unselect_all", displayName: "Unselect all" },
      { key: "select_starred", displayName: "Select starred" },
    ],
  },
  {
    group: "On all pages",
    items: [
      { key: "select_all_2", displayName: "Select all" },
      { key: "select_starred_orders_2", displayName: "Select starred orders" },
      { key: "unselect_all_2", displayName: "Unselect all" },
      { key: "unselect_starred", displayName: "Unselect starred" },
    ],
  },
]

const sortOptions = [
  "Order ID",
  "Shop ID",
  "Order date",
  "Date in status",
  "Total price",
  "Shipping price",
  "Shipping method",
  "Status",
  "Allegro transactions",
  "Payments",
  "Name and surname",
  "Allegro Login",
  "Package number",
  "Pole dodatkowe 1",
  "Pole dodatkowe 2",
]

const sortDirections = [
  { label: "Descending", icon: <ArrowDownAZ className="size-4" /> },
  { label: "Ascending", icon: <ArrowUpAZ className="size-4" /> },
]

// Масиви для пунктів меню
const deliveryOptions = [
  { label: "InPost A", color: "fill-blue-800 text-blue-800" },
  { label: "InPost B", color: "fill-blue-700 text-blue-700" },
  { label: "InPost C", color: "fill-blue-600 text-blue-600" },
  { label: "Polecona", color: "fill-purple-600 text-purple-600" },
  { label: "Mini", color: "fill-pink-600 text-pink-600" },
  { label: "Orlen", color: "fill-green-500 text-green-500" },
  { label: "Allegro", color: "fill-gray-700 text-gray-700" },
  { label: "InPost", color: "fill-blue-500 text-blue-500" },
  { label: "DPD", color: "fill-gray-800 text-gray-800" },
  { label: "Allegro 2KG", color: "fill-blue-500 text-blue-500" },
  { label: "Allegro 3KG", color: "fill-red-500 text-red-500" },
  { label: "DPD 2KG", color: "fill-red-400 text-red-400" },
  { label: "DPD 3KG", color: "fill-red-600 text-red-600" },
  { label: "E-commerce", color: "fill-red-700 text-red-700" },
  { label: "ERLI", color: "fill-blue-700 text-blue-700" },
  { label: "ERLI Kurier", color: "fill-blue-600 text-blue-600" },
  { label: "ERLI Punkty", color: "fill-blue-800 text-blue-800" },
  { label: "BL UPS", color: "fill-purple-700 text-purple-700" },
]

const basicOptions = [
  { label: "Set payment", icon: <DollarSign className="size-4" /> },
  { label: "Delete orders", icon: <Trash className="size-4" /> },
  { label: "Merge orders", icon: <Plus className="size-4" /> },
  { label: "Divide order", icon: <Divide className="size-4" /> },
  { label: "Find similar orders", icon: <Search className="size-4" /> },
]

const allegroOptions = [
  {
    label: "Refund of Allegro commission",
    icon: <Camera className="size-4" />,
  },
  { label: "Allegro payment refund", icon: <CreditCard className="size-4" /> },
]

export function AllegroOrdersTableToolbarActions({}: TasksTableToolbarActionsProps) {
  return (
    <Card className="w-full">
      <CardContent className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex">
            <DropdownMenu>
              <DropdownMenuTrigger className="group" asChild>
                <Button variant="outline" className="gap-2">
                  <SquareCheck size="15" />
                  <ChevronDown
                    size="13"
                    className="group-data-[state=open]:rotate-180"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="min-w-fit">
                {selectMenuItems.map((group) => (
                  <DropdownMenuGroup key={`group-${group?.group}`}>
                    <DropdownMenuLabel>{group?.group}</DropdownMenuLabel>
                    {group?.items?.map((item) => (
                      <DropdownMenuItem
                        key={item?.key}
                        className={"w-fit cursor-pointer"}
                      >
                        <Text size="xs">{item?.displayName}</Text>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="group" asChild>
                <Button variant="outline" className="gap-2">
                  <Star size="15" />
                  <ChevronDown
                    size="13"
                    className="group-data-[state=open]:rotate-180"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-fit p-4">
                <DropdownMenuLabel>Mark with star</DropdownMenuLabel>
                <div className="grid grid-cols-3 gap-2 p-2">
                  {starsMenuItems?.map((el) => (
                    <Button key={el?.key} size="icon" variant="outline">
                      <Star size="20" className={el?.color} />
                    </Button>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex flex-wrap">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <Flag size="15" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="max-h-96 w-fit overflow-y-auto p-4"
              >
                {orderStatuses.map((group) => (
                  <DropdownMenuGroup key={group?.group}>
                    <DropdownMenuLabel>{group?.group}</DropdownMenuLabel>
                    {group?.items?.map((item) => (
                      <DropdownMenuItem
                        className="flex cursor-pointer items-center gap-2"
                        key={item?.key}
                      >
                        <div
                          className={`size-4 rounded border border-border ${item?.color}`}
                        />
                        {item?.displayName}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <Mail size="15" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-fit p-4">
                <DropdownMenuItem className="cursor-pointer">
                  #tag1
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  #tag2
                </DropdownMenuItem>
                <DropdownMenuGroup>
                  <DropdownMenuLabel>SMS TEMPLATES</DropdownMenuLabel>
                  <DropdownMenuItem className="cursor-pointer">
                    Thank you for your purchase
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <StickyNote size="15" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-fit p-4">
                <DropdownMenuItem className="cursor-pointer">
                  Invoice - domyślna
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Invoice - VAT OSS
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Invoice - WTD
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Pro forma
                </DropdownMenuItem>

                <DropdownMenuGroup>
                  <DropdownMenuLabel>RECEIPTS</DropdownMenuLabel>
                  <DropdownMenuItem className="cursor-pointer">
                    Receipt
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    Receipts - list of assortments
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <Mail size="15" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-fit p-4">
                <DropdownMenuItem className="cursor-pointer">
                  #tag1
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  #tag2
                </DropdownMenuItem>
                <DropdownMenuGroup>
                  <DropdownMenuLabel>SMS TEMPLATES</DropdownMenuLabel>
                  <DropdownMenuItem className="cursor-pointer">
                    Thank you for your purchase
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <Printer size="15" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-fit p-4">
                <DropdownMenuItem className="cursor-pointer">
                  AfterShip [CSV]
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  BL - ZWROTY [CSV]
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  BL - ZWROTY EWIDENCJA [HTML]
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  BL - ZWROTY TRANSPORT [CSV]
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  CSV - pozycje zamówienia kopia [CSV]
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  CSV - zamówienia [CSV]
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  FV imienne [CSV]
                </DropdownMenuItem>
                <DropdownMenuItem className="flex cursor-pointer items-center justify-between">
                  Protokół zwrotu [PDF]
                  <Printer className="size-4 text-blue-500" />
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Wadliwy/uszkodzony [CSV]
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Zwrócony na stan [CSV]
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Button variant="outline">
            <Truck size="15" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger className="group" asChild>
              <Button variant="outline" className="gap-2">
                <BaggageClaim size="15" />
                <ChevronDown
                  size="13"
                  className="group-data-[state=open]:rotate-180"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-fit p-4">
              <DropdownMenuGroup>
                <DropdownMenuLabel>PICKPACK ASSISTANT</DropdownMenuLabel>
                <DropdownMenuItem className="flex cursor-pointer items-center gap-2">
                  <ClipboardList size="15" />
                  Pick products
                </DropdownMenuItem>
                <DropdownMenuItem className="flex cursor-pointer items-center gap-2">
                  <Box size="15" />
                  Pack
                </DropdownMenuItem>
              </DropdownMenuGroup>

              <DropdownMenuGroup>
                <DropdownMenuLabel>MATCH AND SELECT ORDERS</DropdownMenuLabel>
                <DropdownMenuItem className="flex cursor-pointer items-center gap-2">
                  <ClipboardList size="15" />
                  For collecting
                </DropdownMenuItem>
                <DropdownMenuItem className="flex cursor-pointer items-center gap-2">
                  <PackageCheck className="size-4" />
                  For packing
                </DropdownMenuItem>
              </DropdownMenuGroup>

              <DropdownMenuGroup>
                <DropdownMenuLabel>BARCODE SCANNER</DropdownMenuLabel>
                <DropdownMenuItem className="flex cursor-pointer items-center gap-2">
                  <ScanBarcode size="15" />
                  Scanner settings
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="group" asChild>
              <Button variant="outline" className="gap-2">
                <AlignJustify size="15" />
                <ChevronDown
                  size="13"
                  className="group-data-[state=open]:rotate-180"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="max-h-96 w-fit overflow-y-auto p-4"
            >
              {/* Група з варіантами доставки */}
              <DropdownMenuGroup>
                {deliveryOptions.map((option, index) => (
                  <DropdownMenuItem
                    key={index}
                    className="flex cursor-pointer items-center gap-2"
                  >
                    <Truck className={`size-4 ${option.color}`} />
                    {option.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>

              {/* Базові дії */}
              <DropdownMenuGroup>
                <DropdownMenuLabel>BASIC</DropdownMenuLabel>
                {basicOptions.map((option, index) => (
                  <DropdownMenuItem
                    key={index}
                    className="flex cursor-pointer items-center gap-2"
                  >
                    {option.icon}
                    {option.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>

              {/* Дії Allegro */}
              <DropdownMenuGroup>
                <DropdownMenuLabel>ALLEGRO</DropdownMenuLabel>
                {allegroOptions.map((option, index) => (
                  <DropdownMenuItem
                    key={index}
                    className="flex cursor-pointer items-center gap-2"
                  >
                    {option.icon}
                    {option.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="group" asChild>
              <Button variant="outline">
                <ArrowUpWideNarrow size="15" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-fit p-4">
              <DropdownMenuGroup>
                <DropdownMenuLabel>SORT BY</DropdownMenuLabel>
                {sortOptions.map((option, index) => (
                  <DropdownMenuItem key={index} className="cursor-pointer">
                    <Text size="xs">{option}</Text>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>

              <DropdownMenuGroup>
                <DropdownMenuLabel>SORTING AND VIEWING</DropdownMenuLabel>
                {sortDirections.map((direction, index) => (
                  <DropdownMenuItem
                    className="flex cursor-pointer items-center gap-2"
                    key={index}
                  >
                    {direction.icon}
                    <Text size="xs">{direction.label}</Text>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex">
            <Text className="underline">1-20</Text>
            <Text className="text-foreground">&nbsp;of 29812 items</Text>
          </div>
          <div>
            <Button
              size="icon"
              variant="outline"
              className="rounded-l-full rounded-r-none"
            >
              <ChevronLeft size="20" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="rounded-l-none rounded-r-full"
            >
              <ChevronRight size="20" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
