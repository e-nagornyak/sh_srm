import * as React from "react"
import { Printer, Tag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Title } from "@/components/ui/title"
import { ComponentWithTooltip } from "@/components/shared/component-with-tooltip"

interface OrderHeaderActionsProps {
  onClickCreateInvoice: () => void
  onClickShippingLabel: () => void
}

export function OrderInfoHeaderActions({
  onClickCreateInvoice,
  onClickShippingLabel,
}: OrderHeaderActionsProps) {
  return (
    <>
      <Title weight="semibold" size="xs">
        Order information
      </Title>
      <div className="flex flex-col items-end gap-2 md:flex-row">
        <ComponentWithTooltip
          trigger={
            <Button onClick={onClickCreateInvoice} className="gap-1" size="sm">
              <Printer size="15" />
              Create invoice
              {/*CREATE INVOICE POST /api/allegro/factura/ Генерация фактуры*/}
            </Button>
          }
          text="Этот метод генерирует фактуру."
        />
        <ComponentWithTooltip
          trigger={
            <Button onClick={onClickShippingLabel} className="gap-1" size="sm">
              <Tag size="15" />
              Shipping Label
              {/*   POST /api/allegro/shipping-label/ Ге*/}
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
        {/*<DropdownMenu>*/}
        {/*  <DropdownMenuTrigger className="group" asChild>*/}
        {/*    <Button className="gap-1" size="xs">*/}
        {/*      Actions*/}
        {/*      <ChevronDown*/}
        {/*        size="12"*/}
        {/*        className="group-data-[state=open]:rotate-180"*/}
        {/*      />*/}
        {/*    </Button>*/}
        {/*  </DropdownMenuTrigger>*/}
        {/*  <DropdownMenuContent>*/}
        {/*    <DropdownMenuItem>*/}
        {/*      <Button className="gap-2" size="sm" variant="ghost">*/}
        {/*        <Trash size="20" />*/}
        {/*        Delete order*/}
        {/*      </Button>*/}
        {/*    </DropdownMenuItem>*/}
        {/*    <DropdownMenuItem>*/}
        {/*      <Button className="gap-2" size="sm" variant="ghost">*/}
        {/*        <User size="20" />*/}
        {/*        Create a new order for this customer*/}
        {/*      </Button>*/}
        {/*    </DropdownMenuItem>*/}
        {/*    <DropdownMenuItem>*/}
        {/*      <Button className="gap-2" size="sm" variant="ghost">*/}
        {/*        <Files size="20" />*/}
        {/*        Create a copy of the order*/}
        {/*      </Button>*/}
        {/*    </DropdownMenuItem>*/}
        {/*    <DropdownMenuItem>*/}
        {/*      <Button className="gap-2" size="sm" variant="ghost">*/}
        {/*        <Scan size="20" />*/}
        {/*        Divide order*/}
        {/*      </Button>*/}
        {/*    </DropdownMenuItem>*/}
        {/*    <DropdownMenuItem>*/}
        {/*      <Button className="gap-2" size="sm" variant="ghost">*/}
        {/*        <CornerDownLeft size="20" />*/}
        {/*        Create return*/}
        {/*      </Button>*/}
        {/*    </DropdownMenuItem>*/}
        {/*  </DropdownMenuContent>*/}
        {/*</DropdownMenu>*/}
      </div>
    </>
  )
}
