import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, type SubmitHandler } from "react-hook-form"

import {
  orderPickupSchema,
  type OrderPickupFormData,
} from "@/lib/validations/order/order-pickup"
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

interface OrderPickupFormProps {
  onCancel: () => void
  onSave: SubmitHandler<OrderPickupFormData>
  defaultValues: OrderPickupFormData
}

export function OrderPickupForm({
  onCancel,
  defaultValues,
  onSave,
}: OrderPickupFormProps) {
  const form = useForm<OrderPickupFormData>({
    resolver: zodResolver(orderPickupSchema),
    defaultValues,
  })

  const {
    formState: { isDirty },
  } = form

  const onSubmitHandler = async (data: OrderPickupFormData) => {
    onSave(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmitHandler)}>
        <Table>
          <TableBody>
            <TableRow className="border-0">
              <TableCell>Point name:</TableCell>
              <TableCell colSpan={2}>
                <FormField
                  defaultValue=""
                  control={form.control}
                  name="point_name"
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
              <TableCell>ID:</TableCell>
              <TableCell colSpan={2}>
                <FormField
                  defaultValue=""
                  control={form.control}
                  name="id"
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
