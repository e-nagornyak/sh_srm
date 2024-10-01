"use client"

import React from "react"
import { MarketplaceIcons } from "@/constants/order/marketplaces"
import { countryList, type CountryCodes } from "@/constants/shared/countries"
import { ChevronDown, CircleChevronLeft, Star } from "lucide-react"
import { FlagImage } from "react-international-phone"

import { RoutePaths } from "@/config/routes"
import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"
import { useLazyRouter } from "@/hooks/use-lazy-router"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { Title } from "@/components/ui/title"

interface OrderViewBayerInformationProps {
  order: Order
}

export function OrderBayerController({
  order,
}: OrderViewBayerInformationProps) {
  const { isPending, lazyPush } = useLazyRouter()

  const bayer = order?.buyer
  const delivery = order?.delivery
  const bayerFullName = `${bayer?.first_name || ""} ${bayer?.last_name || ""}`
  const country_codeISO = bayer?.address.country_code?.toLowerCase()
  const countryFullName = delivery?.address?.country_code
    ? countryList?.[delivery?.address?.country_code as CountryCodes]?.label
    : delivery?.address?.country_code

  const isAllegro = order?.marketplace?.slice(0, 2)?.toLowerCase() === "al"

  const handleReturnToList = () => lazyPush(RoutePaths.private.orders.list)

  return (
    <Card>
      <CardContent className="flex flex-wrap items-center gap-2 md:gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button disabled className="gap-2">
              <Star />
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="min-w-fit">
            {[
              "text-yellow-600 fill-yellow-600",
              "text-red-600 fill-red-600",
              "text-green-600 fill-green-600",
              "text-blue-600 fill-blue-600",
              "text-pink-6000 fill-pink-6000",
            ]?.map((colorClass) => (
              <DropdownMenuItem
                key={colorClass}
                className={"w-fit cursor-pointer"}
              >
                <Star className={colorClass} />
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <Title size="sm">Order {order?.id}</Title>

        <Separator className="h-10" orientation="vertical" />
        {isAllegro && <MarketplaceIcons.allegro width="70" />}
        <Separator className="h-10" orientation="vertical" />
        <Title size="sm">{bayerFullName}</Title>
        <Separator className="h-10" orientation="vertical" />
        <FlagImage className="size-8" iso2={country_codeISO} />
        <Title size="sm">{countryFullName}</Title>
        <Button
          disabled={isPending}
          onClick={handleReturnToList}
          className="ml-auto mr-0"
        >
          <CircleChevronLeft className="block sm:hidden" />
          <span className="hidden sm:inline">Return to the orders list</span>
        </Button>
      </CardContent>
    </Card>
  )
}
