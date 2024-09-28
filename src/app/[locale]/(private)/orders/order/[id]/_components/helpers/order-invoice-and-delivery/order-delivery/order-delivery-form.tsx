import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, type SubmitHandler } from "react-hook-form"

import {
  orderDeliverySchema,
  type OrderDeliveryFormData,
} from "@/lib/validations/order/order-delivery"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { CountrySelect } from "@/components/shared/country-select"

interface OrderDeliveryFormProps {
  onCancel: () => void
  onSave: SubmitHandler<OrderDeliveryFormData>
  defaultValues: OrderDeliveryFormData
}

export function OrderDeliveryForm({
  onCancel,
  onSave,
  defaultValues,
}: OrderDeliveryFormProps) {
  const form = useForm<OrderDeliveryFormData>({
    resolver: zodResolver(orderDeliverySchema),
    defaultValues,
  })

  const {
    formState: { isDirty },
  } = form

  const onSubmitHandler = async (data: OrderDeliveryFormData) => {
    onSave(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmitHandler)}>
        <Table>
          <TableBody>
            <TableRow className="border-0">
              <TableCell>Name and surname:</TableCell>
              <TableCell colSpan={2}>
                <FormField
                  defaultValue=""
                  control={form.control}
                  name="firstAndLastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel />
                      <FormControl>
                        <Input size="xs" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TableCell>
            </TableRow>
            <TableRow className="border-0">
              <TableCell>Company:</TableCell>
              <TableCell colSpan={2}>
                <FormField
                  defaultValue=""
                  control={form.control}
                  name="company_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel />
                      <FormControl>
                        <Input size="xs" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TableCell>
            </TableRow>
            <TableRow className="border-0">
              <TableCell>Address:</TableCell>
              <TableCell colSpan={2}>
                <FormField
                  defaultValue=""
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel />
                      <FormControl>
                        <Input size="xs" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TableCell>
            </TableRow>
            <TableRow className="border-0">
              <TableCell>Postal code:</TableCell>
              <TableCell colSpan={2}>
                <FormField
                  defaultValue=""
                  control={form.control}
                  name="zip_code"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel />
                      <FormControl>
                        <Input size="xs" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TableCell>
            </TableRow>
            <TableRow className="border-0">
              <TableCell>City:</TableCell>
              <TableCell colSpan={2}>
                <FormField
                  defaultValue=""
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel />
                      <FormControl>
                        <Input size="xs" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TableCell>
            </TableRow>
            <TableRow className="border-0">
              <TableCell>State:</TableCell>
              <TableCell colSpan={2}>
                <FormField
                  defaultValue=""
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel />
                      <FormControl>
                        <Input size="xs" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TableCell>
            </TableRow>
            <TableRow className="border-0">
              <TableCell>Country:</TableCell>
              <TableCell colSpan={2}>
                <FormField
                  defaultValue=""
                  control={form.control}
                  name="country_code"
                  render={({ field: { onChange, ...field } }) => (
                    <FormItem>
                      <FormLabel />
                      <FormControl>
                        <CountrySelect onValueChange={onChange} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TableCell>
            </TableRow>

            <TableRow className="border-0">
              <TableCell colSpan={3}>
                <div className="flex items-center gap-3">
                  <Button
                    type="submit"
                    disabled={!isDirty}
                    variant="outline"
                    color="green"
                  >
                    Save
                  </Button>
                  <Button onClick={onCancel} variant="outline" color="gray">
                    Cancel
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </form>
    </Form>
  )
}
