"use client"

import React, { useState } from "react"
import { MarketplaceIcons } from "@/constants/order/marketplaces"
import { countryList, type CountryCodes } from "@/constants/shared/countries"
import {
  ChevronDown,
  CircleChevronLeft,
  Loader,
  RefreshCcw,
  Star,
} from "lucide-react"
import { FlagImage } from "react-international-phone"
import { toast } from "sonner"

import { RoutePaths } from "@/config/routes"
import { getOrderApi } from "@/lib/api/allegro/orders/orders-api"
import { type Order } from "@/lib/api/allegro/orders/orders-types"
import { showErrorToast } from "@/lib/handle-error"
import { useLazyRouterWithTag } from "@/hooks/use-lazy-router-with-tag"
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
  const [isLoading, setIsLoading] = useState(false)

  const { lazyPush, lazyRefresh, isPendingTag } = useLazyRouterWithTag()

  const bayer = order?.buyer
  const delivery = order?.delivery
  const bayerFullName = `${bayer?.first_name || ""} ${bayer?.last_name || ""}`
  const country_codeISO = bayer?.address.country_code?.toLowerCase()
  const countryFullName = bayer?.address?.country_code
    ? countryList?.[bayer?.address?.country_code as CountryCodes]?.label
    : delivery?.address?.country_code

  const isAllegro = order?.marketplace?.slice(0, 2)?.toLowerCase() === "al"

  const handleReturnToList = () =>
    lazyPush(RoutePaths.private.orders.list, {}, "back_to_list")

  const handleRefreshWithAllegro = async () => {
    try {
      setIsLoading(true)
      await getOrderApi("client").updateFromAllegro(order?.order_id)
      lazyRefresh("update_from_allegro")
      toast.info("Order has been synchronized")
    } catch (e) {
      showErrorToast(e)
    } finally {
      setIsLoading(false)
    }
  }

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
        <div className="ml-auto mr-0 flex w-fit gap-2">
          <Button
            disabled={isLoading || isPendingTag === "update_from_allegro"}
            onClick={handleRefreshWithAllegro}
            className="ml-auto mr-0"
          >
            {isLoading || isPendingTag === "update_from_allegro" ? (
              <Loader className="animate-spin" />
            ) : (
              <CircleChevronLeft className="block sm:hidden" />
            )}
            <span className="hidden sm:inline">
              Synchronization with Allegro
            </span>
          </Button>
          <Button
            disabled={isPendingTag === "back_to_list"}
            onClick={handleReturnToList}
            className=""
          >
            <RefreshCcw className="block sm:hidden" />
            <span className="hidden sm:inline">Return to the orders list</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
