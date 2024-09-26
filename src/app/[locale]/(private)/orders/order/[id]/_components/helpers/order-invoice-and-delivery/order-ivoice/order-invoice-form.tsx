import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, type SubmitHandler } from "react-hook-form"

import { orderDeliverySchema } from "@/lib/validations/order/order-delivery"
import {
  orderInvoiceSchema,
  type OrderInvoiceFormData,
} from "@/lib/validations/order/order-invoice"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { CountrySelect } from "@/components/shared/country-select"

interface OrderDeliveryFormProps {
  onCancel: () => void
  onSave: SubmitHandler<OrderInvoiceFormData>
  defaultValues: OrderInvoiceFormData
}

export function OrderInvoiceForm({
  onCancel,
  defaultValues,
  onSave,
}: OrderDeliveryFormProps) {
  const form = useForm<OrderInvoiceFormData>({
    resolver: zodResolver(orderInvoiceSchema),
    defaultValues,
  })

  const {
    formState: { isDirty },
  } = form

  const onSubmitHandler = async (data: OrderInvoiceFormData) => {
    onSave(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmitHandler)} className="space-y-6">
        <Table>
          <TableBody>
            <TableRow className="border-0">
              <TableCell colSpan={3}>
                <div className="flex items-center space-x-2">
                  <Checkbox id="customer_wants_invoice" />
                  <Label htmlFor="customer_wants_invoice">
                    Customer wants an invoice
                  </Label>
                </div>
              </TableCell>
            </TableRow>{" "}
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
              <TableCell>Tax ID:</TableCell>
              <TableCell colSpan={2}>
                <FormField
                  defaultValue=""
                  control={form.control}
                  name="tax_id"
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
