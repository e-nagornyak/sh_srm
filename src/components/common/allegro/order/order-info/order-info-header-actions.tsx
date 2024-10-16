import * as React from "react"
import {
  ChevronDown,
  Grid,
  Loader,
  Printer,
  ReceiptText,
  Tag,
} from "lucide-react"

import { type Order } from "@/lib/api/allegro/orders/orders-types"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Title } from "@/components/ui/title"
import { ComponentWithTooltip } from "@/components/shared/component-with-tooltip"

interface OrderHeaderActionsProps {
  order: Order
  onClickCreateInvoice: () => Promise<void>
  onClickDownloadInvoice: () => Promise<void>
  onClickShippingLabel: () => Promise<void>
  onClickDownloadLabel: () => Promise<void>
  loadingFields: string[]
}

export function OrderInfoHeaderActions({
  order,
  onClickCreateInvoice,
  onClickShippingLabel,
  onClickDownloadLabel,
  onClickDownloadInvoice,
  loadingFields,
}: OrderHeaderActionsProps) {
  const isInvoiceLoading = loadingFields?.includes("invoice")
  const isShippingLoading = loadingFields?.includes("shipping")
  const isInvoiceAlreadyExist = !!(
    order?.labels?.faktura_url || order?.labels?.faktura_id
  )

  const isAllowedAdditionalActions =
    order?.labels?.label_url || order?.labels?.faktura_url

  return (
    <>
      <Title weight="semibold" size="xs">
        Order information
      </Title>
      <div className="flex flex-col items-end gap-2 md:flex-row">
        <ComponentWithTooltip
          trigger={
            <Button
              disabled={isInvoiceAlreadyExist || isInvoiceLoading}
              onClick={onClickCreateInvoice}
              className="gap-1"
              size="sm"
            >
              {isInvoiceLoading ? (
                <Loader className="animate-spin" size="15" />
              ) : (
                <Printer size="15" />
              )}
              Create invoice
            </Button>
          }
          text="Этот метод генерирует фактуру."
        />
        <ComponentWithTooltip
          trigger={
            <Button
              disabled={isShippingLoading}
              onClick={onClickShippingLabel}
              className="gap-1"
              size="sm"
            >
              {isShippingLoading ? (
                <Loader className="animate-spin" size="15" />
              ) : (
                <Tag size="15" />
              )}
              Shipping Label
            </Button>
          }
          text="Этот метод генерирует и возвращает ссылку на файл PDF-этикетки для указанного заказа."
        />

        {/*<DropdownMenu>*/}
        {/*  <DropdownMenuTrigger className="group" asChild>*/}
        {/*    <Button className="gap-1" size="xs">*/}
        {/*      <Printer size="12" />*/}
        {/*      Printouts and exports*/}
        {/*      <ChevronDown*/}
        {/*        size="12"*/}
        {/*        className="group-data-[state=open]:rotate-180"*/}
        {/*      />*/}
        {/*    </Button>*/}
        {/*  </DropdownMenuTrigger>*/}
        {/*  <DropdownMenuContent>*/}
        {/*    <DropdownMenuItem className="cursor-pointer">*/}
        {/*      Return protocol [PDF].*/}
        {/*    </DropdownMenuItem>*/}
        {/*  </DropdownMenuContent>*/}
        {/*</DropdownMenu>*/}

        {/*<ButtonWithDropdown*/}
        {/*  buttonProps={{ size: "xs" }}*/}
        {/*  buttonContent={*/}
        {/*    <>*/}
        {/*      <Backpack size="12" />*/}
        {/*      Park*/}
        {/*    </>*/}
        {/*  }*/}
        {/*  triggerProps={{ size: "xs" }}*/}
        {/*  dropdownContent={*/}
        {/*    <>*/}
        {/*      <DropdownMenuItem asChild>*/}
        {/*        <Button*/}
        {/*          size="sm"*/}
        {/*          className="justify-start gap-2"*/}
        {/*          variant="ghost"*/}
        {/*        >*/}
        {/*          Pick products*/}
        {/*        </Button>*/}
        {/*      </DropdownMenuItem>*/}
        {/*      <DropdownMenuItem asChild>*/}
        {/*        <Button*/}
        {/*          size="sm"*/}
        {/*          className="justify-start gap-2"*/}
        {/*          variant="ghost"*/}
        {/*        >*/}
        {/*          <Camera size="15" />*/}
        {/*          Take a photo*/}
        {/*        </Button>*/}
        {/*      </DropdownMenuItem>*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {isAllowedAdditionalActions && (
          <DropdownMenu>
            <DropdownMenuTrigger className="group" asChild>
              <Button className="gap-1" size="sm">
                <Grid size="15" />
                Actions
                <ChevronDown
                  size="15"
                  className="group-data-[state=open]:rotate-180"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="md:mr-4">
              {order?.labels?.faktura_url && (
                <DropdownMenuItem>
                  <Button
                    onClick={onClickDownloadInvoice}
                    className="gap-2"
                    size="sm"
                    variant="ghost"
                  >
                    <ReceiptText size="20" />
                    Download the invoice
                  </Button>
                </DropdownMenuItem>
              )}
              {order?.labels?.label_url && (
                <DropdownMenuItem>
                  <Button
                    onClick={onClickDownloadLabel}
                    className="gap-2"
                    size="sm"
                    variant="ghost"
                  >
                    <Tag size="20" />
                    Download the label
                  </Button>
                </DropdownMenuItem>
              )}
              {/*<DropdownMenuItem>*/}
              {/*  <Button className="gap-2" size="sm" variant="ghost">*/}
              {/*    <Trash size="20" />*/}
              {/*    Delete order*/}
              {/*  </Button>*/}
              {/*</DropdownMenuItem>*/}
              {/*<DropdownMenuItem>*/}
              {/*  <Button className="gap-2" size="sm" variant="ghost">*/}
              {/*    <User size="20" />*/}
              {/*    Create a new order for this customer*/}
              {/*  </Button>*/}
              {/*</DropdownMenuItem>*/}
              {/*<DropdownMenuItem>*/}
              {/*  <Button className="gap-2" size="sm" variant="ghost">*/}
              {/*    <Files size="20" />*/}
              {/*    Create a copy of the order*/}
              {/*  </Button>*/}
              {/*</DropdownMenuItem>*/}
              {/*<DropdownMenuItem>*/}
              {/*  <Button className="gap-2" size="sm" variant="ghost">*/}
              {/*    <Scan size="20" />*/}
              {/*    Divide order*/}
              {/*  </Button>*/}
              {/*</DropdownMenuItem>*/}
              {/*<DropdownMenuItem>*/}
              {/*  <Button className="gap-2" size="sm" variant="ghost">*/}
              {/*    <CornerDownLeft size="20" />*/}
              {/*    Create return*/}
              {/*  </Button>*/}
              {/*</DropdownMenuItem>*/}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </>
  )
}
