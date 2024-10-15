import React from "react"
import { orderDeliveryMethods } from "@/constants/order/order-delivery-methods"
import { orderStatuses } from "@/constants/order/order-statuses"
import {
  OrdersFiltersSchema,
  type OrdersFiltersSchemaType,
} from "@/constants/order/orders-search-params"
import {
  countryList,
  countryListEU,
  type CountryCodes,
  type CountryType,
} from "@/constants/shared/countries"
import { hasAnyPropertyValue } from "@/utils/has-any-property-value"
import { zodResolver } from "@hookform/resolvers/zod"
import { PopoverClose } from "@radix-ui/react-popover"
import dayjs from "dayjs"
import { Check, X } from "lucide-react"
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { DatePicker } from "@/components/shared/date-range-picker"
import { InputWithCommand } from "@/components/shared/input-with-command-dropdown"

interface AllegroOrdersTableHeaderFilterPanelProps {
  onSubmit: SubmitHandler<OrdersFiltersSchemaType>
  defaultValues?: OrdersFiltersSchemaType
  onReset: () => void
}

export function AllegroOrdersTableHeaderFilterForm({
  defaultValues,
  onSubmit,
  onReset,
}: AllegroOrdersTableHeaderFilterPanelProps) {
  const form = useForm<OrdersFiltersSchemaType>({
    resolver: zodResolver(OrdersFiltersSchema),
    values: defaultValues,
  })

  const memoizedCountries = React.useMemo(
    (): CountryType[] => Object.values(countryListEU),
    []
  )

  const memoizedDeliveryMethods = React.useMemo(() => orderDeliveryMethods, [])
  const memoizedStatuses = React.useMemo(() => Object.values(orderStatuses), [])

  const {
    control,
    getValues,
    reset,
    setValue,
    watch,
    formState: { isDirty },
  } = form

  const resetHandler = () => {
    onReset()
    reset()
  }

  const onSubmitHandler = (data: OrdersFiltersSchemaType) => {
    onSubmit(data)
  }

  // Function to clear specific field by key
  const clearField = (fieldKey: keyof OrdersFiltersSchemaType) => {
    setValue(fieldKey, null)
    if (defaultValues?.[fieldKey]) {
      onSubmitHandler(getValues())
    }
  }

  const ClearButton = ({
    fieldKey,
  }: {
    fieldKey: keyof OrdersFiltersSchemaType
  }) => {
    return (
      <button
        onClick={() => clearField(fieldKey)}
        type="button"
        className="hover:text-red-500"
      >
        <X size="20" />
      </button>
    )
  }
  console.log(getValues())
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmitHandler)}
        className="flex w-full flex-col gap-4"
      >
        <div className="grid w-full grid-flow-row grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          <FormField
            control={control}
            name="status"
            render={({ field: { value, onChange, ...field } }) => (
              <FormItem className="space-y-2">
                <FormLabel className="flex min-h-5 items-center justify-between gap-2">
                  Status
                  {value && <ClearButton fieldKey={field?.name} />}
                </FormLabel>
                <FormControl>
                  <InputWithCommand
                    inputProps={{
                      value: value ? orderStatuses?.[value]?.label : "",
                      placeholder: "Status",
                      ...field,
                    }}
                    content={memoizedStatuses?.map((status) => (
                      <CommandItem
                        key={status?.key}
                        value={status?.key}
                        onSelect={onChange}
                        className="flex w-full cursor-pointer items-center gap-2 [&_svg]:size-4"
                      >
                        <PopoverClose className="flex w-full items-center gap-2 text-start">
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
            render={({ field: { value, onChange, ...field } }) => (
              <FormItem className="space-y-2">
                <FormLabel className="flex min-h-5 items-center justify-between gap-2">
                  Allegro ID
                  {value && <ClearButton fieldKey={field?.name} />}
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Allegro ID"
                    value={value || ""}
                    onChange={(e) => onChange(e?.currentTarget?.value?.trim())}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex w-full flex-col gap-3 sm:col-span-2 sm:flex-row">
            <FormField
              control={control}
              name="last_update_from"
              render={({ field: { value, onChange, ...field } }) => (
                <FormItem className="w-full space-y-2">
                  <FormLabel className="flex min-h-5 items-center justify-between gap-2">
                    Last updated from
                    {value && <ClearButton fieldKey={field?.name} />}
                  </FormLabel>

                  <FormControl>
                    <DatePicker
                      onDateChange={(date) =>
                        onChange(dayjs(date).format("YYYY-MM-DD"))
                      }
                      date={value ? dayjs(value).toDate() : undefined}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="last_update_to"
              render={({ field: { onChange, value, ...field } }) => (
                <FormItem className="w-full space-y-2">
                  <FormLabel className="flex min-h-5 items-center justify-between gap-2">
                    Last updated to
                    {value && <ClearButton fieldKey={field?.name} />}
                  </FormLabel>
                  <FormControl>
                    <DatePicker
                      calendarDisabled={(date: Date) => {
                        return dayjs(
                          dayjs(getValues("last_update_from"))
                        ).isAfter(date)
                      }}
                      onDateChange={(date) =>
                        onChange(dayjs(date).format("YYYY-MM-DD"))
                      }
                      date={value ? dayjs(value).toDate() : undefined}
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
              <FormItem className="space-y-2">
                <FormLabel className="flex min-h-5 items-center justify-between gap-2">
                  Product Name
                  {value && <ClearButton fieldKey={field?.name} />}
                </FormLabel>
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
            name="delivery_address_country_code"
            render={({ field: { value, onChange, ...field } }) => (
              <FormItem className="space-y-2">
                <FormLabel className="flex min-h-5 items-center justify-between gap-2">
                  Delivery Address Country
                  {value && <ClearButton fieldKey={field?.name} />}
                </FormLabel>
                <FormControl>
                  <InputWithCommand
                    inputProps={{
                      value: value
                        ? countryList?.[value as CountryCodes]?.label
                        : "",
                      placeholder: "Delivery Address Country",
                      ...field,
                    }}
                    content={memoizedCountries?.map((country) => (
                      <CommandItem
                        key={country?.code}
                        onSelect={() => onChange(country?.code)}
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
          <FormField
            control={control}
            name="delivery_method"
            render={({ field: { value, onChange, ...field } }) => (
              <FormItem className="space-y-2">
                <FormLabel className="flex min-h-5 items-center justify-between gap-2">
                  Delivery Method
                  {value && <ClearButton fieldKey={field?.name} />}
                </FormLabel>
                <FormControl>
                  <InputWithCommand
                    inputProps={{
                      value: value || "",
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
          <div />
          <FormField
            control={control}
            name="payment_finished"
            render={({ field: { value, onChange, ...field } }) => (
              <FormItem className="space-y-2">
                <FormLabel className="flex min-h-5 items-center justify-between gap-2">
                  Payment Status
                  {value && <ClearButton fieldKey={field?.name} />}
                </FormLabel>
                <FormControl>
                  <Select value={value || ""} onValueChange={onChange}>
                    <SelectTrigger
                      className="w-full px-2 py-0.5 capitalize hover:bg-muted/50"
                      {...field}
                    >
                      <SelectValue placeholder="Payment status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="false">
                        <div className="flex items-center gap-2">
                          <X className="size-4 text-red-600" />
                          Unpaid
                        </div>
                      </SelectItem>
                      <SelectItem value="true">
                        <div className="flex items-center gap-2">
                          <Check className="size-4 text-green-600" />
                          Paid
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="labels_shipment"
            render={({ field: { value, onChange, ...field } }) => (
              <FormItem className="space-y-2">
                <FormLabel className="flex min-h-5 items-center justify-between gap-2">
                  Label Shipments Status
                  {value && <ClearButton fieldKey={field?.name} />}
                </FormLabel>
                <FormControl>
                  <Select value={value || ""} onValueChange={onChange}>
                    <SelectTrigger
                      className="w-full px-2 py-0.5 capitalize hover:bg-muted/50"
                      {...field}
                    >
                      <SelectValue placeholder="Lable shipments status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="false">
                        <div className="flex items-center gap-2">
                          <X className="size-4 text-red-600" />
                          Not created yet
                        </div>
                      </SelectItem>
                      <SelectItem value="true">
                        <div className="flex items-center gap-2">
                          <Check className="size-4 text-green-600" />
                          Already created
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="labels_factura"
            render={({ field: { value, onChange, ...field } }) => (
              <FormItem className="space-y-2">
                <FormLabel className="flex min-h-5 items-center justify-between gap-2">
                  Invoice Status
                  {value && <ClearButton fieldKey={field?.name} />}
                </FormLabel>
                <FormControl>
                  <Select value={value || ""} onValueChange={onChange}>
                    <SelectTrigger
                      className="w-full px-2 py-0.5 capitalize hover:bg-muted/50"
                      {...field}
                    >
                      <SelectValue placeholder="Invoice Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="false">
                        <div className="flex items-center gap-2">
                          <X className="size-4 text-red-600" />
                          Not created yet
                        </div>
                      </SelectItem>
                      <SelectItem value="true">
                        <div className="flex items-center gap-2">
                          <Check className="size-4 text-green-600" />
                          Already created
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="invoice_required"
            render={({ field: { value, onChange, ...field } }) => (
              <FormItem className="space-y-2">
                <FormLabel className="flex min-h-5 items-center justify-between gap-2">
                  Invoice Required
                  {value && <ClearButton fieldKey={field?.name} />}
                </FormLabel>
                <FormControl>
                  <Select value={value || ""} onValueChange={onChange}>
                    <SelectTrigger
                      className="w-full px-2 py-0.5 capitalize hover:bg-muted/50"
                      {...field}
                    >
                      <SelectValue placeholder="Invoice Required" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="false">
                        <div className="flex items-center gap-2">
                          <X className="size-4 text-red-600" />
                          No
                        </div>
                      </SelectItem>
                      <SelectItem value="true">
                        <div className="flex items-center gap-2">
                          <Check className="size-4 text-green-600" />
                          Yes
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex items-center gap-4 self-end">
          <Button
            variant="outline"
            onClick={resetHandler}
            disabled={!hasAnyPropertyValue(watch())}
            type="button"
          >
            Reset
          </Button>
          <Button
            disabled={!isDirty || !hasAnyPropertyValue(watch())}
            type="submit"
          >
            Apply Filter
          </Button>
        </div>
      </form>
    </Form>
  )
}
