"use client"

import * as React from "react"
import { PlusIcon } from "@radix-ui/react-icons"
import { type Table } from "@tanstack/react-table"
import {
  AlignJustify,
  ArrowUpWideNarrow,
  BaggageClaim,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Flag,
  List,
  Mail,
  Printer,
  SquareCheck,
  Star,
  StickyNote,
  Truck,
} from "lucide-react"
import Trakt from "next-auth/providers/trakt"

import { RoutePaths } from "@/config/routes"
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
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Text } from "@/components/ui/text"

interface TasksTableToolbarActionsProps {}

const starsMenuItems = [
  { key: "yellow", color: "text-yellow-600 fill-yellow-600" },
  { key: "red", color: "text-red-600 fill-red-600" },
  { key: "green", color: "text-green-600 fill-green-600" },
  { key: "blue", color: "text-blue-600 fill-blue-600" },
  { key: "pink", color: "text-pink-6000 fill-pink-6000" },
]

const selectMenuItems = [
  { key: "select_all", displayName: "Select all" },
  { key: "select_starred_orders", displayName: "Select starred orders" },
  { key: "unselect_all", displayName: "Unselect all" },
  { key: "select_starred", displayName: "Select starred" },
  { key: "select_starred_on_all_pages", displayName: "ON ALL PAGES" },
  { key: "select_all_2", displayName: "Select all" }, // Duplicate label, may have a different key
  { key: "select_starred_orders_2", displayName: "Select starred orders" }, // Duplicate label
  { key: "unselect_all_2", displayName: "Unselect all" },
  { key: "unselect_starred", displayName: "Unselect starred" },
]

export function AllegroOrdersTableToolbarActions({}: TasksTableToolbarActionsProps) {
  return (
    <Card className="w-full">
      <CardContent className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-4">
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
                {selectMenuItems?.map((el) => (
                  <DropdownMenuItem
                    key={el?.key}
                    className={"w-fit cursor-pointer"}
                  >
                    {el?.displayName}
                  </DropdownMenuItem>
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
              <DropdownMenuContent align="start" className="min-w-fit">
                {starsMenuItems?.map((el) => (
                  <DropdownMenuItem
                    key={el?.key}
                    className={"w-fit cursor-pointer"}
                  >
                    <Star className={el?.color} />
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex">
            <Button variant="outline">
              <Flag size="15" />
            </Button>
            <Button variant="outline">
              <Mail size="15" />
            </Button>
            <Button variant="outline">
              <StickyNote size="15" />
            </Button>
            <Button variant="outline">
              <Printer size="15" />
            </Button>
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
            <DropdownMenuContent align="start" className="min-w-fit">
              <DropdownMenuItem className={"w-fit cursor-pointer"}>
                1
              </DropdownMenuItem>
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
            <DropdownMenuContent align="start" className="min-w-fit">
              <DropdownMenuItem className={"w-fit cursor-pointer"}>
                1
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline">
            <ArrowUpWideNarrow size="15" />
          </Button>
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
