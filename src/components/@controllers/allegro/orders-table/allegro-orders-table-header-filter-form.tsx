import React from "react"
import { orderDeliveryMethods } from "@/constants/order/order-delivery-methods"
import { orderFilterStatuses } from "@/constants/order/order-statuses-new"
import {
  AllegroOrdersSearchParamsSchema,
  type AllegroOrdersSchema,
} from "@/constants/order/orders-search-params"
import { countryList, type CountryType } from "@/constants/shared/countries"
import { zodResolver } from "@hookform/resolvers/zod"
import { PopoverClose } from "@radix-ui/react-popover"
import dayjs from "dayjs"
import { useForm, type SubmitHandler } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { CommandItem } from "@/components/ui/command"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { DatePicker } from "@/components/shared/date-range-picker"
import { InputWithCommand } from "@/components/shared/input-with-command-dropdown"

interface AllegroOrdersTableHeaderFilterPanelProps {
  onSubmit: SubmitHandler<AllegroOrdersSchema>
  defaultValues?: AllegroOrdersSchema
}

export function AllegroOrdersTableHeaderFilterForm({
  defaultValues,
  onSubmit,
}: AllegroOrdersTableHeaderFilterPanelProps) {
  const form = useForm<AllegroOrdersSchema>({
    resolver: zodResolver(AllegroOrdersSearchParamsSchema),
    defaultValues,
  })

  const memoizedCountries = React.useMemo(
    (): CountryType[] => Object.values(countryList),
    []
  )

  const memoizedDeliveryMethods = React.useMemo(() => orderDeliveryMethods, [])
  const memoizedStatuses = React.useMemo(() => orderFilterStatuses, [])

  const {
    control,
    getValues,
    formState: { isDirty },
  } = form

  const onSubmitHandler = (data: AllegroOrdersSchema) => {
    onSubmit(data)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmitHandler)}
        className="flex w-full flex-col gap-4"
      >
        <div className="grid w-full grid-flow-row grid-cols-4 gap-3">
          <FormField
            control={control}
            name="status"
            render={({ field: { value, onChange, ...field } }) => (
              <FormItem className="space-y-0">
                <FormLabel>Status</FormLabel>
                <FormControl>
                  <InputWithCommand
                    inputProps={{
                      value,
                      placeholder: "Status",
                      ...field,
                    }}
                    content={memoizedStatuses?.map((status) => (
                      <CommandItem
                        key={status?.key}
                        onSelect={onChange}
                        className="flex w-full cursor-pointer items-center gap-2 [&_svg]:size-4"
                      >
                        <PopoverClose className="w-full text-start">
                          {status?.icon}
                          {status?.label}
                        </PopoverClose>
                      </CommandItem>
                    ))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="order_id"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormLabel>Order ID</FormLabel>
                <FormControl>
                  <Input placeholder="Order ID" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="col-span-2 flex w-full gap-3">
            <FormField
              control={control}
              name="last_update_from"
              render={({ field }) => (
                <FormItem className="w-full space-y-0">
                  <FormLabel>Last updated from</FormLabel>
                  <FormControl>
                    <DatePicker
                      onDateChange={field.onChange}
                      date={
                        field.value ? dayjs(field.value)?.toDate() : undefined
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="last_update_to"
              render={({ field }) => (
                <FormItem className="w-full space-y-0">
                  <FormLabel>Last updated to</FormLabel>
                  <FormControl>
                    <DatePicker
                      calendarDisabled={(date: Date) => {
                        const startData = dayjs(
                          getValues("last_update_from")
                        ).add(1, "day")
                        return dayjs(startData).isAfter(date)
                      }}
                      onDateChange={field.onChange}
                      date={
                        field.value ? dayjs(field.value)?.toDate() : undefined
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={control}
            name="product_name"
            render={({ field: { value, ...field } }) => (
              <FormItem className="space-y-0">
                <FormLabel>Product Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Product Name"
                    value={value || ""}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="delivery_method"
            render={({ field: { value, onChange, ...field } }) => (
              <FormItem className="space-y-0">
                <FormLabel>Delivery Method</FormLabel>
                <FormControl>
                  <InputWithCommand
                    inputProps={{
                      value,
                      placeholder: "Delivery Method",
                      ...field,
                    }}
                    content={memoizedDeliveryMethods?.map((method) => (
                      <CommandItem
                        key={method?.key}
                        value={method?.label}
                        onSelect={onChange}
                        className="flex w-full cursor-pointer items-center gap-2 [&_svg]:size-4"
                      >
                        <PopoverClose className="w-full text-start">
                          {method?.label}
                        </PopoverClose>
                      </CommandItem>
                    ))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="delivery_address_country_code"
            render={({ field: { value, onChange, ...field } }) => (
              <FormItem className="space-y-0">
                <FormLabel>Delivery Address Country</FormLabel>
                <FormControl>
                  <InputWithCommand
                    inputProps={{
                      value,
                      placeholder: "Delivery Address Country",
                      ...field,
                    }}
                    content={memoizedCountries?.map((country) => (
                      <CommandItem
                        key={country?.code}
                        onSelect={onChange}
                        className="flex w-full cursor-pointer items-center gap-2 [&_svg]:size-4"
                      >
                        <PopoverClose className="w-full text-start">
                          {country?.label}
                        </PopoverClose>
                      </CommandItem>
                    ))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div />
          <FormField
            control={control}
            name="status"
            render={({ field: { value, ...field } }) => (
              <FormItem className="space-y-0">
                <FormLabel>Payment Finished</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="status"
            render={({ field: { value, ...field } }) => (
              <FormItem className="space-y-0">
                <FormLabel>Label Shipment</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="status"
            render={({ field: { value, ...field } }) => (
              <FormItem className="space-y-0">
                <FormLabel>Labels Factura</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/*<FormField*/}
          {/*  control={form.control}*/}
          {/*  name="product_name"*/}
          {/*  render={({ field: { value, ...field } }) => (*/}
          {/*    <FormItem>*/}
          {/*      <FormLabel>Product Name</FormLabel>*/}
          {/*      <FormControl>*/}
          {/*        <Input placeholder="Product Name" {...field} />*/}
          {/*      </FormControl>*/}
          {/*      <FormMessage />*/}
          {/*    </FormItem>*/}
          {/*  )}*/}
          {/*/>*/}

          {/*<FormField*/}
          {/*  control={form.control}*/}
          {/*  name="currency"*/}
          {/*  render={({ field }) => (*/}
          {/*    <FormItem>*/}
          {/*      <FormLabel>Currency</FormLabel>*/}
          {/*      <Select onValueChange={field.onChange} value={field.value}>*/}
          {/*        <SelectTrigger>*/}
          {/*          <SelectValue placeholder="Currency" />*/}
          {/*        </SelectTrigger>*/}
          {/*        <SelectContent>*/}
          {/*          {CurrencyMap?.map((currency: string) => (*/}
          {/*            <SelectItem key={currency} value={currency}>*/}
          {/*              {currency}*/}
          {/*            </SelectItem>*/}
          {/*          ))}*/}
          {/*        </SelectContent>*/}
          {/*      </Select>*/}
          {/*      <FormMessage />*/}
          {/*    </FormItem>*/}
          {/*  )}*/}
          {/*/>*/}
        </div>

        <Button className="self-end" disabled={!isDirty} type="submit">
          Apply Filter
        </Button>
      </form>
    </Form>
  )
}
