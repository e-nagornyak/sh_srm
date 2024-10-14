import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, type SubmitHandler } from "react-hook-form"

import { type Order } from "@/lib/api/allegro/orders/orders-types"
import {
  orderInfoSchema,
  type OrderInfoFormData,
} from "@/lib/validations/order/order-info"
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"

interface OrderInfoDataFormProps {
  onSave: SubmitHandler<OrderInfoFormData>
  defaultValues: OrderInfoFormData
  onCancel: () => void
}

export function OrderInfoDataForm({
  onCancel,
  onSave,
  defaultValues,
}: OrderInfoDataFormProps) {
  const form = useForm<OrderInfoFormData>({
    resolver: zodResolver(orderInfoSchema),
    defaultValues,
  })

  const {
    formState: { isDirty },
  } = form

  const onSubmitHandler = async (data: OrderInfoFormData) => {
    onSave(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmitHandler)}>
        <Table>
          <TableBody>
            <TableRow className="border-0">
              <TableCell>Client (login):</TableCell>
              <TableCell colSpan={2}>
                <FormField
                  defaultValue=""
                  control={form.control}
                  name="login"
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
              <TableCell>E-mail:</TableCell>
              <TableCell colSpan={2}>
                <FormField
                  defaultValue=""
                  control={form.control}
                  name="email"
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
              <TableCell>Phone number:</TableCell>
              <TableCell colSpan={2}>
                <FormField
                  defaultValue=""
                  control={form.control}
                  name="phone_number"
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
              <TableCell className="content-start pb-0 text-start">
                Shipping method:
              </TableCell>
              <TableCell colSpan={2}>
                <div className="flex gap-3">
                  <FormField
                    defaultValue=""
                    control={form.control}
                    name="method"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel />
                        <FormControl>
                          <Input size="xs" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="cash_on_delivery"
                    render={({ field: { value, onChange, ...field } }) => (
                      <FormItem className="flex items-center gap-2 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={value}
                            onCheckedChange={onChange}
                            {...field}
                          />
                        </FormControl>
                        <FormLabel asChild>
                          <Label>Cash on delivery</Label>
                        </FormLabel>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="border-0">
              <TableCell>Shipping price:</TableCell>
              <TableCell colSpan={2}>
                <FormField
                  defaultValue=""
                  control={form.control}
                  name="cost"
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
            <TableRow className="border-b border-gray-700">
              <TableCell>Payment method:</TableCell>
              <TableCell colSpan={2}>
                <FormField
                  defaultValue=""
                  control={form.control}
                  name="provider"
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
            {/**/}
            <TableRow className="border-0">
              <TableCell>Additional field 1:</TableCell>
              <TableCell colSpan={2}>
                <FormField
                  defaultValue=""
                  control={form.control}
                  name="additional_field_1"
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
              <TableCell>Additional field 2:</TableCell>
              <TableCell colSpan={2}>
                <FormField
                  defaultValue=""
                  control={form.control}
                  name="additional_field_2"
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
              <TableCell>VIES/VAT PL:</TableCell>
              <TableCell colSpan={2}>
                <FormField
                  defaultValue=""
                  control={form.control}
                  name="vies_vat_pl"
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
              <TableCell className="content-start">Comments:</TableCell>
              <TableCell colSpan={2}>
                <FormField
                  defaultValue=""
                  control={form.control}
                  name="comments"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel />
                      <FormControl>
                        <Textarea className="resize-y" rows={5} {...field} />
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
                    disabled={!isDirty}
                    type="submit"
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
