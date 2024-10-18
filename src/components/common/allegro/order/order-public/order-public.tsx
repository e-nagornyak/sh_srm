import { countryList, type CountryCodes } from "@/constants/shared/countries"
import { format } from "date-fns"
import { getTranslations } from "next-intl/server"

import { type Order } from "@/lib/api/allegro/orders/orders-types"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Text } from "@/components/ui/text"
import { Title } from "@/components/ui/title"
import { OrderPublicPrintButton } from "@/components/common/allegro/order/order-public/order-public-print-button"

interface OrderPublicProps {
  order: Order
  locale: string
}

export async function OrderPublic({ order, locale }: OrderPublicProps) {
  const t = await getTranslations({ locale, namespace: "order_public" })

  const delivery = order?.delivery
  const deliveryAddress = delivery?.address
  const country =
    deliveryAddress?.country_code &&
    countryList?.[deliveryAddress?.country_code as CountryCodes]?.label

  const productCost =
    +(order?.total_to_pay || 0) - +(order?.delivery?.cost || 0)

  return (
    <>
      <div className="flex items-center justify-between">
        <Title size="md" weight="bold">
          {t("title")}
        </Title>
        <OrderPublicPrintButton text={t("download_invoice")} />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>
            {t("order_summary", { id: order?.id?.toString() })}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="whitespace-nowrap">
                  {t("product_service_name")}
                </TableHead>
                <TableHead className="whitespace-nowrap text-right">
                  {t("quantity")}
                </TableHead>
                <TableHead className="whitespace-nowrap text-right">
                  {t("price_per_unit")}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {order?.products?.map((product) => (
                <TableRow key={product?.id}>
                  <TableCell>{product?.name}</TableCell>
                  <TableCell className="text-right">
                    {product?.quantity}
                  </TableCell>
                  <TableCell className="text-right">
                    {product?.price} {order?.currency ?? ""}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="ml-auto mr-0 mt-10 flex w-fit min-w-[30%] flex-col text-left">
            <Text size="base" weight="bold">
              {t("product_cost", {
                productCost,
                currency: order?.currency ?? "",
              })}
            </Text>
            {order?.delivery?.id && (
              <Text size="base" weight="bold">
                {t("shipping_cost", {
                  shippingCost: order?.delivery?.cost,
                  currency: order?.currency ?? "",
                })}
              </Text>
            )}
            <Separator className="my-2" />
            <Text size="2xl" weight="bold">
              {t("total_amount", {
                totalAmount: order?.total_to_pay || "",
                currency: order?.currency ?? "",
              })}
            </Text>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>{t("information")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Text size="base">{t("status")}</Text>
              <Text size="base">
                {t("order_number", { id: order?.id?.toString() })}
              </Text>
              {order?.bought_at && (
                <Text size="base">
                  {t("sale_date", {
                    date: format(order?.bought_at, "dd MMMM yyyy, HH:mm"),
                  })}
                </Text>
              )}
              {order?.payment?.provider && (
                <Text size="base">
                  {t("payment_method", { provider: order?.payment?.provider })}
                </Text>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t("delivery_address")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {(deliveryAddress?.first_name || deliveryAddress?.last_name) && (
                <Text size="base">
                  {t("full_name", {
                    firstName: deliveryAddress?.first_name || "",
                    lastName: deliveryAddress?.last_name || "",
                  })}
                </Text>
              )}
              {deliveryAddress?.street && (
                <Text size="base">
                  {t("street", { street: deliveryAddress?.street })}
                </Text>
              )}
              {deliveryAddress?.city && (
                <Text size="base">
                  {t("city", { city: deliveryAddress?.city })}
                </Text>
              )}
              {deliveryAddress?.zip_code && (
                <Text size="base">
                  {t("zip_code", { zipCode: deliveryAddress?.zip_code })}
                </Text>
              )}
              {deliveryAddress?.country_code && (
                <Text size="base">{t("country", { country })}</Text>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
