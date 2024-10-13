import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, type SubmitHandler } from "react-hook-form"

import {
  AllegroOrdersSearchParamsSchema,
  type AllegroOrdersSchema,
} from "@/lib/api/allegro/orders/allegro-orders-search-params"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { DatePicker } from "@/components/shared/date-range-picker"

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

  const {
    getValues,
    formState: { isDirty },
  } = form

  const onSubmitHandler = (data: AllegroOrdersSchema) => {
    onSubmit(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmitHandler)} className="space-y-8">
        <FormField
          control={form.control}
          name="last_update_from"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Start Date</FormLabel>
              <FormControl>
                <DatePicker
                  onDateChange={field.onChange}
                  date={field.value || undefined}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="last_update_to"
          render={({ field }) => (
            <FormItem>
              <FormLabel>End Date</FormLabel>
              <FormControl>
                <DatePicker
                  calendarDisabled={(date: Date) => {
                    const startData = dayjs(getValues("start_date")).add(
                      1,
                      "day"
                    )
                    return dayjs(startData).isAfter(date)
                  }}
                  onDateChange={field.onChange}
                  date={field.value || undefined}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="product_name"
          render={({ field: { value, ...field } }) => (
            <FormItem>
              <FormLabel>Product Name</FormLabel>
              <FormControl>
                <Input placeholder="Product Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="customer_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Customer Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Customer Name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} type="email" placeholder="Email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Phone" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="user_login"
          render={({ field }) => (
            <FormItem>
              <FormLabel>User Login</FormLabel>
              <FormControl>
                <Input {...field} placeholder="User Login" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="currency"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Currency</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Currency" />
                </SelectTrigger>
                <SelectContent>
                  {CurrencyMap?.map((currency: string) => (
                    <SelectItem key={currency} value={currency}>
                      {currency}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="order_source"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Order Source</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="capitalize">
                  <SelectValue placeholder="Order Source" />
                </SelectTrigger>
                <SelectContent>
                  {OrderSourceMap?.map((source: string) => (
                    <SelectItem
                      className="capitalize"
                      key={source}
                      value={source}
                    >
                      {source}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="delivery_method"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Delivery Method</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="capitalize">
                  <SelectValue placeholder="Delivery Method" />
                </SelectTrigger>
                <SelectContent>
                  {DeliveryMethodMap?.map((method: string) => (
                    <SelectItem
                      className="capitalize"
                      key={method}
                      value={method}
                    >
                      {method}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="delivery_country_code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Delivery Country Code</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="capitalize">
                  <SelectValue placeholder="Delivery Country Code" />
                </SelectTrigger>
                <SelectContent>
                  {DeliveryCountryCodeMap?.map((code: string) => (
                    <SelectItem className="capitalize" key={code} value={code}>
                      {code}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="min_quantity"
          render={({ field: { value, onChange, ...field } }) => (
            <FormItem>
              <FormLabel>Minimum Quantity</FormLabel>
              <FormControl>
                <Input
                  value={Number(value)}
                  min={0}
                  type="number"
                  placeholder="Minimum Quantity"
                  onChange={(e) => onChange(Number(e.currentTarget.value))}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="min_order_count"
          render={({ field: { value, onChange, ...field } }) => (
            <FormItem>
              <FormLabel>Minimum Order Count</FormLabel>
              <FormControl>
                <Input
                  value={Number(value)}
                  min={0}
                  type="number"
                  onChange={(e) => onChange(Number(e.currentTarget.value))}
                  placeholder="Minimum Order Count"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={!isDirty} type="submit">
          Apply Filter
        </Button>
      </form>
    </Form>
  )
}
